import { TopicPageData } from '../topicPageTypes';

export const dpdpCompliancePageData: TopicPageData = {
  seo: {
    title: 'DPDP Act Compliance — Data Protection Engineering',
    description: 'Operationalize India’s Digital Personal Data Protection Act: consent architecture, Data Principal rights, breach response, and Data Fiduciary obligations built into your product, not a policy PDF.',
    url: 'https://www.tizora.ai/compliance/dpdp',
    image: 'https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto,w_1600/v1789108823/dpdp.png',
  },

  hero: {
    label: 'DPDP COMPLIANCE',
    title: 'Compliance that lives\nin your code, not a binder.',
    description: 'India’s Digital Personal Data Protection Act applies to any organization processing the personal data of people in India, regardless of where the company is based. We help engineering and product teams turn its obligations — consent, data rights, breach response — into working systems, not a policy document that doesn’t match what the product actually does.',
    buttonText: 'Start a DPDP readiness review',
    imageSrc: 'https://res.cloudinary.com/cjzo6qye/image/upload/v1791803960/dpdp_compliance-first_image.png',
  },

  stats: {
    tagTitle: 'WHY IT’S DIFFERENT FROM A POLICY REWRITE',
    heading: 'DPDP compliance is a product and engineering problem, not just a legal one.',
    items: [
      { value: 'Consent', label: 'as a system, not a checkbox', description: 'Granular, itemized, and as easy to withdraw as it was to give — that’s an engineering requirement, not a clause.' },
      { value: '6', label: 'Data Principal rights', description: 'Access, correction, erasure, grievance redressal, nomination, and withdrawal — each needs a working flow, not a mailbox.' },
      { value: 'Breach', label: 'notification workflow', description: 'Detecting, assessing, and reporting a personal data breach on a clock starts with instrumentation, not intent.' },
      { value: 'Board-ready', label: 'documentation', description: 'Every control we help you build is documented in a form that holds up to Data Protection Board scrutiny.' },
    ],
  },

  summary: {
    title: 'The Act treats personal data protection as a design requirement.',
    paragraph: 'The Digital Personal Data Protection Act, 2023 is built around two roles: the Data Fiduciary (the organization deciding how and why data is processed) and the Data Principal (the individual the data belongs to). Every obligation in the Act — clear notice, purpose limitation, data minimization, timely breach reporting, and honoring a Data Principal’s rights — has to be true of your actual system at the moment a user interacts with it, not just true on paper. That’s the gap most compliance programs run into: a privacy policy can promise data minimization, but only the engineering behind data collection forms, retention jobs, and access-request handling can actually deliver it. We work at that layer.',
    metadata: {
      location: 'Remote-first, global engagements',
      period: 'Readiness review or ongoing compliance support',
      industry: 'Data Protection Compliance',
      services: ['Consent architecture', 'Rights fulfillment systems', 'Breach response design', 'DPO advisory support'],
    },
  },

  pillars: [
    {
      number: '01',
      title: 'Consent architecture',
      description: 'Consent under the Act has to be free, specific, informed, unconditional, and unambiguous — and as easy to withdraw as it was to give. We design the notice and consent flows, and the backend records, that make that true in practice.',
      tags: ['Granular consent', 'Consent Manager readiness'],
      image: { src: 'https://res.cloudinary.com/cjzo6qye/image/upload/v1791803962/dpdp_compliance-or-apporch-1.png', alt: 'Consent architecture design' },
    },
    {
      number: '02',
      title: 'Data Principal rights fulfillment',
      description: 'Access, correction, erasure, grievance redressal, and nominating another person to exercise rights on your behalf — each needs an operational flow with a defined response time, not an inbox someone checks eventually.',
      tags: ['Rights request flows', 'SLA-backed handling'],
      image: { src: 'https://res.cloudinary.com/cjzo6qye/image/upload/v1791803961/dpdp_compliance-or-apporch-2.png', alt: 'Data rights fulfillment workflow' },
    },
    {
      number: '03',
      title: 'Breach detection & notification',
      description: 'The Act requires notifying the Data Protection Board and affected Data Principals of a personal data breach. We build the detection and escalation pipeline so that clock starts the moment a breach is confirmed, not when someone happens to notice.',
      tags: ['Detection instrumentation', 'Escalation runbooks'],
      image: { src: 'https://res.cloudinary.com/cjzo6qye/image/upload/v1791803961/dpdp_compliance-or-apporch-3.png', alt: 'Breach detection pipeline' },
    },
    {
      number: '04',
      title: 'Significant Data Fiduciary readiness',
      description: 'Organizations designated as Significant Data Fiduciaries face heavier obligations — Data Protection Officers, independent data audits, and data protection impact assessments. We help you prepare for that tier before it’s mandatory, not after.',
      tags: ['DPIA processes', 'Audit-ready controls'],
      image: { src: 'https://res.cloudinary.com/cjzo6qye/image/upload/v1791803962/dpdp_compliance-or-apporch-4.png', alt: 'Data audit and impact assessment' },
    },
  ],

  framework: {
    title: 'The obligations we help you operationalize.',
    description: 'Organized around the three relationships the Act actually governs: the individual, the organization, and the regulator.',
    categories: [
      {
        name: 'Data Principal side', image: "https://res.cloudinary.com/cjzo6qye/image/upload/v1791803959/dpdp_compliance_we_help_you_-image-1.png", details: ["What individuals can see and ask for: itemized notice at collection, access and correction, erasure and withdrawal of consent, and nomination and grievance redressal.", "We check that each right can actually be exercised in your product."],
        items: [
          'Clear, itemized notice at collection',
          'Right to access & correction',
          'Right to erasure & withdrawal of consent',
          'Nomination & grievance redressal',
        ],
      },
      {
        name: 'Data Fiduciary side', image: "https://res.cloudinary.com/cjzo6qye/image/upload/v1791803959/dpdp_compliance_we_help_you_-image-2.png", details: ["What your organization owes: purpose limitation, data minimization, retention limits and deletion, children's data and parental consent, and cross-border transfer rules.", "We map these obligations to how your systems handle personal data."],
        items: [
          'Purpose limitation & data minimization',
          'Retention limits & deletion on purpose completion',
          'Children’s data & parental consent handling',
          'Cross-border transfer restrictions',
        ],
      },
      {
        name: 'Regulator & incident side', image: "https://res.cloudinary.com/cjzo6qye/image/upload/v1791803960/dpdp_compliance_we_help_you_-image-3.png", details: ["How you report and respond: Data Protection Board reporting, breach notification, Significant Data Fiduciary obligations and impact assessments.", "We review that the process is in place before it is needed."],
        items: [
          'Data Protection Board reporting',
          'Personal data breach notification',
          'Significant Data Fiduciary obligations',
          'Data protection impact assessments',
        ],
      },
    ],
  },

  deepDive: {
    label: 'ENGINEERING PRACTICE',
    title: 'Privacy-by-design, applied to what you’re already building.',
    description: 'We don’t hand you a policy template. We work inside your actual product — the signup form, the data model, the deletion job — so compliance holds up under real usage, not just a legal review.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1400&auto=format&fit=crop',
    features: [
      { icon: '01', title: 'Purpose-scoped data collection', description: 'Every field collected is tied to a stated purpose, so data minimization is enforced in the schema, not just claimed in the notice.' },
      { icon: '02', title: 'Automated retention & deletion', description: 'Retention limits are implemented as scheduled jobs against real data stores, so erasure obligations don’t depend on someone remembering to run a script.' },
      { icon: '03', title: 'Consent state as source of truth', description: 'Downstream systems — analytics, marketing tools, third-party integrations — check consent state before processing, not after the fact.' },
      { icon: '04', title: 'Audit trails by default', description: 'Every access, correction, and deletion request is logged in a form that supports both internal review and Data Protection Board inquiries.' },
    ],
  },

  statement: {
    title: 'A privacy notice is a promise. Your product is what actually keeps it.',
    bullets: [
      'Consent that’s granular in the notice but bundled in the database isn’t compliant consent — it’s a policy document describing a system that doesn’t exist.',
      'A right to erasure only holds up if deletion actually reaches every backup, replica, and downstream analytics table it was copied to.',
      'Cross-border transfer restrictions apply the moment data leaves the country, whether or not your architecture diagram was built with that boundary in mind.',
      'Regulators, auditors, and enterprise customers are increasingly asking to see the system, not just the policy.',
    ],
    image: 'https://res.cloudinary.com/cjzo6qye/image/upload/v1791803962/dpdp_compliance-the_gap.png',
  },

  process: {
    tagTitle: 'ENGAGEMENT',
    heading: 'How a DPDP readiness engagement runs.',
    steps: [
      { number: '01', title: 'Data mapping', description: 'We inventory what personal data you collect, why, where it flows, and who can access it — the foundation every other obligation depends on.', image: 'https://res.cloudinary.com/cjzo6qye/image/upload/v1791803960/dpdp_compliance-engagement-1.png' },
      { number: '02', title: 'Gap assessment', description: 'We compare your current consent, rights-handling, and breach-response processes against the Act’s requirements and flag exactly where product and engineering changes are needed.', image: 'https://res.cloudinary.com/cjzo6qye/image/upload/v1791803960/dpdp_compliance-engagement-2.png' },
      { number: '03', title: 'Design & build', description: 'We design and implement the consent flows, rights-request systems, and retention automation needed to close the gaps identified — working alongside your engineering team.', image: 'https://res.cloudinary.com/cjzo6qye/image/upload/v1791803960/dpdp_compliance-engagement-3.png' },
      { number: '04', title: 'Documentation & handover', description: 'You leave with working systems and the documentation — data maps, DPIAs, response runbooks — needed to demonstrate compliance to auditors, partners, or the Board.', image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1200&auto=format&fit=crop' },
    ],
  },

  faq: {
    tagTitle: 'FAQ',
    heading: 'Common questions on DPDP compliance.',
    questions: [
      { q: 'Does the DPDP Act apply to us if we’re not based in India?', a: 'Yes, if you process the personal data of individuals located in India in connection with offering goods or services to them. Location of incorporation doesn’t exempt an organization — what matters is whose data is being processed and in what context.' },
      { q: 'What counts as a Significant Data Fiduciary, and does that apply to us?', a: 'The government designates certain Data Fiduciaries as "Significant" based on factors like volume and sensitivity of data processed, and risk to the rights of Data Principals. That designation brings additional obligations — appointing a Data Protection Officer based in India, independent data audits, and data protection impact assessments. We help you assess where you currently stand and prepare for that tier if it’s a realistic trajectory.' },
      { q: 'How is this different from GDPR compliance we may already have?', a: 'There’s meaningful overlap in principles — consent, purpose limitation, data subject rights — but the DPDP Act has its own specific mechanics: a narrower, more consent-centric legal basis structure, a "Consent Manager" concept unique to the Indian framework, and different breach-notification and cross-border-transfer rules. Existing GDPR infrastructure is a strong starting point, not a substitute.' },
      { q: 'What happens if we have a personal data breach?', a: 'The Act requires notifying the Data Protection Board of India and, in relevant cases, the affected Data Principals. The practical challenge is almost always detection and internal escalation speed, not the notification itself — which is why we focus heavily on the instrumentation and runbooks that get a breach identified and reported before the delay itself becomes a compliance failure.' },
      { q: 'Can you help with the legal side too, or only engineering?', a: 'Our focus is the product and engineering work — consent flows, data architecture, rights fulfillment, breach response systems — that most compliance programs underinvest in. We work alongside your legal counsel or DPO rather than replacing them, and can support with the technical documentation they need.' },
    ],
  },

  cta: {
    heading: 'Find out where your product actually stands.',
    description: 'A DPDP readiness review maps your real data flows against the Act’s requirements — no generic checklist, no policy template that doesn’t match your product.',
    buttonText: 'Start a DPDP readiness review',
    buttonLink: '/contact',
  },
};
