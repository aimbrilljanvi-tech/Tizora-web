import { caseStudiesGrid } from "../insights/case-studies/caseStudiesPageData";
import { BentoItem } from '../../../components/sections/C010_GridBento';
import { Search, PenTool, Lock, Cpu, Brain, Layers, Network, ShieldCheck, Palette, Cloud } from 'lucide-react';

export const seoData = {
  title: "AI Product Engineering",
  description: "Tizora builds AI products end to end — architecture, engineering, launch and ongoing support.",
  url: "https://www.tizora.ai",
  image: "https://res.cloudinary.com/cjzo6qye/image/upload/w_1200,h_630,c_fill,q_80/v1788860885/og.png"
};

export const heroData = {
  subtitle: "Tizora",
  title: "We run our own AI product in production. That's why we can put yours there.",
  buttonText: "Tell us what's stuck"
};

export const aboutData = {
  tagTitle: "Introducing Tizora",
  heading: "Tizora builds AI products end to end — architecture, engineering, launch and ongoing support.",
  paragraph1: "Contracting through Tizora Inc. in the US, with a 100+ engineer centre in India. We run our own AI product in production. That's why we can put yours there.",
  buttonText: "About our studio",
  buttonHref: "/about",
  imageSmall: "https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1789393333/home_1.jpg",
  imageLarge: "https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1789393381/home_-1_-2.jpg"
};

export const caseStudiesData = {
  tagTitle: "Selected work",
  heading: "Production,\nnot proofs of concept.",
  buttonText: "All case studies",
  buttonHref: "/insights/case-studies",
  studies: [
    {
      id: "lpr-case-study",
      type: "large",
      title: "AI-Enhanced LPR Parking Enforcement",
      description: "Improving license plate detection and permit validation in challenging real-world conditions.",
      video: "https://videos.pexels.com/video-files/36553218/15498626_640_360_25fps.mp4",
      bgColor: "bg-surface",
      link: "/insights/case-studies/parking/ai-lpr-parking-enforcement"
    },
    {
      id: "recomai",
      type: "standard",
      title: "RecomAI",
      description: "AI-driven recommendations and personalized commerce experiences built for scale.",
      industry: "eCommerce",
      image: "/images/case_studies/recomai.gif",
      bgColor: "bg-primary",
      link: "/products/recomai"
    },
    {
      id: "healthtech-main",
      type: "standard",
      category: "HealthTech",
      title: "AI-Powered\nWeight\nManagement",
      description: "Connected Health Data to Personalized Patient Intelligence for Gastric Balloon Patients.",
      industry: "Digital Health",
      video: "https://videos.pexels.com/video-files/8693324/8693324-hd_1920_1080_30fps.mp4",
      bgColor: "bg-primary",
      link: "/insights/case-studies/healthcare/weight-management"
    },
    {
      id: "patient-management",
      type: "standard",
      title: "AI-Ready Patient Management",
      description: "Engineering a connected healthcare platform for safer, more efficient medication management.",
      image: "https://i.pinimg.com/originals/b1/3d/a1/b13da1c9a349399f4f9f9270bb189946.gif",
      bgColor: "bg-[#00875a]",
      link: "/insights/case-studies/healthcare/ai-ready-patient-management-platform"
    },
    // Two cards that had no page behind them (Internal Operations Platform, FinTech & Mortgages)
    // are replaced by published case studies; title, description and image come from the listing.
    ...["cs-core-banking", "cs-digital-kyc"].map((id) => {
      const cs = caseStudiesGrid.studies.find((c) => c.id === id)!;
      return {
        id,
        type: "standard",
        title: cs.title,
        description: cs.description,
        image: cs.image,
        imageAlt: cs.imageAlt,
        bgColor: "bg-surface",
        link: cs.link,
      };
    }),
  ]
};

