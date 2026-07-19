import Link from "next/link";

import { BookCover } from "@/components/book-cover";
import { Field, PageHeader } from "@/components/chart";
import { Reveal } from "@/components/reveal";
import { pageMetadata } from "@/lib/meta";
import { fictionShelf, nonfictionShelf, type Book } from "@content/books";

export const metadata = pageMetadata({
  title: "Writing",
  description:
    "Two shelves, two bylines: Therapy for All (nonfiction, as Dr. Yogesh Shingane) and the Planet Arka fantasy series (as YOG), beginning with The Survivvl: Awakening of the Dark.",
  path: "/writing",
});

function ShelfBook({ book }: { book: Book }) {
  const ember = book.accent === "ember";
  const hoverText = ember ? "hover:text-ember-ink" : "hover:text-scrub-ink";
  const linkCls = `underline decoration-dotted underline-offset-4 decoration-note/50 transition-colors ${hoverText} ${
    ember ? "hover:decoration-ember-ink" : "hover:decoration-scrub-ink"
  }`;

  return (
    <div className="grid gap-7 sm:grid-cols-[170px_1fr] md:grid-cols-[200px_1fr] md:gap-10">
      <Link href={`/writing/${book.slug}`} className="block max-w-[200px]">
        <BookCover book={book} sizes="(min-width: 640px) 200px, 45vw" />
      </Link>
      <div>
        <p className="chart-label">
          {book.year}
          {book.publisher ? ` · ${book.publisher}` : ""}
          {book.seriesNote ? ` · ${book.seriesNote}` : ""}
        </p>
        <h3 className="mt-2 font-display text-2xl font-bold tracking-tight md:text-3xl">
          <Link href={`/writing/${book.slug}`} className={`transition-colors ${hoverText}`}>
            {book.title}
          </Link>
        </h3>
        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-note md:text-base">
          {book.blurbShort}
        </p>
        <ul className="mt-5 flex flex-wrap gap-2.5" aria-label={`Where to buy ${book.title}`}>
          {book.buyLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 rounded-[6px] border border-line bg-paper px-3.5 py-1.5 text-sm font-medium transition-colors ${
                  ember
                    ? "hover:border-ember-ink hover:text-ember-ink"
                    : "hover:border-scrub-ink hover:text-scrub-ink"
                }`}
              >
                {link.label}
                {link.region ? <span className="text-xs text-note">· {link.region}</span> : null}
                <span aria-hidden className="text-note">
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-5">
          <Link href={`/writing/${book.slug}`} className={`text-sm font-medium ${linkCls}`}>
            Full blurb &amp; details →
          </Link>
        </p>
      </div>
    </div>
  );
}

export default function WritingPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
      <PageHeader
        label="Library — Two bylines"
        letter="Bk"
        accent="plain"
        title="Writing"
        lede="Nonfiction as Dr. Yogesh Shingane. Fantasy as YOG. Two shelves, kept deliberately apart — the same discipline on both."
      />

      <div className="space-y-12 pb-24">
        <Reveal>
          <Field letter="01" accent="scrub" label="Shelf — Nonfiction · as Dr. Yogesh Shingane">
            <div className="space-y-10">
              {nonfictionShelf.map((book) => (
                <ShelfBook key={book.slug} book={book} />
              ))}
            </div>
          </Field>
        </Reveal>

        <p className="chart-label text-center" aria-hidden>
          — two bylines · kept deliberately separate —
        </p>

        <Reveal>
          <Field letter="02" accent="ember" label="Shelf — Fiction · as YOG">
            <div className="space-y-10">
              {fictionShelf.map((book) => (
                <ShelfBook key={book.slug} book={book} />
              ))}
            </div>
          </Field>
        </Reveal>
      </div>
    </div>
  );
}
