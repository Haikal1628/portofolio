"use client";

import { useState, useMemo } from "react";
import { projectsData, ProjectCategory } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { Search, SlidersHorizontal, Layers } from "lucide-react";

const categories: ("Semua" | ProjectCategory)[] = [
  "Semua",
  "Frontend",
  "Backend",
  "Fullstack",
  "Mobile",
  "AI",
  "UI/UX",
  "Open Source",
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<"newest" | "oldest" | "title">("newest");

  const filteredProjects = useMemo(() => {
    return projectsData
      .filter((project) => {
        const matchesCategory =
          selectedCategory === "Semua" || project.category === selectedCategory;
        const matchesQuery =
          project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesQuery;
      })
      .sort((a, b) => {
        if (sortBy === "title") return a.title.localeCompare(b.title);
        if (sortBy === "oldest") return a.slug.localeCompare(b.slug);
        return b.slug.localeCompare(a.slug);
      });
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Page Header */}
      <AnimatedSection direction="down">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold text-blue-500 uppercase tracking-wider">
            Portofolio
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
            Pengembangan & <span className="gradient-text">Proyek Portofolio</span>
          </h1>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Jelajahi proyek analisis data, machine learning, aplikasi web, dan tools yang telah saya kembangkan.
          </p>
        </div>
      </AnimatedSection>

      {/* FILTERING, SEARCH & SORT BAR */}
      {/* <AnimatedSection direction="up">
        <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 space-y-4">
          Search Input & Sort Dropdown
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari proyek berdasarkan judul, kata kunci, atau tech stack (misal: Next.js, Python, SQL)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs sm:text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              />
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
              <SlidersHorizontal className="w-4 h-4 text-zinc-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "newest" | "oldest" | "title")}
                className="px-3 py-2.5 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs font-semibold text-zinc-700 dark:text-zinc-300 focus:outline-none"
              >
                <option value="newest">Urutkan: Unggulan & Terbaru</option>
                <option value="oldest">Urutkan: Terlama</option>
                <option value="title">Urutkan: Judul (A-Z)</option>
              </select>
            </div>
          </div>

          Category Tabs
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 focus:outline-none ${
                    isActive
                      ? "bg-blue-600 text-white shadow-sm"
                      : "bg-zinc-200/60 dark:bg-zinc-800/60 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </AnimatedSection> */}

      {/* PROJECTS GRID */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <AnimatedSection key={project.slug} direction="up" delay={0.05 * idx}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      ) : (
        <div className="py-16 text-center space-y-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/40 border border-dashed border-zinc-200 dark:border-zinc-800">
          <Layers className="w-10 h-10 text-zinc-400 mx-auto" />
          <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
            Tidak ada proyek yang cocok dengan filter Anda.
          </h3>
          <p className="text-xs text-zinc-500 max-w-sm mx-auto">
            Coba sesuaikan kata kunci pencarian Anda atau pilih kategori lain.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("Semua");
              setSearchQuery("");
            }}
            className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold"
          >
            Reset Filter
          </button>
        </div>
      )}
    </div>
  );
}
