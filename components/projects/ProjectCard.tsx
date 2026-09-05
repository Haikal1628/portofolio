"use client";

import Link from "next/link";
import Image from "next/image";
import { Project } from "@/data/projects";
import { IconGithub } from "@/components/common/SocialIcons";
import { ExternalLink, ArrowRight, Sparkles } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 hover:border-blue-500/50 hover:shadow-xl dark:hover:shadow-blue-500/5 transition-all duration-300 flex flex-col overflow-hidden">
      {/* Thumbnail */}
      <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-zinc-900">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Category & Status Badge */}
        {/* <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-zinc-900/80 text-zinc-100 backdrop-blur-md border border-zinc-700/60">
            {project.category}
          </span>
          {project.status === "Featured" && (
            <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-blue-600/90 text-white backdrop-blur-md flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              Unggulan
            </span>
          )}
        </div> */}
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-500 transition-colors">
              {project.title}
            </h3>
            {/* <span className="text-xs text-zinc-400 font-mono">{project.date}</span> */}
          </div>

          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3 leading-relaxed mb-4">
            {project.shortDescription}
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-zinc-200/80 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-300/40 dark:border-zinc-700/40"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 5 && (
              <span className="px-1.5 py-0.5 rounded-md text-[10px] font-mono text-zinc-500">
                +{project.techStack.length - 5}
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-semibold text-blue-500 hover:text-blue-400 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Demo Langsung</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                <IconGithub className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            )}
          </div>

          <Link
            href={`/projects/${project.slug}`}
            className="flex items-center gap-1 text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            <span>Detail</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
