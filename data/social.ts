export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  handle: string;
  color?: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/Haikal1628",
    icon: "Github",
    handle: "@Haikal1628",
    color: "#2DBA4E",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/muhammad-haikal-taufiqulhakim/",
    icon: "Linkedin",
    handle: "in/muhammad-haikal-taufiqulhakim",
    color: "#0A66C2",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/m.haikalhakimm",
    icon: "Instagram",
    handle: "@m.haikalhakimm",
    color: "#E4405F",
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/6285384360568",
    icon: "MessageCircle",
    handle: "+62 853-8436-0568",
    color: "#25D366",
  },
  {
    name: "Email",
    url: "mailto:mhaikaltaufiqulhakim@gmail.com",
    icon: "Mail",
    handle: "mhaikaltaufiqulhakim@gmail.com",
    color: "#EA4335",
  },
];
