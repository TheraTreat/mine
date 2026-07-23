"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";

import { site } from "@content/site";
import { vision } from "@content/vision";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

/** Emphasise the load-bearing phrase if it's present; degrade gracefully if edited. */
function Thesis({ text }: { text: string }) {
  const KEY = "operating system";
  const i = text.toLowerCase().indexOf(KEY);
  if (i === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, i)}
      <span className="font-semibold text-ink">{text.slice(i, i + KEY.length)}</span>
      {text.slice(i + KEY.length)}
    </>
  );
}

export function Hero() {
  return (
    <section className="pt-16 pb-14 md:pt-28 md:pb-20">
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.p variants={item} className="chart-label flex items-center gap-3">
          <span aria-hidden className="inline-block h-2 w-2 rounded-full bg-scrub" />
          {site.credentials} · {site.location}
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-5 max-w-4xl font-display text-[2.85rem] leading-[1.04] font-extrabold tracking-[-0.03em] md:text-6xl lg:text-[4.25rem]"
        >
          {site.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-xl leading-snug text-note md:text-2xl"
        >
          <Thesis text={site.thesis} />
        </motion.p>

        <motion.p variants={item} className="mt-4 max-w-2xl text-[15px] leading-relaxed text-note md:text-base">
          {site.subThesis}
        </motion.p>

        <motion.div variants={item} className="mt-8">
          <p className="chart-label mb-3">Six roles · one throughline</p>
          <ul className="flex flex-wrap gap-2.5" aria-label="Roles">
            {vision.roles.map((role) => (
              <li key={role.title}>
                <Link
                  href={role.href ?? "/vision"}
                  className="inline-flex items-center rounded-full border border-line bg-panel px-4 py-1.5 text-sm font-medium transition-colors hover:border-scrub-ink hover:text-scrub-ink"
                >
                  {role.title}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-4">
            <Link href="/vision" className="dotted-link text-sm font-medium">
              Why these six →
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
