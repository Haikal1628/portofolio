import { profileData } from "@/data/profile";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import Image from "next/image";
import { User, Target, GraduationCap, Heart, Sparkles, Milestone } from "lucide-react";

export const metadata = {
  title: "Tentang Saya",
  description: "Pelajari lebih lanjut tentang latar belakang, perjalanan karier, tujuan karier, dan pendidikan Adnan Al Qadri.",
};

export default function AboutPage() {
  const { about } = profileData;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <AnimatedSection direction="down">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold text-blue-500 uppercase tracking-wider">
            Biografi & Nilai
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
            Tentang <span className="gradient-text">{profileData.name}</span>
          </h1>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Latar belakang, perjalanan teknologi, pendidikan, dan tujuan karier saya.
          </p>
        </div>
      </AnimatedSection>

      {/* Main Bio Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left Photo & Stats */}
        <AnimatedSection direction="right" className="lg:col-span-1">
          <div className="p-6 rounded-3xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 space-y-6 text-center">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto rounded-2xl overflow-hidden bg-zinc-950 border-2 border-blue-500/40 shadow-xl">
              <Image
                src={profileData.avatar}
                alt={profileData.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-zinc-900 dark:text-zinc-100">{profileData.name}</h3>
              <p className="text-xs font-medium text-blue-500">{profileData.role}</p>
              <p className="text-xs text-zinc-500 mt-1">{profileData.location}</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Right Biography Paragraphs */}
        <AnimatedSection direction="left" className="lg:col-span-2 space-y-6">
          <div className="p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 space-y-4">
            <div className="flex items-center gap-2 text-sm font-bold text-zinc-900 dark:text-zinc-100">
              <User className="w-4 h-4 text-blue-500" />
              <span>Biografi Profesional</span>
            </div>
            {about.biography.map((paragraph, idx) => (
              <p key={idx} className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </AnimatedSection>
      </div>

      {/* JOURNEY & MILESTONES */}
      <AnimatedSection direction="up">
        <div className="space-y-8">
          <div className="flex items-center gap-2 text-sm font-bold text-zinc-900 dark:text-zinc-100 border-b border-zinc-200 dark:border-zinc-800 pb-3">
            <Milestone className="w-5 h-5 text-indigo-500" />
            <span>Perjalanan Karier & Pengalaman</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {about.journey.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 space-y-3 relative hover:border-indigo-500/50 transition-colors"
              >
                <span className="text-xs font-mono font-bold text-indigo-500 bg-indigo-500/10 px-3 py-1 rounded-full w-fit">
                  {item.year}
                </span>
                <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">{item.title}</h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CAREER GOALS & EDUCATION GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Career Goals */}
        <AnimatedSection direction="up">
          <div className="p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 space-y-4 h-full">
            <div className="flex items-center gap-2 text-sm font-bold text-zinc-900 dark:text-zinc-100">
              <Target className="w-5 h-5 text-cyan-500" />
              <span>Tujuan Karier & Aspirasi</span>
            </div>
            <ul className="space-y-3">
              {about.careerGoals.map((goal, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
                  <Sparkles className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

        {/* Education */}
        <AnimatedSection direction="up" delay={0.1}>
          <div className="p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 space-y-4 h-full">
            <div className="flex items-center gap-2 text-sm font-bold text-zinc-900 dark:text-zinc-100">
              <GraduationCap className="w-5 h-5 text-emerald-500" />
              <span>Pendidikan Akademik</span>
            </div>
            {about.education.map((edu, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">{edu.degree}</h4>
                  <span className="text-xs font-mono text-emerald-500">{edu.year}</span>
                </div>
                <p className="text-xs font-semibold text-zinc-500">{edu.institution} — IPK {edu.gpa}</p>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>

      {/* INTERESTS */}
      <AnimatedSection direction="up">
        <div className="p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 space-y-4">
          <div className="flex items-center gap-2 text-sm font-bold text-zinc-900 dark:text-zinc-100">
            <Heart className="w-5 h-5 text-rose-500" />
            <span>Minat & Ketertarikan Pribadi</span>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {about.interests.map((interest) => (
              <span
                key={interest}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-zinc-200/80 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-300/40 dark:border-zinc-700/40"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
