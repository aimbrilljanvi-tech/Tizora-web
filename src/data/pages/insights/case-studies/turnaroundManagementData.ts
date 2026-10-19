// Case Study: Aircraft Turnaround Management Software (airport pilot).
//
// Copy follows the approved case-study document, word for word, for every section this template
// has, including the pilot results, pilot scope and client quote (added on the owner's
// confirmation that the pilot ran). Sections the template does not have (key takeaways, at a
// glance) are left out; the key features section and the
// related-reading links are not in the document and are unchanged.

import type { CaseStudyContent } from "./caseStudyTypes";

export const PAGE_URL =
  "https://www.tizora.ai/insights/case-studies/aviation/aircraft-turnaround-management-software";

const U = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?q=80&w=${w}&auto=format&fit=crop`;

const HERO_IMAGE =
  "https://res.cloudinary.com/cjzo6qye/image/upload/v1792405846/1_Sunrise_Ground_Operations_at_the_Airport.png";
const HERO_ALT =
  "Airport ground operations at sunrise";

// Case-study banner (logo, title, aircraft tail and ground crew on the apron). The original is a
// wide strip, so two fixed copies with extended sky and apron are stored: 1200x630 for link
// previews and 16:9 for listing cards.
const SHARE_IMAGE =
  "https://res.cloudinary.com/cjzo6qye/image/upload/f_jpg,q_80/v1790933132/case-studies/turnaround-share.png";
const CARD_IMAGE =
  "https://res.cloudinary.com/cjzo6qye/image/upload/v1790933127/case-studies/turnaround-card.png";
const BANNER_ALT =
  "Tizora case study banner reading Aircraft Turnaround Management Software for Airport Operations, beside a Tizora-branded aircraft tail on the apron with passenger stairs, a ground crew member and baggage carts";

const AVIATION = "/industries/aviation";
const LPR_CASE = "/insights/case-studies/parking/ai-lpr-parking-enforcement";
const CSTORE_CASE = "/insights/case-studies/retail/cstore-master";
const CORE_BANKING_CASE = "/insights/case-studies/fintech/core-banking";
const KYC_CASE = "/insights/case-studies/fintech/digital-kyc";

export const turnaroundManagementCaseStudy: CaseStudyContent = {
  id: "cs-turnaround",
  breadcrumbLabel: "Aircraft Turnaround Management",
  url: PAGE_URL,
  published: "2026-10-02",
  modified: "2026-10-09",
  inLanguage: "en",

  seo: {
    // 50 characters; " | Tizora" is added by the root layout.
    title: "Aircraft Turnaround Management Software Case Study",
    description:
      "How Tizora's turnaround management software flagged delay risk 18 minutes earlier and lifted on-time departures 7 points in an airport pilot.",
    // 1200x630 JPEG (~70 KB) so link previews show the image. The source banner is wider than
    // 1200x630, so Cloudinary extends the sky and apron above and below instead of cropping the text.
    ogImage: SHARE_IMAGE,
    ogImageAlt: BANNER_ALT,
    primaryKeyword: "aircraft turnaround management software",
    secondaryKeywords: [
      "turnaround delay prediction",
      "gate and stand management",
      "aircraft parking stand allocation",
      "A-CDM TOBT",
      "airport operations software",
    ],
  },

  card: { image: CARD_IMAGE, imageAlt: BANNER_ALT },

  schema: {
    about: [
      { "@type": "Thing", name: "Aircraft ground handling", sameAs: "https://en.wikipedia.org/wiki/Aircraft_ground_handling" },
      { "@type": "Thing", name: "Airport collaborative decision making", sameAs: "https://en.wikipedia.org/wiki/Airport_collaborative_decision_making" },
      { "@type": "Thing", name: "Airport apron", sameAs: "https://en.wikipedia.org/wiki/Airport_apron" },
      { "@type": "Thing", name: "Flight cancellation and delay", sameAs: "https://en.wikipedia.org/wiki/Flight_cancellation_and_delay" },
    ],
    mentions: [
      { "@type": "Organization", name: "EUROCONTROL", sameAs: "https://en.wikipedia.org/wiki/Eurocontrol" },
    ],
  },

  /* H1 + answer capsule */
  hero: {
    label: "Aviation · Airport operations · Turnaround management",
    title: "Aircraft turnaround management software that flags delay risk 18 minutes earlier",
    description:
      "Tizora piloted aircraft turnaround management software with a mid-size European airport. It joins flight schedules, gate and stand plans and SOPs into one live timeline per flight, flags delay risk early and recommends parking positions with the reasons behind them. Over a 12-week pilot, departure delays caused by turnarounds fell 22%, and on-time performance rose 7 points.",
    image: HERO_IMAGE,
    imageAlt: HERO_ALT,
    cta: { label: "Discuss a turnaround pilot", href: "/contact" },
    secondaryCta: { label: "See our aviation work", href: AVIATION },
    compactTitle: true,
    // Small turnaround readout in the bottom-left corner of the hero image (sample data, not a
    // real flight). It alternates an on-time turnaround with one where fuelling overruns.
    statusPanel: {
      title: "Stand C28 · Target 14:35",
      steps: ["Deboarding", "Cleaning", "Catering", "Fuelling", "Boarding"],
      doneText: "Ready for pushback",
      okText: "On time",
      delayed: {
        title: "Stand B14 · Target 16:10",
        step: 3,
        alertText: "Delay risk · fuelling late",
        doneText: "Late off blocks",
      },
    },
  },

  /* Key outcomes: pilot results */
  outcomes: {
    tagTitle: "Key outcomes",
    stats: [
      { value: "18 min", label: "Earlier delay-risk warning", description: "Average lead time before off-block" },
      { value: "+7 pts", label: "On-time performance", description: "78% → 85% departures within 15 min" },
      { value: "−22%", label: "Turnaround-caused delay minutes", description: "Pilot stands, 12 weeks" },
      { value: "−41%", label: "Last-minute stand changes", description: "Conflicts seen 30+ min ahead" },
    ],
  },

  /* The challenge */
  challenge: {
    label: "The challenge",
    title: "Why do aircraft turnarounds run late?",
    paragraphs: [
      "An aircraft turnaround is everything between on-blocks and off-blocks: deboarding, baggage, cleaning, catering, fuelling, checks and boarding, often run by different companies at once. Turnarounds rarely run late because nobody is working. They run late because nobody sees the problem early enough.",
      "At the pilot airport, status lived in the AODB, turnaround plans, SOP folders, emails and radio calls. Duty managers also needed every decision to be explainable: moving an aircraft to a remote stand means knowing which rule allows it and what happens to the next arrival.",
    ],
    bullets: [
      "Delay risk was usually spotted only 4 minutes before scheduled off-block",
      "31% of departure delay minutes on pilot stands came from turnaround tasks",
      "Stand conflicts were found by phone and radio, about 60 times a week",
      "The AODB and resource systems had to stay in place",
    ],
    image:
      "https://res.cloudinary.com/cjzo6qye/image/upload/v1792405846/2_Twilight_Airport_Ground_Operations.png",
    imageAlt:
      "Regional jet parked at gate C28 at dusk with the passenger boarding bridge attached and baggage belt loaders waiting on the apron",
    dark: false,
    reverse: false,
  },

  /* How it works */
  build: {
    heading: "How does the turnaround management system work?",
    description:
      "The software reads existing flight, stand and SOP data, builds one record per flight, tracks each task against plan, and scores delay risk when something runs late. It flags stand conflicts early and suggests parking positions with the rule behind them. People make every decision.",
    steps: [
      {
        label: "Connect",
        title: "One flight record",
        description: "AODB, schedule, stand plan and SOPs joined; inbound linked to outbound",
      },
      {
        label: "Track",
        title: "Live turnaround",
        description: "Each task tracked against plan, from on-blocks to off-blocks",
      },
      {
        label: "Predict",
        title: "Risk + conflicts",
        description: "Delay risk scored; stand occupancy checked against arrivals",
      },
      {
        label: "Act",
        title: "Alert + recommend",
        description: "Right role alerted with reasons; every decision logged",
      },
    ],
  },

  /* Architecture */
  architecture: {
    tagTitle: "Solution architecture",
    heading: "Aircraft turnaround management system architecture",
    paragraphs: [
      "The AODB and flight schedule, the gate and stand plan, and SOPs and airport rules feed an integration layer that keeps one record per flight. Three services work on that record: a turnaround tracker, a delay-risk engine and stand occupancy. Their output becomes recommendations with reasons and sources, delivered through an operations dashboard, alerts and a knowledge assistant. Role-based access and a decision history sit underneath.",
    ],
    // Architecture diagram redrawn from the document's Figure 1, hosted on Cloudinary.
    image:
      "https://res.cloudinary.com/cjzo6qye/image/upload/v1791544090/case-studies/turnaround-management-architecture.png",
    imageWidth: 3332,
    imageHeight: 948,
    imageAlt:
      "Aircraft turnaround management system architecture diagram. Three sources (AODB and schedule with flights and milestones, the gate and stand plan with positions and rules, and SOPs and manuals) feed an integration layer that keeps one record per flight. Turnaround intelligence services in Python and FastAPI work on that record: a milestone tracker, a delay-risk model and stand occupancy. Their output is a recommendation with its reason and source, delivered through a React operations dashboard, alerts to the right role and an SOP assistant with sourced answers. Role-based access and a decision history sit under every alert and recommendation.",
    caption:
      "Figure 1. Turnaround management architecture. Existing airport systems stay in place, and every recommendation carries its reasons and sources.",
    pointsTitle: "Three decisions that shaped the design",
    points: [
      {
        title: "Wrap, don't replace.",
        text: "It reads from the flight and stand systems already in use. Nothing had to be ripped out to start the pilot.",
      },
      {
        title: "People decide.",
        text: "Every alert and parking suggestion goes to a named role with the reason attached. The duty manager makes the call.",
      },
      {
        title: "Show the source every time.",
        text: "Each recommendation links to the data, SOP or airport rule it came from, so it can be checked on the spot.",
      },
    ],
  },

  /* Key features */
  features: {
    tagTitle: "Key features",
    heading: "What does the aircraft turnaround software do?",
    description:
      "Six capabilities, each built around a question operations teams ask many times a shift.",
    features: [
      {
        title: "Live turnaround timeline",
        description: "Where is this turnaround against its plan? One timeline per flight, updated as tasks start and finish.",
        bullets: ["Planned vs actual task times", "Inbound linked to outbound", "One view for every team"],
      },
      {
        title: "Turnaround delay risk alerts",
        description: "Which departures are at risk right now? Risk is flagged while there is still time to recover.",
        bullets: ["Late or long-running tasks", "Knock-on effect on departure", "Alerts sent to the right role"],
      },
      {
        title: "Gate and stand occupancy",
        description: "Which positions are busy, and until when? A live picture of gates, stands and remote bays.",
        bullets: ["Current occupancy", "Upcoming arrivals", "Conflicts shown ahead of time"],
      },
      {
        title: "Aircraft parking recommendations",
        description: "Where should this aircraft go? Suitable positions suggested when a gate or stand conflict appears.",
        bullets: ["Checked against airport rules", "Reason shown with each option", "Planner keeps the final say"],
      },
      {
        title: "SOP knowledge assistant",
        description: "What does the procedure say? Ask in plain language and get an answer from your own manuals and SOPs.",
        bullets: ["Plain-language questions", "Source-linked answers", "Version-controlled documents"],
      },
      {
        title: "Decision history",
        description: "What was decided, and why? A record of alerts, recommendations and actions for review.",
        bullets: ["Role-based access", "Audit-friendly history", "Input for post-operation reviews"],
      },
    ],
  },

  /* Tech stack, as listed in the case-study document. */
  techStack: {
    title: "What technology powers the turnaround platform?",
    description:
      "Python and FastAPI services keep one record per flight in PostgreSQL, with Redis for live state. A milestone tracker, delay-risk model and stand-occupancy service feed a React and TypeScript operations dashboard, an alerting service and an SOP assistant with source-linked answers. Everything runs in Docker with role-based access.",
    categories: [
      {
        name: "Data sources",
        description: "What the airport already has",
        items: [
          { name: "AODB integration" },
          { name: "Flight schedule data" },
          { name: "Gate & stand plan" },
          { name: "SOP & airport rule documents" },
        ],
      },
      {
        name: "Backend & APIs",
        description: "One record per flight, serving every screen",
        items: [
          { name: "Python" },
          { name: "FastAPI" },
          { name: "PostgreSQL" },
          { name: "Redis" },
          { name: "REST API + OpenAPI" },
        ],
      },
      {
        name: "Turnaround intelligence",
        description: "Tracks tasks, scores risk, prepares options",
        items: [
          { name: "Milestone tracker" },
          { name: "Delay-risk model" },
          { name: "Stand occupancy service" },
          { name: "Parking recommendation rules" },
        ],
      },
      {
        name: "Knowledge assistant",
        description: "Answers from manuals and SOPs",
        items: [
          { name: "Document search over SOPs" },
          { name: "Source-linked answers" },
          { name: "Version-controlled documents" },
        ],
      },
      {
        name: "Dashboards & alerts",
        description: "What controllers and planners see",
        items: [
          { name: "React" },
          { name: "TypeScript" },
          { name: "Operations dashboard" },
          { name: "Alerting service" },
        ],
      },
      {
        name: "Security & governance",
        description: "Controls expected before any pilot",
        items: [
          { name: "RBAC" },
          { name: "Decision audit log" },
          { name: "TLS encryption" },
          { name: "Docker" },
        ],
      },
    ],
  },

  hurdles: {
    label: "Hurdles",
    title: "What made the project hard, and how was it solved?",
    description:
      "Three problems shaped the pilot: milestone data that arrived late or not at all, alerts that risked being ignored, and controllers who needed to trust a recommendation before acting on it.",
    items: [
      {
        number: "01",
        title: "Missing and late milestones",
        description: ["About 1 in 6 ground-task timestamps arrived late or not at all. We inferred missing milestones from neighbouring tasks and flagged them as estimated, so the timeline stayed usable without hiding the gap."],
      },
      {
        number: "02",
        title: "Alert fatigue",
        description: ["Early builds raised 40+ alerts per shift. Raising only when the predicted off-block slip exceeded 5 minutes, and sending each alert to one named role, cut that to about 12, and more than 80% were acted on."],
      },
      {
        number: "03",
        title: "Trust in recommendations",
        description: ["Planners ignored suggestions they couldn't check. Showing the airport rule and next arrival behind each parking option raised acceptance from 35% in week 1 to 72% by week 8."],
      },
    ],
  },

  midCta: {
    text: "Losing minutes on the apron? See how a turnaround pilot could run on your existing flight and stand data.",
    buttonText: "Discuss a turnaround pilot",
    buttonHref: "/contact",
  },

  /* Results: pilot before/after */
  results: {
    tagTitle: "Results",
    heading: "What results did the turnaround pilot deliver?",
    description:
      "Across 4,800 turnarounds on the pilot stands, delay risk was flagged 18 minutes earlier, turnaround-caused delay minutes fell 22%, on-time performance rose from 78% to 85%, and last-minute stand changes dropped 41%.",
    columns: ["Metric", "Before", "After", "Change"],
    rows: [
      ["Delay-risk warning before off-block", "~4 min", "~22 min", "+18 min"],
      ["On-time departures (within 15 min)", "78%", "85%", "+7 pts"],
      ["Turnaround-caused delay minutes / week", "1,960", "1,530", "−22%"],
      ["Last-minute stand changes / week", "61", "36", "−41%"],
      ["Time to find the right SOP", "~6 min", "~40 s", "−89%"],
    ],
    method: {
      title: "Pilot scope",
      items: [
        "14 contact stands and 6 remote stands, Terminal 2, Apr–Jun 2026, compared with the same stands in Jan–Mar 2026.",
      ],
    },
  },

  quote: {
    quote:
      "Before, the first we heard of a late turnaround was the radio call at pushback. Now my controllers see it 20 minutes out, with the reason, and they still have time to fix it.",
    author: "Head of Airport Operations Control",
    role: "Mid-size European airport (name withheld at the client's request)",
  },

  learned: {
    label: "Lessons",
    title: "What did we learn?",
    items: [
      {
        number: "01",
        title: "Start with one flight record",
        description: ["Until inbound, outbound, stand and tasks sit in one record, every team argues from a different version of the day."],
      },
      {
        number: "02",
        title: "An alert without a reason is ignored",
        description: ["Teams act on a warning when it shows what's late, what it affects and which rule applies."],
      },
      {
        number: "03",
        title: "Keep people in charge",
        description: ["The software recommends and records. Stand changes and recovery actions stay with the duty manager."],
      },
    ],
  },

  fit: {
    headline: "Will this work for your airport or airline?",
    subline: "How it starts, typical timeline and what it connects to.",
    intro:
      "Yes, if you already have flight and stand data but still chase turnaround status by phone and radio. It fits airport operations control centres (AOCCs), gate and stand planners, airline operations control and ground-handling supervisors.",
    body: [
      "How it starts: A pilot on one terminal or a set of stands",
      "Typical timeline: 14 weeks to build, 12 weeks of pilot",
      "Connects to: Your AODB, stand plan and SOP library through an integration layer",
    ],
    imageSrc:
      "https://res.cloudinary.com/cjzo6qye/image/upload/v1792405847/3_Busy_Airport_Ramp_with_Ground_Crew.png",
    imageAlt: "Busy airport ramp with ground crew supporting aircraft turnaround operations",
  },

  /* FAQ: also feeds the FAQPage schema */
  faqs: {
    tagTitle: "Aircraft turnaround management FAQs",
    heading: "Frequently asked questions",
    questions: [
      {
        q: "What causes aircraft turnaround delays?",
        a: "A late inbound aircraft, ground tasks that start late or overrun, equipment or staff not at the stand in time, stand conflicts and slow communication between teams. Most are visible before the departure is lost.",
      },
      {
        q: "How does the software predict turnaround delays?",
        a: "It compares each task with its planned time. When one starts late or runs long, it works out the effect on off-block time and alerts the responsible team, with the task that caused it.",
      },
      {
        q: "How does it relate to A-CDM and TOBT?",
        a: "It supports Airport Collaborative Decision Making by showing how each turnaround is really progressing, which helps teams keep a realistic Target Off-Block Time (TOBT).",
      },
      {
        q: "Does it replace our AODB or resource management system?",
        a: "No. It reads from the systems you already run through an integration layer. They stay the system of record.",
      },
      {
        q: "Does the software move aircraft or change plans by itself?",
        a: "No. It recommends and records. Every stand change and recovery action is decided by a person.",
      },
    ],
  },

  disclosure: {
    text: "Airport name withheld under a confidentiality agreement. Results reflect this pilot's stands, traffic and measurement period and will vary for other operations. Tizora is not affiliated with EUROCONTROL, which is mentioned for industry context only.",
    links: [
      {
        label: "Related reading",
        items: [
          { label: "AI for airport operations", href: AVIATION },
          { label: "AI license plate recognition case study", href: LPR_CASE },
          { label: "CStore Master: eCommerce and AMR robotics", href: CSTORE_CASE },
          { label: "Core banking case study", href: CORE_BANKING_CASE },
          { label: "Digital KYC case study", href: KYC_CASE },
          { label: "Enterprise solutions", href: "/services/enterprise-solutions" },
          { label: "AI security", href: "/cybersecurity/ai-security" },
        ],
      },
    ],
  },

  related: {
    title: "More case studies",
    description:
      "More projects where Tizora connected live operational data to decisions people can trust.",
  },

  cta: {
    heading: "Want fewer late turnarounds?",
    description:
      "In 30 minutes, our team will look at your flight, gate and stand data and outline a focused turnaround pilot for your operation.",
    buttonText: "Discuss a turnaround pilot",
    buttonLink: "/contact",
    secondaryButtonText: "Request a reference call (under NDA)",
    secondaryButtonLink: "/contact",
  },
};
