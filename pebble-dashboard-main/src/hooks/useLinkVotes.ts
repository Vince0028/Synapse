import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

export function useLinkVotes(linkId: string) {
    const [votes, setVotes] = useState(0);

    useEffect(() => {
        // 1. Fetch initial count
        fetchVotes();

        // 2. Subscribe to real-time changes for this link
        const channel = supabase
            .channel(`link-${linkId}`)
            .on(
                'postgres_changes',
                {
                    event: '*', // Listen to INSERT and UPDATE
                    schema: 'public',
                    table: 'votes',
                    filter: `link_id=eq.${linkId}`,
                },
                (payload: any) => {
                    if (payload.new && typeof payload.new.count === 'number') {
                        setVotes(payload.new.count);
                    }
                }
            )
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, [linkId]);

    const fetchVotes = async () => {
        const { data, error } = await supabase
            .from('votes')
            .select('count')
            .eq('link_id', linkId)
            .single();

        if (data) {
            setVotes(data.count);
        } else if (error && error.code !== 'PGRST116') {
            // Row not found is fine (PGRST116), defaults to 0
            console.error('Error fetching votes:', error);
        }
    };

    const updateVote = async (increment: boolean) => {
        // Optimistic UI update handled by the component using this hook
        // We just perform the DB operation here

        // 1. Get current server count (to be safe)
        const { data: current } = await supabase
            .from('votes')
            .select('count')
            .eq('link_id', linkId)
            .single();

        const currentCount = current ? current.count : 0;
        const newCount = increment ? currentCount + 1 : Math.max(0, currentCount - 1);

        // 2. Upsert the new count
        const { error } = await supabase
            .from('votes')
            .upsert({ link_id: linkId, count: newCount });

        if (error) {
            console.error('Error updating vote:', error);
            // If error, maybe revert? For now just log it.
        }
    };

    return { votes, updateVote };
}
