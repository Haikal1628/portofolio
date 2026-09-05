"use client";

import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { Check, Copy } from "lucide-react";

interface CopyButtonProps {
  textToCopy: string;
  label?: string;
  className?: string;
}

export function CopyButton({ textToCopy, label, className = "" }: CopyButtonProps) {
  const { isCopied, copy } = useCopyToClipboard();

  return (
    <button
      onClick={() => copy(textToCopy)}
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 text-xs font-medium border border-zinc-200 dark:border-zinc-700/60 transition-all duration-200 focus:outline-none ${className}`}
      aria-label={label || "Copy to clipboard"}
    >
      {isCopied ? (
        <>
          <Check className="w-3.5 h-3.5 text-emerald-500" />
          <span className="text-emerald-500 font-semibold">Copied!</span>
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5 text-zinc-400" />
          <span>{label || "Copy"}</span>
        </>
      )}
    </button>
  );
}
