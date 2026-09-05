import { skillsData, SkillCategory } from "@/data/skills";
import { SkillCard } from "@/components/skills/SkillCard";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { Code, Server, Database, Cloud, Terminal, Cpu, Bot, FileCode } from "lucide-react";

export const metadata = {
  title: "Keahlian",
  description: "Keahlian teknis yang dikategorikan dalam Frontend, Backend, Database, Cloud, AI, Tools, dan Bahasa Pemrograman.",
};

const categories: { name: SkillCategory; icon: React.ComponentType<{ className?: string }>; color: string }[] = [
  { name: "Frontend", icon: Code, color: "text-blue-500" },
  { name: "Backend", icon: Server, color: "text-indigo-500" },
  { name: "Database", icon: Database, color: "text-emerald-500" },
  { name: "Cloud", icon: Cloud, color: "text-cyan-500" },
  { name: "DevOps", icon: Terminal, color: "text-amber-500" },
  { name: "AI", icon: Bot, color: "text-purple-500" },
  { name: "Tools", icon: Cpu, color: "text-rose-500" },
  { name: "Languages", icon: FileCode, color: "text-teal-500" },
];

export default function SkillsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <AnimatedSection direction="down">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold text-blue-500 uppercase tracking-wider">
            Keahlian Teknis
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
            Keahlian & <span className="gradient-text">Teknologi</span>
          </h1>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Daftar lengkap framework, basis data, alat analitik, dan bahasa pemrograman yang saya kuasai.
          </p>
        </div>
      </AnimatedSection>

      {/* Categorized Skills Grid */}
      <div className="space-y-12">
        {categories.map((cat) => {
          const categorySkills = skillsData.filter((s) => s.category === cat.name);
          const IconComp = cat.icon;

          if (categorySkills.length === 0) return null;

          return (
            <AnimatedSection key={cat.name} direction="up">
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-zinc-200 dark:border-zinc-800 pb-3">
                  <IconComp className={`w-5 h-5 ${cat.color}`} />
                  <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                    {cat.name} Engineering
                  </h2>
                  <span className="text-xs font-mono text-zinc-500">({categorySkills.length} keahlian)</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categorySkills.map((skill) => (
                    <SkillCard key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </div>
  );
}
