import Link from "next/link";
import type { ReactNode } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[6px] px-5 py-2.5 text-[15px] font-semibold transition-colors";

const variants = {
  primary: `${base} bg-scrub-ink text-white hover:bg-deep`,
  ember: `${base} bg-ember-ink text-white hover:bg-deep`,
  secondary: `${base} border border-line bg-panel text-ink hover:border-scrub-ink hover:text-scrub-ink`,
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
}) {
  const cls = variants[variant];
  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  if (href.startsWith("mailto:")) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
