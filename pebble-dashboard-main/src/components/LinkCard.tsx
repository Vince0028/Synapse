import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import type { LinkItem } from "@/data/links";

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
            <h3 className="font-semibold text-foreground truncate">
              {link.name}
            </h3>
            <span className={cn(
              "px-2.5 py-0.5 rounded-button",
              "bg-secondary text-secondary-foreground",
              "text-xs font-medium"
            )}>
              {link.tag}
            </span>
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
