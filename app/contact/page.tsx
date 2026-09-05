import { profileData } from "@/data/profile";
import { socialLinks } from "@/data/social";
import { ContactForm } from "@/components/contact/ContactForm";
import { CopyButton } from "@/components/common/CopyButton";
import { FAQSection } from "@/components/widgets/FAQSection";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { IconGithub, IconLinkedin, IconTwitter, IconInstagram } from "@/components/common/SocialIcons";
import { Mail, MessageCircle, MapPin, Clock } from "lucide-react";

export const metadata = {
  title: "Kontak",
  description: "Hubungi Adnan Al Qadri untuk pertanyaan proyek, konsultasi teknis, atau peluang kerja entry-level.",
};

export default function ContactPage() {
  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "Github": return <IconGithub className="w-5 h-5 text-emerald-500" />;
      case "Linkedin": return <IconLinkedin className="w-5 h-5 text-blue-500" />;
      case "Twitter": return <IconTwitter className="w-5 h-5 text-cyan-500" />;
      case "Instagram": return <IconInstagram className="w-5 h-5 text-rose-500" />;
      case "MessageCircle": return <MessageCircle className="w-5 h-5 text-emerald-400" />;
      default: return <Mail className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <AnimatedSection direction="down">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold text-blue-500 uppercase tracking-wider">
            Ada pertanyaan ?
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
            Hubungi <span className="gradient-text">Saya</span>
          </h1>
        </div>
      </AnimatedSection>

      {/* Main Grid: Form + Direct Contact Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left Form */}
        <AnimatedSection direction="right" className="lg:col-span-2">
          <ContactForm />
        </AnimatedSection>

        {/* Right Info Cards */}
        <AnimatedSection direction="left" className="lg:col-span-1 space-y-6">
          {/* Quick Copy Cards */}
          <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 space-y-4">
            <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
              Informasi Kontak Langsung
            </h3>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
                <div>
                  <p className="text-[11px] text-zinc-500 font-medium">Alamat Email</p>
                  <p className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 font-mono truncate max-w-[150px]">
                    {profileData.email}
                  </p>
                </div>
                <CopyButton textToCopy={profileData.email} label="Salin Email" />
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
                <div>
                  <p className="text-[11px] text-zinc-500 font-medium">Discord Tag</p>
                  <p className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 font-mono">
                    {profileData.discord}
                  </p>
                </div>
                <CopyButton textToCopy={profileData.discord} label="Salin Tag" />
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
                <div>
                  <p className="text-[11px] text-zinc-500 font-medium">WhatsApp</p>
                  <p className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 font-mono">
                    {profileData.whatsapp}
                  </p>
                </div>
                <a
                  href={`https://wa.me/${profileData.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-emerald-600/10 text-emerald-500 text-xs font-semibold hover:bg-emerald-600/20"
                >
                  Chat Sekarang
                </a>
              </div>
            </div>

            <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800 space-y-2 text-xs text-zinc-500">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-500" />
                <span>{profileData.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-indigo-500" />
                <span>Waktu Respon: Kurang dari 24 jam</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* SOCIAL CHANNELS GRID */}
      <AnimatedSection direction="up">
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 text-center">
            Terhubung di Media Sosial
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/50 hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center text-center space-y-2 group"
              >
                <div className="p-2 rounded-lg bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 group-hover:scale-110 transition-transform">
                  {getSocialIcon(link.icon)}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-500 transition-colors">
                    {link.name}
                  </h4>
                  <span className="text-[10px] text-zinc-500 font-mono truncate block max-w-[100px]">
                    {link.handle}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* GOOGLE MAPS PLACEHOLDER */}
      {/* <AnimatedSection direction="up">
        <div className="p-4 rounded-3xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 overflow-hidden space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-zinc-900 dark:text-zinc-100 px-2">
            <MapPin className="w-4 h-4 text-rose-500" />
            <span>Location Base — San Francisco Bay Area, California</span>
          </div>
          <div className="relative w-full h-64 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.5076401796637!3d37.757814996609724!2m3!1f0!1f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(0.8) contrast(1.2) opacity(0.85)" }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </AnimatedSection> */}

      {/* FAQ SECTION */}
      {/* <AnimatedSection direction="up">
        <div className="space-y-6 pt-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-semibold text-indigo-500 uppercase tracking-wider">
              Clarifications
            </span>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
              Frequently Asked Questions
            </h2>
          </div>
          <FAQSection />
        </div>
      </AnimatedSection> */}
    </div>
  );
}
