/**
 * Global identity + site config.
 * Everything a page shows about "who you are" is edited here, never in JSX.
 */
export const site = {
  name: "Dr. Yogesh Shingane",
  /** Fiction byline — kept deliberately separate from the clinical identity. */
  penName: "YOG",
  credentials: "Occupational Therapist",
  location: "Pune, India",

  /** TODO: Yog to review — swap for the live domain before launch. */
  url: "https://yogeshshingane.com",

  /** One-line thesis shown in the hero and metadata. */
  thesis: "Occupational therapist building the operating system for India's therapy ecosystem.",

  /** Second hero line — keep it one sentence. */
  subThesis:
    "I see patients, run TheraTreat, and write — nonfiction as myself, fantasy as YOG. Same discipline in all three: structure first, then the story.",

  description:
    "Dr. Yogesh Shingane is an occupational therapist and the Founder & CEO of TheraTreat, a clinical operating system for India's therapy and rehabilitation ecosystem. Author of Therapy for All, and of the Planet Arka fantasy series as YOG.",

  /** Role chips under the hero thesis. */
  roles: [
    { label: "Clinician", href: "/about" },
    { label: "Founder · TheraTreat", href: "/theratreat" },
    { label: "Author", href: "/writing" },
  ],

  /** TODO: Yog to review — swap for a branded address (e.g. yogesh@theratreat…) when ready. */
  email: "shinganeyogesh2@gmail.com",

  /** TODO: Yog to review — confirm LinkedIn handle. */
  linkedin: "https://www.linkedin.com/in/yogesh-shingane",

  /** TODO: Yog to review — confirm the live product domain. */
  theratreatUrl: "https://theratreat.in",

  /** What the contact page promises a reply to. */
  respondsTo: [
    {
      label: "TheraTreat — partnerships & investment",
      detail: "Design-partner clinics, rehab centres, and investors in clinical infrastructure.",
    },
    {
      label: "Press",
      detail: "Clinical AI, digital health in India, and the rehab ecosystem. I give direct answers.",
    },
    {
      label: "Speaking",
      detail: "Keynotes, panels and workshops — see the speaking page for topics.",
    },
    {
      label: "Reader mail",
      detail: "Therapy for All and Planet Arka both. Slowest queue, always answered.",
    },
  ],

  /** Proof row on the home page — the "Objective" section. */
  proof: [
    {
      kicker: "Company",
      label: "TheraTreat",
      sub: "Founder & CEO",
      href: "/theratreat",
    },
    {
      kicker: "Publisher",
      label: "Arkorath Press",
      sub: "Therapy for All",
      href: "/writing/therapy-for-all",
    },
    {
      kicker: "Nonfiction",
      label: "Therapy for All",
      sub: "as Dr. Yogesh Shingane",
      href: "/writing/therapy-for-all",
    },
    {
      kicker: "Fiction",
      label: "The Survivvl",
      sub: "as YOG · Planet Arka #1",
      href: "/writing/the-survivvl-awakening-of-the-dark",
    },
    {
      kicker: "Profile",
      label: "LinkedIn",
      sub: "yogesh-shingane",
      href: "https://www.linkedin.com/in/yogesh-shingane", // TODO: Yog to review — keep in sync with `linkedin` above.
    },
  ],
} as const;
