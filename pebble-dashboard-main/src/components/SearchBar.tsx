import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className={cn(
        "relative flex items-center",
        "bg-card border border-border",
        "rounded-search shadow-soft",
        "transition-all duration-300",
        "focus-within:shadow-hover focus-within:border-muted-foreground/30"
      )}>
        <Search className="absolute left-6 w-5 h-5 text-muted-foreground" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search links, tools, resources..."
          className={cn(
            "w-full py-4 pl-14 pr-12",
            "bg-transparent border-none outline-none",
            "text-foreground placeholder:text-muted-foreground",
            "rounded-search"
          )}
        />
        {value && (
          <button
            onClick={() => onChange("")}
            className={cn(
              "absolute right-4 p-1.5 rounded-full",
              "bg-secondary hover:bg-muted",
              "transition-colors duration-200"
            )}
          >
            <X className="w-4 h-4 text-muted-foreground" />
          </button>
        )}
      </div>
    </div>
  );
}
