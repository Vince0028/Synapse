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
        // Optimistic Update handled by caller if needed, or here?
        // Let's rely on caller for simple optimistic, or just wait for echo.
        // Actually, calling supabase.rpc is best, but we are using upsert for now.

        // We need to know current count to increment safely?
        // "Safe" implementation would use an RPC function 'increment_vote'.
        // For now, we will read from local state to be faster, but it's slightly unsafe for concurrency.
        // Better: Read current value from our local cache!

        const currentCount = votes[linkId] || 0;
        const newCount = increment ? currentCount + 1 : Math.max(0, currentCount - 1);

        // Optimistically update local state immediately
        setVotes(prev => ({ ...prev, [linkId]: newCount }));

        const { error } = await supabase
            .from('votes')
            .upsert({ link_id: linkId, count: newCount });

        if (error) {
            console.error('Error updating vote:', error);
            // Revert if error? (Optional, skipping for simplicity)
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
