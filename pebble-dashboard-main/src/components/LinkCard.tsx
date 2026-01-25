import * as React from "react";
import { ExternalLink, GraduationCap, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import type { LinkItem } from "@/data/links";
import { useVotes } from "@/context/VotesContext";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface LinkCardProps {
  link: LinkItem;
  index: number;
  isFavorite?: boolean;
  onToggleFavorite?: (id: string) => void;
}

export function LinkCard({ link, index, isFavorite = false, onToggleFavorite }: LinkCardProps) {
  const { votes, updateVote } = useVotes();

  // Get live vote count from global context (defaults to 0)
  const voteCount = votes[link.id] || 0;

  const handleStarClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // Determine action
    const isAdding = !isFavorite;

    // 1. Call Parent (Update Color) - Instant local UI update
    onToggleFavorite?.(link.id);

    // 2. Call Global Context (Update Count) - Instant local UI update + DB Sync
    updateVote(link.id, isAdding);
  };

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group block p-6 rounded-card relative",
        "bg-card/95 backdrop-blur-sm border border-border/80",
        "shadow-card hover:shadow-hover",
        "transition-all duration-300",
        "hover:scale-[1.02] hover:-translate-y-1",
        "animate-fade-in"
      )}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Star Button */}
      <button
        onClick={handleStarClick}
        className={cn(
          "absolute top-3 right-3 flex items-center gap-1 p-1.5 rounded-full transition-all duration-200 z-10",
          isFavorite
            ? "text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30"
            : "text-muted-foreground/40 hover:text-yellow-500 hover:bg-yellow-100/50 dark:hover:bg-yellow-900/20",
          // Show button always
          "opacity-100"
        )}
        title={isFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        <Star className={cn("w-3.5 h-3.5", isFavorite && "fill-current")} />
        <span className="text-xs font-semibold min-w-[12px] text-center">
          {voteCount}
        </span>
      </button>

      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-2 pr-8">
            {link.isHot && (
              <span className="text-sm" title="Popular">🔥</span>
            )}
            <h3 className="font-semibold text-foreground truncate max-w-[150px]">
              {link.name}
            </h3>
            <div className="flex items-center gap-1.5 ml-auto">
              {link.studentOffer && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex items-center justify-center w-5 h-5 rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800 cursor-help">
                        <GraduationCap className="w-3 h-3" />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-xs font-semibold">Student: {link.studentOffer}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
              <span className={cn(
                "px-2 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wide border",
                link.pricing === "Free" && "bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800",
                link.pricing === "Freemium" && "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800",
                link.pricing === "Paid" && "bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-800",
                link.pricing === "Free Trial" && "bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-800",
                link.pricing === "Daily Credits" && "bg-pink-100 text-pink-700 border-pink-200 dark:bg-pink-900/30 dark:text-pink-300 dark:border-pink-800",
              )}>
                {link.pricing}
              </span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-2">
            {link.tags.slice(0, 3).map((tag, i) => (
              <span key={i} className={cn(
                "px-2.5 py-0.5 rounded-button",
                "bg-secondary text-secondary-foreground",
                "text-xs font-medium"
              )}>
                {tag}
              </span>
            ))}
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {link.desc}
          </p>
        </div>


      </div>

      <div className={cn(
        "absolute bottom-6 right-6 p-2 rounded-full",
        "bg-primary text-primary-foreground",
        "opacity-0 group-hover:opacity-100",
        "transform translate-x-2 group-hover:translate-x-0",
        "transition-all duration-200",
        "shadow-sm pointer-events-none" // pointer-events-none to let click pass through to card
      )}>
        <ExternalLink className="w-4 h-4" />
      </div>
    </a>
  );
}
