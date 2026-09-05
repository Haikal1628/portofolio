"use client";

import { useMemo } from "react";
import { GitCommit } from "lucide-react";

export function GithubHeatmap() {
  // Generate a deterministic grid of 32 weeks x 7 days GitHub contributions
  const contributionGrid = useMemo(() => {
    const weeks = [];
    for (let w = 0; w < 32; w++) {
      const days = [];
      for (let d = 0; d < 7; d++) {
        // Deterministic pseudo-random calculation based on indices to avoid hydration mismatch
        const val = Math.abs(Math.sin(w * 17.3 + d * 31.7));
        let level = 0;
        if (val > 0.4) level = 1;
        if (val > 0.65) level = 2;
        if (val > 0.85) level = 3;
        if (val > 0.95) level = 4;
        days.push(level);
      }
      weeks.push(days);
    }
    return weeks;
  }, []);

  const getLevelColor = (level: number) => {
    switch (level) {
      case 1: return "bg-emerald-900/40 border-emerald-800/40";
      case 2: return "bg-emerald-700/60 border-emerald-600/50";
      case 3: return "bg-emerald-500 border-emerald-400";
      case 4: return "bg-emerald-400 border-emerald-300 shadow-[0_0_8px_rgba(52,211,153,0.5)]";
      case 0:
      default:
        return "bg-zinc-200 dark:bg-zinc-800/60 border-transparent";
    }
  };

  return (
    <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 backdrop-blur-md space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <GitCommit className="w-4 h-4 text-emerald-500" />
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            GitHub Contributions
          </h3>
        </div>
      </div>

      <div className="overflow-x-auto pb-2 scrollbar-none">
        <div className="flex gap-1.5 min-w-[500px]">
          {contributionGrid.map((week, wIdx) => (
            <div key={wIdx} className="flex flex-col gap-1.5">
              {week.map((level, dIdx) => (
                <div
                  key={dIdx}
                  className={`w-3 h-3 rounded-sm border ${getLevelColor(level)} transition-colors duration-150 hover:scale-125 cursor-pointer`}
                  title={`Activity level: ${level}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between text-[11px] text-zinc-500 pt-1">
        <span>32 weeks history</span>
        <div className="flex items-center gap-1.5">
          <span>Less</span>
          <div className="w-2.5 h-2.5 rounded-sm bg-zinc-200 dark:bg-zinc-800" />
          <div className="w-2.5 h-2.5 rounded-sm bg-emerald-900/40" />
          <div className="w-2.5 h-2.5 rounded-sm bg-emerald-700/60" />
          <div className="w-2.5 h-2.5 rounded-sm bg-emerald-500" />
          <div className="w-2.5 h-2.5 rounded-sm bg-emerald-400" />
          <span>More</span>
        </div>
      </div>
    </div>
  );
}
