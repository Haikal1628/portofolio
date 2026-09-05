export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  expirationDate?: string;
  credentialId: string;
  credentialUrl: string;
  image: string;
  skills: string[];
}

export const certificatesData: Certificate[] = [
  {
    id: "dcml-tensorflow",
    title: "Dev Certification for Machine Learning with TensorFlow (DCML)",
    issuer: "dev.id",
    expirationDate: "30 Juni 2028",
    credentialId: "R1VG577V2M",
    credentialUrl: "https://dev.id/certificate/verify/R1VG577V2M",
    image:
      "https://ik.imagekit.io/u1eqhy617h/portofolio/sertif/DCML%20sertif_page-0001.jpg",
    skills: [
      "TensorFlow",
      "Machine Learning",
      "Deep Learning",
      "Model Deployment",
    ],
  },
  {
    id: "bangkit-academy-ml",
    title: "Bangkit Academy - Machine Learning Path",
    issuer: "Bangkit led by Google, GoTo, Traveloka",
    credentialId: "BA24/GRAD/XXV-O1/M315B4KY2872",
    credentialUrl:
      "https://drive.google.com/file/d/1lQX-jgd0vzdJ_XJJZbp2_KYwcYxLxBAx/view?usp=sharing",
    image:
      "https://ik.imagekit.io/u1eqhy617h/portofolio/sertif/Hijau%20dan%20Krem%20Simple%20Portfolio%20Digital%20Marketer%20Presentasi.png",
    skills: [
      "Machine Learning",
      "TensorFlow",
      "Data Analysis",
      "Capstone Project",
    ],
  },
  {
    id: "gdgoc-unsri-ml-member",
    title: "Google Developer Group on Campus (GDGoC) - Machine Learning Member",
    issuer: "GDGoC Universitas Sriwijaya",
    credentialId: "1556/GDGoC-UNSRI/9E/X/2025",
    credentialUrl:
      "https://drive.google.com/file/d/1z9ytLFLaJs8tDxZNr-0e9a03TGT0wIGM/view",
    image:
      "https://ik.imagekit.io/u1eqhy617h/portofolio/sertif/sertif%20gdg_page-0001.jpg",
    skills: ["Machine Learning", "LLM", "NLP", "Computer Vision", "Agentic AI"],
  },
  {
    id: "dicoding-deep-learning-mahir",
    title: "Membangun Proyek Deep Learning Tingkat Mahir",
    issuer: "Dicoding Indonesia",
    expirationDate: "20 Juni 2029",
    credentialId: "KEXLQ4ETRPG2",
    credentialUrl: "https://www.dicoding.com/certificates/KEXLQ6E1RPG2",
    image:
      "https://ik.imagekit.io/u1eqhy617h/portofolio/sertif/deep%20tingkat%20lanjut_page-0001.jpg",
    skills: [
      "Deep Learning",
      "TensorFlow",
      "Neural Network",
      "Model Optimization",
    ],
  },
  {
    id: "dicoding-generative-ai-llm",
    title: "Pengembangan Generative AI berbasis LLM",
    issuer: "Dicoding Indonesia",
    expirationDate: "22 Juni 2029",
    credentialId: "6RPN72315X2M",
    credentialUrl: "https://dicoding.com/certificates/6RPN72315X2M",
    image:
      "https://ik.imagekit.io/u1eqhy617h/portofolio/sertif/llm_page-0001.jpg",
    skills: [
      "Generative AI",
      "LLM",
      "RAG",
      "Fine-tuning",
      "Prompt Engineering",
    ],
  },
  {
    id: "wpucourse-ai-powered-apps-fundamental",
    title: "AI Powered Apps Fundamental",
    issuer: "WPU Course",
    credentialId: "SW08P0V2",
    credentialUrl: "https://learn.wpucourse.id/certificate/SW08P0V2",
    image:
      "https://ik.imagekit.io/u1eqhy617h/portofolio/sertif/wpucourse-certificate-SW08P0V2.png",
    skills: [
      "Gemini API",
      "Prompt Engineering",
      "RAG (Retrieval-Augmented Generation)",
      "AI Agent & Tools",
      "Multimodal AI",
      "Python",
    ],
  },
  {
    id: "wpucourse-agentic-ai-gemini",
    title: "Belajar Python Agentic AI dengan Gemini",
    issuer: "WPU Course",
    credentialId: "2W7SV7GV",
    credentialUrl: "https://learn.wpucourse.id/certificate/2W7SV7GV",
    image:
      "https://ik.imagekit.io/u1eqhy617h/portofolio/sertif/wpucourse-certificate-2W7SV7GV.png",
    skills: [
      "Python",
      "Agentic AI",
      "Gemini API",
      "LangChain",
      "Function Calling",
      "Prompt Engineering",
    ],
  },
  {
    id: "coursera-advanced-computer-vision",
    title: "Advanced Computer Vision with TensorFlow",
    issuer: "Coursera",
    credentialId: "2W7SV7GV",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/JGUK0VLQEX4I",
    image:
      "https://ik.imagekit.io/u1eqhy617h/portofolio/sertif/cv%20cursera_page-0001.jpg",
    skills: [
      "Python",
      "Computer Vision",
      "TensorFlow",
      "Deep Learning",
      "Image Classification",
      "Object Detection",
    ],
  },
  {
    id: "coursera-deeplearning-tensorflow",
    title: "DeepLearning.AI TensorFlow Developer",
    issuer: "Coursera",
    credentialId: "2W7SV7GV",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/P4VUZUP2DW6X",
    image:
      "https://ik.imagekit.io/u1eqhy617h/portofolio/sertif/deeplearnign%20coursera_page-0001.jpg",
    skills: [
      "Python",
      "TensorFlow",
      "Deep Learning",
      "Neural Network",
      "Computer Vision",
      "NLP",
    ],
  },
  {
    id: "coursera-ml-ai-beginner",
    title: "Machine Learning dan AI for Beginner",
    issuer: "Coursera",
    credentialId: "2W7SV7GV",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/WJ1DL630E60E",
    image:
      "https://ik.imagekit.io/u1eqhy617h/portofolio/sertif/ML%20coursera_page-0001.jpg",
    skills: [
      "Python",
      "Machine Learning",
      "supervised Learning",
      "unsupervised Learning",
    ],
  },
  {
    id: "dqlab-ml-ai-beginner",
    title: "Machine Learning dan AI for Beginner",
    issuer: "DQLab",
    credentialId: "DQLABBMLAB10NINBDH",
    credentialUrl:
      "https://drive.google.com/file/d/1M2WOLIvTEwiOf5ZIhgrXveVSSe_D8g_w/view?usp=sharing",
    image:
      "https://ik.imagekit.io/u1eqhy617h/portofolio/sertif/Bootcamp%20Machine%20Learning%20dan%20AI%20for%20Beginner_page-0001.jpg",
    skills: ["Machine Learning", "Artificial Intelligence", "Python"],
  },
];
