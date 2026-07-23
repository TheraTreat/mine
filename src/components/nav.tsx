"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/vision", label: "Vision" },
  { href: "/theratreat", label: "TheraTreat" },
  { href: "/writing", label: "Writing" },
  { href: "/insights", label: "Insights" },
  { href: "/speaking", label: "Speaking" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-5 md:px-8">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="font-mono text-[11px] font-semibold tracking-[0.14em] text-ink md:text-xs"
        >
          DR<span aria-hidden className="text-scrub">.</span> YOGESH SHINGANE
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-x-5 md:flex lg:gap-x-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`text-sm font-medium transition-colors ${
                isActive(link.href) ? "text-scrub-ink" : "text-note hover:text-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-9 w-9 items-center justify-center rounded-[6px] border border-line bg-panel text-ink md:hidden"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            {open ? (
              <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <path d="M2 4.5h12M2 8h12M2 11.5h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Primary mobile"
          className="border-t border-line bg-paper px-5 pb-3 pt-1 md:hidden"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`block border-b border-line/70 py-3 text-[15px] font-medium last:border-0 ${
                isActive(link.href) ? "text-scrub-ink" : "text-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
