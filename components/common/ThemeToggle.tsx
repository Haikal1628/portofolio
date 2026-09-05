// "use client";

// import { useTheme } from "next-themes";
// import { useEffect, useState } from "react";
// import { Sun, Moon } from "lucide-react";
// import { motion } from "framer-motion";

// export function ThemeToggle() {
//   const { theme, setTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) {
//     return <div className="w-9 h-9 rounded-full bg-zinc-200 dark:bg-zinc-800 animate-pulse" />;
//   }

//   const isDark = theme === "dark";

//   return (
//     <button
//       onClick={() => setTheme(isDark ? "light" : "dark")}
//       className="relative p-2 rounded-full bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors duration-200 border border-zinc-200 dark:border-zinc-700/50 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50"
//       aria-label="Toggle Theme"
//     >
//       <motion.div
//         initial={false}
//         animate={{ rotate: isDark ? 0 : 180, scale: 1 }}
//         transition={{ duration: 0.3, ease: "easeInOut" }}
//       >
//         {isDark ? (
//           <Moon className="w-4 h-4 text-blue-400" />
//         ) : (
//           <Sun className="w-4 h-4 text-amber-500" />
//         )}
//       </motion.div>
//     </button>
//   );
// }
