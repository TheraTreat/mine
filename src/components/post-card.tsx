import Link from "next/link";

import type { Insight } from "@content/insights";
import { formatDate } from "@/lib/format";

export function PostCard({ post }: { post: Insight }) {
  return (
    <article className="py-6 first:pt-0 last:pb-0">
      <p className="chart-label flex flex-wrap items-center gap-x-3 gap-y-1">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span aria-hidden>·</span>
        <span>{post.readingMinutes} min read</span>
      </p>
      <h3 className="mt-2 font-display text-xl font-bold leading-snug">
        <Link href={`/insights/${post.slug}`} className="transition-colors hover:text-scrub-ink">
          {post.title}
        </Link>
      </h3>
      <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-note">{post.summary}</p>
      <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Filed under">
        {post.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-[4px] border border-line bg-panel px-2 py-0.5 font-mono text-[10px] tracking-[0.12em] text-note uppercase"
          >
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}
