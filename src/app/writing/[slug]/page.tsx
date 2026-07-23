import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BookCover } from "@/components/book-cover";
import { ButtonLink } from "@/components/buttons";
import { FieldLabel } from "@/components/chart";
import { Reveal } from "@/components/reveal";
import { pageMetadata } from "@/lib/meta";
import { books, getBook } from "@content/books";
import { site } from "@content/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const book = getBook(slug);
  if (!book) return {};
  return pageMetadata({
    title: book.title,
    description: book.blurbShort,
    path: `/writing/${book.slug}`,
    ogType: "book",
  });
}

export default async function BookPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const book = getBook(slug);
  if (!book) notFound();

  const ember = book.accent === "ember";
  const accentText = ember ? "text-ember-ink" : "text-scrub-ink";
  const other = books.find((b) => b.slug !== book.slug);

  const bookJsonLd = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: book.title,
    author: {
      "@type": "Person",
      name: book.byline,
      ...(book.byline !== site.name ? { alternateName: site.name } : { alternateName: site.penName }),
      url: site.url,
    },
    url: `${site.url}/writing/${book.slug}`,
    inLanguage: "en",
    datePublished: book.year,
    ...(book.publisher ? { publisher: { "@type": "Organization", name: book.publisher } } : {}),
    ...(book.seriesNote ? { isPartOf: { "@type": "BookSeries", name: "The Saga of Arka" } } : {}),
  };

  return (
    <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookJsonLd) }}
      />

      <div className="pt-14 md:pt-20">
        <Link href="/writing" className="dotted-link text-sm font-medium">
          ← All writing
        </Link>
        <div className="mt-8">
          <FieldLabel
            letter={book.shelf === "fiction" ? "F" : "NF"}
            accent={book.accent}
            text={`Shelf — ${book.shelf} · as ${book.byline}`}
          />
        </div>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-[-0.02em] md:text-5xl">
          {book.title}
        </h1>
        <p className="chart-label mt-4">
          {book.year}
          {book.publisher ? ` · ${book.publisher}` : ""}
        </p>
      </div>

      <div className="mt-12 grid gap-10 pb-24 md:grid-cols-[250px_1fr] lg:gap-16">
        <Reveal>
          <BookCover book={book} priority sizes="(min-width: 768px) 250px, 60vw" />
          {/* Real cover: drop /public/covers/{book.slug}.jpg and rebuild. */}
        </Reveal>

        <Reveal delay={0.08}>
          <div>
            {book.seriesNote ? (
              <p className={`font-mono text-xs font-semibold tracking-[0.14em] uppercase ${accentText}`}>
                {book.seriesNote}
              </p>
            ) : null}
            <div className={`space-y-5 ${book.seriesNote ? "mt-4" : ""}`}>
              {book.blurb.map((para, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? "text-lg leading-relaxed text-ink"
                      : "text-[15px] leading-[1.8] text-ink/90 md:text-base"
                  }
                >
                  {para}
                </p>
              ))}
            </div>

            <p className="chart-label mt-9 mb-3">Where to buy</p>
            <div className="flex flex-wrap gap-3">
              {book.buyLinks.map((link, i) => (
                <ButtonLink
                  key={link.label}
                  href={link.url}
                  variant={i === 0 ? (ember ? "ember" : "primary") : "secondary"}
                >
                  {link.label}
                  {link.region ? <span className="text-xs opacity-80">· {link.region}</span> : null}
                  <span aria-hidden>↗</span>
                </ButtonLink>
              ))}
            </div>

            {other ? (
              <p className="mt-10 border-t border-line pt-6 text-sm text-note">
                Also on the shelves:{" "}
                <Link href={`/writing/${other.slug}`} className="dotted-link font-medium text-ink">
                  {other.title}
                </Link>{" "}
                · as {other.byline}
              </p>
            ) : null}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
