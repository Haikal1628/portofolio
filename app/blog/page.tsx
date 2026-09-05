import Link from "next/link";
import Image from "next/image";
import { blogPostsData } from "@/data/blog";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";

export const metadata = {
  title: "Blog",
  description: "Technical writings, software architecture guides, and UI performance articles by Alex Rivera.",
};

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <AnimatedSection direction="down">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold text-blue-500 uppercase tracking-wider">
            Technical Publications
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
            Engineering <span className="gradient-text">Articles & Insights</span>
          </h1>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Deep dives into frontend performance tuning, cloud microservices, design systems, and modern web architecture.
          </p>
        </div>
      </AnimatedSection>

      {/* Grid of Articles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogPostsData.map((post, idx) => (
          <AnimatedSection key={post.slug} direction="up" delay={0.1 * idx}>
            <div className="group rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:border-blue-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full">
              <div>
                <div className="relative w-full h-48 bg-zinc-950 overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-zinc-900/90 text-zinc-100 backdrop-blur-md">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-zinc-400 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-500 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-zinc-200/80 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex items-center justify-between gap-2 pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60 text-xs font-semibold text-blue-500 group-hover:text-blue-400 transition-colors"
                >
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    Read Article
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
