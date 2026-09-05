import { certificatesData } from "@/data/certificates";
import { CertificateCard } from "@/components/certificates/CertificateCard";
import { AnimatedSection } from "@/components/common/AnimatedSection";

export const metadata = {
  title: "Sertifikat",
  description: "Sertifikasi resmi dan kredensial profesional dari Udemy, DeepLearning.AI, Dicoding, dan Bangkit Academy.",
};

export default function CertificatesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <AnimatedSection direction="down">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold text-cyan-500 uppercase tracking-wider">
            Kredensial Terverifikasi
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
            Sertifikasi & <span className="gradient-text">Lisensi</span>
          </h1>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Sertifikasi pelatihan dalam analisis data, machine learning, basis data, dan pengembangan perangkat lunak.
          </p>
        </div>
      </AnimatedSection>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificatesData.map((cert, idx) => (
          <AnimatedSection key={cert.id} direction="up" delay={0.1 * idx}>
            <CertificateCard certificate={cert} />
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
