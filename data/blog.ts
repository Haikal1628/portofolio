export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  coverImage: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
}

export const blogPostsData: BlogPost[] = [
  {
    slug: "building-zero-latency-web-apps-nextjs-15",
    title:
      "Architecting Sub-50ms Modern Web Applications with Next.js 15 App Router",
    excerpt:
      "A deep dive into server components, edge caching, streaming hydration, and granular bundle splitting in Next.js 15.",
    content: `
# Architecting Sub-50ms Modern Web Applications with Next.js 15 App Router

Building ultra-fast web applications is no longer just about optimizing image sizes or minifying CSS bundle files. In modern full-stack web development, sub-50ms response times demand a holistic strategy that leverages Edge execution, Server Components, and zero-runtime client JS overhead.

## 1. The Power of React 19 & Next.js 15 Server Components

Server Components fundamentally alter how we ship React applications. By executing rendering logic on the server or edge node:
- Zero KB client bundle impact for complex parsing libraries.
- Direct database and microservice access without exposing private credentials.
- Automatic streaming through HTML Suspense boundaries.

\`\`\`tsx
// Example of Server Component fetching directly at the Edge
import { db } from "@/lib/db";
import { Suspense } from "react";
import { ProjectSkeleton } from "@/components/skeletons";

export default async function ProjectsPage() {
  const projects = await db.project.findMany({
    orderBy: { createdAt: "desc" }
  });

  return (
    <Suspense fallback={<ProjectSkeleton />}>
      <ProjectList data={projects} />
    </Suspense>
  );
}
\`\`\`

## 2. Granular Edge Caching & Revalidation

Combining Incremental Static Regeneration (ISR) with stale-while-revalidate policies keeps content instant globally while refreshing seamlessly behind the scenes.

## 3. Micro-animations without Layout Shift

Using CSS transform properties and GPU-accelerated Framer Motion prevents layout shifts (CLS) completely.

Stay tuned for part 2 where we explore real-time WebSockets streaming with Edge API routes!
    `,
    date: "July 2024",
    readTime: "6 min read",
    category: "Architecture",
    tags: ["Next.js 15", "React 19", "Performance", "TypeScript"],
    coverImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Alex Rivera",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
      role: "Senior Full Stack Engineer",
    },
  },
  {
    slug: "designing-linear-style-glassmorphic-uis",
    title:
      "Designing Linear & Stripe-Inspired Modern Interfaces with Tailwind CSS",
    excerpt:
      "How to craft rich glassmorphic borders, soft radial gradients, and fluid keyboard-driven command palettes.",
    content: `
# Designing Linear & Stripe-Inspired Modern Interfaces with Tailwind CSS

User interfaces designed by Companies like Linear, Stripe, Vercel, and Raycast share a subtle elegance. They rely on deep neutral backgrounds, razor-thin borders, tactile hover micro-animations, and instant keyboard shortcuts.

## Key Design Principles

1. **Deep Neutral Palette**: Avoid stark pure black \`#000000\`. Instead, use deep rich slates like \`#09090B\` or \`#0A0A0C\`.
2. **Subtle Gradient Borders**: A 1px border with \`border-white/10\` or gradient stops adds depth without clutter.
3. **Glassmorphism in Moderation**: Backdrop blur (\`backdrop-blur-md bg-zinc-900/60\`) should enhance contrast, not create visual noise.
4. **Keyboard-First Navigation**: Providing Command Palette (\`Ctrl+K\`) navigation makes power users feel instantly empowered.
    `,
    date: "June 2024",
    readTime: "8 min read",
    category: "UI/UX Design",
    tags: ["Tailwind CSS", "Design Systems", "UI/UX", "Glassmorphism"],
    coverImage:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Alex Rivera",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
      role: "Senior Full Stack Engineer",
    },
  },
  {
    slug: "scaling-go-microservices-for-high-concurrency",
    title: "Scaling Go Microservices to Handle 50,000+ Requests per Second",
    excerpt:
      "Lessons learned building high-throughput ingestion servers, Go channels, worker pools, and ClickHouse storage.",
    content: `
# Scaling Go Microservices to Handle 50,000+ Requests per Second

When handling intense concurrency for live telemetry or financial transactions, Go's runtime shines. Here is how we structured worker pools and zero-allocation buffer queues in Go.

## Worker Pool Pattern

Instead of spawning unbounded goroutines per request, bound memory growth with pre-allocated worker channels:

\`\`\`go
package main

import (
	"context"
	"fmt"
	"sync"
)

type Task struct {
	ID int
}

func worker(id int, jobs <-chan Task, wg *sync.WaitGroup) {
	defer wg.Done()
	for job := range jobs {
		fmt.Printf("Worker %d processing job %d\\n", id, job.ID)
	}
}
\`\`\`
    `,
    date: "May 2024",
    readTime: "10 min read",
    category: "Backend & Systems",
    tags: ["Go", "Microservices", "Concurrency", "ClickHouse"],
    coverImage:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Alex Rivera",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
      role: "Senior Full Stack Engineer",
    },
  },
];
