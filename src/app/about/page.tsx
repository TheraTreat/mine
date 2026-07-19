import { Field, PageHeader } from "@/components/chart";
import { Reveal } from "@/components/reveal";
import { Timeline } from "@/components/timeline";
import { pageMetadata } from "@/lib/meta";
import { about } from "@content/about";

export const metadata = pageMetadata({
  title: "About",
  description:
    "From the clinic floor to founding TheraTreat — the arc of Dr. Yogesh Shingane: occupational therapist, clinician-founder, and author.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
      <PageHeader
        letter="Hx"
        accent="scrub"
        label="History — The arc"
        title="Therapist. Founder. Author. In that order."
        lede={about.lede}
      />

      <div className="grid gap-14 pb-24 md:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <Reveal>
          <div className="space-y-5">
            {about.narrative.map((para, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "text-lg leading-relaxed text-ink md:text-xl"
                    : "text-[15px] leading-[1.8] text-ink/90 md:text-base"
                }
              >
                {para}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <Field label="Timeline — reviewed annually">
            <Timeline />
          </Field>
        </Reveal>
      </div>
    </div>
  );
}