export const industriesData: BentoItem[] = [
  {
    id: 'finance',
    title: 'Financial Services',
    description: 'Deterministic ledgers, smart contracts, and AI-driven fraud detection systems.',
    imageSrc: 'https://i.pinimg.com/1200x/b8/77/30/b8773093bc6ef8bd253f09056366d8a3.jpg',
    backgroundColor: '#002A32',
    textColor: '#FFFFFF',
    spanClass: 'md:col-span-1 md:row-span-2',
    link: '/industries/fintech'
  },
  {
    id: 'healthcare',
    title: 'Healthcare and Medical',
    description: 'Next-generation patient data processing and compliance-first bio-tech architecture.',
    imageSrc: 'https://i.pinimg.com/1200x/ff/a2/d6/ffa2d6acd5e41a275965e429b1c8fe87.jpg',
    backgroundColor: '#67793D',
    textColor: '#FFFFFF',
    spanClass: 'md:col-span-2 lg:col-span-2',
    link: '/industries/healthcare'
  },
  {
    id: 'parking',
    title: 'Parking',
    description: 'AI-driven parking management and LPR enforcement.',
    imageSrc: 'https://i.pinimg.com/originals/6a/3d/c9/6a3dc9359743ddd0a69299b5efb76051.gif',
    backgroundColor: '#003640',
    textColor: '#FFFFFF',
    spanClass: '',
    link: '/industries/parking'
  },
  {
    id: 'ecommerce',
    title: 'eCommerce',
    description: 'High-performance platforms and inventory intelligence.',
    imageSrc: 'https://i.pinimg.com/originals/b6/85/1f/b6851ff17a77cfd21d747d3e9ce0b63d.gif',
    backgroundColor: '#111111',
    textColor: '#FFFFFF',
    spanClass: '',
    link: '/industries/ecommerce'
  },
  {
    id: 'aviation',
    title: 'Aviation',
    description: 'AI intelligence for airport operations: turnaround, gate and stand, and disruption decisions.',
    imageSrc: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=1200&auto=format&fit=crop',
    backgroundColor: '#FFFFFF',
    textColor: '#003640',
    spanClass: '',
    link: '/industries/aviation'
  }
];

export const servicesData = {
  tagTitle: "What we build",
  heading: "Flexible AI Digital Product Engineering Engagement Models",
  description: "Tizora draws a hard architectural line in every product we build: AI handles what requires judgement, deterministic logic handles what must be exact. Getting that boundary right is the most important decision in any AI product.",
  items: [
    {
      num: 'DISCIPLINE 01',
      title: 'Agentic & Applied AI',
      description: 'Where judgement is required. We build AI systems that reason, retrieve, and converse — grounded in your private data, with hard boundaries we define together.',
      whenToUse: 'Use when the answer cannot be hard-coded.',
      tags: ['Autonomous agents', 'RAG & Private data', 'Document intelligence', 'Conversations'],
      dark: true,
      img: 'https://images.unsplash.com/photo-1576859933843-859b68ba84a8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      num: 'DISCIPLINE 02',
      title: 'Deterministic & Decision Systems',
      description: 'Where the answer must be exact. Rules engines, financial ledgers, and penalty logic — built so every calculation is explainable, auditable, and immutable.',
      whenToUse: 'Use when the answer must be provably correct.',
      tags: ['Financial ledgers', 'Eligibility math', 'Penalty logic', 'Immutable audits'],
      dark: false,
      img: 'https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1789393520/What_we_build-2.jpg',
    },
    {
      num: 'DISCIPLINE 03',
      title: 'Platform Engineering & Cloud',
      description: 'Architecting resilient, scalable infrastructure. We construct secure cloud environments, automated CI/CD pipelines, and robust platform services that power your core applications.',
      whenToUse: 'Use for scalable foundations and operational excellence.',
      tags: ['Cloud Infrastructure', 'CI/CD Pipelines', 'Kubernetes', 'Security & Compliance'],
      dark: true,
      img: 'https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1789393519/What_we_build-3.jpg',
    },
    {
      num: 'DISCIPLINE 04',
      title: 'Data Architecture & Observability',
      description: 'Turning fragmented data into measurable intelligence. We design real-time data pipelines, telemetry systems, and observability layers so you always know what your systems are doing.',
      whenToUse: 'Use when data visibility and system monitoring are critical.',
      tags: ['Data Pipelines', 'Real-time Telemetry', 'Log Aggregation', 'System Observability'],
      dark: false,
      img: 'https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1789393519/What_we_build-4.jpg',
    },
    {
      num: 'DISCIPLINE 05',
      title: 'Search & Retrieval Systems',
      description: 'Making your data findable and useful. We build vector search, semantic retrieval, and hybrid search systems that power both AI features and everyday internal tools.',
      whenToUse: 'Use when your team or your AI needs to find the right answer fast.',
      tags: ['Vector search', 'Semantic retrieval', 'Hybrid search', 'Knowledge bases'],
      dark: true,
      img: 'https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1789393333/home_1.jpg',
    },
    {
      num: 'DISCIPLINE 06',
      title: 'Product & Frontend Engineering',
      description: 'Turning complex systems into interfaces people actually want to use. We build fast, accessible web and mobile experiences on top of the infrastructure we ship.',
      whenToUse: 'Use when the product needs to feel as good as the engineering behind it.',
      tags: ['Web apps', 'Mobile apps', 'Design systems', 'Accessibility'],
      dark: false,
      img: 'https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1789393381/home_-1_-2.jpg',
    },
    {
      num: 'DISCIPLINE 07',
      title: 'Integrations & Workflow Automation',
      description: 'Connecting your AI and systems to the tools your team already uses. We build integrations, webhooks, and automated workflows that remove manual busywork.',
      whenToUse: 'Use when work is falling through the cracks between systems.',
      tags: ['API integrations', 'Webhooks', 'Workflow automation', 'Third-party systems'],
      dark: true,
      img: 'https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1789393620/OUR_APPROACH-1.jpg',
    },
  ],
};

