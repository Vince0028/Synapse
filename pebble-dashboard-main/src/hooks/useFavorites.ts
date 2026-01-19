import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'synapse-favorites';

export function useFavorites() {
    const [favorites, setFavorites] = useState<Set<string>>(() => {
        // Initialize from localStorage on first render
        if (typeof window !== 'undefined') {
            try {
                const stored = localStorage.getItem(STORAGE_KEY);
                if (stored) {
                    return new Set(JSON.parse(stored));
                }
            } catch (e) {
                console.error('Error reading favorites from localStorage:', e);
            }
        }
        return new Set();
    });

    // Sync to localStorage whenever favorites change
    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify([...favorites]));
        } catch (e) {
            console.error('Error saving favorites to localStorage:', e);
        }
    }, [favorites]);

    const toggleFavorite = useCallback((id: string) => {
        setFavorites(prev => {
            const next = new Set(prev);
            if (next.has(id)) {
                next.delete(id);
            } else {
                next.add(id);
            }
            return next;
        });
    }, []);

    const isFavorite = useCallback((id: string) => {
        return favorites.has(id);
    }, [favorites]);

    const getFavoriteCount = useCallback(() => {
        return favorites.size;
    }, [favorites]);

    return {
        favorites,
        toggleFavorite,
        isFavorite,
        getFavoriteCount,
    };
}
