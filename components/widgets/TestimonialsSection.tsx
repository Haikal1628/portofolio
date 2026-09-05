"use client";

import { testimonialsData } from "@/data/testimonials";
import { Quote, Star } from "lucide-react";
import Image from "next/image";

export function TestimonialsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {testimonialsData.map((item) => (
        <div
          key={item.id}
          className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-200 flex flex-col justify-between"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Quote className="w-6 h-6 text-blue-500/40" />
              <div className="flex items-center gap-1">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed italic">
              "{item.content}"
            </p>
          </div>

          <div className="flex items-center gap-3 pt-6 mt-4 border-t border-zinc-200/60 dark:border-zinc-800/60">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-zinc-200 dark:border-zinc-700">
              <Image
                src={item.avatar}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="text-xs font-bold text-zinc-900 dark:text-zinc-100">{item.name}</h4>
              <p className="text-[11px] text-zinc-500">{item.role}, {item.company}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
