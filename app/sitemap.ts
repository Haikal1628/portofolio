import { MetadataRoute } from "next";
import { projectsData } from "@/data/projects";
import { blogPostsData } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://alexrivera.dev";

  const routes = [
    "",
    "/about",
    "/projects",
    "/experience",
    "/skills",
    "/certificates",
    "/blog",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const projectRoutes = projectsData.map((p) => ({
    url: `${baseUrl}/projects/${p.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogRoutes = blogPostsData.map((b) => ({
    url: `${baseUrl}/blog/${b.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...projectRoutes, ...blogRoutes];
}
