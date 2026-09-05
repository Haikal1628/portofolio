"use client";

import { Radio } from "lucide-react";
import { motion } from "framer-motion";

export function SpotifyWidget() {
  return (
    <div className="inline-flex items-center gap-3 px-3 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 text-xs">
      <div className="relative flex items-center justify-center">
        <Radio className="w-4 h-4 text-emerald-500 animate-pulse" />
        <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-500" />
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 font-medium text-zinc-900 dark:text-zinc-200 text-[11px]">
          <span>Now Playing on Spotify</span>
          {/* Animated Equalizer Bars */}
          <div className="flex items-end gap-0.5 h-3 ml-1">
            <motion.span
              animate={{ height: ["20%", "100%", "40%"] }}
              transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
              className="w-0.5 bg-emerald-500 rounded-full"
            />
            <motion.span
              animate={{ height: ["60%", "20%", "90%"] }}
              transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut", delay: 0.2 }}
              className="w-0.5 bg-emerald-500 rounded-full"
            />
            <motion.span
              animate={{ height: ["90%", "30%", "70%"] }}
              transition={{ repeat: Infinity, duration: 0.7, ease: "easeInOut", delay: 0.4 }}
              className="w-0.5 bg-emerald-500 rounded-full"
            />
          </div>
        </div>
        <span className="text-[10px] text-zinc-500 truncate max-w-[180px]">
          Midnight City — M83
        </span>
      </div>
    </div>
  );
}
