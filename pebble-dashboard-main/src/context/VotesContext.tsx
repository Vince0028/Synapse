import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

type VotesMap = Record<string, number>;

interface VotesContextType {
    votes: VotesMap;
    updateVote: (linkId: string, increment: boolean) => Promise<void>;
}

const VotesContext = createContext<VotesContextType | undefined>(undefined);

export function VotesProvider({ children }: { children: React.ReactNode }) {
    const [votes, setVotes] = useState<VotesMap>({});

    useEffect(() => {
        // 1. Fetch all initial votes efficiently
        const fetchAllVotes = async () => {
            const { data, error } = await supabase.from('votes').select('link_id, count');
            if (data) {
                const voteMap: VotesMap = {};
                data.forEach((row) => {
                    voteMap[row.link_id] = row.count;
                });
                setVotes(voteMap);
            }
        };

        fetchAllVotes();

        // 2. Single subscription for ALL vote changes
        const channel = supabase
            .channel('global-votes')
            .on(
                'postgres_changes',
                {
                    event: '*', // Listen to INSERT/UPDATE
                    schema: 'public',
                    table: 'votes',
                },
                (payload: any) => {
                    if (payload.new && payload.new.link_id) {
                        setVotes((prev) => ({
                            ...prev,
                            [payload.new.link_id]: payload.new.count,
                        }));
                    }
                }
            )
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, []);

    const updateVote = async (linkId: string, increment: boolean) => {
        // Optimistically update local state immediately for UI responsiveness
        setVotes(prev => {
            const current = prev[linkId] || 0;
            const next = increment ? current + 1 : Math.max(0, current - 1);
            return { ...prev, [linkId]: next };
        });

        // Fetch the LATEST count from the server to ensure we don't overwrite with stale data
        const { data: currentRemote } = await supabase
            .from('votes')
            .select('count')
            .eq('link_id', linkId)
            .single();

        const trueCount = currentRemote?.count || 0;
        const newCount = increment ? trueCount + 1 : Math.max(0, trueCount - 1);

        const { error } = await supabase
            .from('votes')
            .upsert({ link_id: linkId, count: newCount });

        if (error) {
            console.error('Error updating vote:', error);
            // Revert local state if needed (optional, effectively handled by next realtime update)
        }
    };

    return (
        <VotesContext.Provider value={{ votes, updateVote }}>
            {children}
        </VotesContext.Provider>
    );
}

export function useVotes() {
    const context = useContext(VotesContext);
    if (context === undefined) {
        throw new Error('useVotes must be used within a VotesProvider');
    }
    return context;
}
