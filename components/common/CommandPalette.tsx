"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import { useTheme } from "next-themes";
import {
  Home,
  User,
  Briefcase,
  Layers,
  Award,
  BookOpen,
  Mail,
  Sun,
  Moon,
  Copy,
  FileText,
  Search,
  Sparkles
} from "lucide-react";
import { profileData } from "@/data/profile";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const { copy } = useCopyToClipboard();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-24 px-4">
      <div
        className="fixed inset-0"
        onClick={() => setOpen(false)}
      />
      <div className="relative w-full max-w-xl bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl overflow-hidden text-zinc-100 animate-in fade-in-0 zoom-in-95">
        <Command className="w-full bg-transparent">
          <div className="flex items-center border-b border-zinc-800 px-3">
            <Search className="w-4 h-4 text-zinc-400 mr-2 shrink-0" />
            <Command.Input
              placeholder="Ketik perintah atau cari..."
              className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-zinc-500 text-zinc-100"
            />
            <kbd className="px-1.5 py-0.5 text-[10px] font-semibold text-zinc-400 bg-zinc-800 border border-zinc-700 rounded">
              ESC
            </kbd>
          </div>

          <Command.List className="max-h-80 overflow-y-auto p-2 space-y-1">
            <Command.Empty className="py-6 text-center text-sm text-zinc-400">
              Tidak ada hasil ditemukan.
            </Command.Empty>

            <Command.Group heading="Navigasi" className="text-[11px] font-semibold text-zinc-500 px-2 py-1">
              <Command.Item
                onSelect={() => runCommand(() => router.push("/"))}
                className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg hover:bg-blue-600/20 hover:text-blue-400 cursor-pointer transition-colors"
              >
                <Home className="w-4 h-4" />
                <span>Halaman Utama (Beranda)</span>
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => router.push("/about"))}
                className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg hover:bg-blue-600/20 hover:text-blue-400 cursor-pointer transition-colors"
              >
                <User className="w-4 h-4" />
                <span>Tentang Saya</span>
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => router.push("/projects"))}
                className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg hover:bg-blue-600/20 hover:text-blue-400 cursor-pointer transition-colors"
              >
                <Briefcase className="w-4 h-4" />
                <span>Proyek Unggulan</span>
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => router.push("/experience"))}
                className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg hover:bg-blue-600/20 hover:text-blue-400 cursor-pointer transition-colors"
              >
                <Layers className="w-4 h-4" />
                <span>Pengalaman Kerja</span>
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => router.push("/skills"))}
                className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg hover:bg-blue-600/20 hover:text-blue-400 cursor-pointer transition-colors"
              >
                <Sparkles className="w-4 h-4" />
                <span>Keahlian Teknis</span>
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => router.push("/certificates"))}
                className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg hover:bg-blue-600/20 hover:text-blue-400 cursor-pointer transition-colors"
              >
                <Award className="w-4 h-4" />
                <span>Sertifikat</span>
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => router.push("/contact"))}
                className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg hover:bg-blue-600/20 hover:text-blue-400 cursor-pointer transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Halaman Kontak</span>
              </Command.Item>
            </Command.Group>

            <Command.Group heading="Aksi Cepat" className="text-[11px] font-semibold text-zinc-500 px-2 py-1">
              <Command.Item
                onSelect={() => runCommand(() => setTheme(theme === "dark" ? "light" : "dark"))}
                className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg hover:bg-blue-600/20 hover:text-blue-400 cursor-pointer transition-colors"
              >
                {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-blue-400" />}
                <span>Ganti Tema ({theme === "dark" ? "Mode Terang" : "Mode Gelap"})</span>
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => copy(profileData.email))}
                className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg hover:bg-blue-600/20 hover:text-blue-400 cursor-pointer transition-colors"
              >
                <Copy className="w-4 h-4 text-emerald-400" />
                <span>Salin Email ({profileData.email})</span>
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => copy(profileData.discord))}
                className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg hover:bg-blue-600/20 hover:text-blue-400 cursor-pointer transition-colors"
              >
                <Copy className="w-4 h-4 text-indigo-400" />
                <span>Salin Tag Discord ({profileData.discord})</span>
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => window.open(profileData.resumeUrl, "_blank"))}
                className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg hover:bg-blue-600/20 hover:text-blue-400 cursor-pointer transition-colors"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Lihat / Unduh CV (PDF)</span>
              </Command.Item>
            </Command.Group>
          </Command.List>

          <div className="border-t border-zinc-800 p-2 text-center text-xs text-zinc-500 flex items-center justify-between px-3">
            <span>Tekan <kbd className="px-1 bg-zinc-800 rounded text-zinc-300">Ctrl + K</kbd> kapan saja</span>
            <span>Pusat Perintah & Pencarian</span>
          </div>
        </Command>
      </div>
    </div>
  );
}