export const howWeWorkData = {
  label: "OUR APPROACH",
  title: "The most important decision in an AI product is usually where the AI stops.",
  tabs: [
    {
      id: "step1",
      icon: Search,
      title: "01. BOUNDARY DEFINITION",
      description: "We start by identifying exactly what needs human-like judgement versus what requires strict, rule-based execution.",
      features: [
        "Define probabilistic edge cases",
        "Map strict regulatory limits",
        "Identify human-in-the-loop nodes"
      ],
      imageSrc: "https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1789393620/OUR_APPROACH-1.jpg"
    },
    {
      id: "step2",
      icon: PenTool,
      title: "02. SYSTEM ARCHITECTURE",
      description: "Designing a robust architecture that seamlessly integrates deterministic logic with probabilistic AI models.",
      features: [
        "Decouple AI from core ledgers",
        "Design fallback mechanisms",
        "Ensure data immutability"
      ],
      imageSrc: "https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1789393620/OUR_APPROACH-2.jpg"
    },
    {
      id: "step3",
      icon: Lock,
      title: "03. DETERMINISTIC CORE",
      description: "Building the exact, auditable rules engine that guarantees your application's reliability and compliance.",
      features: [
        "Develop immutable rules engine",
        "Implement financial-grade maths",
        "Create 100% auditable trails"
      ],
      imageSrc: "https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1789393619/OUR_APPROACH-3.jpg"
    },
    {
      id: "step4",
      icon: Cpu,
      title: "04. AI ORCHESTRATION",
      description: "Deploying and managing advanced AI agents to handle edge cases, conversations, and unstructured data.",
      features: [
        "Deploy grounded agentic systems",
        "Implement continuous retrieval",
        "Manage unstructured parsing"
      ],
      imageSrc: "https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1789393619/OUR_APPROACH-4.jpg"
    }
  ]
};

export const sixPillarsData = {
  title: "The Six Pillars of AI-Native Engineering",
  description: "Here's what it actually takes to turn an AI idea into a product that works — from the first prototype to millions of users.",
  items: [
    {
      icon: Brain,
      title: "AI Engineering",
      description: [
        "We build real AI systems, not simple chatbots. Your AI learns from your own data and can handle complex tasks, not just answer basic questions.",
      ],
      hoverImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
    },
    {
      icon: Layers,
      title: "Application Engineering",
      description: [
        "We turn your working prototype into a real product — adding the security, features, and reliability it needs to go live and handle real customers.",
      ],
      hoverImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
    },
    {
      icon: Network,
      title: "Architecture and Scalability",
      description: [
        "Most system problems start with early mistakes that are hard to undo. We build it right from the start, so it keeps running smoothly as you grow.",
      ],
      hoverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    },
    {
      icon: ShieldCheck,
      title: "Code Quality and Engineering Excellence",
      description: [
        "Our senior engineers personally review your code to catch problems automated tools miss, so adding new features later stays fast and easy.",
      ],
      hoverImage: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=800&auto=format&fit=crop",
    },
    {
      icon: Palette,
      title: "Design and Product Experience",
      description: [
        "AI products need a different kind of design. We turn a rough prototype into a polished product that makes complex AI feel simple to use.",
      ],
      hoverImage: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=800&auto=format&fit=crop",
    },
    {
      icon: Cloud,
      title: "DevOps and Cloud",
      description: [
        "Our engineers work directly with your team, setting up automated testing and deployment so you can ship updates quickly and safely.",
      ],
      hoverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
    },
  ],
};

