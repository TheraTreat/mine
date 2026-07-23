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
  lede: "I believe meaningful impact comes from building across disciplines—where healthcare, technology, education, and storytelling come together to improve lives. My work reflects this philosophy through six interconnected roles.",

  roles: [
    {
      icon: "🩺",
      title: "Healthcare Entrepreneur",
      body: "As the Founder & CEO of TheraTreat, I am building a comprehensive digital ecosystem that makes rehabilitation services more accessible, connected, and patient-centered. My mission is to empower individuals, therapists, healthcare organizations, and communities through innovative solutions that improve access to quality therapy.",
      href: "/theratreat",
      linkLabel: "TheraTreat",
    },
    {
      icon: "🤖",
      title: "AI Innovator",
      body: "I am passionate about applying artificial intelligence to rehabilitation and digital health. My focus is on developing responsible, evidence-informed AI systems that support clinical decision-making, enhance patient engagement, and help healthcare professionals deliver more personalized care.",
      href: "/insights",
      linkLabel: "The thinking",
    },
    {
      icon: "📚",
      title: "Nonfiction Author",
      body: "Through Therapy for All, I aim to make rehabilitation knowledge understandable and accessible to everyone. By translating complex healthcare concepts into practical insights, I hope to empower patients, caregivers, students, and professionals to better understand the transformative role of therapy.",
      href: "/writing/therapy-for-all",
      linkLabel: "Therapy for All",
    },
    {
      icon: "✍️",
      title: "Fantasy Novelist",
      // Series: The Saga of Arka. Book title keeps the stylised double-v: The Survivvl.
      body: "Beyond healthcare, I explore the power of storytelling through The Saga of Arka, an original fantasy series beginning with The Survivvl: Awakening of the Dark. These stories are driven by themes of resilience, courage, sacrifice, and the choices that define individuals and civilizations.",
      href: "/writing/the-survivvl-awakening-of-the-dark",
      linkLabel: "The Survivvl",
    },
    {
      icon: "🎤",
      title: "Speaker",
      body: "I enjoy sharing ideas at conferences, universities, industry events, and leadership forums. My talks focus on the intersection of healthcare, artificial intelligence, entrepreneurship, innovation, leadership, and the future of rehabilitation, with the goal of inspiring meaningful action and collaboration.",
      href: "/speaking",
      linkLabel: "Talk topics",
    },
    {
      icon: "🌍",
      title: "Builder",
      body: "At the heart of everything I do is a commitment to building—whether it's healthcare platforms, AI solutions, educational resources, books, or communities. My long-term vision is to create products, knowledge, and stories that improve lives, inspire innovation, and leave a lasting positive impact on society.",
      href: "/about",
      linkLabel: "The arc",
    },
  ] satisfies VisionRole[],

  quote:
    "I don't aspire to build just a successful company. I aspire to build solutions that improve lives, knowledge that empowers people, and stories that inspire generations.",
} as const;
