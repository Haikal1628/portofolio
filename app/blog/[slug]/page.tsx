import { blogPostsData } from "@/data/blog";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";

interface BlogDetailProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPostsData.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogDetailPage({ params }: BlogDetailProps) {
  const { slug } = await params;
  const post = blogPostsData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      {/* Back Button */}
      <AnimatedSection direction="down">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-blue-500 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Articles</span>
        </Link>
      </AnimatedSection>

      {/* Meta Header */}
      <AnimatedSection direction="up">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-600/10 text-blue-500 border border-blue-500/20">
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500 font-mono">
              <Calendar className="w-3.5 h-3.5" />
              {post.date}
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500 font-mono">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight leading-tight">
            {post.title}
          </h1>

          {/* Author Card */}
          <div className="flex items-center gap-3 pt-2">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-zinc-200 dark:border-zinc-800">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
                {post.author.name}
              </h4>
              <p className="text-[11px] text-zinc-500">{post.author.role}</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Cover Image */}
      <AnimatedSection direction="up">
        <div className="relative w-full h-72 sm:h-96 rounded-3xl overflow-hidden bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-xl">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
        </div>
      </AnimatedSection>

      {/* Content */}
      <AnimatedSection direction="up">
        <article className="prose dark:prose-invert max-w-none text-zinc-700 dark:text-zinc-300 space-y-6 leading-relaxed text-sm sm:text-base">
          <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 whitespace-pre-line font-sans">
            {post.content}
          </div>
        </article>
      </AnimatedSection>
    </div>
  );
}
