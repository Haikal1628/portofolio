"use client";

import Link from "next/link";
import { profileData } from "@/data/profile";
import { socialLinks } from "@/data/social";
import { IconGithub, IconLinkedin, IconTwitter, IconInstagram } from "@/components/common/SocialIcons";
import { Mail, Terminal, Heart, Eye } from "lucide-react";
import { SpotifyWidget } from "@/components/widgets/SpotifyWidget";

export function Footer() {
  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "Github": return <IconGithub className="w-4 h-4" />;
      case "Linkedin": return <IconLinkedin className="w-4 h-4" />;
      case "Twitter": return <IconTwitter className="w-4 h-4" />;
      case "Instagram": return <IconInstagram className="w-4 h-4" />;
      default: return <Mail className="w-4 h-4" />;
    }
  };

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-950 text-zinc-600 dark:text-zinc-400 text-sm transition-colors mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Col 1: Bio & Status */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5 font-bold text-lg text-zinc-900 dark:text-zinc-100">
              <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="tracking-tight">{profileData.name}</span>
            </Link>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-md">
              {profileData.shortBio}
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">
              Navigasi
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/" className="hover:text-blue-500 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-blue-500 transition-colors">About</Link></li>
              <li><Link href="/projects" className="hover:text-blue-500 transition-colors">Projects</Link></li>
              <li><Link href="/experience" className="hover:text-blue-500 transition-colors">Experience</Link></li>
              {/* <li><Link href="/skills" className="hover:text-blue-500 transition-colors">Skills</Link></li> */}
              <li><Link href="/certificates" className="hover:text-blue-500 transition-colors">Certificate</Link></li>
              <li><Link href="/contact" className="hover:text-blue-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Col 3: Social & Connect */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">
              Media Sosial
            </h4>
            <div className="flex flex-wrap gap-2 pt-1">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 hover:bg-blue-600/10 hover:text-blue-500 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 transition-colors"
                  aria-label={item.name}
                >
                  {getSocialIcon(item.icon)}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-zinc-200 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} {profileData.name}. Hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
