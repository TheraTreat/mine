/**
 * /theratreat — the company page. All copy and stats live here.
 */
export const theratreat = {
  name: "TheraTreat",
  role: "Founder & CEO",
  oneLiner: "A clinical operating system for India's therapy and rehabilitation ecosystem.",

  /** TODO: Yog to review — confirm the live product domain. */
  url: "https://theratreat.in",

  problem: {
    title: "The problem",
    paras: [
      // TODO: Yog to review — first-draft copy; tighten numbers to what you actually cite.
      "Indian therapy practices run on paper files, WhatsApp forwards and memory. A therapist finishes a session and then writes it up after hours — or doesn't. The record stays in a drawer. The next clinician in the chain starts from zero.",
      "The cost isn't abstract: unpaid documentation time every single day, referrals that lose the clinical picture in transit, and no outcome data — which means no way to prove what therapy is worth to families, insurers or the health system.",
    ],
    /** TODO: Yog to review — placeholder figures; replace with the numbers you actually stand behind. */
    stats: [
      { value: "45–60 min", label: "of unpaid documentation per clinician, per day" },
      { value: "Paper + WhatsApp", label: "the de facto record system of Indian rehab" },
      { value: "≈ 0", label: "shared outcome measures across a typical referral chain" },
    ],
  },

  product: {
    title: "What TheraTreat is",
    paras: [
      "TheraTreat is the clinical and operational spine of a therapy practice in one system: intake, scheduling, documentation, outcome tracking and billing on a single patient record.",
      "It's built from inside the clinic, not projected onto it — the workflows match how Indian therapy practices actually run, from a solo practitioner's OPD to a multi-therapist rehab centre.",
    ],
    /** TODO: Yog to review — confirm the module list matches the live product. */
    modules: [
      "Intake & scheduling",
      "Clinical documentation",
      "Outcome tracking",
      "Billing & payments",
      "Referrals & shared records",
    ],
  },

  wedge: {
    name: "TheraDocs",
    tagline: "The wedge: voice-to-SOAP documentation in Marathi, Hindi and English.",
    paras: [
      "Documentation is the atomic unit of clinical truth — and the most hated task in the building. So that's where TheraTreat starts. TheraDocs turns a spoken session summary into a structured SOAP note, in the language the therapist actually thinks in.",
      "It's built for how Indian clinicians really speak: Marathi–English and Hindi–English code-switching, therapy vocabulary, and the shorthand of a busy OPD.",
    ],
    flow: [
      { step: "Speak", detail: "Summarise the session in Marathi, Hindi or English — 60 seconds, not 30 minutes." },
      { step: "Structure", detail: "TheraDocs drafts it as Subjective / Objective / Assessment / Plan." },
      { step: "Sign", detail: "The therapist reviews, edits and signs. Every note carries a clinician's name." },
      { step: "Follow", detail: "The record follows the patient — across sessions, therapists and referrals." },
    ],
    /** The accountability line — this is the clinical-AI position in one sentence. */
    principle: "The model drafts. The therapist signs. Accountability never leaves the clinician.",
    /** Demo snippet rendered on the page (Devanagari is intentional). */
    demo: {
      spokenLabel: "Spoken — Marathi",
      spoken: "“आज ग्रिप स्ट्रेंथ सुधारली आहे, बटण लावताना मदत कमी लागली…”",
      noteLabel: "Signed note — structured SOAP",
      note: [
        { k: "S", v: "Reports easier buttoning at home; less assistance needed." },
        { k: "O", v: "Grip strength improved vs. last session; fine-motor task tolerance up." },
        { k: "A", v: "Progressing toward independent dressing; grasp endurance still limiting." },
        { k: "P", v: "Continue graded resistive tasks; home programme upgraded; review in 1 wk." },
      ],
    },
  },

  audiences: ["Solo practitioners", "Multi-therapist clinics", "Rehab centres & hospitals"],

  cta: {
    title: "Design partners & investors",
    body: "If you run a therapy practice and want the documentation problem gone, or you invest in clinical infrastructure for India — I want to talk. Short call, straight answers, live product.",
    emailSubject: "TheraTreat — design partner / investor enquiry",
  },
} as const;
