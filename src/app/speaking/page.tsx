import { ButtonLink } from "@/components/buttons";
import { Field, PageHeader } from "@/components/chart";
import { Reveal } from "@/components/reveal";
import { pageMetadata } from "@/lib/meta";
import { site } from "@content/site";
import { speaking } from "@content/talks";

export const metadata = pageMetadata({
  title: "Speaking",
  description:
    "Talks by Dr. Yogesh Shingane: clinical AI in rehab, voice documentation in Indian languages, and the clinician-founder journey. Keynotes, panels and workshops.",
  path: "/speaking",
});

export default function SpeakingPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
      <PageHeader
        label="Speaking — Keynotes · Panels · Workshops"
        letter="Sp"
        accent="scrub"
        title="Speaking"
        lede={speaking.lede}
      />

      <div className="space-y-12 pb-24">
        <div className="space-y-8">
          {speaking.topics.map((topic, i) => (
            <Reveal key={topic.title} delay={Math.min(i * 0.05, 0.2)}>
              <Field letter={`0${i + 1}`} label={`Talk — ${topic.formats.join(" · ")}`}>
                <h2 className="max-w-3xl font-display text-xl font-bold tracking-tight md:text-2xl">
                  {topic.title}
                </h2>
                <p className="mt-3 max-w-3xl text-[15px] leading-[1.8] text-note md:text-base">
                  {topic.abstract}
                </p>
              </Field>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <Field letter="P" accent="scrub" label="Plan — Book me">
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl font-bold md:text-3xl">{speaking.cta.title}</h2>
              <p className="mt-3 leading-relaxed text-note">{speaking.cta.body}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <ButtonLink
                  href={`mailto:${site.email}?subject=${encodeURIComponent(speaking.cta.emailSubject)}`}
                >
                  Send a speaking enquiry
                </ButtonLink>
                <ButtonLink href={site.linkedin} variant="secondary">
                  LinkedIn ↗
                </ButtonLink>
              </div>
            </div>
          </Field>
        </Reveal>

        <Reveal>
          <Field label="Record — Past appearances">
            {speaking.pastAppearances.length === 0 ? (
              <div className="rounded-[6px] border border-dashed border-line bg-paper p-8 text-center">
                <p className="chart-label">No entries yet</p>
                <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-note">
                  This list is new. If you want me on a stage or a podcast, be the first entry —{" "}
                  <a
                    href={`mailto:${site.email}?subject=${encodeURIComponent(speaking.cta.emailSubject)}`}
                    className="dotted-link font-medium text-ink"
                  >
                    book a slot
                  </a>
                  .
                </p>
              </div>
            ) : (
              <ul className="divide-y divide-line">
                {speaking.pastAppearances.map((a) => (
                  <li
                    key={`${a.event}-${a.date}`}
                    className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4 first:pt-0 last:pb-0"
                  >
                    <div>
                      <p className="font-display font-bold">
                        {a.url ? (
                          <a href={a.url} target="_blank" rel="noopener noreferrer" className="dotted-link">
                            {a.event} ↗
                          </a>
                        ) : (
                          a.event
                        )}
                      </p>
                      <p className="mt-0.5 text-sm text-note">{a.where}</p>
                    </div>
                    <p className="chart-label">{a.date}</p>
                  </li>
                ))}
              </ul>
            )}
          </Field>
        </Reveal>
      </div>
    </div>
  );
}
