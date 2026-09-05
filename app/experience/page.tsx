import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";
import { AnimatedSection } from "@/components/common/AnimatedSection";

export const metadata = {
  title: "Pengalaman Kerja",
  description: "Jelajahi perjalanan karier, riwayat pekerjaan, pencapaian magang IT, dan tech stack yang digunakan oleh Adnan Al Qadri.",
};

export default function ExperiencePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <AnimatedSection direction="down">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold text-blue-500 uppercase tracking-wider">
            Linimasa Karier & Magang
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
            Pengalaman <span className="gradient-text">Kerja</span>
          </h1>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Pengalaman magang IT profesional, peserta Machine Learning cohort, asisten laboratorium akademik.
          </p>
        </div>
      </AnimatedSection>

      {/* Timeline */}
      <AnimatedSection direction="up">
        <ExperienceTimeline />
      </AnimatedSection>
    </div>
  );
}

