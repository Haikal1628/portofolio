import Link from "next/link";
import { Terminal, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 space-y-6">
      <div className="p-4 rounded-2xl bg-blue-600/10 text-blue-500 border border-blue-500/20">
        <Terminal className="w-10 h-10 animate-pulse" />
      </div>

      <div className="space-y-2 max-w-md">
        <span className="text-xs font-mono font-bold text-rose-500 bg-rose-500/10 px-3 py-1 rounded-full">
          ERROR 404 — ROUTE NOT FOUND
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
          Page Lost in Hyperspace
        </h1>
        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
          The requested URL path does not exist or may have been moved during a recent system refactor.
        </p>
      </div>

      <div className="flex items-center gap-4 pt-2">
        <Link
          href="/"
          className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-blue-500/20 active:scale-95 transition-all"
        >
          <Home className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
        <Link
          href="/projects"
          className="px-6 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 font-semibold text-xs sm:text-sm flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>View Projects</span>
        </Link>
      </div>
    </div>
  );
}