export const techStackData = {
  title: "Modern Technologies Powering AI Product Engineering",
  description: "Our teams specialize in AI-native frameworks, scalable cloud platforms, DevOps tooling, frontend systems, and backend engineering technologies.",
  categories: [
    {
      name: "Programming & Frameworks",
      items: [
        { name: "Python", icon: "https://cdn.simpleicons.org/python" },
        { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
        { name: "React", icon: "https://cdn.simpleicons.org/react" },
        { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs" },
        { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
        { name: "FastAPI", icon: "https://cdn.simpleicons.org/fastapi" },
        { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql" },
        { name: "Redis", icon: "https://cdn.simpleicons.org/redis" },
        { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
        { name: "GraphQL", icon: "https://cdn.simpleicons.org/graphql" },
        { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
        { name: "Django", icon: "https://cdn.simpleicons.org/django" },
        { name: "Go", icon: "https://cdn.simpleicons.org/go" },
        { name: "Rust", icon: "https://cdn.simpleicons.org/rust" },
        { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb" },
        { name: "GitHub", icon: "https://cdn.simpleicons.org/github" },
      ],
    },
    {
      name: "AI Agents & Automation",
      items: [
        { name: "LangChain", icon: "https://cdn.simpleicons.org/langchain" },
        { name: "OpenAI", icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
        { name: "Anthropic", icon: "https://cdn.simpleicons.org/anthropic" },
        { name: "Hugging Face", icon: "https://cdn.simpleicons.org/huggingface" },
        { name: "Qdrant", icon: "https://cdn.simpleicons.org/qdrant" },
        { name: "n8n", icon: "https://cdn.simpleicons.org/n8n" },
        { name: "Zapier", icon: "https://cdn.simpleicons.org/zapier" },
        { name: "Ollama", icon: "https://cdn.simpleicons.org/ollama" },
        { name: "Google Gemini", icon: "https://cdn.simpleicons.org/googlegemini" },
        { name: "Mistral AI", icon: "https://cdn.simpleicons.org/mistralai" },
        { name: "Replicate", icon: "https://cdn.simpleicons.org/replicate" },
        { name: "Weights & Biases", icon: "https://cdn.simpleicons.org/weightsandbiases" },
        { name: "Make", icon: "https://cdn.simpleicons.org/make" },
      ],
    },
    {
      name: "Data Processing & Analytics",
      items: [
        { name: "Apache Spark", icon: "https://cdn.simpleicons.org/apachespark" },
        { name: "Pandas", icon: "https://cdn.simpleicons.org/pandas" },
        { name: "Apache Kafka", icon: "https://cdn.simpleicons.org/apachekafka" },
        { name: "Apache Airflow", icon: "https://cdn.simpleicons.org/apacheairflow" },
        { name: "Snowflake", icon: "https://cdn.simpleicons.org/snowflake" },
        { name: "ClickHouse", icon: "https://cdn.simpleicons.org/clickhouse" },
        { name: "Elasticsearch", icon: "https://cdn.simpleicons.org/elasticsearch" },
        { name: "Jupyter", icon: "https://cdn.simpleicons.org/jupyter" },
        { name: "NumPy", icon: "https://cdn.simpleicons.org/numpy" },
        { name: "Databricks", icon: "https://cdn.simpleicons.org/databricks" },
        { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql" },
        { name: "Apache Hadoop", icon: "https://cdn.simpleicons.org/apachehadoop" },
        { name: "Grafana", icon: "https://cdn.simpleicons.org/grafana" },
        { name: "scikit-learn", icon: "https://cdn.simpleicons.org/scikitlearn" },
      ],
    },
    {
      name: "Cloud & Infrastructure",
      items: [
        { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "Google Cloud", icon: "https://cdn.simpleicons.org/googlecloud" },
        { name: "Microsoft Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
        { name: "Docker", icon: "https://cdn.simpleicons.org/docker" },
        { name: "Kubernetes", icon: "https://cdn.simpleicons.org/kubernetes" },
        { name: "Terraform", icon: "https://cdn.simpleicons.org/terraform" },
        { name: "GitHub Actions", icon: "https://cdn.simpleicons.org/githubactions" },
        { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel" },
        { name: "Nginx", icon: "https://cdn.simpleicons.org/nginx" },
        { name: "Linux", icon: "https://cdn.simpleicons.org/linux" },
        { name: "GitLab", icon: "https://cdn.simpleicons.org/gitlab" },
        { name: "Jenkins", icon: "https://cdn.simpleicons.org/jenkins" },
        { name: "Ansible", icon: "https://cdn.simpleicons.org/ansible" },
        { name: "Cloudflare", icon: "https://cdn.simpleicons.org/cloudflare" },
      ],
    },
  ],
};

export const whyTizoraData = {
  title: "Why Tizora Stands Out as an AI‑Powered Digital Product Engineering Company",
  items: [
    {
      id: "production-expertise",
      title: "Production Engineering Expertise",
      description: "We specialize in production-grade systems. Our engineers have deployed systems handling millions of users, processing billions of requests, and meeting enterprise security requirements.",
      imageSrc: "https://i.pinimg.com/1200x/73/59/37/735937c94057b6304fa2d0000cec04fa.jpg",
      backgroundColor: "var(--color-primary)",
      textColor: "#ffffff",
      showBorder: false,
      spanClass: "lg:col-span-2",
    },
    {
      id: "ai-native-engineering",
      title: "AI-Native Engineering",
      description: "We have built 200+ AI products since 2020. Our team understands LLM limitations, prompt engineering, RAG architectures, vector databases, and AI cost optimization from real-world experience.",
      backgroundColor: "#556B2F",
      textColor: "#ffffff",
      spanClass: "lg:col-span-1",
    },
    {
      id: "transparent-processes",
      title: "Transparent Processes",
      description: "Our communication rhythm keeps you informed through daily standup summaries, weekly sprint demos, and bi-weekly stakeholder meetings.",
      backgroundColor: "var(--color-surface)",
      textColor: "#003640",
      descriptionColor: "#000000",
      spanClass: "lg:col-span-1",
    },
    {
      id: "long-term-partnership",
      title: "Long-Term Partnership",
      description: "We're not a build-and-disappear agency. Many clients start with an MVP sprint and continue with a dedicated pod through Series B and beyond.",
      backgroundColor: "var(--color-surface)",
      textColor: "#003640",
      descriptionColor: "#000000",
      spanClass: "lg:col-span-1",
    },
    {
      id: "global-delivery",
      title: "Global Delivery, Local Support",
      description: "With teams across India, the UK, and the USA, we provide a 4 to 6 hour timezone overlap with clients in North America, Europe, and Asia.",
      backgroundColor: "var(--color-surface)",
      textColor: "#003640",
      descriptionColor: "#000000",
      spanClass: "lg:col-span-1",
    },
  ],
};

export const testimonialsData = {
  tagTitle: "Testimonials",
  heading: "Trusted by Teams Worldwide",
  description: "Join thousands of teams globally who rely on our solutions to collaborate, scale, and succeed.",
};

export const faqData = {
  tagTitle: "FAQ",
  heading: "Questions",
  questions: [
    {
      q: 'What does Tizora do?',
      a: 'Tizora is an AI product engineering company. We design, build and support production AI systems — agentic AI products, AI-native SaaS platforms, document intelligence, field-operations software and financial systems — and we keep running them after launch.'
    },
    {
      q: 'Where is Tizora based?',
      a: 'Tizora Inc. is a US company based in Sheridan, Wyoming. Engineering is delivered by Tizora Innovation Pvt. Ltd. in Ahmedabad, India, where our 100+ engineer team works with roughly four hours of daily overlap with US Eastern business hours.'
    },
    {
      q: 'Which industries does Tizora work in?',
      a: 'We list an industry when we have shipped in it. Currently, we have seven systems in production across Parking & Enforcement, HealthTech, FinTech, and Immigration & Mobility.'
    },
    {
      q: 'What does "Support what we ship" mean?',
      a: 'Most AI work stops at the demo. We build products that carry real customers and real money. Our typical engagements last five to seven years because we operate and support the systems we build long after the initial launch.'
    },
    {
      q: 'Do I own the code and data?',
      a: 'Yes. You own the code and the data. Your data never trains anyone else’s model.'
    }
  ]
};

export const bannerCTAData = {
  heading: "Ready to Transform Your Engineering?",
  description: "Experience the future of scalable architecture with our cutting-edge AI integration. Start optimizing your systems today!",
  buttonText: "Let's Talk",
  buttonLink: "/contact"
};

export const footerData = {
  heading: "Got ideas? We've got the skills. Let's team up.",
  subheading: "Tell us more about your system and what you're trying to get to."
};
