"use client";

import { Skill } from "@/data/skills";
import {
  Code,
  FileCode,
  Palette,
  Sparkles,
  Layers,
  Eye,
  Server,
  Cpu,
  Network,
  Boxes,
  Radio,
  Database,
  Zap,
  HardDrive,
  Binary,
  Cloud,
  CloudSun,
  Globe,
  Box,
  Grid,
  Workflow,
  Terminal,
  Bot,
  BrainCircuit,
  Search,
  GitBranch,
  Command,
  Send,
  Code2,
  FileTerminal,
  LucideIcon
} from "lucide-react";

interface SkillCardProps {
  skill: Skill;
}

const iconMap: Record<string, LucideIcon> = {
  Code,
  FileCode,
  Palette,
  Sparkles,
  Layers,
  Eye,
  Server,
  Cpu,
  Network,
  Boxes,
  Radio,
  Database,
  Zap,
  HardDrive,
  Binary,
  Cloud,
  CloudSun,
  Globe,
  Box,
  Grid,
  Workflow,
  Terminal,
  Bot,
  BrainCircuit,
  Search,
  GitBranch,
  Command,
  Send,
  Code2,
  FileTerminal,
};

export function SkillCard({ skill }: SkillCardProps) {
  const IconComponent = iconMap[skill.iconName] || Code;

  return (
    <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-blue-600/10 text-blue-500 border border-blue-500/20">
            <IconComponent className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-zinc-100">
              {skill.name}
            </h4>
            {/* <span className="text-[11px] text-zinc-500">{skill.experience} experience</span> */}
          </div>
        </div>
        {/* <span className="text-xs font-mono font-bold text-blue-500">{skill.level}%</span> */}
      </div>

      {/* Progress Bar */}
      {/* <div className="w-full h-1.5 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 rounded-full transition-all duration-500"
          style={{ width: `${skill.level}%` }}
        />
      </div> */}
    </div>
  );
}
