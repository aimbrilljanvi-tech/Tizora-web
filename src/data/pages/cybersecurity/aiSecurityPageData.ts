import { TopicPageData } from '../topicPageTypes';

export const aiSecurityPageData: TopicPageData = {
  seo: {
    title: 'AI Cybersecurity — Securing AI Systems & Agents',
    description: 'AI systems fail in ways traditional software doesn’t. We secure LLM applications, RAG pipelines, and autonomous agents against prompt injection, data leakage, and model-layer attacks.',
    url: 'https://www.tizora.ai/cybersecurity/ai-security',
    image: 'https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto,w_1600/v1789108885/ai_security.png',
  },

  hero: {
    label: 'AI CYBERSECURITY',
    title: 'Your model is only as secure\nas the system around it.',
    description: 'Shipping an LLM feature introduces a class of risk your existing security tooling was never built to catch — prompt injection, data exfiltration through model output, and agents that take actions no one reviewed. We help engineering teams find those gaps before an attacker does.',
    buttonText: 'Book an AI security review',
    imageSrc: 'https://res.cloudinary.com/cjzo6qye/image/upload/v1791196303/ai_security-first_image.png',
  },

  stats: {
    tagTitle: 'HOW WE APPROACH IT',
    heading: 'A methodology built around how LLM systems actually fail.',
    items: [
      { value: 'OWASP', label: 'LLM Top 10 aligned', description: 'Every review is structured against the OWASP Top 10 for LLM Applications, not a generic infra checklist.' },
      { value: '3', label: 'Layers assessed', description: 'Model, orchestration/agent layer, and the data pipeline feeding it — attackers rarely stop at one.' },
      { value: 'Red team', label: 'adversarial testing', description: 'We attack the system the way a motivated user would, with crafted prompts and abuse chains.' },
      { value: 'Fix-ready', label: 'remediation plan', description: 'Findings ship with concrete engineering fixes, not just a severity score.' },
    ],
  },

  summary: {
    title: 'AI security is a different discipline than application security.',
    paragraph: 'A traditional web app has a fixed set of inputs and a predictable code path. An LLM-backed feature doesn’t — it accepts open-ended natural language, often from untrusted users, and turns that input into decisions, database queries, or tool calls. That gap between "what the model was told to do" and "what it can be tricked into doing" is where most AI-specific incidents actually happen, and it sits outside what a conventional penetration test or WAF is designed to catch. We work with engineering teams to close that gap at the architecture level, not just patch individual prompts after something goes wrong.',
    metadata: {
      location: 'Remote-first, global engagements',
      period: 'Point-in-time review or ongoing coverage',
      industry: 'AI Cybersecurity',
      services: ['LLM red-teaming', 'RAG & agent security', 'Guardrail design', 'Model risk assessment'],
    },
  },

  pillars: [
    {
      number: '01',
      title: 'Prompt injection & jailbreak resistance',
      description: 'We test whether your system prompt, tool definitions, and guardrails hold up against direct and indirect injection — including attacks hidden inside documents, web pages, or tool outputs the model reads, not just the user’s own message.',
      tags: ['Direct & indirect injection', 'Jailbreak resistance'],
      image: { src: 'https://res.cloudinary.com/cjzo6qye/image/upload/v1791196400/ai_security-covarge_areas_image_-1.png', alt: 'Prompt injection testing' },
    },
    {
      number: '02',
      title: 'Data leakage & sensitive information disclosure',
      description: 'RAG pipelines and fine-tuned models can surface training data, system prompts, or other users’ context if retrieval and output handling aren’t scoped correctly. We map exactly what a determined user could extract.',
      tags: ['RAG isolation', 'Output sanitization'],
      image: { src: 'https://res.cloudinary.com/cjzo6qye/image/upload/v1791196400/ai_security-covarge_areas_image-2.png', alt: 'Data pipeline security' },
    },
    {
      number: '03',
      title: 'Excessive agency in autonomous agents',
      description: 'An agent that can call APIs, write files, or execute code is only as safe as the permission boundary around it. We review tool-calling architectures for missing confirmation steps, over-broad scopes, and unchecked action chains.',
      tags: ['Tool-call scoping', 'Human-in-the-loop gates'],
      image: { src: 'https://res.cloudinary.com/cjzo6qye/image/upload/v1791196401/ai_security-covarge_areas_image-3.png', alt: 'Agent architecture review' },
    },
    {
      number: '04',
      title: 'Model & supply chain integrity',
      description: 'From third-party model weights to fine-tuning datasets and the vector store behind your RAG system, we assess where an untrusted or tampered component could compromise the pipeline before it reaches production.',
      tags: ['Dependency review', 'Provenance checks'],
      image: { src: 'https://res.cloudinary.com/cjzo6qye/image/upload/v1791196764/ai_security-covarge_areas_image-4.png', alt: 'Model supply chain review' },
    },
  ],

  framework: {
    title: 'What an AI security review actually covers.',
    description: 'We organize every engagement around the OWASP Top 10 for LLM Applications, mapped to the parts of your stack where each risk actually lives.',
    categories: [
      {
        name: 'Input & prompt layer', image: 'https://res.cloudinary.com/cjzo6qye/image/upload/v1791196324/ai_security-review-image_-1.png', details: ["The first place AI systems get attacked: direct and indirect prompt injection, jailbreak and guardrail bypass, insecure output handling, and data poisoning checks."],
        items: [
          'Prompt injection (direct & indirect)',
          'Jailbreak & guardrail bypass testing',
          'Insecure output handling downstream',
          'Training & fine-tuning data poisoning checks',
        ],
      },
      {
        name: 'Orchestration & agent layer', image: 'https://res.cloudinary.com/cjzo6qye/image/upload/v1791196341/ai_security-review-image_-2.png', details: ["Where agents act: excessive agency and tool-call scoping, plugin and function design, human-in-the-loop gates, and multi-agent trust boundaries."],
        items: [
          'Excessive agency & tool-call scoping',
          'Insecure plugin / function design',
          'Human-in-the-loop gate review',
          'Multi-agent trust boundary mapping',
        ],
      },
      {
        name: 'Data & infrastructure layer', image: 'https://res.cloudinary.com/cjzo6qye/image/upload/v1791196322/ai_security-review-image_-3.png', details: ["What sits underneath: sensitive information disclosure, RAG and vector store access control, model denial-of-service and cost abuse, and model theft."],
        items: [
          'Sensitive information disclosure',
          'RAG & vector store access control',
          'Model denial-of-service & cost abuse',
          'Model theft & extraction resistance',
        ],
      },
    ],
  },

  deepDive: {
    label: 'ENGINEERING PRACTICE',
    title: 'Guardrails belong in the architecture, not just the prompt.',
    description: 'A system prompt that says "don’t reveal confidential data" is a suggestion, not a control. We help teams build the layers that actually enforce it — before and after the model runs.',
    image: 'https://res.cloudinary.com/cjzo6qye/image/upload/v1791196765/ai_security-engennering_practice-image.png',
    features: [
      { icon: '01', title: 'Input & output validation', description: 'Structured schemas and content filters on both sides of the model call, so a crafted input can’t become an unchecked action or a leaked secret.' },
      { icon: '02', title: 'Least-privilege tool access', description: 'Every tool and API an agent can call is scoped to exactly what that workflow needs, with destructive actions gated behind explicit confirmation.' },
      { icon: '03', title: 'Isolated retrieval boundaries', description: 'RAG systems are architected so one user’s query can never retrieve another tenant’s or user’s indexed data, even under adversarial prompting.' },
      { icon: '04', title: 'Logging built for incident response', description: 'Full prompt/response/tool-call traces retained and structured so a security review — or a real incident — can be reconstructed after the fact.' },
    ],
  },

  process: {
    tagTitle: 'ENGAGEMENT',
    heading: 'How an AI security engagement runs.',
    steps: [
      { number: '01', title: 'Architecture mapping', description: 'We map every model call, tool integration, and data source in the system to understand the real attack surface — not just the chat interface a user sees.', image: 'https://res.cloudinary.com/cjzo6qye/image/upload/v1791197768/ai-security_angagement_img-1.png' },
      { number: '02', title: 'Adversarial testing', description: 'Structured red-teaming against the OWASP LLM Top 10, using crafted prompts, tool-abuse chains, and data-extraction attempts specific to your use case.', image: 'https://res.cloudinary.com/cjzo6qye/image/upload/v1791197767/ai-security_angagement_img-2.png' },
      { number: '03', title: 'Findings & risk scoring', description: 'Every issue is scored by exploitability and business impact, and grouped by the architectural layer it belongs to so fixes can be prioritized sensibly.', image: 'https://res.cloudinary.com/cjzo6qye/image/upload/v1791197767/ai-security_angagement_img-3.png' },
      { number: '04', title: 'Remediation & re-test', description: 'We work directly with your engineers on fixes — guardrail design, scope reduction, architectural changes — then re-test to confirm the gap is closed.', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop' },
    ],
  },

  faq: {
    tagTitle: 'FAQ',
    heading: 'Common questions on AI security engagements.',
    questions: [
      { q: 'How is this different from a regular penetration test?', a: 'A conventional pentest is built around fixed inputs, known endpoints, and code-level vulnerabilities like injection or broken auth. An LLM application accepts open-ended natural language and can be manipulated through the conversation itself — prompt injection, jailbreaks, and tool-call abuse don’t show up in a standard OWASP web scan. We test the model, the orchestration layer, and the data pipeline together, using techniques specific to how LLM systems actually get exploited.' },
      { q: 'Do you need access to our model weights or training data?', a: 'No. Most engagements are black-box or gray-box: we interact with your deployed system the way a real user or attacker would, and review architecture diagrams, tool definitions, and prompt templates where relevant. We only request deeper access — like fine-tuning data — if a specific finding requires it to confirm root cause.' },
      { q: 'We use a third-party model API (OpenAI, Anthropic, etc.) — is there still risk on our side?', a: 'Yes, and it’s usually the larger share of the risk. The model provider secures the model itself; everything around it — your system prompt, tool permissions, retrieval pipeline, output handling, and rate limiting — is your responsibility, and that’s exactly where most real-world incidents originate.' },
      { q: 'Can you review an agentic system that takes real actions, not just chat?', a: 'Yes — that’s often where the highest-impact findings are. We specifically test excessive agency: what happens when an agent with API or file-system access is manipulated into taking an action outside its intended scope, and whether your permission boundaries and confirmation steps actually hold.' },
      { q: 'What do we get at the end of the engagement?', a: 'A written report with every finding mapped to the OWASP LLM Top 10, severity and exploitability ratings, and concrete architectural recommendations — followed by direct engineering support to implement fixes and a re-test to confirm closure.' },
    ],
  },

  cta: {
    heading: 'Find the gap before it’s an incident.',
    description: 'Whether you’re shipping your first LLM feature or running production agents at scale, we’ll help you understand exactly where your AI system is exposed — and how to close it.',
    buttonText: 'Book an AI security review',
    buttonLink: '/contact',
  },
};
