import { projectsData } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { IconGithub } from "@/components/common/SocialIcons";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Cpu,
  Layers,
  Sparkles
} from "lucide-react";

interface ProjectDetailProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: ProjectDetailProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Back Button */}
      <AnimatedSection direction="down">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-blue-500 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Proyek</span>
        </Link>
      </AnimatedSection>

      {/* Hero Title & Meta */}
      <AnimatedSection direction="up">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            {/* <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-600/10 text-blue-500 border border-blue-500/20">
              {project.category}
            </span> */}
            {/* <span className="px-3 py-1 rounded-full text-xs font-semibold bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
              Status: {project.status}
            </span> */}
            {/* <span className="text-xs font-mono text-zinc-500">{project.date}</span> */}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
            {project.title}
          </h1>

          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
            {project.shortDescription}
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-md"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Demo Langsung</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-800 font-semibold text-xs sm:text-sm flex items-center gap-2"
              >
                <IconGithub className="w-4 h-4" />
                <span>Lihat Kode Sumber</span>
              </a>
            )}
          </div>
        </div>
      </AnimatedSection>

      {/* Main Cover Image */}
      <AnimatedSection direction="up">
        <div className="relative w-full h-72 sm:h-96 lg:h-[450px] rounded-3xl overflow-hidden bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-2xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            className="object-cover"
          />
        </div>
      </AnimatedSection>

      {/* METRICS BANNER (If available) */}
      {/* {project.metrics && (
        <AnimatedSection direction="up">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 text-center">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="space-y-1">
                <span className="text-2xl font-extrabold text-blue-500 font-mono">{m.value}</span>
                <p className="text-xs text-zinc-500 uppercase tracking-wider">{m.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      )} */}

      {/* OVERVIEW & PROBLEM vs SOLUTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <AnimatedSection direction="right">
          <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 space-y-3 h-full">
            <div className="flex items-center gap-2 text-sm font-bold text-rose-500">
              <AlertTriangle className="w-4 h-4" />
              <span>Masalah</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {project.problem}
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="left">
          <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 space-y-3 h-full">
            <div className="flex items-center gap-2 text-sm font-bold text-emerald-500">
              <CheckCircle2 className="w-4 h-4" />
              <span>Solusi Yang Dibuat</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </AnimatedSection>
      </div>

      {/* SYSTEM ARCHITECTURE */}
      <AnimatedSection direction="up">
        <div className="p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 space-y-4">
          <div className="flex items-center gap-2 text-sm font-bold text-zinc-900 dark:text-zinc-100">
            <Cpu className="w-5 h-5 text-indigo-500" />
            <span>Arsitektur Sistem & Alur Data</span>
          </div>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-mono bg-zinc-100 dark:bg-zinc-950 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800">
            {project.architecture}
          </p>
        </div>
      </AnimatedSection>

      {/* TECH STACK LIST */}
      <AnimatedSection direction="up">
        <div className="p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 space-y-4">
          <div className="flex items-center gap-2 text-sm font-bold text-zinc-900 dark:text-zinc-100">
            <Layers className="w-5 h-5 text-blue-500" />
            <span>Teknologi & Library Yang Digunakan</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-blue-600/10 text-blue-500 border border-blue-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* SCREENSHOTS GALLERY */}
      {project.gallery.length > 0 && (
        <AnimatedSection direction="up">
          <div className="space-y-4 pt-4">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
              Galeri Tangkapan Layar
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.gallery.map((img, idx) => (
                <div
                  key={idx}
                  className="relative h-60 rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-md"
                >
                  <Image
                    src={img}
                    alt={`${project.title} screenshot ${idx + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      )}
    </div>
  );
}
