export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Database"
  | "Cloud"
  | "DevOps"
  | "Tools"
  | "AI"
  | "Languages";

export interface Skill {
  name: string;
  category: SkillCategory;
  level: number; // percentage or scale 1-100
  experience: string;
  iconName: string;
  featured?: boolean;
}

export const skillsData: Skill[] = [
  // AI & Machine Learning
  {
    name: "Python (Data Science & ML)",
    category: "AI",
    level: 92,
    experience: "2 yrs",
    iconName: "BrainCircuit",
    featured: true,
  },
  {
    name: "Machine Learning (Scikit-learn/TensorFlow)",
    category: "AI",
    level: 90,
    experience: "2 yrs",
    iconName: "Bot",
    featured: true,
  },
  {
    name: "Large Language Models (LLM)",
    category: "AI",
    level: 88,
    experience: "1 yr",
    iconName: "Sparkles",
    featured: true,
  },
  {
    name: "LangChain & LangSmith",
    category: "AI",
    level: 85,
    experience: "1 yr",
    iconName: "Workflow",
    featured: true,
  },
  {
    name: "RAG (FAISS/ChromaDB)",
    category: "AI",
    level: 82,
    experience: "1 yr",
    iconName: "Search",
    featured: true,
  },
  {
    name: "LLM Fine-tuning (QLoRA/PEFT)",
    category: "AI",
    level: 78,
    experience: "1 yr",
    iconName: "SlidersHorizontal",
    featured: false,
  },
  {
    name: "Prompt Engineering",
    category: "AI",
    level: 90,
    experience: "1 yr",
    iconName: "MessageSquareText",
    featured: true,
  },
  {
    name: "Deep Learning (CNN/Neural Network)",
    category: "AI",
    level: 85,
    experience: "2 yrs",
    iconName: "Network",
    featured: false,
  },

  // Data Analytics & Database
  {
    name: "SQL & Relational Databases",
    category: "Database",
    level: 90,
    experience: "2 yrs",
    iconName: "Database",
    featured: true,
  },
  {
    name: "Data Cleaning & EDA (Pandas/NumPy)",
    category: "AI",
    level: 92,
    experience: "2 yrs",
    iconName: "FileTerminal",
    featured: true,
  },
  {
    name: "Data Visualization (Matplotlib/Seaborn)",
    category: "AI",
    level: 88,
    experience: "2 yrs",
    iconName: "BarChart3",
    featured: true,
  },
  {
    name: "Power BI & Looker Studio",
    category: "AI",
    level: 88,
    experience: "2 yrs",
    iconName: "Palette",
    featured: true,
  },
  {
    name: "Microsoft Excel (Advanced)",
    category: "Tools",
    level: 92,
    experience: "2 yrs",
    iconName: "Layers",
    featured: true,
  },

  // Frontend & Web Development
  {
    name: "React JS & Next.js",
    category: "Frontend",
    level: 78,
    experience: "1 yr",
    iconName: "Code",
    featured: false,
  },
  {
    name: "TypeScript / JavaScript",
    category: "Languages",
    level: 75,
    experience: "1 yr",
    iconName: "Code2",
    featured: false,
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    level: 80,
    experience: "1 yr",
    iconName: "Palette",
    featured: false,
  },

  // Backend & Other Languages
  {
    name: "Flask & REST API",
    category: "Backend",
    level: 75,
    experience: "1 yr",
    iconName: "Server",
    featured: false,
  },
  {
    name: "Go Programming",
    category: "Languages",
    level: 60,
    experience: "< 1 yr",
    iconName: "Code2",
    featured: false,
  },
  {
    name: "Git & GitHub",
    category: "Tools",
    level: 88,
    experience: "2 yrs",
    iconName: "GitBranch",
    featured: true,
  },
  {
    name: "VS Code & Jupyter Notebooks",
    category: "Tools",
    level: 95,
    experience: "2 yrs",
    iconName: "Terminal",
    featured: false,
  },
];
