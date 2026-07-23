# yogeshshingane.com

Personal branding site for **Dr. Yogesh Shingane** — occupational therapist,
Founder & CEO of TheraTreat, author (nonfiction as himself, fantasy as YOG).

Built with **Next.js 15 (App Router) · TypeScript · Tailwind CSS 4 · Framer
Motion · MDX**. Fully static (SSG), zero-config deploy on Vercel. Fonts are
self-hosted from `src/fonts` (Bricolage Grotesque · Public Sans · IBM Plex
Mono) — no external font CDN at build or runtime.

The design system borrows its grammar from the SOAP note: the home page runs
Subjective → Objective → Assessment → Plan, and every section sitewide is a
labelled "chart field". Scrub teal is the clinical accent; ember is reserved
for the YOG fiction shelf.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (also regenerates OG images, sitemap, robots)
npm run start    # serve the production build
```

## Editing content (no JSX required)

**All copy lives in `/content`.** Components never contain prose — edit these
files and the site updates everywhere, including metadata and JSON-LD.
Anything I drafted for you is flagged `TODO: Yog to review`; search the repo
for that string before launch.

| File | Controls |
| --- | --- |
| `content/site.ts` | Name, thesis, email, LinkedIn, TheraTreat URL, role chips, home proof row, contact queues |
| `content/now.ts` | The "Now" strip on the home page (bump `updated` when you edit) |
| `content/about.ts` | About narrative paragraphs + timeline entries |
| `content/vision.ts` | The `/vision` page: the six interconnected roles + the closing quote |
| `content/theratreat.ts` | Problem stats, product modules, TheraDocs copy + demo, CTA |
| `content/books.ts` | Both books: blurbs, years, publishers, buy links |
| `content/talks.ts` | Speaking topics, booking CTA, past appearances |
| `content/insights/` | Blog posts (MDX) + registry |

### Add an insights post

1. Create `content/insights/my-new-post.mdx` (plain Markdown/MDX, no frontmatter).
2. Register it in `content/insights/index.ts` — import the file, add an entry
   (slug, title, summary, ISO date, tags, reading minutes).

The listing page, post page, per-post OG image, and sitemap all pick it up
automatically. Tags must be one of the categories defined in `INSIGHT_TAGS`.

### Real book covers

Drop images in `public/covers/` named by slug —
`therapy-for-all.jpg`, `the-survivvl-awakening-of-the-dark.jpg`
(`.png`/`.webp` also fine; 2:3 ratio, ≥900px wide). The styled placeholders
disappear automatically on the next build/dev restart.

### Swap the domain

Change `url` in `content/site.ts`. Canonicals, OG URLs, JSON-LD, sitemap and
robots all derive from it. (The footer's domain wordmark derives from it too.)

### Past appearances (speaking)

Add entries to `pastAppearances` in `content/talks.ts`; the styled empty state
is replaced by the list automatically.

## Deploy to Vercel

1. Push this repo to GitHub.
2. [vercel.com/new](https://vercel.com/new) → import the repo → Framework:
   Next.js (auto-detected) → Deploy. No env vars, no config.
3. Add your domain under Project → Settings → Domains, then update
   `content/site.ts → url` and redeploy.

## Verification checklist (Lighthouse-minded)

Checked on the production build:

- [x] **Build**: all 19 routes prerendered static/SSG; no server runtime needed
- [x] **Metadata**: per-page `<title>`/description via the Metadata API; canonical URL on every page (resolved against `metadataBase`)
- [x] **Structured data**: `schema.org/Person` (+ both books) on home; `schema.org/Book` on each book page; `BlogPosting` on insights posts
- [x] **OG images**: `next/og` template at `/opengraph-image` and per-post `/insights/[slug]/opengraph-image` (1200×630 PNG, self-hosted Plex Mono)
- [x] **sitemap.xml / robots.txt** generated at build from the content files
- [x] **Fonts**: self-hosted woff2 via `next/font/local`, `display: swap`, latin subsets (~180KB total)
- [x] **Images**: `next/image` for real covers; placeholders are styled divs with `role="img"` + descriptive `aria-label`; all real images get descriptive alt text
- [x] **Contrast**: all text-size pairs pass WCAG AA — ink `#10233b` on paper 13.9:1, slate `#43596e` 6.9:1, scrub-ink `#0b5f53` and ember-ink `#93400f` used at text sizes, white-on-scrub-ink buttons 5.9:1
- [x] **Reduced motion**: `MotionConfig reducedMotion="user"` gates all Framer Motion animation; smooth scrolling disabled under `prefers-reduced-motion`
- [x] **Keyboard**: skip-to-content link, visible `:focus-visible` rings sitewide, mobile menu with `aria-expanded`/`aria-controls`, `aria-current` on active nav
- [x] **Responsive**: verified at 360px and 1440px full-page screenshots; no horizontal overflow
- [x] **No external requests**: no font CDN, no analytics, no third-party scripts

## Repo map

```
content/            ← everything editable (typed TS + MDX)
src/app/            ← routes, metadata, sitemap, robots, OG images
src/components/     ← chart-field motif, nav, footer, covers, form, motion
src/lib/            ← fonts, metadata helpers, OG renderer, date format
src/fonts/          ← self-hosted woff2 (+ TTFs for the OG renderer)
public/covers/      ← drop real book covers here
```
