import { TopicPageData } from '../topicPageTypes';

export const vpatAccessibilityPageData: TopicPageData = {
  seo: {
    title: 'VPAT & Accessibility — WCAG Conformance & Documentation',
    description: 'WCAG 2.1/2.2 AA accessibility audits, remediation, and VPAT / Accessibility Conformance Report documentation — tested with real assistive technology, not just automated scans.',
    url: 'https://www.tizora.ai/compliance/vpat-accessibility',
    image: 'https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto,w_1600/v1789109139/VPAT_ACCESSIBILITY.png',
  },

  hero: {
    label: 'VPAT & ACCESSIBILITY',
    title: 'Accessible enough to pass\na screen reader, not just a scanner.',
    description: 'A VPAT is only as trustworthy as the testing behind it. We audit against WCAG 2.1/2.2 AA with real assistive technology — screen readers, keyboard-only navigation, voice control — and produce the Accessibility Conformance Report procurement teams actually rely on.',
    buttonText: 'Request an accessibility audit',
    imageSrc: 'https://res.cloudinary.com/cjzo6qye/image/upload/v1791807284/vpat-accessibility-first_image.png',
  },

  stats: {
    tagTitle: 'HOW WE TEST',
    heading: 'A conformance report is only as credible as the testing behind it.',
    items: [
      { value: 'WCAG 2.1 AA', label: 'baseline standard', description: 'The conformance level we test against by default, extending to 2.2 and AAA criteria on request.' },
      { value: 'Manual +', label: 'assistive tech testing', description: 'Real screen reader, keyboard-only, and voice-control testing — automated scanners catch roughly a third of issues at most.' },
      { value: 'Section 508', label: '& EN 301 549 mapped', description: 'Every finding is mapped to the US and EU regulatory frameworks your VPAT needs to reference.' },
      { value: 'ACR', label: 'ready for procurement', description: 'A completed Accessibility Conformance Report your sales and legal teams can hand to enterprise buyers directly.' },
    ],
  },

  summary: {
    title: 'Automated scanners catch the syntax. They miss the experience.',
    paragraph: 'An automated accessibility scanner can tell you an image is missing alt text. It can’t tell you that your alt text is technically present but meaningless, that your custom dropdown is invisible to a screen reader despite looking fine visually, or that a modal traps keyboard focus and can’t be closed without a mouse. Industry research consistently finds that automated tools catch only a fraction of real WCAG failures — the rest requires a person navigating the product the way someone using assistive technology actually would. That’s the gap between a scan result and a credible, audit-ready conformance report.',
    metadata: {
      location: 'Remote-first, global engagements',
      period: 'Audit, remediation, or ongoing conformance support',
      industry: 'Digital Accessibility',
      services: ['WCAG audits', 'Assistive tech testing', 'VPAT / ACR authoring', 'Remediation engineering'],
    },
  },

  pillars: [
    {
      number: '01',
      title: 'WCAG conformance audit',
      description: 'A structured audit against every applicable WCAG success criterion, organized by the four POUR principles — Perceivable, Operable, Understandable, Robust — with each finding tied to the specific criterion it violates.',
      tags: ['WCAG 2.1 / 2.2', 'POUR-structured'],
      image: { src: 'https://res.cloudinary.com/cjzo6qye/image/upload/v1791807289/vpat_-what_we-do-1.png', alt: 'WCAG accessibility audit' },
    },
    {
      number: '02',
      title: 'Assistive technology testing',
      description: 'Hands-on testing with screen readers (NVDA, JAWS, VoiceOver), keyboard-only navigation, and voice control — the categories of failure that automated scanning tools structurally cannot detect.',
      tags: ['Screen reader testing', 'Keyboard-only navigation'],
      image: { src: 'https://res.cloudinary.com/cjzo6qye/image/upload/v1791807281/vpat_-what_we-do-2.png', alt: 'Assistive technology testing' },
    },
    {
      number: '03',
      title: 'VPAT & ACR documentation',
      description: 'We author the completed Voluntary Product Accessibility Template — the Accessibility Conformance Report — mapped to WCAG, Section 508, and EN 301 549, in the format enterprise and government procurement teams expect.',
      tags: ['Section 508', 'EN 301 549'],
      image: { src: 'https://res.cloudinary.com/cjzo6qye/image/upload/v1791807282/vpat_-what_we-do-3.png', alt: 'VPAT documentation' },
    },
    {
      number: '04',
      title: 'Remediation engineering',
      description: 'Findings come with concrete implementation guidance — semantic markup, ARIA usage that actually helps rather than hurts, focus management — and we can implement the fixes directly alongside your team.',
      tags: ['Semantic markup', 'ARIA correctness'],
      image: { src: 'https://res.cloudinary.com/cjzo6qye/image/upload/v1791807287/vpat_-what_we-do-4.png', alt: 'Accessibility remediation engineering' },
    },
  ],

  framework: {
    title: 'Structured around WCAG’s own four principles.',
    description: 'Every audit finding is organized under the POUR framework WCAG itself is built on, so the report maps directly to the standard your VPAT will cite.',
    categories: [
      {
        name: 'Perceivable', image: "https://res.cloudinary.com/cjzo6qye/image/upload/v1791807470/vpat-strachured-1.png", details: ["Whether users can perceive your content: text alternatives, captions and audio descriptions, color contrast, and adaptable, distinguishable content.", "Each point is tested against the interface and recorded in the VPAT."],
        items: [
          'Text alternatives for non-text content',
          'Captions & audio descriptions',
          'Color contrast & use of color alone',
          'Content adaptable & distinguishable',
        ],
      },
      {
        name: 'Operable', image: "https://res.cloudinary.com/cjzo6qye/image/upload/v1791807470/vpat-strachured-2.png", details: ["Whether users can operate the interface: full keyboard access, no keyboard traps, enough time, no seizure-inducing content, and clear navigation and focus order."],
        items: [
          'Full keyboard accessibility',
          'No keyboard traps',
          'Enough time & no seizure-inducing content',
          'Clear navigation & focus order',
        ],
      },
      {
        name: 'Understandable & Robust', image: "https://res.cloudinary.com/cjzo6qye/image/upload/v1791807470/vpat-strachured-3.png", details: ["Whether the interface is predictable and works with assistive technology: readable interfaces, input assistance and error identification, valid semantic markup."],
        items: [
          'Readable, predictable interfaces',
          'Input assistance & error identification',
          'Valid, semantic markup',
          'Compatibility with assistive technologies',
        ],
      },
    ],
  },

  deepDive: {
    label: 'ENGINEERING PRACTICE',
    title: 'Accessibility fixes that hold up, not just pass a re-scan.',
    description: 'It’s possible to satisfy an automated checker without actually fixing the experience for someone using a screen reader. We build fixes that address the underlying markup and interaction pattern, not just the flagged attribute.',
    image: 'https://res.cloudinary.com/cjzo6qye/image/upload/v1791807382/vpat-engineering_practice-image.png',
    features: [
      { icon: '01', title: 'Semantic HTML first', description: 'Native elements and landmarks over ARIA patches wherever possible — the most reliable accessibility is the kind the browser and assistive tech already understand.' },
      { icon: '02', title: 'Focus management that makes sense', description: 'Modals, menus, and dynamic content manage keyboard focus predictably, so navigation never gets silently trapped or lost.' },
      { icon: '03', title: 'Meaningful alternative text', description: 'Alt text and ARIA labels describe function and content, not just satisfy a linter — the difference between "image" and something a screen reader user can actually act on.' },
      { icon: '04', title: 'Contrast & scalability by design', description: 'Color contrast and text-resize behavior are checked against real WCAG thresholds during design review, not discovered during a pre-launch audit.' },
    ],
  },

  comparison: {
    label: 'A DISTINCTION WORTH MAKING',
    title: 'Passing a scanner isn’t the same as passing a screen reader.',
    paragraphs: [
      'An automated tool can confirm an image has an alt attribute. It can’t tell you the alt text reads "image047.png" to someone who can’t see the image itself.',
      'It can flag a contrast ratio. It can’t tell you a custom dropdown is completely invisible to a screen reader, or that a modal traps keyboard focus with no way out.',
      'A conformance report built on scanner output alone tends to fall apart the moment a real assistive-technology user — or a skeptical procurement reviewer — actually tries the product.',
    ],
    image: 'https://res.cloudinary.com/cjzo6qye/image/upload/v1791807283/vpat-a_distinction_worth_making_-image.png',
    reverse: true,
  },

  process: {
    tagTitle: 'ENGAGEMENT',
    heading: 'How an accessibility engagement runs.',
    steps: [
      { number: '01', title: 'Automated + manual audit', description: 'Automated scanning establishes baseline coverage, followed by manual testing with real assistive technology across your key user flows.', image: 'https://res.cloudinary.com/cjzo6qye/image/upload/v1791807382/vpat-engagement-1.png' },
      { number: '02', title: 'Findings mapped to WCAG', description: 'Every issue is documented against the specific WCAG success criterion it violates, with severity and user-impact context — not a raw tool export.', image: 'https://res.cloudinary.com/cjzo6qye/image/upload/v1791807384/vpat-engagement-2.png' },
      { number: '03', title: 'Remediation support', description: 'We provide implementation guidance or work directly in your codebase to fix confirmed issues, prioritized by user impact.', image: 'https://res.cloudinary.com/cjzo6qye/image/upload/v1791807383/vpat-engagement-3.png' },
      { number: '04', title: 'VPAT / ACR delivery', description: 'You receive a completed Accessibility Conformance Report mapped to WCAG, Section 508, and EN 301 549 — ready to hand to a customer or procurement team.', image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1200&auto=format&fit=crop' },
    ],
  },

  faq: {
    tagTitle: 'FAQ',
    heading: 'Common questions on VPAT & accessibility engagements.',
    questions: [
      { q: 'What exactly is a VPAT, and how is it different from an accessibility audit?', a: 'A VPAT (Voluntary Product Accessibility Template) is a standardized document format, published by the IT Industry Council, used to report how a product conforms to accessibility standards. The completed document is called an Accessibility Conformance Report (ACR). The audit is the testing work that determines what actually goes in it — a VPAT is only as credible as the testing behind it.' },
      { q: 'Is WCAG 2.1 AA a legal requirement?', a: 'It depends on jurisdiction and sector. It’s the technical standard referenced by regulations like the ADA (through case law in the US), Section 508 for US federal procurement, and the EN 301 549 standard in the EU. Many enterprise and government buyers also require a current VPAT as part of procurement regardless of whether a specific law mandates it for your product directly.' },
      { q: 'Can automated tools alone produce a valid VPAT?', a: 'We don’t recommend it, and most experienced procurement reviewers can tell the difference. Automated scanners reliably catch structural issues like missing alt text or insufficient color contrast, but structurally cannot evaluate things like whether a screen reader user can actually complete a checkout flow. A defensible ACR requires manual testing with real assistive technology.' },
      { q: 'How long does a full audit and VPAT take?', a: 'For a typical web application, a full WCAG 2.1 AA audit with manual assistive-technology testing and a completed VPAT usually takes two to four weeks, depending on the number of user flows and templates involved. Remediation timelines depend on the number and severity of findings.' },
      { q: 'Do you only test websites, or also native apps and documents?', a: 'We audit web applications, native mobile apps, and PDF or document-based content — each has its own applicable success criteria and testing approach, and we scope the engagement to match what you actually need conformance for.' },
    ],
  },

  cta: {
    heading: 'Get an ACR you can actually stand behind.',
    description: 'Whether you need a first VPAT for a procurement deal or a full remediation program, we’ll test it the way your users — and their assistive technology — actually experience it.',
    buttonText: 'Request an accessibility audit',
    buttonLink: '/contact',
  },
};
