import { TopicPageData } from "../topicPageTypes";

export const vaptShopifyAppsPageData: TopicPageData = {
  seo: {
    title: "Shopify App VAPT & Security Assessment",
    description:
      "Preparing your Shopify App for enterprise procurement? Tizora assesses your security posture and helps prepare a VAPT / penetration test report — SAST/DAST/SCA scanning, manual testing, and OWASP Top 10 coverage.",
    url: "https://www.tizora.ai/cybersecurity/vapt-shopify-apps",
    image:
      "https://i.pinimg.com/736x/48/7c/1d/487c1d74a6c6c1a3add68dae3343647a.jpg",
  },

  hero: {
    label: "VAPT & SECURITY",
    title: "VAPT & Security Assessment for Shopify Apps",
    description:
      "Identify exploitable weaknesses before they become procurement blockers. Tizora tests your Shopify App, APIs, authentication flows, and integrations, then provides practical remediation guidance and security reporting for enterprise reviews.",
    buttonText: "Request a Shopify App Security Assessment",
    imageSrc:
      "https://res.cloudinary.com/cjzo6qye/image/upload/v1791802056/shopift_app-first_image.png",
  },

  hook: {
    heading:
      "Has a Customer Asked Your Shopify App for a VAPT/Security Report?",
    lead: "You're not alone.",
    body: [
      "Enterprise merchants and procurement teams may request a security assessment or penetration test report before approving a software product.",
      "Tizora can help you assess your Shopify App, identify security gaps, and prepare the appropriate security documentation.",
    ],
    buttonText: "Check My App",
  },

  stats: {
    tagTitle: "IS YOUR APP READY?",
    heading: "Is Your Shopify App Ready for a Security Review?",
    items: [
      {
        value: "Auth &",
        label: "session management",
        description:
          "How authentication and session handling stand up to real testing.",
      },
      {
        value: "API",
        label: "security",
        description:
          "Whether your app’s APIs enforce authorization and validate input correctly.",
      },
      {
        value: "OWASP",
        label: "Top 10 coverage",
        description:
          "Where your app stands against the industry-standard risk categories.",
      },
      {
        value: "Secrets &",
        label: "credential handling",
        description:
          "Whether credentials and secrets are stored and handled safely.",
      },
    ],
  },

  summary: {
    title: "What is a VAPT?",
    paragraph:
      "VAPT stands for Vulnerability Assessment and Penetration Testing. It is a combined methodology — automated scanning paired with manual exploitation testing — used to identify and validate security weaknesses in a product or service. The resulting report is commonly requested by enterprise security and procurement teams, in much the same way a VPAT documents accessibility conformance. For a Shopify App, this documentation can help communicate your security posture to potential customers, enterprise buyers, procurement teams, and other stakeholders.",
    metadata: {
      location: "Remote-first, global engagements",
      period: "Assessment, remediation support, or VAPT report preparation",
      industry: "Shopify App Security",
      services: [
        "Vulnerability assessment",
        "Penetration testing",
        "VAPT report preparation",
        "Remediation support",
      ],
    },
  },

  pillars: [
    {
      number: "01",
      title: "Web Application Security",
      description:
        "We assess the user-facing portions of your Shopify App against common vulnerability classes and OWASP Top 10 risks.",
      tags: ["OWASP Top 10", "Web app testing"],
      image: {
        src: "https://res.cloudinary.com/cjzo6qye/image/upload/v1791802176/shopify_app-what-we-test-img-1.png",
        alt: "Web application security assessment",
      },
    },
    {
      number: "02",
      title: "API Security",
      description:
        "We review whether your app’s APIs enforce authorization, validate input, and resist abuse without relying on the client alone.",
      tags: ["API testing"],
      image: {
        src: "https://res.cloudinary.com/cjzo6qye/image/upload/v1791802175/shopify_app-what-we-test-img-2.png",
        alt: "API security testing",
      },
    },
    {
      number: "03",
      title: "Authentication & Access Control",
      description:
        "We assess authentication flows, session management, and authorization boundaries for common weaknesses.",
      tags: ["Auth & sessions"],
      image: {
        src: "https://res.cloudinary.com/cjzo6qye/image/upload/v1791802174/shopify_app-what-we-test-img-3.png",
        alt: "Authentication and access control review",
      },
    },
    {
      number: "04",
      title: "Data Handling & Storage",
      description:
        "We examine how data is stored, encrypted, and transmitted, and how secrets and credentials are managed.",
      tags: ["Encryption", "Secrets handling"],
      image: {
        src: "https://res.cloudinary.com/cjzo6qye/image/upload/v1791802174/shopify_app-what-we-test-img-4.png",
        alt: "Data handling and storage review",
      },
    },
    {
      number: "05",
      title: "Third-Party & Webhook Integrations",
      description:
        "We review Shopify webhook handling, third-party integrations, and dependency/supply-chain risk.",
      tags: ["Webhooks", "Supply chain"],
      image: {
        src: "https://res.cloudinary.com/cjzo6qye/image/upload/v1791802173/shopify_app-what-we-test-img-5.png",
        alt: "Third-party and webhook integration review",
      },
    },
    {
      number: "06",
      title: "Security Report & Remediation Guidance",
      description:
        "Based on the assessment, we can help prepare a VAPT / penetration test report with prioritized remediation guidance.",
      tags: ["VAPT report"],
      image: {
        src: "https://res.cloudinary.com/cjzo6qye/image/upload/v1791802173/shopify_app-what-we-test-img-6.png",
        alt: "Security report preparation",
      },
    },
  ],

  framework: {
    title: "Security documentation for Shopify Apps commonly covers:",
    description:
      "Shopify App developers increasingly work with merchants that have security requirements as part of their procurement, compliance, or enterprise onboarding process. Your app may need a security assessment covering areas such as:",
    categories: [
      {
        name: "Access & authentication", image: "https://res.cloudinary.com/cjzo6qye/image/upload/v1791802056/shopify_app-VAPT-1.png", details: ["Authentication and session management, access control and authorization, and how secrets and credentials are handled."],
        items: [
          "Authentication & session management",
          "Access control / authorization",
          "Secrets & credential handling",
        ],
      },
      {
        name: "Application & data", image: "https://res.cloudinary.com/cjzo6qye/image/upload/v1791802056/shopify_app-VAPT-2.png", details: ["API security, data storage and encryption, and input validation and injection risks."],
        items: [
          "API security",
          "Data storage & encryption",
          "Input validation & injection risks",
        ],
      },
      {
        name: "Platform & supply chain", image: "https://res.cloudinary.com/cjzo6qye/image/upload/v1791802056/shopify_app-VAPT-3.png", details: ["Third-party integrations and webhooks, rate limiting and abuse prevention, dependency and supply-chain risk, and OWASP Top 10 coverage."],
        items: [
          "Third-party integrations & webhooks",
          "Rate limiting & abuse prevention",
          "Dependency & supply-chain risk",
          "OWASP Top 10 coverage",
        ],
      },
    ],
  },

  deepDive: {
    label: "HOW WE HELP",
    title:
      "Turn security findings into a stronger Shopify App and a clearer procurement conversation.",
    description:
      "A VAPT should do more than list vulnerabilities. We connect each finding to the way your app works, explain the business risk, and give your developers a practical route to remediation.",
    image:
      "https://res.cloudinary.com/cjzo6qye/image/upload/v1791802177/shopify-app-how_we_help.png",
    imageAlt: "Security team reviewing application risk findings on a laptop",
    features: [
      {
        icon: "01",
        title: "Built for Shopify App architectures",
        description:
          "We assess the app, APIs, webhooks, admin surfaces, and integrations that make your Shopify product work in the real world.",
      },
      {
        icon: "02",
        title: "Findings your developers can use",
        description:
          "You receive clear evidence, severity context, and remediation guidance instead of an unexplained scanner export.",
      },
      {
        icon: "03",
        title: "Coverage beyond automated scans",
        description:
          "Automated SAST, DAST, and SCA checks are combined with manual testing of authentication, authorization, APIs, and key workflows.",
      },
      {
        icon: "04",
        title: "A report that supports your next deal",
        description:
          "We tailor the scope and final VAPT documentation to the security questions raised by your merchant or enterprise buyer.",
      },
    ],
  },

  process: {
    tagTitle: "ENGAGEMENT",
    heading:
      "A practical path from security testing to procurement-ready reporting",
    steps: [
      {
        number: "01",
        title: "Scope",
        description:
          "We start with the workflows, APIs, integrations, and buyer requirements that matter to your Shopify App.",
        image:
          "https://res.cloudinary.com/cjzo6qye/image/upload/v1791802173/shopify-enagement-1.png",
        bullets: [
          "Your app architecture and APIs",
          "The security requirement your customer raised",
          "Testing boundaries to avoid disruption",
        ],
      },
      {
        number: "02",
        title: "Test",
        description:
          "We combine SAST, DAST, and SCA scanning with manual testing of the routes an attacker could use to reach sensitive data or actions.",
        image:
          "https://res.cloudinary.com/cjzo6qye/image/upload/v1791802172/shopify-enagement-2.png",
        bullets: [
          "Automated SAST/DAST/SCA scanning",
          "Manual penetration testing of key workflows",
          "Authentication and API testing",
        ],
      },
      {
        number: "03",
        title: "Identify",
        description:
          "You receive verified findings with severity, affected components, evidence, and a clear explanation of potential impact.",
        image:
          "https://res.cloudinary.com/cjzo6qye/image/upload/v1791802172/shopify-enagement-3.png",
        bullets: [
          "Verified vulnerabilities with severity ratings",
          "Mapped against OWASP Top 10",
          "Clear, actionable next steps",
        ],
      },
      {
        number: "04",
        title: "Remediate",
        description:
          "Your team can work through prioritized fixes with practical guidance from engineers who understand the underlying product context.",
        image:
          "https://images.unsplash.com/photo-1522071901873-411886a10004?q=80&w=1200&auto=format&fit=crop",
        bullets: [
          "Your team implements the fixes",
          "Tizora available for engineering support",
          "Guidance on prioritization",
        ],
      },
      {
        number: "05",
        title: "Report",
        description:
          "We help turn the assessment into a professional VAPT or penetration test report that answers the questions your buyer is asking.",
        image:
          "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1200&auto=format&fit=crop",
        bullets: [
          "VAPT / penetration test report prepared",
          "Documentation matched to what was requested",
          "Ready to share with procurement teams",
        ],
      },
      {
        number: "06",
        title: "Re-test",
        description:
          "A focused follow-up assessment confirms that the agreed fixes work and gives you stronger evidence for the procurement review.",
        image:
          "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop",
        bullets: [
          "Follow-up assessment after fixes",
          "Confirms vulnerabilities are resolved",
          "Confirms readiness for review",
        ],
      },
    ],
  },

  faq: {
    tagTitle: "FAQ",
    heading: "Common questions on Shopify App VAPT & security.",
    questions: [
      {
        q: "Does my Shopify App need a VAPT?",
        a: "It depends on your customers, target market, procurement requirements, and applicable security obligations. A VAPT / penetration test report may be requested by enterprise or government customers as part of their security evaluation.",
      },
      {
        q: "Is VAPT the same as a security audit?",
        a: "Not exactly. A security audit is typically a broader review of policies, processes, and controls, while a VAPT is a combined methodology — automated vulnerability scanning plus manual penetration testing — focused specifically on identifying and validating exploitable weaknesses in an application.",
      },
      {
        q: "Can you test a live Shopify App?",
        a: "Yes. Tizora can assess an existing live Shopify App and its relevant workflows and APIs, scoped carefully to avoid disruption.",
      },
      {
        q: "Can you fix the security issues?",
        a: "Yes. Tizora can provide remediation guidance and, depending on the engagement, development support to address identified issues.",
      },
      {
        q: "Can you provide the VAPT report after testing?",
        a: "Yes, where appropriate. The assessment findings can be used to support preparation of the relevant security report for procurement or compliance purposes.",
      },
      {
        q: "How long does a Shopify App security assessment take?",
        a: "The timeline depends on the application’s complexity, number of workflows and APIs, technology stack and required scope. Tizora can provide an estimated timeline after reviewing your app and requirements.",
      },
    ],
  },

  preFormNudge: {
    heading: "Already Been Asked for a VAPT?",
    body: [
      "Don't wait until your app is blocked during procurement or review.",
      "If a merchant, enterprise customer, marketplace, or procurement team has asked your Shopify App business for a security or penetration test report, tell us what they require.",
      "We'll review the requirement and suggest the appropriate assessment and reporting approach.",
    ],
    ctaText: "Get a Shopify App Security Assessment",
  },

  cta: {
    heading: "Get a Shopify App Security Assessment",
    description:
      "A VAPT request during procurement doesn’t have to stall your deal — tell us what your customer needs and we’ll help you get there.",
    buttonText: "Request an assessment",
    buttonLink: "/contact",
  },
};
