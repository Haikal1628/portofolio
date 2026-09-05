"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-media-query";

export function CustomCursor() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isDesktop) return;

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.getAttribute("role") === "button"
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-blue-500 pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovered ? 2.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.1 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-blue-400/40 pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovered ? 1.6 : 1,
        }}
        transition={{ type: "spring", stiffness: 250, damping: 20, mass: 0.2 }}
      />
    </>
  );
}
