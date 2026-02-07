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

    const updateQueue = React.useRef<Record<string, Promise<number | null>>>({});

    const updateVote = async (linkId: string, increment: boolean) => {
        // Optimistically update local state immediately for UI responsiveness
        setVotes(prev => {
            const current = prev[linkId] || 0;
            const next = increment ? current + 1 : Math.max(0, current - 1);
            return { ...prev, [linkId]: next };
        });

        // Queue the update to prevent race conditions
        // We pass the *result* (new count) of the previous task to the next one
        const previousTask = updateQueue.current[linkId] || Promise.resolve(null);

        const currentTask = previousTask.then(async (prevCountFromChain) => {
            try {
                let baseCount: number;

                if (prevCountFromChain !== null) {
                    // We have a chained value from the previous click! Use it purely in-memory.
                    baseCount = prevCountFromChain;
                } else {
                    // Chain is empty or just started. Fetch authoritative count from DB.
                    const { data: currentRemote } = await supabase
                        .from('votes')
                        .select('count')
                        .eq('link_id', linkId)
                        .single();
                    baseCount = currentRemote?.count || 0;
                }

                // Calculate new count based on the *authoritative* base (either chain or DB)
                const newCount = increment ? baseCount + 1 : Math.max(0, baseCount - 1);

                // Write to DB
                const { error } = await supabase
                    .from('votes')
                    .upsert({ link_id: linkId, count: newCount });

                if (error) {
                    console.error('Error updating vote:', error);
                    // If write fails, return the baseCount so the next task doesn't compound the error?
                    // Or return newCount and hope?
                    // Safer to return baseCount (effectively cancelling this op in the chain)
                    return baseCount;
                }

                return newCount;
            } catch (err) {
                console.error('Unexpected error in vote chain:', err);
                return prevCountFromChain ?? 0; // Fallback
            }
        });

        // Update the queue tail
        updateQueue.current[linkId] = currentTask;

        // Wait for this task to complete (optional, mostly for debugging or if caller awaits)
        await currentTask;
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
