import { ButtonLink } from "@/components/buttons";
import { Field, PageHeader } from "@/components/chart";
import { Reveal } from "@/components/reveal";
import { pageMetadata } from "@/lib/meta";
import { site } from "@content/site";
import { theratreat } from "@content/theratreat";

export const metadata = pageMetadata({
  title: "TheraTreat",
  description: `${theratreat.oneLiner} Founded by Dr. Yogesh Shingane. The wedge is TheraDocs: voice-to-SOAP documentation in Marathi, Hindi and English.`,
  path: "/theratreat",
});

export default function TheraTreatPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
      <PageHeader
        letter="Tx"
        accent="scrub"
        label="Treatment — The company"
        title={theratreat.name}
        lede={theratreat.oneLiner}
      >
        <p className="mt-5">
          <a
            href={theratreat.url}
            target="_blank"
            rel="noopener noreferrer"
            className="dotted-link text-sm font-medium"
          >
            Visit the product site ↗
          </a>
          <span className="mx-3 text-line" aria-hidden>
            |
          </span>
          <span className="chart-label">{theratreat.role}</span>
        </p>
      </PageHeader>

      <div className="space-y-14 pb-24 md:space-y-16">
        {/* Dx — the problem */}
        <Reveal>
          <Field letter="Dx" accent="scrub" label="Diagnosis — The problem">
            <div className="max-w-2xl space-y-4">
              {theratreat.problem.paras.map((para, i) => (
                <p key={i} className="text-[15px] leading-[1.8] md:text-base">
                  {para}
                </p>
              ))}
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {theratreat.problem.stats.map((stat) => (
                <div key={stat.label} className="rounded-[6px] border border-line bg-paper p-4">
                  <p className="font-display text-xl font-bold tracking-tight md:text-2xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[13px] leading-snug text-note">{stat.label}</p>
                </div>
              ))}
            </div>
          </Field>
        </Reveal>

        {/* Tx — the product */}
        <Reveal>
          <Field letter="Tx" accent="scrub" label="Treatment — What TheraTreat is">
            <div className="max-w-2xl space-y-4">
              {theratreat.product.paras.map((para, i) => (
                <p key={i} className="text-[15px] leading-[1.8] md:text-base">
                  {para}
                </p>
              ))}
            </div>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Modules">
              {theratreat.product.modules.map((mod) => (
                <li
                  key={mod}
                  className="rounded-[4px] border border-line bg-paper px-2.5 py-1 font-mono text-[11px] tracking-[0.1em] text-note uppercase"
                >
                  {mod}
                </li>
              ))}
            </ul>
            <p className="chart-label mt-8 mb-3">Built for</p>
            <ul className="flex flex-wrap gap-2.5">
              {theratreat.audiences.map((aud) => (
                <li
                  key={aud}
                  className="rounded-full border border-line bg-paper px-4 py-1.5 text-sm font-medium"
                >
                  {aud}
                </li>
              ))}
            </ul>
          </Field>
        </Reveal>

        {/* Rx — the wedge */}
        <Reveal>
          <Field letter="Rx" accent="scrub" label="Prescription — The wedge">
            <h2 className="font-display text-2xl font-bold md:text-3xl">{theratreat.wedge.name}</h2>
            <p className="mt-1.5 font-medium text-scrub-ink">{theratreat.wedge.tagline}</p>
            <div className="mt-4 max-w-2xl space-y-4">
              {theratreat.wedge.paras.map((para, i) => (
                <p key={i} className="text-[15px] leading-[1.8] md:text-base">
                  {para}
                </p>
              ))}
            </div>

            <ol className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
              {theratreat.wedge.flow.map((step, i) => (
                <li key={step.step} className="rounded-[6px] border border-line bg-paper p-4">
                  <p className="font-mono text-[10px] font-semibold tracking-[0.14em] text-scrub-ink">
                    0{i + 1}
                  </p>
                  <p className="mt-1 font-display font-bold">{step.step}</p>
                  <p className="mt-1 text-[13px] leading-relaxed text-note">{step.detail}</p>
                </li>
              ))}
            </ol>

            {/* Voice → signed note, in miniature */}
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-[6px] bg-deep p-5 text-paper">
                <p className="font-mono text-[10px] tracking-[0.16em] text-[#5ec8b4] uppercase">
                  {theratreat.wedge.demo.spokenLabel}
                </p>
                <div className="mt-3 flex h-8 items-end gap-[3px]" aria-hidden>
                  {[40, 70, 55, 90, 35, 65, 80, 45, 60, 75, 30, 55, 85, 50, 70, 40, 60].map(
                    (h, i) => (
                      <span
                        key={i}
                        className="w-[3px] rounded-full bg-[#5ec8b4]/70"
                        style={{ height: `${h}%` }}
                      />
                    ),
                  )}
                </div>
                <p className="mt-3 text-[15px] leading-relaxed">{theratreat.wedge.demo.spoken}</p>
              </div>
              <div className="rounded-[6px] border border-scrub/40 bg-panel p-5">
                <p className="font-mono text-[10px] tracking-[0.16em] text-scrub-ink uppercase">
                  {theratreat.wedge.demo.noteLabel}
                </p>
                <dl className="mt-3 space-y-2.5">
                  {theratreat.wedge.demo.note.map((row) => (
                    <div key={row.k} className="flex items-start gap-3">
                      <dt
                        aria-label={row.k}
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-[4px] border border-scrub/30 bg-scrub-tint font-mono text-[11px] font-semibold text-scrub-ink"
                      >
                        {row.k}
                      </dt>
                      <dd className="text-[13.5px] leading-relaxed text-ink/90">{row.v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <p className="mt-8 border-l-2 border-scrub pl-4 font-medium text-ink">
              {theratreat.wedge.principle}
            </p>
          </Field>
        </Reveal>

        {/* F/U — the ask */}
        <Reveal>
          <Field letter="F/U" accent="scrub" label="Follow-up — Clinics & investors">
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl font-bold md:text-3xl">
                {theratreat.cta.title}
              </h2>
              <p className="mt-3 leading-relaxed text-note">{theratreat.cta.body}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <ButtonLink
                  href={`mailto:${site.email}?subject=${encodeURIComponent(theratreat.cta.emailSubject)}`}
                >
                  Email about TheraTreat
                </ButtonLink>
                <ButtonLink href={theratreat.url} variant="secondary">
                  Product site ↗
                </ButtonLink>
              </div>
            </div>
          </Field>
        </Reveal>
      </div>
    </div>
  );
}
