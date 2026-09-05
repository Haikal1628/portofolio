export type ProjectCategory =
  | "Frontend"
  | "Backend"
  | "Fullstack"
  | "Mobile"
  | "AI"
  | "UI/UX"
  | "Data Analyst"
  | "Data Science"
  | "Open Source";

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  fullOverview: string;
  problem: string;
  solution: string;
  architecture: string;
  techStack: string[];
  category: ProjectCategory;
  status: "Completed" | "In Progress" | "Featured";
  date: string;
  featured: boolean;
  image: string;
  gallery: string[];
  liveUrl?: string;
  githubUrl?: string;
  metrics?: { label: string; value: string }[];
}

export const projectsData: Project[] = [
  {
    slug: "fina-app",
    title: "Fina - AI-Powered Personal Finance App",
    shortDescription:
      "Aplikasi manajemen keuangan pribadi berbasis Next.js dengan asisten AI (Gemini) untuk pencatatan transaksi, pelacakan saldo, dan chatbot finansial.",
    fullOverview:
      "Fina adalah aplikasi web keuangan pribadi full-stack yang dibangun dengan Next.js dan TypeScript, dilengkapi dashboard untuk mencatat pemasukan/pengeluaran, filter dan pencarian transaksi, ringkasan saldo real-time, serta chatbot AI berbasis Gemini yang bisa membantu pengguna menganalisis kondisi keuangan dan menjawab pertanyaan seputar transaksi mereka melalui antarmuka percakapan alami.",
    problem:
      "Pengguna membutuhkan cara yang cepat dan intuitif untuk mencatat serta memahami pola pengeluaran mereka, tanpa harus manual menganalisis data transaksi satu per satu.",
    solution:
      "Membangun aplikasi dashboard finansial dengan form transaksi tervalidasi (Zod + React Hook Form), komponen UI modern (shadcn/ui), serta mengintegrasikan Gemini API sebagai AI agent yang bisa memanggil tools/function calling untuk mengambil dan menganalisis data transaksi pengguna secara langsung dalam percakapan.",
    architecture:
      "Next.js App Router -> Server Actions & React Query -> Supabase (Database) -> Gemini API (AI Wizard/Function Calling) -> shadcn/ui + Tailwind CSS.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "React Hook Form",
      "Zod",
      "TanStack Query",
      "Supabase",
      "Gemini API",
    ],
    category: "Fullstack",
    status: "Featured",
    date: "2026",
    featured: true,
    image:
      "https://ik.imagekit.io/u1eqhy617h/portofolio/PROJECT/fina/Screenshot%202026-09-05%20112328.png",
    gallery: [
      "https://ik.imagekit.io/u1eqhy617h/portofolio/PROJECT/fina/Screenshot%202026-09-05%20112338.png",
      "https://ik.imagekit.io/u1eqhy617h/portofolio/PROJECT/fina/Screenshot%202026-09-05%20112310.png",
    ],
    githubUrl: "https://github.com/Haikal1628/fina-app",
    metrics: [
      { label: "AI Tools Terintegrasi", value: "Function Calling" },
      { label: "Framework", value: "Next.js 16 + Turbopack" },
    ],
  },
  {
    slug: "mentor-bahasa-inggris-virtual",
    title: "Mentor Bahasa Inggris Virtual",
    shortDescription:
      "Bot Telegram berbasis AI Agent (Gemini) yang berperan sebagai mentor Bahasa Inggris virtual, mampu mengoreksi grammar, membuat soal latihan, dan menilai kemampuan speaking/listening pengguna.",
    fullOverview:
      "Sebuah AI Agent Python yang diimplementasikan sebagai bot Telegram, dirancang untuk membantu pengguna Indonesia belajar Bahasa Inggris secara interaktif. Sistem menggunakan arsitektur Lead Agent (orchestrator) yang memanggil berbagai tools/sub-agent seperti pengklasifikasi jenis skill, generator latihan reading/listening/writing/speaking, evaluator grammar, dan generator laporan pembelajaran (PDF) berbasis riwayat percakapan pengguna, lengkap dengan fitur text-to-speech untuk latihan listening.",
    problem:
      "Belajar Bahasa Inggris secara mandiri sering kali kurang interaktif dan tidak memberikan feedback instan, terutama untuk latihan speaking dan listening yang butuh evaluasi langsung.",
    solution:
      "Membangun AI Agent dengan Gemini API yang mendukung function calling untuk otomatis mengarahkan permintaan pengguna ke tools yang tepat (klasifikasi skill, generate soal, evaluasi jawaban), menyimpan riwayat percakapan di Supabase, serta menghasilkan audio latihan listening dan laporan pembelajaran PDF secara otomatis menggunakan contextvars untuk isolasi data per-request pada request yang concurrent.",
    architecture:
      "Telegram Bot API (python-telegram-bot) -> Lead Agent (Orchestrator) -> Gemini API (Function Calling & TTS) -> Supabase (Chat History & User Data) -> Artifact System (Audio/PDF Generation).",
    techStack: [
      "Python",
      "Gemini API",
      "python-telegram-bot",
      "Supabase",
      "Pydantic",
      "uv",
      "Loguru",
      "TensorFlow (DCML)",
    ],
    category: "AI",
    status: "Featured",
    date: "2026",
    featured: true,
    image:
      "https://ik.imagekit.io/u1eqhy617h/portofolio/PROJECT/tele%20agent/WhatsApp%20Image%202026-09-05%20at%2012.07.11%20PM.jpeg",
    gallery: [
      "https://ik.imagekit.io/u1eqhy617h/portofolio/PROJECT/tele%20agent/WhatsApp%20Image%202026-09-05%20at%2012.07.11%20PM%20(1).jpeg",
    ],
    githubUrl: "https://github.com/Haikal1628/Mentor-Bahasa-Inggris-Virtual",
    metrics: [
      {
        label: "Skill yang Dilatih",
        value: "4 (Reading/Writing/Listening/Speaking)",
      },
      { label: "AI Agent Architecture", value: "Multi-Tool Orchestrator" },
    ],
  },
  {
    slug: "learncheck-asah-2025",
    title: "LearnCheck! - AI Formative Assessment for Dicoding",
    shortDescription:
      "Fitur formative assessment berbasis Gemini AI yang menghasilkan soal otomatis dari materi submodul Dicoding, di-embed via iFrame tanpa mengubah codebase Dicoding.",
    fullOverview:
      "LearnCheck! adalah fitur formative assessment untuk platform Dicoding yang menghasilkan 3 soal (multiple choice/multiple answer) secara otomatis menggunakan Gemini AI berdasarkan materi submodul yang sedang dipelajari siswa. Berbeda dari kuis akhir modul (summative assessment) yang hanya menilai hasil akhir, LearnCheck! memberikan feedback instan berupa penjelasan/hint di setiap jawaban, sehingga siswa bisa langsung tahu sejauh mana pemahaman mereka tanpa harus menunggu sampai akhir modul.",
    problem:
      "Dicoding hanya memiliki kuis di akhir modul yang bersifat summative assessment, sehingga siswa sering melanjutkan ke materi yang lebih kompleks dengan pemahaman yang belum matang karena tidak ada feedback langsung selama proses belajar.",
    solution:
      "Membangun sistem backend yang mengambil materi submodul dari Dicoding Mock API, memprosesnya melalui Gemini LLM untuk menghasilkan soal beserta hint dan feedback, dengan caching Redis untuk menghindari rate limit API, serta backend secara adaptif menghasilkan 2 soal tambahan dengan tingkat kesulitan yang disesuaikan performa siswa. Frontend dibangun terpisah dan di-embed ke Dicoding Classroom melalui iFrame tanpa perlu mengubah codebase Dicoding sama sekali.",
    architecture:
      "React + Vite Frontend (embedded via iFrame) -> REST API (Express.js) -> Gemini LLM Pipeline (prompt engineering + schema validation) -> Redis Cache -> Dicoding Mock API (materi submodul).",
    techStack: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Gemini AI",
      "Redis",
      "Docker",
      "LangChain",
    ],
    category: "Fullstack",
    status: "Completed",
    date: "2025",
    featured: true,
    image:
      "https://ik.imagekit.io/u1eqhy617h/portofolio/PROJECT/assesment/Screenshot%202025-12-13%20211057.png",
    gallery: [
      "https://ik.imagekit.io/u1eqhy617h/portofolio/PROJECT/assesment/Screenshot%202025-12-13%20210110.png",
      "https://ik.imagekit.io/u1eqhy617h/portofolio/PROJECT/assesment/Screenshot%202025-12-13%20210303.png",
    ],
    githubUrl: "https://github.com/Haikal1628/LearnCheck-Asah-2025",
    metrics: [
      { label: "Soal Otomatis per Sesi", value: "3 + 2 Adaptif" },
      { label: "Optimasi API Call", value: "Redis Caching" },
    ],
  },
  {
    slug: "prdify-llm",
    title: "PRDify - AI-Powered PRD Generator with LLM",
    shortDescription:
      "Tool berbasis LLM yang mengotomatisasi pembuatan Product Requirement Document (PRD), dikembangkan sebagai capstone project Bangkit Academy bersama tim lintas learning path.",
    fullOverview:
      "PRDify adalah tool inovatif yang membantu product manager dan tim development membuat Product Requirement Document (PRD) secara otomatis dengan bantuan Large Language Model (LLM), cukup dengan input minimal dari pengguna. Dikembangkan sebagai capstone project Bangkit Academy 2024 bersama 4 anggota tim dari learning path Machine Learning dan Cloud Computing. Berperan sebagai Machine Learning Engineer, saya membangun REST API berbasis Flask yang menjadi otak dari sistem, mengintegrasikan LangChain dan Groq API untuk memproses input pengguna dan menghasilkan draft PRD yang jelas, konsisten, dan terstruktur.",
    problem:
      "Proses penulisan PRD secara manual memakan waktu lama dan sering kali tidak konsisten strukturnya antar dokumen, menghambat kolaborasi antara product manager dan tim development.",
    solution:
      "Membangun REST API (endpoint /generate) menggunakan Flask yang menerima input terstruktur (overview, timeline, stakeholder, dll) dan mengembalikan dokumen PRD lengkap dalam format JSON, dengan LangChain + Groq API sebagai LLM engine, LangSmith untuk tracing kualitas output, custom prompt engineering untuk konsistensi format, dan Docker untuk kemudahan deployment serta integrasi dengan backend/frontend tim.",
    architecture:
      "Frontend (React) -> Backend (Express.js) -> ML Service (Flask REST API) -> LangChain + Groq API (LLM Engine) -> LangSmith (Tracing & Evaluation) -> Docker (Containerization).",
    techStack: [
      "Python",
      "Flask",
      "LangChain",
      "LangSmith",
      "Groq API",
      "OpenAI API",
      "Docker",
      "Prompt Engineering",
    ],
    category: "AI",
    status: "Completed",
    date: "2024",
    featured: true,
    image:
      "https://ik.imagekit.io/u1eqhy617h/portofolio/PROJECT/prdfy/Screenshot%202026-09-05%20150641.png",
    gallery: [
      "https://ik.imagekit.io/u1eqhy617h/portofolio/PROJECT/prdfy/Screenshot%202026-09-05%20150615.png",
    ],
    githubUrl: "https://github.com/HakimIqbal/LLM-PRD-Maker",
    metrics: [
      { label: "Anggota Tim", value: "4 Orang (ML & CC)" },
      { label: "LLM Provider", value: "Groq & OpenAI" },
    ],
  },
  {
    slug: "pneumonia-klasifikasi",
    title: "Klasifikasi Pneumonia dengan ResNet50V2 dan VGG19",
    shortDescription:
      "Proyek tugas akhir yang membandingkan performa arsitektur deep learning ResNet50V2 dan VGG19 untuk klasifikasi pneumonia dari citra chest X-ray.",
    fullOverview:
      "Proyek computer vision berbasis deep learning untuk membantu diagnosis pneumonia secara otomatis melalui citra chest X-ray. Penelitian ini membandingkan dua arsitektur Convolutional Neural Network (CNN) populer, yaitu ResNet50V2 dan VGG19, dengan pendekatan transfer learning untuk menentukan model mana yang memberikan performa klasifikasi terbaik dalam membedakan citra paru-paru normal dan yang terindikasi pneumonia. Proyek ini menjadi tugas akhir (skripsi) untuk kelulusan S1 Teknik Informatika.",
    problem:
      "Diagnosis pneumonia dari citra X-ray secara manual membutuhkan keahlian radiologis dan memakan waktu, sementara keterbatasan tenaga ahli di beberapa fasilitas kesehatan dapat memperlambat proses diagnosis dini.",
    solution:
      "Membangun dan melatih dua model CNN (ResNet50V2 dan VGG19) menggunakan transfer learning pada dataset citra chest X-ray, kemudian membandingkan performa keduanya menggunakan metrik evaluasi seperti akurasi, precision, recall, dan confusion matrix untuk menentukan arsitektur yang paling efektif dan efisien untuk kasus klasifikasi pneumonia ini.",
    architecture:
      "Preprocessing Citra X-ray -> Transfer Learning (ResNet50V2 & VGG19) -> Fine-tuning Model -> Evaluasi & Perbandingan Performa (Accuracy, Precision, Recall, Confusion Matrix).",
    techStack: [
      "Python",
      "TensorFlow",
      "Keras",
      "ResNet50V2",
      "VGG19",
      "Computer Vision",
      "Transfer Learning",
      "Deep Learning",
    ],
    category: "AI",
    status: "Completed",
    date: "2026",
    featured: true,
    image:
      "https://ik.imagekit.io/u1eqhy617h/portofolio/PROJECT/pnuemnia/Screenshot%202025-12-28%20144054.png",
    gallery: [
      "https://ik.imagekit.io/u1eqhy617h/portofolio/PROJECT/pnuemnia/Screenshot%202025-12-28%20143953.png",
    ],
    githubUrl: "https://github.com/Haikal1628/Pneumonia-Klasifikasi",
    metrics: [
      { label: "Arsitektur Dibandingkan", value: "ResNet50V2 vs VGG19" },
      { label: "Jenis Proyek", value: "Tugas Akhir (Skripsi)" },
    ],
  },
  {
    slug: "retail-transaction-dashboard",
    title: "Retail Transaction Dashboard",
    shortDescription:
      "Dashboard interaktif berbasis Looker Studio untuk menganalisis performa penjualan, perilaku pelanggan, dan pola diskon retail lintas metode pembayaran dan kategori produk.",
    fullOverview:
      "Dashboard transaksi retail interaktif yang dibangun di Looker Studio (Google Data Studio) untuk menganalisis performa penjualan, perilaku pelanggan, dan pola diskon di berbagai metode pembayaran dan kategori produk, mencakup data transaksi dari Januari 2021 hingga November 2022. Dashboard ini memvisualisasikan $8.69M total penjualan dari 4.000+ pelanggan dan 13.600+ unit terjual, dengan filter interaktif berdasarkan metode pembayaran, kategori, dan rentang tanggal.",
    problem:
      "Stakeholder membutuhkan cara cepat untuk memahami tren penjualan, efisiensi metode pembayaran, dan profitabilitas kategori produk tanpa harus melakukan query data mentah secara manual.",
    solution:
      "Membangun dashboard self-service dengan filter interaktif, serta mengungkap insight kunci seperti COD (Cash on Delivery) yang menyumbang 67,6% dari total transaksi namun hanya 28% dari total nilai penjualan (indikasi pola transaksi frekuensi tinggi namun bernilai rendah), serta kategori Mobiles & Tablets yang menyumbang 39,8% dari total nilai meski hanya mencakup 20,2% dari total transaksi (menjadikannya kategori bernilai tertinggi). Dilengkapi juga treemap distribusi diskon serta tabel ranking produk dan pelanggan yang bisa diurutkan berdasarkan revenue, kuantitas, dan profit.",
    architecture:
      "Data Transaksi Retail -> Data Cleaning & Modeling -> Looker Studio Dashboard (Filter Interaktif, Treemap, Ranking Table).",
    techStack: [
      "Looker Studio",
      "Dashboard Design",
      "Data Visualization",
      "Exploratory Data Analysis (EDA)",
      "Statistical Analysis",
    ],
    category: "Data Analyst",
    status: "Completed",
    date: "2024",
    featured: false,
    image:
      "https://ik.imagekit.io/u1eqhy617h/portofolio/PROJECT/New%20FolderRetail%20Transaction%20Dashboard_/Screenshot%202026-09-05%20162905.png",
    gallery: [
      "https://ik.imagekit.io/u1eqhy617h/portofolio/PROJECT/New%20FolderRetail%20Transaction%20Dashboard_/Screenshot%202026-09-05%20162917.png",
    ],
    liveUrl:
      "https://datastudio.google.com/reporting/9c880dce-9c5d-4f90-9839-97ee2c89272b",
    metrics: [
      { label: "Total Penjualan Dianalisis", value: "$8.69M" },
      { label: "Pelanggan & Unit Terjual", value: "4.000+ / 13.600+" },
    ],
  },
  {
    slug: "prediksi-churn-telco",
    title: "Prediksi Churn Pelanggan Telco",
    shortDescription:
      "Model machine learning end-to-end untuk memprediksi churn pelanggan telekomunikasi, membandingkan 3 algoritma klasifikasi dan menghasilkan rekomendasi retensi berbasis data.",
    fullOverview:
      "Proyek machine learning end-to-end untuk memprediksi churn pelanggan perusahaan telekomunikasi menggunakan dataset Telco Customer Churn (~7.000 pelanggan, 21 fitur). Pipeline mencakup keseluruhan alur data science mulai dari EDA, pembersihan data, perbandingan model, hingga menghasilkan insight bisnis untuk mengidentifikasi pelanggan berisiko tinggi dan strategi retensi yang actionable.",
    problem:
      "Perusahaan telekomunikasi kesulitan mengidentifikasi pelanggan yang berpotensi churn secara dini, sehingga strategi retensi sering kali reaktif dan kurang efisien.",
    solution:
      "Melakukan EDA untuk menemukan faktor pendorong churn utama, membersihkan dan memproses data (one-hot encoding, stratified split), melatih dan membandingkan 3 model klasifikasi (Logistic Regression, Random Forest, Gradient Boosting) dengan class_weight balanced untuk menangani data imbalance, serta memprioritaskan metrik recall dan ROC-AUC sesuai kebutuhan bisnis.",
    architecture:
      "Data Pelanggan Telco -> EDA & Data Cleaning -> Feature Engineering -> Model Training (Logistic Regression, Random Forest, Gradient Boosting) -> Evaluasi (Confusion Matrix, ROC Curve) -> Rekomendasi Bisnis.",
    techStack: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Numpy",
      "Seaborn",
      "Machine Learning",
      "Data Cleaning",
      "Exploratory Data Analysis (EDA)",
    ],
    category: "Data Science",
    status: "Completed",
    date: "2025",
    featured: false,
    image:
      "https://ik.imagekit.io/u1eqhy617h/portofolio/PROJECT/Prediksi%20Churn%20Pelanggan%20Telco/Screenshot%202026-09-05%20163252.png",
    gallery: [
      "https://ik.imagekit.io/u1eqhy617h/portofolio/PROJECT/Prediksi%20Churn%20Pelanggan%20Telco/Screenshot%202026-09-05%20163240.png",
    ],
    githubUrl: "https://github.com/Haikal1628/data-analytics",
    metrics: [
      { label: "ROC-AUC Terbaik", value: "0.842 (Gradient Boosting)" },
      { label: "Data Pelanggan Dianalisis", value: "~7.000" },
    ],
  },
  {
    slug: "forecasting-pendapatan",
    title: "Forecasting Pendapatan",
    shortDescription:
      "Pipeline forecasting pendapatan bulanan untuk kebutuhan FP&A, membandingkan model Linear Regression dan Random Forest untuk memproyeksikan pendapatan masa depan.",
    fullOverview:
      "Pipeline forecasting pendapatan end-to-end untuk kebutuhan Financial Planning & Analysis (FP&A), menggunakan 4 tahun data transaksi retail (dataset Superstore, 9.800 baris). Transaksi mentah diagregasi menjadi pendapatan bulanan, diperkaya dengan fitur berbasis waktu, dan dimodelkan untuk memproyeksikan pendapatan bulan berikutnya serta menerjemahkannya menjadi rekomendasi anggaran yang actionable.",
    problem:
      "Tim FP&A membutuhkan proyeksi pendapatan yang defensible untuk perencanaan anggaran, namun data historis yang tersedia sering kali tidak diolah secara sistematis untuk forecasting.",
    solution:
      "Mengagregasi 4 tahun transaksi harian menjadi time series pendapatan bulanan, merekayasa fitur berbasis waktu (trend index, lag values, rolling average) dengan pencegahan data leakage, menerapkan chronological train-test split, serta membandingkan performa Linear Regression dan Random Forest terhadap baseline naif.",
    architecture:
      "Data Transaksi Harian -> Agregasi Bulanan -> Feature Engineering (Time-aware) -> Chronological Train-Test Split -> Model Training (Linear Regression vs Random Forest) -> Proyeksi & Rekomendasi Anggaran.",
    techStack: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Numpy",
      "Seaborn",
      "Machine Learning",
      "Data Cleaning",
      "Exploratory Data Analysis (EDA)",
    ],
    category: "Data Science",
    status: "Completed",
    date: "2024",
    featured: false,
    image:
      "https://ik.imagekit.io/u1eqhy617h/portofolio/PROJECT/Forecasting%20Pendapatan/Screenshot%202026-09-05%20163654.png",
    gallery: [
      "https://ik.imagekit.io/u1eqhy617h/portofolio/PROJECT/Forecasting%20Pendapatan/Screenshot%202026-09-05%20163844.png",
    ],
    githubUrl: "https://github.com/Haikal1628/data-analytics-akuntansi",
    metrics: [
      { label: "Data Transaksi Dianalisis", value: "9.800 baris / 4 tahun" },
      { label: "Model Terbaik", value: "Linear Regression" },
    ],
  },
];
