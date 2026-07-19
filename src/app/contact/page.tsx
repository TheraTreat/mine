import { ContactForm } from "@/components/contact-form";
import { Field, PageHeader } from "@/components/chart";
import { Reveal } from "@/components/reveal";
import { pageMetadata } from "@/lib/meta";
import { site } from "@content/site";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact Dr. Yogesh Shingane — TheraTreat partnerships and investment, press, speaking, and reader mail. One inbox, straight answers.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
      <PageHeader
        letter="P"
        accent="scrub"
        label="Plan — Get in touch"
        title="Contact"
        lede="One inbox, straight answers. Here's what I reply to — pick the queue and write."
      />

      <div className="grid gap-14 pb-24 md:grid-cols-2 lg:gap-20">
        <Reveal>
          <div>
            <ol className="space-y-6">
              {site.respondsTo.map((item, i) => (
                <li key={item.label}>
                  <p className="font-mono text-xs font-semibold tracking-[0.14em] text-scrub-ink">
                    0{i + 1}
                  </p>
                  <h2 className="mt-1 font-display text-lg font-bold">{item.label}</h2>
                  <p className="mt-1 max-w-md text-[15px] leading-relaxed text-note">
                    {item.detail}
                  </p>
                </li>
              ))}
            </ol>

            <div className="mt-10 border-t border-line pt-6">
              <p className="chart-label">Direct</p>
              <p className="mt-3">
                <a href={`mailto:${site.email}`} className="dotted-link font-medium break-all">
                  {site.email}
                </a>
              </p>
              <p className="mt-2">
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dotted-link font-medium"
                >
                  LinkedIn ↗
                </a>
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <Field label="Message — opens your mail app" accent="scrub" letter="✉">
            <ContactForm />
          </Field>
        </Reveal>
      </div>
    </div>
  );
}
