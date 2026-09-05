"use client";

import { useEffect, useState } from "react";
import { GithubRepo, fetchGithubRepos } from "@/lib/github";
import { Star, GitFork, ExternalLink, Code } from "lucide-react";

export function GithubRepos() {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGithubRepos().then((data) => {
      setRepos(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-32 rounded-xl bg-zinc-100 dark:bg-zinc-900 animate-pulse border border-zinc-200 dark:border-zinc-800" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {repos.map((repo) => (
        <a
          key={repo.id}
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="group p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/50 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 group-hover:text-blue-500 transition-colors">
                {repo.name}
              </span>
              <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-blue-500 transition-colors" />
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-2 mb-4">
              {repo.description}
            </p>
          </div>

          <div className="flex items-center justify-between text-xs text-zinc-500 font-mono pt-2 border-t border-zinc-200/50 dark:border-zinc-800/50">
            <span className="flex items-center gap-1.5 text-blue-500">
              <Code className="w-3.5 h-3.5" />
              {repo.language}
            </span>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                {repo.stargazers_count}
              </span>
              <span className="flex items-center gap-1">
                <GitFork className="w-3.5 h-3.5 text-zinc-400" />
                {repo.forks_count}
              </span>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
