import localFont from "next/font/local";

/**
 * All three faces are self-hosted from /src/fonts — no external font CDN
 * is hit at build or runtime.
 *
 *  - Bricolage Grotesque (variable): display face — headlines, book titles
 *  - Public Sans (variable):          body face — designed for civic/clinical readability
 *  - IBM Plex Mono (static):          chart labels, dates, tags, metadata
 */

export const displayFont = localFont({
  src: "../fonts/BricolageGrotesque-var.woff2",
  weight: "200 800",
  display: "swap",
  variable: "--font-bricolage",
});

export const bodyFont = localFont({
  src: [
    { path: "../fonts/PublicSans-var.woff2", weight: "100 900", style: "normal" },
    { path: "../fonts/PublicSans-Italic-var.woff2", weight: "100 900", style: "italic" },
  ],
  display: "swap",
  variable: "--font-publicsans",
});

export const monoFont = localFont({
  src: [
    { path: "../fonts/PlexMono-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/PlexMono-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/PlexMono-600.woff2", weight: "600", style: "normal" },
  ],
  display: "swap",
  variable: "--font-plexmono",
});
