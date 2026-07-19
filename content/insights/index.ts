import type { ComponentType } from "react";

import OperatingSystemPost from "./operating-system-not-another-app.mdx";

/**
 * Insights registry — the MDX blog's single source of truth.
 *
 * To add a post:
 *  1. Create content/insights/<slug>.mdx
 *  2. Import it above and add an entry below.
 * The listing page, post page, OG image and sitemap all follow automatically.
 */
export const INSIGHT_TAGS = [
  "Clinical AI",
  "Rehab in India",
  "Building TheraTreat",
  "Writing",
] as const;

export type InsightTag = (typeof INSIGHT_TAGS)[number];

export type Insight = {
  slug: string;
  title: string;
  summary: string;
  /** ISO date, e.g. "2026-07-10". */
  date: string;
  tags: InsightTag[];
  readingMinutes: number;
  Content: ComponentType;
};

const all: Insight[] = [
  {
    slug: "operating-system-not-another-app",
    title: "Why India's therapists need an operating system, not another app",
    summary:
      "Every app adds work; infrastructure removes it. What I learned about documentation, WhatsApp referrals and outcome data from the clinic floor — and why TheraTreat starts with the note, not the dashboard.",
    date: "2026-07-10",
    tags: ["Clinical AI", "Building TheraTreat"],
    readingMinutes: 5,
    Content: OperatingSystemPost,
  },
];

/** Newest first. */
export const insights: Insight[] = [...all].sort((a, b) => b.date.localeCompare(a.date));

export function getInsight(slug: string): Insight | undefined {
  return insights.find((p) => p.slug === slug);
}
