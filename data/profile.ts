export interface Profile {
  name: string;
  role: string;
  title: string;
  avatar: string;
  bio: string;
  shortBio: string;
  location: string;
  email: string;
  whatsapp: string;
  discord: string;
  availability: string;
  stats: {
    projectsCompleted: number;
    yearsExperience: number;
    technologiesMastered: number;
    contributions: number;
  };
  resumeUrl: string;
  about: {
    biography: string[];
    journey: {
      year: string;
      title: string;
      description: string;
      type:
        | "Pendidikan"
        | "Magang"
        | "Bootcamp"
        | "Organisasi"
        | "Sertifikasi"
        | "Kursus";
    }[];
    careerGoals: string[];
    education: {
      degree: string;
      institution: string;
      year: string;
      gpa: string;
      details: string;
    }[];
    interests: string[];
  };
}

export const profileData: Profile = {
  name: "Muhammad Haikal Taufiqulhakim",
  role: "Machine Learning & Generative AI Engineer",
  title:
    "Merancang dan membangun sistem AI Agentic, LLM, serta model Machine Learning yang scalable untuk menyelesaikan masalah nyata secara end-to-end.",
  avatar: "https://ik.imagekit.io/u1eqhy617h/portofolio/gdg%20haikal.jpeg",
  bio: "Lulusan S1 Teknik Informatika Universitas Sriwijaya (IPK 3,94, Cumlaude) dengan fokus dan pengalaman di bidang Machine Learning, Deep Learning, dan Generative AI/LLM Engineering, didukung sertifikasi Certified TensorFlow Developer.",
  shortBio:
    "Lulusan Teknik Informatika UNSRI (IPK 3,94, Cumlaude) berfokus pada Machine Learning, Deep Learning, dan Generative AI/LLM Engineering.",
  location: "Kota Jambi, Jambi, Indonesia",
  email: "mhaikaltaufiqulhakim@gmail.com",
  whatsapp: "+62 853-8436-0568",
  discord: "haikaltaufiqulhakim",
  availability: "Aktif Mencari Peran Machine Learning / AI Engineer",
  stats: {
    projectsCompleted: 9,
    yearsExperience: 1,
    technologiesMastered: 15,
    contributions: 9,
  },
  resumeUrl: "/resume.pdf",
  about: {
    biography: [
      "Saya adalah lulusan S1 Teknik Informatika Universitas Sriwijaya dengan IPK 3,94/4,00 (Cumlaude) yang memiliki fokus dan pengalaman mendalam di bidang Machine Learning, Deep Learning, dan Generative AI/Large Language Models (LLM), didukung sertifikasi Certified TensorFlow Developer.",
      "Terampil merancang, melatih, dan men-deploy model Machine Learning serta sistem AI Agentic berbasis LLM ke dalam aplikasi nyata. Berpengalaman membangun solusi end-to-end mulai dari eksperimen model hingga integrasi ke backend dan production, dengan kemampuan problem-solving, adaptabilitas, dan komunikasi yang kuat.",
      "Sangat antusias mengeksplorasi teknologi AI terkini seperti Agentic AI, RAG, dan LLM Fine-tuning untuk menciptakan solusi digital yang inovatif dan berdampak. Bersemangat menerapkan kemampuan analitis dalam membangun sistem AI yang andal, scalable, dan siap digunakan pengguna nyata.",
    ],
    journey: [
      {
        year: "Jun 2025",
        title: "Certified TensorFlow Developer (DCML)",
        description:
          "Meraih sertifikasi Dev Certification for Machine Learning with TensorFlow dari dev.id.",
        type: "Sertifikasi",
      },
      {
        year: "Jan - Des 2025",
        title: "Machine Learning Member - GDGoC Universitas Sriwijaya",
        description:
          "Mengikuti pelatihan machine learning end-to-end mencakup deep learning, LLM, NLP, Computer Vision, dan Agentic AI.",
        type: "Organisasi",
      },
      {
        year: "Nov - Des 2024",
        title: "AI/ML Engineer - Algo Network, Palembang",
        description:
          "Membangun dan mengintegrasikan LLM menggunakan LangChain dan LangSmith untuk otomatisasi pembuatan Product Requirement Document (PRD).",
        type: "Magang",
      },
      {
        year: "Sep - Des 2024",
        title: "Machine Learning Cohort - Bangkit Academy",
        description:
          "Menyelesaikan program Machine Learning intensif standar industri yang dipimpin Google, GoTo, & Traveloka melalui Coursera & Dicoding.",
        type: "Bootcamp",
      },
      {
        year: "Mei - Jun 2024",
        title: "Frontend Developer - Telkom Indonesia, Jambi",
        description:
          "Mengembangkan tampilan front-end website Dashboard Order WiFi dan Televisi menggunakan React JS dan Tailwind CSS.",
        type: "Magang",
      },
      {
        year: "Mar - Mei 2024",
        title: "Microsoft Excel Basic to Advanced - MySkill",
        description:
          "Menguasai formula/function, data formatting, data validation, VLOOKUP, INDEX MATCH, dan Pivot Table untuk analisis data.",
        type: "Kursus",
      },
      {
        year: "Nov 2023 - Feb 2024",
        title: "Data Analyst with SQL and Python - DQLab",
        description:
          "Mempelajari fundamental SQL menggunakan Google BigQuery dan Python menggunakan Google Colab, serta data visualization dengan Looker Studio.",
        type: "Kursus",
      },
      {
        year: "Aug 2022 - Feb 2026",
        title: "Informatics Engineering Student",
        description:
          "Menempuh pendidikan S1 Teknik Informatika di Universitas Sriwijaya dengan IPK 3,94/4,00 (Cumlaude).",
        type: "Pendidikan",
      },
    ],
    careerGoals: [
      "Mengembangkan karier sebagai Machine Learning / Generative AI Engineer yang mampu membangun sistem AI berdampak nyata bagi bisnis dan pengguna.",
      "Merancang dan men-deploy sistem AI Agentic serta LLM-based application yang efisien, scalable, dan siap production.",
      "Terus memperdalam keahlian dalam LLM Fine-tuning, RAG, Multi-Agent Systems, dan MLOps.",
    ],
    education: [
      {
        degree:
          "S1 Teknik Informatika (Bachelor of Science, Informatics Engineering)",
        institution: "Universitas Sriwijaya",
        year: "Aug 2022 - Feb 2026",
        gpa: "3,94 / 4,00 (Cumlaude)",
        details:
          "Fokus pada Machine Learning, Deep Learning, Computer Vision, dan Large Language Models. Tugas akhir: membandingkan arsitektur ResNet50V2 dan VGG19 untuk klasifikasi pneumonia pada citra chest x-ray.",
      },
    ],
    interests: [
      "Machine Learning & Deep Learning",
      "Generative AI & Large Language Models (LLM)",
      "Agentic AI & Multi-Agent Systems",
      "LLM Fine-tuning (QLoRA/PEFT) & RAG",
      "Cryptocurrency Trading & Technical Analysis",
      "Go Programming, Swimming & Reading",
    ],
  },
};
