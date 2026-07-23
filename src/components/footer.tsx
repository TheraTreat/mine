import Link from "next/link";

import { site } from "@content/site";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/vision", label: "Vision" },
  { href: "/theratreat", label: "TheraTreat" },
  { href: "/writing", label: "Writing" },
  { href: "/insights", label: "Insights" },
  { href: "/speaking", label: "Speaking" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const domain = new URL(site.url).host;

  return (
    <footer className="mt-24 bg-deep text-paper">
      <div className="mx-auto w-full max-w-6xl px-5 py-12 md:px-8 md:py-16">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#9fb3c8]">
          Reviewed &amp; signed
        </p>
        <p className="mt-2 font-display text-2xl font-bold">
          {site.name} <span className="text-[#5ec8b4]">· OT</span>
        </p>
        <p className="mt-1 text-sm text-[#9fb3c8]">{site.location}</p>

        <div className="mt-10 grid gap-10 sm:grid-cols-3">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#9fb3c8]">
              Navigate
            </p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[#c6d3e0] transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#9fb3c8]">Reach</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href={`mailto:${site.email}`} className="break-all text-[#c6d3e0] transition-colors hover:text-white">
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c6d3e0] transition-colors hover:text-white"
                >
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a
                  href={site.theratreatUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c6d3e0] transition-colors hover:text-white"
                >
                  TheraTreat ↗
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#9fb3c8]">
              Colophon
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#9fb3c8]">
              Section labels on this site follow the SOAP note — Subjective, Objective, Assessment,
              Plan — the format clinicians use to document care.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-white/15 pt-6">
          <p className="text-[13px] text-[#9fb3c8]">
            © {year} {site.name}
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#9fb3c8]">{domain}</p>
        </div>
      </div>
    </footer>
  );
}
