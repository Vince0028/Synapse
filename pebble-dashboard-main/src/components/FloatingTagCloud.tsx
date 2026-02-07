import React, { useMemo } from 'react';
import { cn } from "@/lib/utils";

interface Tag {
    name: string;
    count: number;
}

interface FloatingTagCloudProps {
    tags: Tag[];
    selectedTag: string | null;
    onTagClick: (tag: string) => void;
}

export function FloatingTagCloud({ tags, selectedTag, onTagClick }: FloatingTagCloudProps) {
    // Normalize counts for sizing
    const { min, max } = useMemo(() => {
        if (tags.length === 0) return { min: 0, max: 0 };
        const counts = tags.map(t => t.count);
        return { min: Math.min(...counts), max: Math.max(...counts) };
    }, [tags]);

    // Helper to determine size class based on count
    const getSizeClass = (count: number) => {
        if (max === min) return "text-sm p-4"; // Default if all same

        // Calculate percentile or relative size
        const relative = (count - min) / (max - min); // 0 to 1

        // Reduced sizes as requested ("too big")
        if (relative > 0.8) return "text-xl p-6 font-bold z-20 shadow-xl"; // Top 20% - Big Bubble
        if (relative > 0.6) return "text-lg p-5 font-semibold z-10 shadow-lg";
        if (relative > 0.4) return "text-base p-4 font-medium z-10";
        if (relative > 0.2) return "text-sm p-3 font-medium z-0";
        return "text-xs p-2.5 z-0"; // Smallest
    };

    return (
        <div className="flex flex-wrap items-center justify-center gap-4 p-8 min-h-[300px] w-full max-w-6xl mx-auto perspective-1000">
            {tags.map((tag, index) => {
                const isSelected = selectedTag === tag.name;

                // Randomize float animation properties for organic feel
                // Using inline styles for random values to avoid hundreds of classes
                const animationDelay = `${(index * 0.1) % 5}s`;
                const animationDuration = `${4 + (index % 4)}s`;

                return (
                    <button
                        key={tag.name}
                        onClick={() => onTagClick(tag.name)}
                        style={{
                            animationDelay,
                            animationDuration,
                        }}
                        className={cn(
                            "rounded-full backdrop-blur-md transition-all duration-300 ease-out",
                            "border shadow-lg hover:scale-110",
                            "animate-float",
                            getSizeClass(tag.count),
                            isSelected
                                ? "bg-primary text-primary-foreground border-primary scale-110 shadow-xl ring-2 ring-primary ring-offset-2 ring-offset-background"
                                : "bg-white text-slate-800 border-white/20 hover:bg-white/90 dark:bg-card dark:text-card-foreground dark:border-border dark:hover:bg-accent", // Solid card color for dark mode
                            "cursor-pointer select-none flex items-center justify-center text-center leading-none"
                        )}
                    >
                        {tag.name}
                        {/* Hide count for cleaner bubble look, or keep it small? User didn't specify, but "bubble" implies cleaner. I'll keep it very subtle if needed, or remove. Let's keep it very integrated. */}
                    </button>
                );
            })}
        </div>
    );
}
