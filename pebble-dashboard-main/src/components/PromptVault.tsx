import { useState } from "react";
import { Copy, Check, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { prompts } from "@/data/links";

export function PromptVault() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {prompts.map((prompt) => (
        <PromptCard key={prompt.id} prompt={prompt} />
      ))}
    </div>
  );
}

function PromptCard({ prompt }: { prompt: typeof prompts[0] }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn(
      "relative rounded-sm p-6",
      "bg-card border border-border",
      "shadow-card",
      "font-mono flex flex-col h-[400px]",
      "transition-all duration-300 hover:shadow-hover hover:-translate-y-1",
      "before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-8 before:w-px before:bg-primary/5"
    )}>
      {/* Decorative tape effect */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-muted/80 rotate-1 shadow-sm backdrop-blur-[1px]" />

      <div className="flex items-start justify-between mb-4 pl-6 border-b border-border pb-2 relative z-10">
        <h3 className="font-bold text-lg tracking-tight line-clamp-1 text-foreground" title={prompt.title}>{prompt.title}</h3>
        <FileText className="w-5 h-5 text-muted-foreground" />
      </div>

      <div className="flex-1 overflow-y-auto mb-4 pl-6 pr-1 custom-scrollbar text-sm leading-relaxed opacity-90 relative z-10">
        <p className="whitespace-pre-wrap font-medium text-muted-foreground">{prompt.content}</p>
      </div>

      <button
        onClick={handleCopy}
        className={cn(
          "mt-auto ml-6 py-2 px-4 rounded-md",
          "bg-secondary hover:bg-secondary/80 text-secondary-foreground",
          "border border-border",
          "font-semibold text-xs uppercase tracking-wider",
          "flex items-center justify-center gap-2",
          "transition-colors shadow-sm",
          "relative z-10"
        )}
      >
        {copied ? (
          <>
            <Check className="w-4 h-4 text-green-600" />
            Copied
          </>
        ) : (
          <>
            <Copy className="w-4 h-4 text-muted-foreground" />
            Copy Prompt
          </>
        )}
      </button>
    </div>
  );
}
