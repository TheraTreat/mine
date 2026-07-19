import { formatDate } from "@/lib/format";
import { OG_SIZE, ogCard } from "@/lib/og";
import { getInsight, insights } from "@content/insights";
import { site } from "@content/site";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "Insight article card";

export function generateStaticParams() {
  return insights.map((post) => ({ slug: post.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getInsight(slug);
  const domain = new URL(site.url).host;
  return ogCard({
    kicker: post ? `Insights · ${formatDate(post.date)}` : "Insights",
    title: post?.title ?? "Insights",
    footer: `${domain} — ${site.name}`,
  });
}
