import { MetadataRoute } from "next";
import { profileData } from "@/data/profile";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${profileData.name} Portfolio`,
    short_name: profileData.name,
    description: profileData.shortBio,
    start_url: "/",
    display: "standalone",
    background_color: "#09090B",
    theme_color: "#3B82F6",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
