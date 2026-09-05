"use client";

import { useState } from "react";

export function useCopyToClipboard(timeout = 2000) {
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  const copy = async (text: string): Promise<boolean> => {
    if (!navigator?.clipboard) {
      console.warn("Clipboard not supported");
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
        setCopiedText(null);
      }, timeout);

      return true;
    } catch (error) {
      console.warn("Copy failed", error);
      setIsCopied(false);
      return false;
    }
  };

  return { isCopied, copiedText, copy };
}
