import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ridhi-sidhi-website.vercel.app",
      lastModified: new Date(),
    },
    {
      url: "https://ridhi-sidhi-website.vercel.app/services",
      lastModified: new Date(),
    },
    {
      url: "https://ridhi-sidhi-website.vercel.app/gallery",
      lastModified: new Date(),
    },
    {
      url: "https://ridhi-sidhi-website.vercel.app/contact",
      lastModified: new Date(),
    },
  ];
}