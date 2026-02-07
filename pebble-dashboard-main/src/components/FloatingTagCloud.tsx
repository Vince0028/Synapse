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
        if (max === min) return "text-sm px-4 py-2"; // Default if all same

        // Calculate percentile or relative size
        const relative = (count - min) / (max - min); // 0 to 1

        if (relative > 0.8) return "text-lg px-6 py-3 font-bold z-10"; // Top 20% - Big Bubble
        if (relative > 0.5) return "text-base px-5 py-2.5 font-semibold z-0"; // Top 50% - Medium Bubble
        if (relative > 0.2) return "text-sm px-4 py-2 font-medium z-0"; // Normal
        return "text-xs px-3 py-1.5 opacity-80 z-0"; // Smallest
    };

    return (
        <div className="flex flex-wrap items-center justify-center gap-4 p-4 min-h-[200px] w-full max-w-5xl mx-auto perspective-1000">
            {tags.map((tag, index) => {
                const isSelected = selectedTag === tag.name;

                // Randomize float animation properties for organic feel
                // Using inline styles for random values to avoid hundreds of classes
                const animationDelay = `${(index * 0.1) % 2}s`;
                const animationDuration = `${3 + (index % 3)}s`;

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
                            "border border-white/10 shadow-lg hover:scale-110",
                            "animate-float", // Custom animation we will add
                            getSizeClass(tag.count),
                            isSelected
                                ? "bg-primary/80 text-primary-foreground border-primary shadow-primary/20 scale-110"
                                : "bg-white/5 hover:bg-white/10 text-foreground/80 hover:text-foreground border-white/5",
                            "cursor-pointer select-none"
                        )}
                    >
                        {tag.name}
                        <span className="ml-1.5 opacity-50 text-[0.8em]">{tag.count}</span>
                    </button>
                );
            })}
        </div>
    );
}
