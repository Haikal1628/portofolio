export interface GithubRepo {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  language: string;
  updated_at: string;
}

export const mockGithubRepos: GithubRepo[] = [
  {
    id: 101,
    name: "nexus-ai-platform",
    description: "Orchestration engine for serverless LLM workflows & real-time token streaming.",
    stargazers_count: 342,
    forks_count: 48,
    html_url: "https://github.com/alexrivera/nexus-ai-platform",
    language: "TypeScript",
    updated_at: "2024-07-20"
  },
  {
    id: 102,
    name: "linearflow-ui",
    description: "Minimalist, hyper-accessible React 19 component library inspired by Linear & Vercel.",
    stargazers_count: 2410,
    forks_count: 195,
    html_url: "https://github.com/alexrivera/linearflow-ui",
    language: "TypeScript",
    updated_at: "2024-07-18"
  },
  {
    id: 103,
    name: "hypermesh-observability",
    description: "Real-time Kubernetes cluster health & distributed tracing engine in Go.",
    stargazers_count: 890,
    forks_count: 76,
    html_url: "https://github.com/alexrivera/hypermesh-observability",
    language: "Go",
    updated_at: "2024-07-15"
  },
  {
    id: 104,
    name: "devpulse-raycast-extension",
    description: "Developer productivity toolset for GitHub, Vercel, and Linear inside Raycast.",
    stargazers_count: 620,
    forks_count: 34,
    html_url: "https://github.com/alexrivera/devpulse-raycast-extension",
    language: "TypeScript",
    updated_at: "2024-07-10"
  }
];

export async function fetchGithubRepos(username: string = "alexrivera"): Promise<GithubRepo[]> {
  try {
    const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`, {
      next: { revalidate: 3600 }
    });
    if (!res.ok) return mockGithubRepos;
    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) return mockGithubRepos;
    return data;
  } catch {
    return mockGithubRepos;
  }
}
