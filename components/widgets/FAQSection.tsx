"use client";

import { useState } from "react";
import { faqData } from "@/data/faq";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {faqData.map((item, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div
            key={idx}
            className="rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 overflow-hidden transition-colors"
          >
            <button
              onClick={() => setOpenIdx(isOpen ? null : idx)}
              className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm text-zinc-900 dark:text-zinc-100 hover:text-blue-500 transition-colors focus:outline-none"
            >
              <span className="flex items-center gap-2.5">
                <HelpCircle className="w-4 h-4 text-blue-500 shrink-0" />
                {item.question}
              </span>
              <ChevronDown
                className={`w-4 h-4 text-zinc-400 shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180 text-blue-500" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed border-t border-zinc-200/40 dark:border-zinc-800/40">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
