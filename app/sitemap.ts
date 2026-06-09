import type { MetadataRoute } from "next";
import { TOOLS } from "@/lib/tools";

const BASE = "https://filetools.example.com";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/privacy", "/terms", "/contact"].map((path) => ({
    url: `${BASE}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.5,
  }));

  const toolPages = TOOLS.map((tool) => ({
    url: `${BASE}/tools/${tool.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...toolPages];
}
