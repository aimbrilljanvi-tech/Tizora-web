import { TopicPageData } from '../topicPageTypes';

export const applicationSecurityPageData: TopicPageData = {
  seo: {
    title: 'Application Security — Secure Development & Code Review',
    description: 'End-to-end application security: threat modeling, secure code review, SAST/DAST, dependency scanning, and manual penetration testing — built into your SDLC, not bolted on before launch.',
    url: 'https://www.tizora.ai/cybersecurity/application-security',
    image: 'https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto,w_1600/v1789109090/applicaiton-security.png',
  },

  hero: {
    label: 'APPLICATION SECURITY',
    title: 'Security that ships\nwith the code, not after it.',
    description: 'Most breaches don’t start with a zero-day — they start with a broken access control check, an unpatched dependency, or a misconfigured cloud bucket that shipped because no one was looking for it. We build application security into your SDLC so those gaps get caught in code review, not in an incident report.',
    buttonText: 'Get a security assessment',
    imageSrc: 'https://res.cloudinary.com/cjzo6qye/image/upload/v1791785310/application_security-first_-_image.png',
  },

  stats: {
    tagTitle: 'OUR COVERAGE MODEL',
    heading: 'Security testing that mirrors how software actually gets built.',
    items: [
      { value: 'SAST', label: '+ DAST + SCA', description: 'Static analysis, dynamic testing, and software composition analysis, cross-checked against manual review.' },
      { value: 'OWASP', label: 'Top 10 & ASVS aligned', description: 'Every assessment is structured against the OWASP Top 10 and Application Security Verification Standard.' },
      { value: 'Full SDLC', label: 'design to deploy', description: 'Threat modeling at design time, not just a scan the week before launch.' },
      { value: 'Manual', label: 'exploit verification', description: 'Every automated finding is manually verified — no report full of unconfirmed false positives.' },
    ],
  },

  summary: {
    title: 'Automated scanners find the easy 20%. The other 80% needs a human.',
    paragraph: 'Static and dynamic scanners are good at flagging known vulnerability patterns — outdated libraries, obvious injection points, missing headers. What they consistently miss is business-logic flaws: an authorization check that works for one role but not another, a workflow that lets a discount be applied twice, an API that trusts a client-side price. Those are the vulnerabilities that actually get exploited in the wild, and finding them takes an engineer who understands your application, not just a tool running a signature database against it. That’s the gap we fill — automated coverage for breadth, manual review for the vulnerabilities that matter.',
    metadata: {
      location: 'Remote-first, global engagements',
      period: 'One-time assessment or continuous coverage',
      industry: 'Application Security',
      services: ['Secure code review', 'Penetration testing', 'Threat modeling', 'DevSecOps integration'],
    },
  },

  pillars: [
    {
      number: '01',
      title: 'Secure code review',
      description: 'Manual, line-by-line review of authentication, authorization, session handling, and data-access logic — the categories of bugs that static analyzers reliably miss because they require understanding intent, not just syntax.',
      tags: ['Manual review', 'Business logic'],
      image: { src: 'https://res.cloudinary.com/cjzo6qye/image/upload/v1791785310/application-what-we-do-1.png', alt: 'Secure code review' },
    },
    {
      number: '02',
      title: 'Penetration testing',
      description: 'Black-box and authenticated testing against your live application, API, and infrastructure, run the way a real attacker would probe it — chained findings included, not just a list of isolated CVEs.',
      tags: ['Web & API', 'Authenticated testing'],
      image: { src: 'https://res.cloudinary.com/cjzo6qye/image/upload/v1791785316/application-what-we-do-2.png', alt: 'Penetration testing' },
    },
    {
      number: '03',
      title: 'Dependency & supply chain security',
      description: 'Every third-party package, container base image, and CI/CD dependency is checked for known vulnerabilities and license risk, with a clear remediation path when something needs an upgrade you can’t make blindly.',
      tags: ['SCA scanning', 'CI/CD hardening'],
      image: { src: 'https://res.cloudinary.com/cjzo6qye/image/upload/v1791785310/application-what-we-do-3.png', alt: 'Dependency and supply chain security' },
    },
    {
      number: '04',
      title: 'Cloud & infrastructure configuration',
      description: 'Misconfigured storage buckets, over-permissioned IAM roles, and exposed management ports account for a disproportionate share of real incidents. We audit your cloud posture alongside the application itself.',
      tags: ['IAM review', 'Config auditing'],
      image: { src: 'https://res.cloudinary.com/cjzo6qye/image/upload/v1791785310/application-what-we-do-4.png', alt: 'Cloud infrastructure security' },
    },
  ],

  framework: {
    title: 'Structured against the risks that actually get exploited.',
    description: 'Every engagement is mapped to the OWASP Top 10 and extended to cover API-specific and infrastructure risks the standard list doesn’t fully capture.',
    categories: [
      {
        name: 'Application layer', image: "https://res.cloudinary.com/cjzo6qye/image/upload/v1791785406/appliction-engagement-1.png", details: ["Where most exploited flaws start: broken access control, injection, authentication and session flaws, and insecure design and business logic."],
        items: [
          'Broken access control',
          'Injection (SQL, NoSQL, command)',
          'Authentication & session flaws',
          'Insecure design & business logic',
        ],
      },
      {
        name: 'API & integration layer', image: "https://res.cloudinary.com/cjzo6qye/image/upload/v1791785406/appliction-Structured-2.png", details: ["How your services talk to each other: object and function-level authorization, excessive data exposure, SSRF, and rate limiting."],
        items: [
          'Broken object & function-level authorization',
          'Excessive data exposure',
          'Server-side request forgery (SSRF)',
          'Rate limiting & resource exhaustion',
        ],
      },
      {
        name: 'Infrastructure & pipeline', image: "https://res.cloudinary.com/cjzo6qye/image/upload/v1791785406/appliction-Structured-3.png", details: ["What ships and runs the code: security misconfiguration, outdated components, CI/CD and build pipeline integrity, and logging and monitoring gaps."],
        items: [
          'Security misconfiguration',
          'Vulnerable & outdated components',
          'CI/CD & build pipeline integrity',
          'Logging & monitoring gaps',
        ],
      },
    ],
  },

  deepDive: {
    label: 'ENGINEERING PRACTICE',
    title: 'Secure by default, not secure by exception.',
    description: 'The cheapest vulnerability to fix is the one that never ships. We work with engineering teams to move security decisions earlier, so fewer findings surface after the fact.',
    image: 'https://res.cloudinary.com/cjzo6qye/image/upload/v1791785407/application-engineering-practice-image.png',
    features: [
      { icon: '01', title: 'Threat modeling at design time', description: 'New features get a lightweight threat model before implementation, so authorization boundaries and trust assumptions are explicit from day one.' },
      { icon: '02', title: 'SAST & SCA in CI', description: 'Static analysis and dependency scanning run on every pull request, catching known vulnerability classes before they merge — not at the next quarterly audit.' },
      { icon: '03', title: 'Secrets & configuration hygiene', description: 'No credentials in source control, no default configurations in production — enforced through tooling, not a policy document no one reads.' },
      { icon: '04', title: 'Incident-ready logging', description: 'Authentication events, authorization failures, and administrative actions are logged in a form that actually supports investigation, not just uptime monitoring.' },
    ],
  },

  quote: {
    quote: 'The vulnerabilities that actually get exploited are rarely the exotic ones. They’re the access-control check that works for one role and not another, shipped by a team that never had a security engineer look at the design before it went out.',
    author: 'Tizora Engineering',
    role: 'Application Security Practice',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
    companyName: 'Tizora',
  },

  process: {
    tagTitle: 'ENGAGEMENT',
    heading: 'How an application security engagement runs.',
    steps: [
      { number: '01', title: 'Scoping & threat modeling', description: 'We map the application’s attack surface, trust boundaries, and highest-value assets before testing begins, so effort goes where the real risk is.', image: 'https://res.cloudinary.com/cjzo6qye/image/upload/v1791785406/appliction-engagement-1.png' },
      { number: '02', title: 'Automated & manual testing', description: 'SAST, DAST, and SCA scans run alongside manual code review and hands-on penetration testing against the live application and its APIs.', image: 'https://res.cloudinary.com/cjzo6qye/image/upload/v1791785407/appliction-engagement-2.png' },
      { number: '03', title: 'Verified findings & impact', description: 'Every finding is manually verified and rated by real exploitability and business impact — no unconfirmed scanner noise in the final report.', image: 'https://res.cloudinary.com/cjzo6qye/image/upload/v1791785409/appliction-engagement-3.png' },
      { number: '04', title: 'Remediation & re-test', description: 'We work directly with engineers to fix confirmed issues, then re-test to verify closure before the engagement is marked complete.', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop' },
    ],
  },

  faq: {
    tagTitle: 'FAQ',
    heading: 'Common questions on application security engagements.',
    questions: [
      { q: 'What’s the difference between a vulnerability scan and a penetration test?', a: 'A scan is automated and flags known vulnerability signatures — it’s fast and broad but generates false positives and misses business-logic flaws entirely. A penetration test adds a human who thinks like an attacker: chaining low-severity issues together, testing authorization boundaries a scanner can’t reason about, and confirming what’s actually exploitable. We use both — automation for coverage, manual testing for the findings that matter.' },
      { q: 'Do you test production systems or only staging?', a: 'We strongly prefer a staging or dedicated test environment that mirrors production, to avoid any risk of disruption. Where production testing is required — for issues that only reproduce there — we scope it carefully with rate limits and a rollback plan agreed in advance.' },
      { q: 'How do you avoid a report full of low-value scanner noise?', a: 'Every automated finding is manually verified before it makes it into the report. If we can’t reproduce a real impact, it doesn’t get listed as a vulnerability — it gets noted separately as informational, if at all. You get a report you can act on, not one you have to triage yourself.' },
      { q: 'Can this integrate with our existing CI/CD pipeline?', a: 'Yes. We commonly wire SAST and dependency scanning directly into your pull-request checks, so known vulnerability classes are caught before merge rather than in a periodic audit months later.' },
      { q: 'How often should we run a full assessment?', a: 'For most teams shipping regularly, we recommend a full assessment at major release milestones or at least annually, with continuous automated scanning in between. Applications handling sensitive data or operating in regulated industries often warrant more frequent manual review.' },
    ],
  },

  cta: {
    heading: 'Know where your application actually stands.',
    description: 'From a single focused penetration test to full SDLC integration, we’ll help you find and fix what matters before it becomes an incident report.',
    buttonText: 'Get a security assessment',
    buttonLink: '/contact',
  },
};
