import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/common/theme-provider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/common/ScrollProgress";
import { CommandPalette } from "@/components/common/CommandPalette";
import { BackToTop } from "@/components/common/BackToTop";
import { profileData } from "@/data/profile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAFA" },
    { media: "(prefers-color-scheme: dark)", color: "#09090B" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: `${profileData.name} — Senior Full Stack Engineer & Product Designer`,
    template: `%s | ${profileData.name}`,
  },
  description: profileData.title,
  keywords: [
    "Senior Full Stack Engineer",
    "React 19",
    "Next.js 15",
    "TypeScript",
    "Tailwind CSS",
    "UI/UX Design",
    "Cloud Architecture",
    "Portfolio",
  ],
  authors: [{ name: profileData.name }],
  creator: profileData.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alexrivera.dev",
    title: `${profileData.name} — Senior Full Stack Engineer`,
    description: profileData.shortBio,
    siteName: profileData.name,
    images: [
      {
        url: profileData.avatar,
        width: 1200,
        height: 630,
        alt: profileData.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profileData.name} — Senior Full Stack Engineer`,
    description: profileData.shortBio,
    creator: "@alexrivera_dev",
    images: [profileData.avatar],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 selection:bg-blue-500/30 selection:text-blue-400">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />
          <CommandPalette />
          <Navbar />

          <main className="flex-1 pt-20">
            {children}
          </main>

          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
