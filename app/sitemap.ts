import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://yourwebsite.com",
      lastModified: new Date(),
    },
    {
      url: "https://yourwebsite.com/services",
      lastModified: new Date(),
    },
    {
      url: "https://yourwebsite.com/gallery",
      lastModified: new Date(),
    },
    {
      url: "https://yourwebsite.com/contact",
      lastModified: new Date(),
    },
  ];
}