// All page copy and sample data lives here, so wording changes don't touch components.

export const hero = {
  eyebrow: "Fraud consulting",
  title: "Stop losing money to fraud disputes",
  sub: "Chargebacks, friendly fraud and first-party claims, traced to the source and fought with evidence.",
  availability: "Taking 3 clients for Q4",
  // Illustrative sample figure on the hero card, not a claim
  sample: { label: "Disputes recovered / yr", value: "$1,412,800", bars: [40, 55, 35, 70, 100, 60], peak: 4 },
  card: {
    title: "Book a consultation",
    body: "30 minutes with the investigator who does the work.",
    cta: "Pick a time",
    metaTitle: "No sales team, no hand-offs",
    metaBody: "Personal reply within 1 business day",
  },
};

export const tilesTitle = "Follow the money, hop by hop, until it stops leaving";

export const diagnostic = {
  title: "Dispute diagnostic",
  lead: { value: "61%", label: "friendly fraud" },
  rows: [
    { label: "Friendly fraud", value: "$861k", pct: 61, lead: true },
    { label: "Stolen card, card not present", value: "$254k", pct: 18 },
    { label: "Item not received", value: "$169k", pct: 12 },
    { label: "Processing errors", value: "$127k", pct: 9 },
  ],
};

export const marqueeRows = [
  ["Chargebacks", "Friendly fraud", "Item not received", "Refund abuse", "Card testing"],
  ["First-party fraud", "Reason codes", "Account takeover", "Serial disputers", "Promo abuse"],
  ["Representment", "Dispute rate", "Stolen cards", "Triangulation", "Seller fraud"],
];

export const disputeCase = {
  id: "Dispute · DP-2291",
  status: "Won",
  steps: [
    { label: "Day 0", title: "Chargeback received" },
    { label: "Day 2", title: "Evidence pack built" },
    { label: "Day 3", title: "Representment filed" },
    { label: "Day 41", title: "$18,400 recovered" },
  ],
};

export const tileCaptions = [
  { eyebrow: "01 · Assess", text: "See which disputes are real fraud, which are friendly fraud, and what each costs." },
  { eyebrow: "02 · Prevent", text: "Stop the patterns that become disputes, without blocking good customers." },
  { eyebrow: "03 · Respond", text: "Fight each dispute with evidence, and win more back." },
];

export type Service = {
  icon: "search" | "shield-check" | "file-check" | "compass";
  eyebrow: string;
  title: string;
  time: string;
  body: string;
  gets: string[];
};

export const servicesIntro = {
  eyebrow: "Services",
  title: "Four ways to work together",
  body: "Most clients start with an assessment. Some come in when their dispute rate nears the card-scheme limit. Either way, the same investigator runs it from first call to handover.",
};

export const services: Service[] = [
  {
    icon: "search",
    eyebrow: "01 · Assess",
    title: "Dispute assessment",
    time: "4 weeks · fixed fee",
    body: "A review of your chargebacks, refunds and claims that separates real fraud from friendly fraud and errors, and shows what each costs a year.",
    gets: ["Every dispute sorted by reason code and root cause", "Your dispute rate against card-scheme limits", "Prioritised fix list and board-ready summary"],
  },
  {
    icon: "shield-check",
    eyebrow: "02 · Prevent",
    title: "Dispute prevention",
    time: "6–12 weeks",
    body: "Rules, checks and customer messaging that stop disputes before they are filed, built in your existing stack.",
    gets: ["Rules for serial disputers and first-party fraud", "Clearer billing descriptors and delivery proof", "Dashboards for dispute rate, win rate and approvals"],
  },
  {
    icon: "file-check",
    eyebrow: "03 · Respond",
    title: "Dispute response",
    time: "On demand",
    body: "Build the evidence and processes to fight the disputes you should win, and accept the ones you shouldn't.",
    gets: ["Evidence templates for each reason code", "Representment workflow for your team or processor", "Win-rate tracking by reason code and card network"],
  },
  {
    icon: "compass",
    eyebrow: "04 · Advise",
    title: "Ongoing advisory",
    time: "Monthly retainer",
    body: "A senior fraud and disputes lead on call for your team, without the full-time hire.",
    gets: ["Monthly dispute and loss review", "Early warning before you near scheme limits", "Sign-off on new products, markets and payment methods"],
  },
];

export const howIntro = {
  eyebrow: "How it works",
  title: "Weekly findings. No 90-page report.",
  body: "Start from a confirmed loss, work back through each hop, and close the gap at its source.",
};

export const steps = [
  { num: "01", when: "Day 1", title: "Consultation", body: "A 30-minute call on your disputes, losses and current controls." },
  { num: "02", when: "Weeks 1–2", title: "Trace the disputes", body: "Follow each dispute back to the order, account and control that let it through." },
  { num: "03", when: "Weeks 3–6", title: "Fix at the source", body: "Each gap sized in dollars and customer friction, then closed in order." },
  { num: "04", when: "Ongoing", title: "Hand over and monitor", body: "Your team owns the rules, dashboards and playbooks. Monthly check-ins after." },
];

export const industries = ["Payments", "Neobanks", "Lending", "E-commerce", "Marketplaces"];

export const contact = {
  eyebrow: "Book a consultation",
  title: "Know exactly where the money goes.",
  next: [
    { num: "01", title: "Personal reply in 1 business day", body: "With a few times that suit you." },
    { num: "02", title: "30-minute call", body: "Your products, losses and current controls. No slides." },
    { num: "03", title: "A one-page summary", body: "Your biggest exposure and a next step, whether or not you go ahead." },
  ],
  roles: ["Founder / CEO", "Head of Risk", "Head of Fraud", "Operations lead", "Payments lead", "Other"],
  concerns: ["Fraud disputes", "Chargebacks", "Friendly fraud", "Refund abuse", "Account takeover", "Payment fraud", "Not sure yet"],
};

export const footerLine = "© 2026 Sochana · Following the money, hop by hop";
