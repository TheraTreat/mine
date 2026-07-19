import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { formatDate } from "@/lib/format";
import { getInsight, insights } from "@content/insights";
import { site } from "@content/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return insights.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getInsight(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: `/insights/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.summary,
      url: `/insights/${post.slug}`,
      siteName: site.name,
      type: "article",
      publishedTime: post.date,
      authors: [site.name],
      tags: [...post.tags],
    },
  };
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getInsight(slug);
  if (!post) notFound();

  const postJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.summary,
    datePublished: post.date,
    author: { "@type": "Person", name: site.name, url: site.url },
    url: `${site.url}/insights/${post.slug}`,
    keywords: post.tags.join(", "),
  };

  return (
    <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(postJsonLd) }}
      />

      <div className="max-w-3xl pt-14 md:pt-20">
        <Link href="/insights" className="dotted-link text-sm font-medium">
          ← All insights
        </Link>
        <p className="chart-label mt-8 flex flex-wrap items-center gap-x-3 gap-y-1">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden>·</span>
          <span>{post.readingMinutes} min read</span>
        </p>
        <h1 className="mt-3 font-display text-3xl leading-[1.12] font-bold tracking-[-0.02em] md:text-[2.6rem]">
          {post.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-note">{post.summary}</p>
        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Filed under">
          {post.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-[4px] border border-line bg-panel px-2 py-0.5 font-mono text-[10px] tracking-[0.12em] text-note uppercase"
            >
              {tag}
            </li>
          ))}
        </ul>
        <div className="mt-10 h-px w-full bg-line" aria-hidden />
      </div>

      <article className="insight-prose mt-10 pb-4">
        <post.Content />
      </article>

      <footer className="mt-14 max-w-3xl border-t border-line pt-8 pb-24">
        <p className="chart-label">Signed</p>
        <p className="mt-1.5 font-display text-lg font-bold">— Yogesh</p>
        <p className="mt-4 text-sm text-note">
          Replies welcome:{" "}
          <a href={`mailto:${site.email}`} className="dotted-link font-medium">
            email
          </a>{" "}
          ·{" "}
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="dotted-link font-medium"
          >
            LinkedIn ↗
          </a>
        </p>
      </footer>
    </div>
  );
}
