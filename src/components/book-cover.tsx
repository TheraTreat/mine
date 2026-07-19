import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";

import type { Book } from "@content/books";

const COVER_EXTENSIONS = ["jpg", "png", "webp"];

/**
 * Drop a real cover at /public/covers/<slug>.jpg (or .png/.webp) — 2:3 ratio,
 * ≥900px wide — and it replaces the styled placeholder automatically.
 * The check runs at build time, so re-run `npm run build` (or restart dev)
 * after adding a file.
 */
function findCover(slug: string): string | null {
  for (const ext of COVER_EXTENSIONS) {
    const rel = `/covers/${slug}.${ext}`;
    if (existsSync(path.join(process.cwd(), "public", rel))) return rel;
  }
  return null;
}

export function BookCover({
  book,
  sizes = "(min-width: 768px) 260px, 45vw",
  priority = false,
  className = "",
}: {
  book: Book;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  const cover = findCover(book.slug);
  const alt = `Front cover of ${book.title} by ${book.byline}`;

  if (cover) {
    return (
      <div className={`relative aspect-2/3 overflow-hidden rounded-[6px] border border-line ${className}`}>
        <Image src={cover} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      </div>
    );
  }

  const board =
    book.accent === "ember"
      ? "linear-gradient(155deg, #180d20 0%, #401a10 55%, #7c2d12 100%)"
      : "linear-gradient(155deg, #0a1b2e 0%, #10303e 55%, #0b5f53 100%)";

  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative aspect-2/3 overflow-hidden rounded-[6px] border border-line ${className}`}
      style={{ background: board }}
    >
      <span aria-hidden className="absolute inset-y-0 left-0 w-[7px] bg-white/10" />
      <span aria-hidden className="absolute inset-2 rounded-[4px] border border-white/15" />
      <div className="relative flex h-full flex-col justify-between p-4 md:p-5">
        <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/70 md:text-[10px]">
          {book.seriesNote ?? book.publisher ?? "—"}
        </p>
        <p className="pl-1.5 font-display text-lg font-bold leading-tight text-white md:text-[1.35rem]">
          {book.title}
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/80 md:text-[11px]">
          {book.byline}
        </p>
      </div>
    </div>
  );
}
