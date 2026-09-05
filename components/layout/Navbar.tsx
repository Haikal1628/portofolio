"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { Command, Menu, X, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { profileData } from "@/data/profile";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  // { name: "Skills", href: "/skills" },
  { name: "Certificates", href: "/certificates" },
  // { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const { scrollPosition, scrollDirection } = useScrollPosition();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isScrolled = scrollPosition > 20;
  const isFloatingNavVisible = scrollPosition < 300 || scrollDirection === "up";

  const triggerCommandPalette = () => {
    document.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true }));
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isFloatingNavVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled
          ? "bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/80 shadow-sm"
          : "bg-transparent py-2"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 font-bold text-lg text-zinc-900 dark:text-zinc-100 group focus:outline-none"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-200">
            <Terminal className="w-4 h-4" />
          </div>
          <span className="tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {profileData.name.split(" ")[0]}
            <span className="text-blue-500 font-extrabold">.dev</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-100/60 dark:bg-zinc-900/60 p-1.5 rounded-full border border-zinc-200/60 dark:border-zinc-800/60 backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors duration-200 ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavBg"
                    className="absolute inset-0 bg-blue-600 dark:bg-blue-600 rounded-full shadow-sm"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right Action Items */}
        <div className="flex items-center gap-2">
          {/* Command Palette Trigger */}
          <button
            onClick={triggerCommandPalette}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-xs rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
            title="Open Command Palette (Ctrl+K)"
          >
            <Command className="w-3.5 h-3.5 text-blue-500" />
            <span className="font-mono text-[10px]">Ctrl K</span>
          </button>

          {/* Theme Toggle */}
          {/* <ThemeToggle /> */}

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-800 px-4 pt-2 pb-6 space-y-2"
          >
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-blue-600/10 text-blue-600 dark:text-blue-400 font-semibold"
                      : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between px-4">
              <span className="text-xs text-zinc-500">Quick Search</span>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  triggerCommandPalette();
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 text-white rounded-lg text-xs font-medium"
              >
                <Command className="w-3.5 h-3.5" />
                <span>Command Palette</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
