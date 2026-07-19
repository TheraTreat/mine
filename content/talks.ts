/**
 * /speaking — topics and (eventually) past appearances.
 * Add past appearances to the array and they render automatically;
 * the styled empty state shows while it's empty.
 */
export type Appearance = {
  event: string;
  where: string;
  date: string;
  /** Optional link to recording / event page. */
  url?: string;
};

export const speaking = {
  lede: "Three talks I can deliver tomorrow. All of them come from practice, not slideware.",

  topics: [
    {
      title: "Clinical AI in rehab: what survives contact with the clinic floor",
      formats: ["Keynote", "Panel"],
      abstract:
        "Most healthcare AI dies between the demo and the OPD. This talk is about what's left after contact with real clinics: workflow before models, accountability before autonomy, and why the signature line — a clinician's name under every note — is the most important interface decision in clinical AI.",
    },
    {
      title: "Voice documentation in Indian languages: building TheraDocs",
      formats: ["Keynote", "Workshop"],
      abstract:
        "Turning spoken Marathi, Hindi and English into structured SOAP notes — code-switching, clinical vocabulary, and the unglamorous data reality of Indian clinics. A concrete build story: what worked, what failed, and why English-first tools quietly exclude most of India's clinicians.",
    },
    {
      title: "The clinician-founder: building the software you wish you'd been handed",
      formats: ["Fireside", "Panel"],
      abstract:
        "Seeing patients and shipping product — with my brothers as co-founders. Why domain founders should build the boring infrastructure, what clinical training does and doesn't prepare you for in a startup, and the case for staying on the clinic floor while you build.",
    },
  ],

  cta: {
    title: "Book me",
    body: "Conferences, med-tech and startup events, universities, podcasts. Tell me the audience, the format and the date — I'll confirm within a week.",
    emailSubject: "Speaking enquiry — [event name]",
  },

  /** Empty for now — the page shows a styled empty state until entries land here. */
  pastAppearances: [] as Appearance[],
};
