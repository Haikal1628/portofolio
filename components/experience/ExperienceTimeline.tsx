"use client";

import { experienceData } from "@/data/experience";
import { Briefcase, Calendar, MapPin, CheckCircle2, ExternalLink } from "lucide-react";

export function ExperienceTimeline() {
  return (
    <div className="relative border-l-2 border-zinc-200 dark:border-zinc-800 ml-4 sm:ml-8 space-y-12 py-4">
      {experienceData.map((item, idx) => (
        <div key={idx} className="relative pl-6 sm:pl-10 group">
          {/* Timeline Dot Indicator */}
          <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-white dark:bg-zinc-950 border-2 border-blue-500 flex items-center justify-center text-blue-500 group-hover:scale-115 transition-transform duration-200 shadow-md">
            <Briefcase className="w-3.5 h-3.5" />
          </div>

          {/* Timeline Card */}
          <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-200 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-200/60 dark:border-zinc-800/60 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                    {item.position}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-blue-600/10 text-blue-500 border border-blue-500/20">
                    {item.type}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500 mt-1">
                  <span className="font-semibold text-zinc-800 dark:text-zinc-200 flex items-center gap-1">
                    {item.company}
                    {item.companyUrl && (
                      <a href={item.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                        <ExternalLink className="w-3 h-3 inline" />
                      </a>
                    )}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {item.location}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-zinc-500 bg-zinc-200/60 dark:bg-zinc-800/60 px-3 py-1 rounded-full w-fit">
                <Calendar className="w-3.5 h-3.5 text-blue-500" />
                {item.period}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {item.description}
            </p>

            {/* Achievements Bullet List */}
            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">
                Pencapaian Utama:
              </h4>
              <ul className="space-y-2">
                {item.achievements.map((achievement, aIdx) => (
                  <li key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Pills */}
            <div className="pt-3 flex flex-wrap gap-1.5">
              {item.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-zinc-200/80 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-300/40 dark:border-zinc-700/40"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
