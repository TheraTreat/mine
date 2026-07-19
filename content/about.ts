/**
 * /about — narrative + timeline. The timeline renders top-down in array order.
 */
export const about = {
  lede: "Clinic floor first. Everything else followed from there.",

  /** TODO: Yog to review — first-draft narrative in your voice; correct any detail that's off. */
  narrative: [
    "I'm an occupational therapist from Pune. My work started where all therapy starts: on the clinic floor — assessments, session plans, home programmes, and the slow, unglamorous business of helping people get function back.",
    "Every one of those sessions ended the same way: documentation. Notes written after the last patient left. Records that never followed the person they were about. Referrals travelling as WhatsApp forwards. Outcomes nobody could compare across two clinics, let alone a country. India's rehab ecosystem doesn't lack therapists — it lacks infrastructure.",
    "So I started building it. TheraTreat is the company I founded with my two brothers to give therapy practices an actual operating system: intake, scheduling, documentation, outcomes, billing — one clinical record instead of five apps and a drawer of paper. The wedge is TheraDocs: speak the session in Marathi, Hindi or English, review the structured SOAP note, sign it. The therapist stays the author of the record; the software just stops the record from being the worst part of the job.",
    "I also write. Nonfiction as myself — Therapy for All, on making therapy part of everyday healthcare in India. Fiction as YOG — the Planet Arka series, which begins with The Survivvl: Awakening of the Dark. Two shelves, kept deliberately apart, but it's the same job on both: take an idea, give it structure, and get it to stand up and walk.",
  ],

  /** TODO: Yog to review — years and details are plausible placeholders; correct them. */
  timeline: [
    {
      year: "2019",
      title: "The clinic floor",
      detail:
        "Qualified as an occupational therapist. Caseloads across paediatric and neuro rehab in Pune — clinics, home visits, and every note written by hand.",
    },
    {
      year: "2021",
      title: "The documentation problem, firsthand",
      detail:
        "Evenings lost to paperwork. Watched good clinical records die in drawers while referrals travelled as WhatsApp forwards. Started sketching what a real system would look like.",
    },
    {
      year: "2023",
      title: "Therapy for All",
      detail:
        "Published with Arkorath Press — the case for therapy as everyday healthcare in India, not a last resort after everything else has failed.",
    },
    {
      year: "2024",
      title: "TheraTreat",
      detail:
        "Founded with my two brothers as co-founders: a clinical operating system for therapy and rehabilitation practices, built from inside the clinic.",
    },
    {
      year: "2025",
      title: "TheraDocs ships · Planet Arka begins",
      detail:
        "Shipped the documentation wedge — voice-to-SOAP in Marathi, Hindi and English. Published The Survivvl: Awakening of the Dark as YOG.",
    },
    {
      year: "2026",
      title: "The pilot cohort",
      detail:
        "Design-partner clinics in Pune on TheraTreat, with outcomes data accruing. Building the record India's rehab ecosystem can actually run on.",
    },
  ],
} as const;
