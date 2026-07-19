import type { Metadata } from "next";
import Link from "next/link";

import { BookCover } from "@/components/book-cover";
import { ButtonLink } from "@/components/buttons";
import { Field } from "@/components/chart";
import { Hero } from "@/components/hero";
import { PostCard } from "@/components/post-card";
import { Reveal } from "@/components/reveal";
import { books, latestBook } from "@content/books";
import { insights } from "@content/insights";
import { now } from "@content/now";
import { site } from "@content/site";

export const metadata: Metadata = {
  title: { absolute: `${site.name} — Occupational Therapist & Founder, TheraTreat` },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name} — Occupational Therapist & Founder, TheraTreat`,
    description: site.description,
    url: "/",
    siteName: site.name,
    type: "website",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.name,
      alternateName: site.penName,
      jobTitle: "Occupational Therapist & Founder, TheraTreat",
      worksFor: {
        "@type": "Organization",
        name: "TheraTreat",
        url: site.theratreatUrl,
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pune",
        addressCountry: "IN",
      },
      url: site.url,
      email: `mailto:${site.email}`,
      sameAs: [site.linkedin, site.theratreatUrl],
      knowsAbout: [
        "Occupational therapy",
        "Rehabilitation",
        "Clinical AI",
        "Clinical documentation",
        "Voice interfaces in Indian languages",
      ],
    },
    ...books.map((book) => ({
      "@type": "Book",
      name: book.title,
      url: `${site.url}/writing/${book.slug}`,
      author: { "@id": `${site.url}/#person` },
      ...(book.publisher ? { publisher: { "@type": "Organization", name: book.publisher } } : {}),
    })),
  ],
};

export default function HomePage() {
  const latestInsights = insights.slice(0, 2);

  return (
    <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <Hero />

      <div className="space-y-14 pb-24 md:space-y-16">
        {/* S — Subjective: what's on my mind and on the bench right now */}
        <Reveal>
          <Field letter="S" accent="scrub" label={`Subjective — Now · ${now.updated}`}>
            <ul className="grid gap-4 md:grid-cols-3 md:gap-8">
              {now.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span aria-hidden className="mt-2 h-2 w-2 shrink-0 rounded-[2px] bg-scrub/70" />
                  <span className="text-[15px] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Field>
        </Reveal>

        {/* O — Objective: the verifiable proof */}
        <Reveal>
          <Field letter="O" accent="scrub" label="Objective — Proof">
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
              {site.proof.map((item, i) => {
                const external = item.href.startsWith("http");
                const inner = (
                  <>
                    <p className="font-mono text-[10px] tracking-[0.14em] text-note uppercase">
                      {item.kicker}
                    </p>
                    <p className="mt-1.5 font-display text-[15px] leading-tight font-bold md:text-base">
                      {item.label}
                      {external ? <span aria-hidden className="text-note"> ↗</span> : null}
                    </p>
                    <p className="mt-1 text-xs leading-snug text-note">{item.sub}</p>
                  </>
                );
                const cls = `flex h-full flex-col rounded-[6px] border border-line bg-paper p-3.5 transition-colors hover:border-scrub-ink ${
                  i === site.proof.length - 1 ? "col-span-2 sm:col-span-1" : ""
                }`;
                return (
                  <li key={item.label} className="h-full">
                    {external ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className={cls}>
                        {inner}
                      </a>
                    ) : (
                      <Link href={item.href} className={cls}>
                        {inner}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </Field>
        </Reveal>

        {/* A — Assessment: recent thinking and the latest book */}
        <Reveal>
          <Field letter="A" accent="scrub" label="Assessment — Recent thinking">
            <div className="grid gap-10 md:grid-cols-[1fr_230px] md:gap-14">
              <div className="divide-y divide-line">
                {latestInsights.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
                <div className="pt-5">
                  <Link href="/insights" className="dotted-link text-sm font-medium">
                    All insights →
                  </Link>
                </div>
              </div>
              <aside>
                <p className="chart-label">Latest book</p>
                <Link href={`/writing/${latestBook.slug}`} className="mt-3 block max-w-[190px]">
                  <BookCover book={latestBook} sizes="190px" />
                </Link>
                <p className="mt-3 font-display leading-snug font-bold">{latestBook.title}</p>
                <p className="mt-1 text-xs text-note">
                  {latestBook.seriesNote ?? latestBook.publisher} · as {latestBook.byline}
                </p>
                <Link href="/writing" className="dotted-link mt-2.5 inline-block text-sm font-medium">
                  Both shelves →
                </Link>
              </aside>
            </div>
          </Field>
        </Reveal>

        {/* P — Plan: what happens next */}
        <Reveal>
          <Field letter="P" accent="scrub" label="Plan — Work with me">
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl font-bold md:text-3xl">
                The plan is simple: talk to me.
              </h2>
              <p className="mt-3 leading-relaxed text-note">
                Design-partner clinics and investors for TheraTreat. Press on clinical AI and rehab
                in India. Speaking slots. Reader mail. One inbox, straight answers.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <ButtonLink href={`mailto:${site.email}`}>Email me</ButtonLink>
                <ButtonLink href="/contact" variant="secondary">
                  Contact page
                </ButtonLink>
                <ButtonLink href={site.linkedin} variant="secondary">
                  LinkedIn ↗
                </ButtonLink>
              </div>
            </div>
          </Field>
        </Reveal>
      </div>
    </div>
  );
}
