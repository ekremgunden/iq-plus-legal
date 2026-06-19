import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/privacy-policy",
    "/terms-of-service",
    "/eula",
    "/data-deletion",
    "/support",
  ];
  return routes.map((route) => ({
    url: `${site.websiteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
