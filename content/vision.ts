/**
 * /vision — the long-term vision and the six interconnected roles.
 * Copy is Yog's own, kept verbatim. Edit here; the page never holds prose.
 * Each role can link to the part of the site that proves it.
 */
export type VisionRole = {
  /** Emoji anchor, as written. */
  icon: string;
  title: string;
  body: string;
  /** Optional link to the part of the site that backs this role up. */
  href?: string;
  linkLabel?: string;
};

export const vision = {
  lede: "Six roles, not six careers. One throughline runs through all of them: see the problem on the clinic floor, build the system that fixes it, and write down what holds up. Healthcare, AI and storytelling, held to the same standard.",

  // TODO: Yog to review — tightened to the site's direct, specifics-first voice.
  // Confirm each still says what you mean.
  roles: [
    {
      icon: "🩺",
      title: "Healthcare Entrepreneur",
      body: "Founder & CEO of TheraTreat — the clinical operating system for India's therapy and rehabilitation practices. One patient record instead of five apps and a paper drawer: intake, scheduling, documentation, outcomes and billing, built from inside the clinic.",
      href: "/theratreat",
      linkLabel: "TheraTreat",
    },
    {
      icon: "🤖",
      title: "AI Innovator",
      body: "I build clinical AI that keeps the clinician accountable. TheraDocs turns a spoken session — Marathi, Hindi or English — into a structured SOAP note the therapist reviews and signs. The model drafts; the clinician's name stays on the record.",
      href: "/insights",
      linkLabel: "The thinking",
    },
    {
      icon: "📚",
      title: "Nonfiction Author",
      body: "Author of Therapy for All (Arkorath Press) — the case for therapy as everyday healthcare in India, written for the families and clinicians who deliver it. Plain language, practical, no jargon.",
      href: "/writing/therapy-for-all",
      linkLabel: "Therapy for All",
    },
    {
      icon: "✍️",
      title: "Fantasy Novelist",
      // Series: The Saga of Arka. Book title keeps the stylised double-v: The Survivvl.
      body: "As YOG, I write The Saga of Arka — a fantasy series set on the world of Arka, beginning with The Survivvl: Awakening of the Dark. Kept deliberately apart from the clinical work; the same discipline underneath — structure first, then the story. Book 2 in draft.",
      href: "/writing/the-survivvl-awakening-of-the-dark",
      linkLabel: "The Survivvl",
    },
    {
      icon: "🎤",
      title: "Speaker",
      body: "I speak on clinical AI in rehab, voice documentation in Indian languages, and the clinician-founder path — at conferences, universities and industry events. Every talk comes from practice, not slideware.",
      href: "/speaking",
      linkLabel: "Talk topics",
    },
    {
      icon: "🌍",
      title: "Builder",
      body: "The common verb under all of it is build — platforms, AI, books, and the communities around them. I'd rather ship the boring infrastructure that compounds than chase the demo that impresses.",
      href: "/about",
      linkLabel: "The arc",
    },
  ] satisfies VisionRole[],

  // The manifesto line — kept verbatim; it's a quotation.
  quote:
    "I don't aspire to build just a successful company. I aspire to build solutions that improve lives, knowledge that empowers people, and stories that inspire generations.",
} as const;
