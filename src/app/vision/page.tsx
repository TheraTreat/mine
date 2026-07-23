import Link from "next/link";

import { ButtonLink } from "@/components/buttons";
import { PageHeader } from "@/components/chart";
import { Reveal } from "@/components/reveal";
import { pageMetadata } from "@/lib/meta";
import { site } from "@content/site";
import { vision } from "@content/vision";

export const metadata = pageMetadata({
  title: "Vision",
  description:
    "The long-term vision of Dr. Yogesh Shingane — building across healthcare, AI, writing and storytelling through six interconnected roles.",
  path: "/vision",
});

export default function VisionPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
      <PageHeader
        letter="Gx"
        accent="scrub"
        label="Goals of care — the long view"
        title="Long-Term Vision"
        lede={vision.lede}
      />

      <div className="pb-24">
        <ol className="grid gap-4 md:grid-cols-2">
          {vision.roles.map((role, i) => (
            <li key={role.title}>
              <Reveal delay={Math.min(i * 0.05, 0.25)}>
                <article className="flex h-full flex-col rounded-lg border border-line bg-panel p-6 md:p-7">
                  <div className="flex items-center justify-between">
                    <span className="chart-label">Role 0{i + 1}</span>
                    <span aria-hidden className="text-2xl leading-none">
                      {role.icon}
                    </span>
                  </div>
                  <h2 className="mt-3 font-display text-xl font-bold tracking-tight">
                    {role.title}
                  </h2>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-note">{role.body}</p>
                  {role.href ? (
                    <p className="mt-4 pt-1">
                      <Link href={role.href} className="dotted-link text-sm font-medium text-ink">
                        {role.linkLabel} →
                      </Link>
                    </p>
                  ) : null}
                </article>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal>
          <figure className="mt-12 overflow-hidden rounded-lg bg-deep px-6 py-12 text-paper md:px-14 md:py-16">
            <figcaption className="font-mono text-[11px] tracking-[0.16em] text-[#5ec8b4] uppercase">
              The thesis
            </figcaption>
            <blockquote className="mt-5 max-w-3xl font-display text-2xl leading-[1.3] font-bold text-white md:text-[2rem]">
              &ldquo;{vision.quote}&rdquo;
            </blockquote>
            <p className="mt-6 border-t border-white/15 pt-5 text-sm text-[#9fb3c8]">
              — {site.name}
            </p>
          </figure>
        </Reveal>

        <Reveal>
          <div className="mt-12 flex flex-wrap items-center gap-3">
            <ButtonLink href="/theratreat">Start with TheraTreat</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Work with me
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
