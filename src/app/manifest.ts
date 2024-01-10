import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mizanur Rahman Ashiq",
    short_name: "Ashiq",
    lang: "en-US",
    start_url: "/",
    display: "standalone",
    theme_color: "#512cd4",
    background_color: "#FFFFFF",
    prefer_related_applications: true,
    icons: [
      {
        src: "Ashiq256.png",
        sizes: "256x256",
        purpose: "any",
      },
      {
        src: "Ashiq384.png",
        sizes: "384x384",
        purpose: "any",
      },
      {
        src: "Ashiq512.png",
        sizes: "512x512",
        purpose: "maskable",
      },
    ],
  };
}
