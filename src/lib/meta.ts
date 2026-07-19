import type { Metadata } from "next";

import { site } from "@content/site";

/**
 * Per-page metadata helper. `path` must start with "/" — canonical and OG
 * URLs resolve against `metadataBase` (site.url) set in the root layout.
 */
export function pageMetadata(opts: {
  title: string;
  description: string;
  path: string;
  ogType?: "website" | "article" | "book";
}): Metadata {
  const { title, description, path, ogType = "website" } = opts;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: site.name,
      type: ogType,
    },
  };
}

export function absoluteUrl(path = "/"): string {
  return new URL(path, site.url).toString();
}
