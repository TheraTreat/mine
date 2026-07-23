/**
 * /writing — both shelves. Each book gets its own /writing/[slug] page.
 *
 * Real covers: drop an image at /public/covers/<slug>.jpg (or .png/.webp),
 * 2:3 aspect ratio, at least 900px wide — the site picks it up automatically
 * and replaces the styled placeholder. Nothing else to change.
 */
export type BuyLink = {
  label: string;
  url: string;
  region?: string;
};

export type Book = {
  slug: string;
  title: string;
  /** The byline as printed on the cover. */
  byline: string;
  shelf: "nonfiction" | "fiction";
  /** Which accent the shelf carries — ember is reserved for fiction. */
  accent: "scrub" | "ember";
  year: string;
  publisher?: string;
  seriesNote?: string;
  /** One line for cards and metadata. */
  blurbShort: string;
  /** Full blurb paragraphs for the book page. */
  blurb: string[];
  buyLinks: BuyLink[];
};

export const books: Book[] = [
  {
    slug: "therapy-for-all",
    title: "Therapy for All",
    byline: "Dr. Yogesh Shingane",
    shelf: "nonfiction",
    accent: "scrub",
    year: "2023", // TODO: Yog to review — confirm publication year.
    publisher: "Arkorath Press",
    blurbShort:
      "The case for therapy as everyday healthcare in India — and a working map for the families and clinicians who deliver it.",
    blurb: [
      // TODO: Yog to review — first-draft blurb; replace with the real jacket copy.
      "In India, therapy is usually what happens after everything else has failed — if it happens at all. A child waits years for an assessment that should have taken weeks. A stroke survivor goes home with a prescription and no plan. Families are left to navigate occupational therapy, physiotherapy and speech therapy with no map and no translator.",
      "Therapy for All is that map. It explains, in plain language, what each therapy actually does, when to seek it, what a good session looks like, and how to tell real rehabilitation from ritual. It argues that therapy belongs in the everyday machinery of Indian healthcare — and shows what has to change in clinics, training and policy to put it there.",
      "Written by a practising occupational therapist, it is equal parts field guide and argument: for families who need care, young clinicians finding their footing, and anyone building the systems India's rehab ecosystem runs on.",
    ],
    buyLinks: [
      // TODO: Yog to review — drop in the real retailer URLs.
      { label: "Notion Press", url: "https://notionpress.com", region: "India" },
      { label: "Amazon", url: "https://www.amazon.com", region: "International" },
    ],
  },
  {
    slug: "the-survivvl-awakening-of-the-dark",
    title: "The Survivvl: Awakening of the Dark",
    byline: "YOG",
    shelf: "fiction",
    accent: "ember",
    year: "2025", // TODO: Yog to review — confirm publication year.
    seriesNote: "Book 1 of The Saga of Arka",
    blurbShort: "On Planet Arka, the dark doesn't fall. It wakes.",
    blurb: [
      // TODO: Yog to review — placeholder premise; replace with the real jacket copy.
      "Arka has always kept its own rules — a world of hard land and harder people, where survival is a craft passed down like a family trade. Then something old beneath the surface stirs, and the rules stop holding.",
      "The Survivvl: Awakening of the Dark follows the ones caught at the seam of it: ordinary survivors forced to learn, faster than the dark spreads, what their world has been hiding — and what surviving it will make of them.",
      "Book 1 of The Saga of Arka. Book 2 is being drafted now.",
    ],
    buyLinks: [
      // TODO: Yog to review — drop in the real retailer URLs.
      { label: "Amazon.in", url: "https://www.amazon.in", region: "India" },
      { label: "Amazon Kindle", url: "https://www.amazon.com", region: "Worldwide" },
    ],
  },
];

export const nonfictionShelf = books.filter((b) => b.shelf === "nonfiction");
export const fictionShelf = books.filter((b) => b.shelf === "fiction");

/** Newest book overall — shown on the home page. */
export const latestBook = [...books].sort((a, b) => Number(b.year) - Number(a.year))[0];

export function getBook(slug: string): Book | undefined {
  return books.find((b) => b.slug === slug);
}
