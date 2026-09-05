"use client";

import { useScrollPosition } from "@/hooks/use-scroll-position";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function BackToTop() {
  const { scrollPosition } = useScrollPosition();
  const showButton = scrollPosition > 400;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {showButton && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-zinc-900/80 dark:bg-zinc-100/90 text-white dark:text-zinc-900 shadow-lg backdrop-blur-md border border-zinc-800 dark:border-zinc-200 hover:scale-110 active:scale-95 transition-all duration-200"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
