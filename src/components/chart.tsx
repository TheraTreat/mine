import type { ReactNode } from "react";

/**
 * The site's signature motif: content blocks styled as fields on a clinical
 * form — a monospace label chip breaking the top border, like a legend on a
 * paper chart. `Field` is the boxed variant (home page SOAP sections),
 * `PageHeader` the open variant used at the top of inner pages.
 */

export type Accent = "scrub" | "ember" | "plain";

const letterStyles: Record<Accent, string> = {
  scrub: "border-scrub/40 bg-scrub-tint text-scrub-ink",
  ember: "border-ember/40 bg-ember-tint text-ember-ink",
  plain: "border-line bg-panel text-note",
};

export function FieldLabel({
  letter,
  text,
  accent = "plain",
}: {
  letter?: string;
  text: string;
  accent?: Accent;
}) {
  return (
    <span className="chart-label flex items-center gap-2">
      {letter ? (
        <span
          aria-hidden
          className={`inline-flex h-5 min-w-5 items-center justify-center rounded-[4px] border px-1 font-semibold ${letterStyles[accent]}`}
        >
          {letter}
        </span>
      ) : null}
      <span>{text}</span>
    </span>
  );
}

export function Field({
  label,
  letter,
  accent = "plain",
  id,
  className = "",
  children,
}: {
  label: string;
  letter?: string;
  accent?: Accent;
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-label={label}
      className={`relative rounded-lg border border-line bg-panel p-5 pt-8 md:p-8 md:pt-10 ${className}`}
    >
      <div className="absolute -top-2.5 left-4 max-w-[calc(100%-2rem)] bg-paper px-2 md:left-6">
        <FieldLabel letter={letter} text={label} accent={accent} />
      </div>
      {children}
    </section>
  );
}

export function PageHeader({
  label,
  letter,
  accent = "plain",
  title,
  lede,
  children,
}: {
  label: string;
  letter?: string;
  accent?: Accent;
  title: string;
  lede?: string;
  children?: ReactNode;
}) {
  return (
    <header className="pt-14 pb-10 md:pt-20 md:pb-14">
      <FieldLabel letter={letter} text={label} accent={accent} />
      <h1 className="mt-4 font-display text-4xl font-bold tracking-[-0.02em] md:text-5xl">
        {title}
      </h1>
      {lede ? <p className="mt-4 max-w-2xl text-lg leading-relaxed text-note">{lede}</p> : null}
      {children}
    </header>
  );
}
