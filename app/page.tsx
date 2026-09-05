import Link from "next/link";
import Image from "next/image";
import { profileData } from "@/data/profile";
import { projectsData } from "@/data/projects";
import { certificatesData } from "@/data/certificates";
import { skillsData } from "@/data/skills";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { CertificateCard } from "@/components/certificates/CertificateCard";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { GithubHeatmap } from "@/components/widgets/GithubHeatmap";
import { GithubRepos } from "@/components/widgets/GithubRepos";
import { TestimonialsSection } from "@/components/widgets/TestimonialsSection";
import { CopyButton } from "@/components/common/CopyButton";
import {
  ArrowRight,
  Download,
  Mail,
  Sparkles,
  ChevronDown,
  Briefcase,
  Code2,
  Award,
  Users,
  CheckCircle2,
  Terminal
} from "lucide-react";

export default function HomePage() {
  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 3);
  const featuredCertificates = certificatesData.slice(0, 2);
  const featuredSkills = skillsData.filter((s) => s.featured).slice(0, 8);

  return (
    <div className="space-y-24 pb-16">
      {/* HERO SECTION */}
      <section className="relative pt-12 md:pt-20 pb-16 overflow-hidden">
        {/* Animated Radial Gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-blue-600/20 via-indigo-600/20 to-cyan-500/20 blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            
            {/* Left Content */}
            <div className="space-y-6 text-center lg:text-left max-w-2xl">
              {/* Availability Badge */}
              <AnimatedSection direction="down" delay={0.1}>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span>{profileData.availability}</span>
                </div>
              </AnimatedSection>

              {/* Title & Headline */}
              <AnimatedSection direction="up" delay={0.2}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 leading-[1.15]">
                  Halo, Saya <span className="gradient-text">{profileData.name}</span>
                </h1>
                <p className="text-lg sm:text-xl font-medium text-zinc-600 dark:text-zinc-400 mt-3">
                  {profileData.role}
                </p>
              </AnimatedSection>

              {/* Short Intro */}
              <AnimatedSection direction="up" delay={0.3}>
                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl">
                  {profileData.shortBio}
                </p>
              </AnimatedSection>

              {/* CTA Buttons */}
              <AnimatedSection direction="up" delay={0.4}>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                  <Link
                    href="/projects"
                    className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-blue-500/25 active:scale-95 transition-all"
                  >
                    <Briefcase className="w-4 h-4" />
                    <span>Lihat Proyek</span>
                  </Link>

                  <Link
                    href="/contact"
                    className="px-6 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-800 font-semibold text-xs sm:text-sm flex items-center gap-2 active:scale-95 transition-all"
                  >
                    <Mail className="w-4 h-4 text-blue-500" />
                    <span>Hubungi Saya</span>
                  </Link>

                  <a
                    href={profileData.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 font-semibold text-xs sm:text-sm flex items-center gap-2 active:scale-95 transition-all"
                  >
                    <Download className="w-4 h-4 text-indigo-500" />
                    <span>Unduh CV</span>
                  </a>
                </div>

                {/* Quick copy email link */}
                <div className="flex items-center justify-center lg:justify-start gap-2 pt-3 text-xs text-zinc-500">
                  <span>Email:</span>
                  <span className="font-mono text-zinc-700 dark:text-zinc-300">{profileData.email}</span>
                  <CopyButton textToCopy={profileData.email} />
                </div>
              </AnimatedSection>
            </div>

            {/* Right Avatar Showcase */}
            <AnimatedSection direction="left" delay={0.3}>
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden p-2 bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 shadow-2xl">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-zinc-950">
                  <Image
                    src={profileData.avatar}
                    alt={profileData.name}
                    fill
                    priority
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent" />
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center pt-16">
            <div
              className="flex flex-col items-center gap-1 text-xs font-medium text-zinc-400 hover:text-blue-500 transition-colors group"
            >
              <span>Gulir ke Bawah</span>
              <ChevronDown className="w-4 h-4 animate-bounce group-hover:text-blue-500" />
            </div>
          </div>
        </div>
      </section>

      {/* STATISTICS CARDS */}
      {/* <section id="stats-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="up">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 text-center space-y-2 hover:border-blue-500/50 transition-colors">
              <Briefcase className="w-6 h-6 text-blue-500 mx-auto" />
              <h3 className="text-3xl font-extrabold text-zinc-900 dark:text-zinc-100 font-mono">
                {profileData.stats.projectsCompleted}+
              </h3>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Projects Completed</p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 text-center space-y-2 hover:border-indigo-500/50 transition-colors">
              <Code2 className="w-6 h-6 text-indigo-500 mx-auto" />
              <h3 className="text-3xl font-extrabold text-zinc-900 dark:text-zinc-100 font-mono">
                {profileData.stats.technologiesMastered}+
              </h3>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Tech Stack Mastered</p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 text-center space-y-2 hover:border-cyan-500/50 transition-colors">
              <Award className="w-6 h-6 text-cyan-500 mx-auto" />
              <h3 className="text-3xl font-extrabold text-zinc-900 dark:text-zinc-100 font-mono">
                {profileData.stats.yearsExperience}+
              </h3>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Years Experience</p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 text-center space-y-2 hover:border-emerald-500/50 transition-colors">
              <Users className="w-6 h-6 text-emerald-500 mx-auto" />
              <h3 className="text-3xl font-extrabold text-zinc-900 dark:text-zinc-100 font-mono">
                {profileData.stats.contributions}+
              </h3>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Open Source Commits</p>
            </div>
          </div>
        </AnimatedSection>
      </section> */}

      {/* FEATURED PROJECTS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <AnimatedSection direction="up">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-500 uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Karya Pilihan</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-zinc-100 mt-1">
                Proyek Unggulan
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs font-bold text-blue-500 hover:text-blue-400 transition-colors"
            >
              <span>Lihat Semua Proyek</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project, idx) => (
            <AnimatedSection key={project.slug} direction="up" delay={0.1 * idx}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* TECH STACK SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <AnimatedSection direction="up">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-semibold text-indigo-500 uppercase tracking-wider">
              Keahlian Utama
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-zinc-100">
              Ekosistem Teknologi
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
              Tools dan framework teruji yang digunakan untuk membangun aplikasi dan sistem digital modern.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.2}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {featuredSkills.map((skill) => (
              <div
                key={skill.name}
                className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs font-semibold text-zinc-900 dark:text-zinc-100 hover:border-blue-500/50 transition-colors"
              >
                <span>{skill.name}</span>
                <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* LATEST CERTIFICATES PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <AnimatedSection direction="up">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold text-cyan-500 uppercase tracking-wider">
                Kredensial & Akreditasi
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-zinc-100 mt-1">
                Sertifikat Terverifikasi
              </h2>
            </div>
            <Link
              href="/certificates"
              className="inline-flex items-center gap-2 text-xs font-bold text-cyan-500 hover:text-cyan-400 transition-colors"
            >
              <span>Lihat Semua Sertifikat</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredCertificates.map((cert) => (
            <CertificateCard key={cert.id} certificate={cert} />
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="up">
          <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center md:text-left max-w-xl z-10">
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                Mari Bekerja Sama dan Membangun Solusi Hebat.
              </h2>
              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                Lulusan baru Teknik Informatika yang siap membawa ide segar, fondasi kuat, dan dedikasi untuk tim Anda. Terbuka untuk posisi entry-level & magang.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 z-10">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl bg-white text-zinc-900 hover:bg-zinc-100 font-bold text-xs sm:text-sm shadow-md active:scale-95 transition-all"
              >
                Hubungi Saya
              </Link>
              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-zinc-900/40 hover:bg-zinc-900/60 border border-white/20 text-white font-semibold text-xs sm:text-sm active:scale-95 transition-all"
              >
                Unduh CV
              </a>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
