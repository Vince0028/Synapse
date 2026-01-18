import { useState } from "react";
import { Copy, Check, FileText, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { prompts } from "@/data/links";

export function PromptVault() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const activePrompt = prompts[activeIndex];

  const handleCopy = async () => {
    await navigator.clipboard.writeText(activePrompt.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const goToPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? prompts.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === prompts.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={cn(
      "rounded-card p-6",
      "bg-card border border-border",
      "shadow-card",
      "animate-fade-in"
    )}>
      {/* Header with navigation */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-full bg-secondary">
            <FileText className="w-5 h-5 text-foreground" />
          </div>
          <h3 className="font-semibold text-foreground">{activePrompt.title}</h3>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={goToPrev}
            className="p-2 rounded-full hover:bg-secondary transition-colors"
            aria-label="Previous prompt"
          >
            <ChevronLeft className="w-4 h-4 text-muted-foreground" />
          </button>
          <span className="text-sm text-muted-foreground tabular-nums">
            {activeIndex + 1} / {prompts.length}
          </span>
          <button
            onClick={goToNext}
            className="p-2 rounded-full hover:bg-secondary transition-colors"
            aria-label="Next prompt"
          >
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>
      </div>

      {/* Prompt tabs */}
      <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
        {prompts.map((prompt, index) => (
          <button
            key={prompt.id}
            onClick={() => setActiveIndex(index)}
            className={cn(
              "px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all",
              index === activeIndex
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-muted-foreground hover:text-foreground"
            )}
          >
            {prompt.title}
          </button>
        ))}
      </div>
      
      <div className={cn(
        "relative p-4 rounded-lg",
        "bg-secondary/50 border border-border",
        "font-mono text-sm text-muted-foreground",
        "leading-relaxed"
      )}>
        <pre className="whitespace-pre-wrap overflow-hidden max-h-64">
          {activePrompt.content}
        </pre>
        
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-secondary/50 to-transparent pointer-events-none" />
      </div>
      
      <button
        onClick={handleCopy}
        className={cn(
          "mt-4 w-full py-3 px-6 rounded-button",
          "bg-primary text-primary-foreground",
          "font-medium text-sm",
          "flex items-center justify-center gap-2",
          "hover:opacity-90 active:scale-[0.98]",
          "transition-all duration-200"
        )}
      >
        {copied ? (
          <>
            <Check className="w-4 h-4" />
            Copied!
          </>
        ) : (
          <>
            <Copy className="w-4 h-4" />
            Copy to Clipboard
          </>
        )}
      </button>
    </div>
  );
}
