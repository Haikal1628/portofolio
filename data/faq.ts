export interface FAQItem {
  question: string;
  answer: string;
  category: "General" | "Services" | "Process" | "Pricing";
}

export const faqData: FAQItem[] = [
  {
    question: "What types of projects do you take on?",
    answer: "I specialize in building high-performance full-stack web applications, SaaS developer consoles, custom design systems, real-time AI dashboards, and mobile applications using Next.js 15, React 19, TypeScript, Go, and Tailwind CSS.",
    category: "Services"
  },
  {
    question: "Are you available for full-time roles or contract work?",
    answer: "Yes! I am currently open to Senior/Staff Full Stack engineering opportunities, as well as high-impact technical consulting or advisory engagements.",
    category: "General"
  },
  {
    question: "How do you ensure accessibility and UI performance?",
    answer: "Every application is built with WAI-ARIA compliance, strict keyboard focus management, automated Lighthouse testing (aiming for 95+ scores), server components, and GPU-accelerated Framer Motion animations.",
    category: "Process"
  },
  {
    question: "What is your typical project timeline?",
    answer: "Timelines depend on scope. Full SaaS MVP builds typically range between 4 to 8 weeks, while technical performance audits or custom component libraries take 1 to 3 weeks.",
    category: "Pricing"
  }
];
