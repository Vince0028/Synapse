import { ExternalLink, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";
import type { LinkItem } from "@/data/links";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface LinkCardProps {
  link: LinkItem;
  index: number;
}

export function LinkCard({ link, index }: LinkCardProps) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group block p-6 rounded-card",
        "bg-card border border-border",
        "shadow-card hover:shadow-hover",
        "transition-all duration-300",
        "hover:scale-[1.02] hover:-translate-y-1",
        "animate-fade-in"
      )}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-2">
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

        <div className={cn(
          "p-2 rounded-full",
          "bg-primary text-primary-foreground",
          "opacity-0 group-hover:opacity-100",
          "transform translate-x-2 group-hover:translate-x-0",
          "transition-all duration-200"
        )}>
          <ExternalLink className="w-4 h-4" />
        </div>
      </div>
    </a>
  );
}
