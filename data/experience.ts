export interface Experience {
  company: string;
  position: string;
  location: string;
  period: string;
  type:
    | "Full-time"
    | "Contract"
    | "Lead / Consulting"
    | "Internship"
    | "Organisasi Mahasiswa";
  description: string;
  achievements: string[];
  technologies: string[];
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    company: "Google Developer Group on Campus (GDGoC), Universitas Sriwijaya",
    position: "Member of Machine Learning",
    location: "Palembang, Sumatra Selatan",
    period: "Jan - Des 2025",
    type: "Organisasi Mahasiswa",
    description:
      "Mengikuti rangkaian pelatihan machine learning end-to-end dan berkontribusi aktif dalam kegiatan belajar bersama komunitas developer Google.",
    achievements: [
      "Mengikuti rangkaian pelatihan machine learning end-to-end, mencakup data analysis, deep learning, neural network, hingga topik lanjutan seperti LLM, NLP, Computer Vision, dan Agentic AI.",
      "Mengerjakan berbagai mini project dan final project yang mengaplikasikan konsep ML secara langsung ke studi kasus nyata.",
      "Berkontribusi aktif dalam kegiatan belajar bersama komunitas untuk memperdalam pemahaman di bidang machine learning dan pengembangan model AI.",
    ],
    technologies: [
      "Machine Learning",
      "Deep Learning",
      "LLM",
      "NLP",
      "Computer Vision",
      "Agentic AI",
    ],
  },
  {
    company: "Algo Network",
    position: "AI/ML Engineer",
    location: "Palembang, Sumatra Selatan",
    period: "Nov - Des 2024",
    type: "Contract",
    description:
      "Membangun dan mengintegrasikan model bahasa (LLM) untuk mengotomatisasi pembuatan dokumen Product Requirement Document (PRD) dari input pengguna.",
    achievements: [
      "Membangun dan mengintegrasikan model bahasa (LLM) menggunakan LangChain dan LangSmith untuk menghasilkan draft PRD secara otomatis dari input pengguna, dengan hasil yang jelas, konsisten, dan terstruktur.",
      "Berkontribusi dalam pengembangan backend berbasis Flask untuk menghubungkan model ML dengan sistem secara end-to-end.",
      "Melakukan eksperimen dan optimasi menggunakan API LLM (OpenAI dan Groq) untuk meningkatkan kualitas dan efisiensi proses pembuatan dokumen.",
    ],
    technologies: [
      "LangChain",
      "LangSmith",
      "Flask",
      "OpenAI API",
      "Groq API",
      "Python",
      "Docker",
    ],
  },
  {
    company: "Bangkit Academy led by Google, GoTo, & Traveloka",
    position: "Peserta Machine Learning Path",
    location: "Palembang / Remote",
    period: "Sep - Des 2024",
    type: "Contract",
    description:
      "Menyelesaikan program Machine Learning intensif standar industri melalui Coursera dan Dicoding, mencakup Data Analysis, ML Specialization, hingga TensorFlow Advanced Techniques.",
    achievements: [
      "Menyelesaikan rangkaian kursus ML end-to-end: Data Analysis with Python, Machine Learning Specialization, TensorFlow Advanced Techniques, dan Deeplearning.ai TensorFlow Developer Professional Certificate (NLP & Neural Network).",
      "Mempelajari fondasi matematika untuk ML, teknik deployment model, serta pengenalan Generative AI dan Generative Adversarial Networks (GAN).",
      "Mengerjakan Capstone/Final Project mengembangkan aplikasi berbasis ML dari awal hingga akhir bersama tim lintas fungsi (PRDify).",
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "Machine Learning",
      "NLP",
      "Generative AI",
    ],
  },
  {
    company: "Telkom Indonesia",
    position: "Frontend Developer",
    location: "Jambi, Indonesia",
    period: "Mei - Jun 2024",
    type: "Internship",
    description:
      "Mengembangkan tampilan front-end website Dashboard Order WiFi dan Televisi sebagai bagian dari proyek tracking kinerja peserta magang.",
    achievements: [
      "Bertanggung jawab mengembangkan tampilan front-end website Dashboard Order WiFi dan Televisi menggunakan React JS dan Tailwind CSS.",
      "Memastikan data order dan progres kinerja ditampilkan secara jelas dan terstruktur bagi pengguna dashboard.",
    ],
    technologies: [
      "React JS",
      "Tailwind CSS",
      "JavaScript",
      "Frontend Development",
    ],
  },
];
