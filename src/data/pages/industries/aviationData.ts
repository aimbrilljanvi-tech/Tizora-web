// Aviation industry page. Section structure and core copy follow the aviation brief
// (hero, domain expertise, knowledge challenge, how Tizora helps, capabilities, teams,
// trust and governance, knowledge-to-action, featured use case, final CTA).
// Short descriptions under the capability and team names are plain restatements of those names.

export const AVIATION_URL = "https://www.tizora.ai/industries/aviation";

const U = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?q=80&w=${w}&auto=format&fit=crop`;

export const IMG = {
  hero: U("1542296332-2e4473faf563"),
  challenge: U("1569154941061-e231b4725ef1", 1200),
  helps: U("1529074963764-98f45c47344b", 1400),
  trust: U("1556388158-158ea5ccacbd", 1600),
  useCase: U("1464037866556-6812c9d1c72e", 1200),
  wing: U("1436491865332-7a61a109cc05", 900),
  wingPink: U("1517479149777-5f3b1511d5ad", 900),
  sky: U("1570710891163-6d3b5c47248b", 900),
  jet: U("1540962351504-03099e0a754b", 900),
  sunsetJet: U("1474302770737-173ee21bab63", 900),
  runway: U("1556388158-158ea5ccacbd", 900),
};

// Social/OG card: 1200x630 crop of the hero apron photo.
export const OG_IMAGE =
  "https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=1200&h=630&auto=format&fit=crop&crop=entropy&fm=jpg";

export const aviationSeo = {
  title: "AI Intelligence for Airport Operations",
  ogTitle: "AI Intelligence for Airport Operations | Tizora Aviation",
  description:
    "Tizora helps airports and airlines turn operational data, SOPs and real-time events into faster, explainable decisions: turnaround, gate and stand, and flight-disruption intelligence.",
  ogAlt: "Aircraft at a gate on an airport apron at sunset with ground-support vehicles alongside",
  keywords: [
    "aviation AI",
    "airport operations AI",
    "aircraft turnaround intelligence",
    "gate and stand management",
    "aircraft parking intelligence",
    "flight disruption management",
    "airport operations control centre",
    "aviation knowledge assistant",
    "ground handling coordination",
    "on-time performance",
  ],
  datePublished: "2026-09-25",
};

export const aviationFaq = [
  {
    q: "What does Tizora do for airport operations?",
    a: "Tizora helps aviation teams turn operational data, procedures, and real-time events into faster, more confident decisions. It connects operational systems and aviation documents, makes SOPs and airport rules easy to access, and highlights operational risks and exceptions.",
  },
  {
    q: "Which aviation teams is it designed for?",
    a: "Airport Operations Control Centres, airport duty managers, gate and stand planners, Airline Operations Control Centres, ground-handling supervisors, and station operations teams.",
  },
  {
    q: "What aviation capabilities does Tizora cover?",
    a: "An operational knowledge assistant, flight-disruption and delay intelligence, turnaround performance visibility, aircraft parking and gate/stand intelligence, alerting and exception management with operational dashboards, and knowledge search across manuals, SOPs, and procedures.",
  },
  {
    q: "Can answers be traced back to their source?",
    a: "Yes. Tizora preserves traceability to source data and procedures, gives source-linked and explainable AI responses, and keeps an audit-friendly decision history.",
  },
  {
    q: "How is access and control handled?",
    a: "Through role-based access to operational information and version-controlled procedures and documents, with integration into your existing operational systems.",
  },
  {
    q: "What is the Turnaround and Aircraft Parking Intelligence use case?",
    a: "Tizora is developing a focused airport-operations proof of concept to help teams identify turnaround delay risks, monitor gate and stand occupancy, and recommend suitable aircraft parking decisions.",
  },
];

export const aviationData = {
  hero: {
    label: "Aviation",
    title: "AI Intelligence for Airport Operations",
    description:
      "Tizora helps aviation teams turn operational data, procedures, and real-time events into faster, more confident decisions.",
    imageAlt: "Aircraft at a gate on an airport apron at sunset with ground-support vehicles alongside",
    cta: { label: "Talk to our team", href: "/contact" },
    secondaryCta: { label: "Explore the Case Study", href: "/insights/case-studies/aviation/aircraft-turnaround-management-software" },
  },

  expertise: {
    label: "Aviation domain expertise",
    title: "We understand the operational environment.",
    description: "Tizora is built around how airports and airlines actually run, hour by hour.",
    categories: [
      {
        name: "Airport operations",
        icon: "radar",
        image: IMG.runway,
        imageAlt: "Runway approach lights at dusk",
        details: ["Tizora brings operational data, procedures and real-time events together for airport operations and control centres.", "Teams see the context behind gate, stand and remote-bay decisions as the day changes."],
        items: ["Airport operations and airport control centres", "Gate, stand, and remote-bay management"],
      },
      {
        name: "Airline operations",
        icon: "plane",
        image: IMG.jet,
        imageAlt: "Business jet parked on an apron",
        details: ["Tizora helps airline operations teams stay aware of flight disruptions as they develop.", "On-time performance and operational compliance stay in view, with answers traceable to the source."],
        items: ["Airline operations and flight disruptions", "On-time performance and operational compliance"],
      },
      {
        name: "Turnaround and ground",
        icon: "users",
        image: IMG.challenge,
        imageAlt: "Passenger aircraft on the apron in front of an airport terminal",
        details: ["Tizora supports aircraft turnaround and ground handling coordination with clear status.", "Ground teams get the procedures that apply, without searching across systems and inboxes."],
        items: ["Aircraft turnaround coordination", "Ground handling coordination"],
      },
    ],
  },

  challenge: {
    label: "The aviation knowledge challenge",
    title: "Operational knowledge is scattered while the day keeps changing.",
    paragraphs: [
      "Information is spread across flight systems, turnaround plans, SOPs, emails, and operational teams.",
      "Delays and resource conflicts change throughout the day.",
      "Decisions need to be timely, explainable, and aligned with airport rules.",
    ],
    image: IMG.challenge,
    imageAlt: "Passenger aircraft on the apron in front of an airport terminal",
    dark: false,
    reverse: false,
  },

  helps: {
    label: "How Tizora helps",
    title: "From scattered information to confident decisions.",
    description:
      "One layer that connects what your teams already have and puts the right context in front of them.",
    image: IMG.helps,
    imageAlt: "Passenger aircraft on approach over an airport",
    features: [
      { icon: "01", title: "Connects operational systems and aviation documents", description: "Flight systems, turnaround plans, SOPs and operational data brought into one place." },
      { icon: "02", title: "Makes SOPs and airport rules easy to access", description: "Procedures and rules found in seconds, not searched for across inboxes and folders." },
      { icon: "03", title: "Highlights operational risks and exceptions", description: "Delays and resource conflicts surfaced as they develop." },
      { icon: "04", title: "AI-assisted recommendations with the relevant context", description: "Suggested actions that arrive together with the information behind them." },
      { icon: "05", title: "Preserves traceability to source data and procedures", description: "Every answer can be followed back to the data and procedure it came from." },
    ],
  },

  capabilities: {
    tagTitle: "Key aviation capabilities",
    heading: "Broader than any single use case.",
    items: [
      { number: "01", title: "Operational knowledge assistant", description: "Ask a question in plain language and get an answer grounded in your own procedures.", tags: ["Plain-language questions", "Source-linked answers"], image: { src: IMG.wing, alt: "Aircraft wing above the clouds" } },
      { number: "02", title: "Flight-disruption and delay intelligence", description: "See disruption and delay risk building, with the context needed to respond.", tags: ["Disruption risk", "Delay context"], image: { src: IMG.wingPink, alt: "Aircraft wing at dusk" } },
      { number: "03", title: "Turnaround performance visibility", description: "Track how turnarounds are progressing against plan.", tags: ["Turnaround status", "Performance against plan"], image: { src: IMG.sky, alt: "Passenger aircraft climbing through clouds" } },
      { number: "04", title: "Aircraft parking and gate/stand intelligence", description: "Understand gate and stand occupancy and support parking decisions.", tags: ["Gate occupancy", "Stand occupancy", "Parking decisions"], image: { src: IMG.jet, alt: "Business jet parked on an apron" } },
      { number: "05", title: "Alerting, exception management, and operational dashboards", description: "Alerts and dashboards that focus attention on what needs action.", tags: ["Alerts", "Exceptions", "Dashboards"], image: { src: IMG.sunsetJet, alt: "Business jet on the ground at sunset" } },
      { number: "06", title: "Aviation knowledge search across manuals, SOPs, and procedures", description: "One search across manuals, SOPs and procedures.", tags: ["Manuals", "SOPs", "Procedures"], image: { src: IMG.runway, alt: "Runway approach lights at dusk" } },
    ],
  },

  teams: {
    label: "Designed for aviation operations teams",
    title: "Built for the people who run the day.",
    items: [
      { number: "01", title: "Airport Operations Control Centre", description: ["A shared view of live airport operations."] },
      { number: "02", title: "Airport duty managers", description: ["The information needed to make timely operational calls."] },
      { number: "03", title: "Gate and stand planners", description: ["Visibility of gate and stand occupancy and conflicts."] },
      { number: "04", title: "Airline Operations Control Centre", description: ["Awareness of disruptions and their downstream effects."] },
      { number: "05", title: "Ground-handling supervisors", description: ["Clear turnaround status and the procedures that apply."] },
      { number: "06", title: "Station operations teams", description: ["Quick access to rules, procedures and source data."] },
    ],
  },

  trust: {
    feature2: {
      title: "Trust, governance, and control, where it matters most.",
      bullets: [
        "Role-based access to operational information",
        "Source-linked and explainable AI responses",
        "Version-controlled procedures and documents",
        "Audit-friendly decision history",
        "Integration with existing operational systems",
      ],
    },
    warehouse: { image: IMG.trust },
  },

  action: {
    tagTitle: "From knowledge to action",
    heading: "From your data and rules to answers your team can act on.",
    stats: [
      { value: "Inputs", label: "Operational data + SOPs + airport rules", description: "What your teams already have." },
      { value: "Intelligence", label: "Tizora AI intelligence", description: "Connects and understands it in context." },
      { value: "Outputs", label: "Alerts, answers, and recommended actions", description: "Delivered with traceability to the source." },
      { value: "Actions", label: "Timely, explainable operational decisions", description: "Made by your teams, aligned with airport rules." },
    ],
  },

  useCase: {
    label: "Featured aviation use case",
    title: "Turnaround & Aircraft Parking Intelligence",
    paragraphs: [
      "Tizora is developing a focused airport-operations POC to help teams identify turnaround delay risks, monitor gate/stand occupancy, and recommend suitable aircraft parking decisions.",
    ],
    image: IMG.useCase,
    imageAlt: "Passenger aircraft parked at an airport gate at dusk",
    dark: true,
    reverse: true,
    cta: { label: "Explore the Case Study", href: "/insights/case-studies/aviation/aircraft-turnaround-management-software" },
  },

  cta: {
    heading: "Bring AI Intelligence to Your Airport Operations",
    description: "Explore how Tizora can support a focused aviation operations proof of concept.",
    buttonText: "Talk to our team",
    buttonLink: "/contact",
  },
};
