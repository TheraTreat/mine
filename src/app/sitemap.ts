import type { MetadataRoute } from "next";

import { books } from "@content/books";
import { insights } from "@content/insights";
import { site } from "@content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const buildDate = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/theratreat",
    "/writing",
    "/insights",
    "/speaking",
    "/contact",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: buildDate,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const bookPages: MetadataRoute.Sitemap = books.map((book) => ({
    url: `${site.url}/writing/${book.slug}`,
    lastModified: buildDate,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  const insightPages: MetadataRoute.Sitemap = insights.map((post) => ({
    url: `${site.url}/insights/${post.slug}`,
    lastModified: new Date(`${post.date}T00:00:00Z`),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticPages, ...bookPages, ...insightPages];
}
