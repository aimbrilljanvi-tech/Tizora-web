// Careers Page Data
import { MessageSquare, Code, LayoutDashboard, Heart } from 'lucide-react';
import { scrollToElement } from '@/lib/scroll';

export const seoData = {
  title: 'Careers at Tizora — Open Software Engineering Roles',
  description: 'Join Tizora and help us engineer the future of AI, cloud architecture, and deterministic systems. Explore open Next.js and .NET developer roles in Ahmedabad, India.',
  url: 'https://www.tizora.ai/careers',
  image: 'https://images.unsplash.com/photo-1584169417032-d34e8d805e8b?q=80&w=1470&auto=format&fit=crop',
};

export const careersHeroData = {
  label: 'Careers',
  title: 'Build systems that matter.',
  description: 'Join a team of engineers, designers, and thinkers who are reshaping how industries operate through agentic AI and robust cloud architecture.',
  buttonText: 'View Open Roles',
  imageSrc: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDUwMDQ5fDB8MXxzZWFyY2h8MXx8bW9kZXJuJTIwY2xlYW4lMjBvZmZpY2UlMjBkZXNrfGVufDB8MHx8fDE3ODgxNTczODZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
};

export const careersIntroData = {
  tagTitle: 'Our Culture',
  heading: 'Engineering excellence meets radical candor.',
  paragraph1: 'At Tizora, we don\'t just build software; we build deterministic systems that power mission-critical operations. We value deep technical thinking, intellectual honesty, and a bias for action. If you are passionate about solving hard problems at scale without the corporate red tape, you\'ll fit right in.',
  buttonText: 'See Open Roles',
  imageSmall: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDUwMDQ5fDB8MXxzZWFyY2h8MXx8c29mdHdhcmUlMjBlbmdpbmVlcmluZyUyMHRlYW0lMjBjb2xsYWJvcmF0aW9uJTIwc3RhcnR1cHxlbnwwfDB8fHwxNzg4MTYzMTQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  imageLarge: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDUwMDQ5fDB8MXxzZWFyY2h8MXx8c29mdHdhcmUlMjBlbmdpbmVlciUyMGRlZXAlMjB0aGlua2luZyUyMGNvZGluZ3xlbnwwfDB8fHwxNzg4MTYzMTQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
};

export const careersBenefitsData = {
  label: 'Perks & Benefits',
  title: 'We take care of our team, so you can focus on the work.',
  items: [
    {
      number: '01',
      title: 'State-of-the-Art Office',
      description: ['Work in our modern, collaborative workspaces designed for deep work and team innovation.'],
    },
    {
      number: '02',
      title: 'Comprehensive Health Coverage',
      description: ['Top-tier medical, dental, and vision insurance for you and your dependents.'],
    },
    {
      number: '03',
      title: 'Generous Learning Stipend',
      description: ['$3,000 annual budget for courses, conferences, and books to keep your skills sharp.'],
    },
    {
      number: '04',
      title: 'Daily Meals & Snacks',
      description: ['Enjoy complimentary catered lunches, premium coffee, and a fully stocked kitchen every day.'],
    },
    {
      number: '05',
      title: 'Unlimited Paid Time Off',
      description: ['Take the time you need to recharge. We mandate a minimum of 20 days off per year.'],
    },
    {
      number: '06',
      title: 'Equity & Ownership',
      description: ['Every team member receives meaningful equity. When the company succeeds, we all succeed.'],
    },
  ]
};

export const careersProcessData = {
  label: "Hiring Process",
  title: "How we hire.",
  buttonText: "View Open Roles",
  tabs: [
    {
      id: "step1",
      icon: MessageSquare,
      title: "01. Initial Chat",
      description: "A quick 30-minute call with our recruiter to discuss your background, interests, and what you're looking for in your next role.",
      features: [
        "Review your career trajectory",
        "Discuss compensation expectations",
        "Answer questions about Tizora"
      ],
      imageSrc: "https://images.unsplash.com/photo-1616587226960-4a03badbe8bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDUwMDQ5fDB8MXxzZWFyY2h8MXx8Y2FzdWFsJTIwaW50ZXJ2aWV3JTIwdmlkZW8lMjBjYWxsfGVufDB8MHx8fDE3ODgxNjI5Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: "step2",
      icon: Code,
      title: "02. Technical Screen",
      description: "A 60-minute technical interview focusing on your core skills, coding abilities, and problem-solving approach.",
      features: [
        "Live pair-programming session",
        "Algorithmic problem solving",
        "Code quality assessment"
      ],
      imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDUwMDQ5fDB8MXxzZWFyY2h8MXx8cGFpciUyMHByb2dyYW1taW5nJTIwbGFwdG9wJTIwc29mdHdhcmUlMjBlbmdpbmVlcnxlbnwwfDB8fHwxNzg4MTYyOTM5fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: "step3",
      icon: LayoutDashboard,
      title: "03. System Design",
      description: "An in-depth session where we'll work together to architect a solution to a real-world engineering challenge.",
      features: [
        "Whiteboarding architecture",
        "Scalability and tradeoffs",
        "Data modeling and APIs"
      ],
      imageSrc: "https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDUwMDQ5fDB8MXxzZWFyY2h8MXx8d2hpdGVib2FyZCUyMHN5c3RlbSUyMGRlc2lnbiUyMGFyY2hpdGVjdHVyZSUyMG1lZXRpbmd8ZW58MHwwfHx8MTc4ODE2MjkzOXww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: "step4",
      icon: Heart,
      title: "04. Cultural Fit",
      description: "Meet with our leadership team and potential future teammates to see if we're a good match for each other's values.",
      features: [
        "Meet the founders",
        "Discuss teamwork scenarios",
        "Understand our core values"
      ],
      imageSrc: "https://images.unsplash.com/photo-1603201667141-5a2d4c673378?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDUwMDQ5fDB8MXxzZWFyY2h8MXx8dGVhbSUyMGN1bHR1cmUlMjBsYXVnaGluZyUyMG9mZmljZXxlbnwwfDB8fHwxNzg4MTYyOTM5fDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ]
};

export const careersOpeningsData = {
  tagTitle: 'Open Positions',
  heading: 'Join our team.',
  description: 'We are hiring for the roles below. Explore the details and send your resume to hr@tizora.ai.',
  items: [
    {
      title: 'Next.js Developer',
      description: 'Build, enhance, and maintain scalable, responsive web applications using Next.js and React.js.',
      tags: ['1–3 Years', 'Full-Time', 'Ahmedabad, India'],
      link: '/careers/nextjs-developer',
    },
    {
      title: '.NET Full Stack Developer',
      description: 'Build scalable, secure, and production-ready applications using modern Microsoft and cloud technologies.',
      tags: ['3–6 Years', 'Full-Time', 'Ahmedabad, India'],
      link: '/careers/dotnet-fullstack-developer',
    },
    {
      title: 'Enterprise Project Manager / Technical Project Manager',
      description: 'Own end-to-end delivery of enterprise SaaS projects, driving Agile execution across engineering, product, QA, and design.',
      tags: ['4–6 Years', 'Full-Time', 'Ahmedabad, India'],
      link: '/careers/enterprise-project-manager',
    },
    {
      title: 'UI/UX Designer',
      description: 'Design modern, intuitive, and engaging digital experiences for web and mobile applications.',
      tags: ['2–3 Years', 'Full-Time', 'Ahmedabad, India'],
      link: '/careers/ui-ux-designer',
    },
  ]
};

export const careersGridData = {
  tagline: "CAREERS",
  headingPart1: "Join",
  headingHighlight: "TIZORA",
  headingPart2: "and start your Journey.",
  buttonText: "View Open Roles",
  buttonAction: () => scrollToElement('[data-component-id="C044"]'),
  images: [
    "https://images.unsplash.com/photo-1718209881007-c0ecdfc00f9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDUwMDQ5fDB8MXxzZWFyY2h8MXx8eW91bmclMjBwcm9mZXNzaW9uYWwlMjBmYWNlJTIwcG9ydHJhaXR8ZW58MHwyfHx8MTc4ODE2MTUwMnww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1768247695726-022586dea3a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDUwMDQ5fDB8MXxzZWFyY2h8Mnx8eW91bmclMjBwcm9mZXNzaW9uYWwlMjBmYWNlJTIwcG9ydHJhaXR8ZW58MHwyfHx8MTc4ODE2MTUwMnww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1713456047082-4e844b81c494?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDUwMDQ5fDB8MXxzZWFyY2h8M3x8eW91bmclMjBwcm9mZXNzaW9uYWwlMjBmYWNlJTIwcG9ydHJhaXR8ZW58MHwyfHx8MTc4ODE2MTUwMnww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDUwMDQ5fDB8MXxzZWFyY2h8NHx8eW91bmclMjBwcm9mZXNzaW9uYWwlMjBmYWNlJTIwcG9ydHJhaXR8ZW58MHwyfHx8MTc4ODE2MTUwMnww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1650381473833-3e2c74a40fbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDUwMDQ5fDB8MXxzZWFyY2h8NXx8eW91bmclMjBwcm9mZXNzaW9uYWwlMjBmYWNlJTIwcG9ydHJhaXR8ZW58MHwyfHx8MTc4ODE2MTUwMnww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1668547049192-118cb053906c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDUwMDQ5fDB8MXxzZWFyY2h8Nnx8eW91bmclMjBwcm9mZXNzaW9uYWwlMjBmYWNlJTIwcG9ydHJhaXR8ZW58MHwyfHx8MTc4ODE2MTUwMnww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1527980965255-d3b416303d12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDUwMDQ5fDB8MXxzZWFyY2h8N3x8eW91bmclMjBwcm9mZXNzaW9uYWwlMjBmYWNlJTIwcG9ydHJhaXR8ZW58MHwyfHx8MTc4ODE2MTUwMnww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1612608793250-bc47d93e6178?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDUwMDQ5fDB8MXxzZWFyY2h8OHx8eW91bmclMjBwcm9mZXNzaW9uYWwlMjBmYWNlJTIwcG9ydHJhaXR8ZW58MHwyfHx8MTc4ODE2MTUwMnww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1681500920181-0aff411f8cab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDUwMDQ5fDB8MXxzZWFyY2h8OXx8eW91bmclMjBwcm9mZXNzaW9uYWwlMjBmYWNlJTIwcG9ydHJhaXR8ZW58MHwyfHx8MTc4ODE2MTUwMnww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1617440431587-138ca5c563ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDUwMDQ5fDB8MXxzZWFyY2h8MTB8fHlvdW5nJTIwcHJvZmVzc2lvbmFsJTIwZmFjZSUyMHBvcnRyYWl0fGVufDB8Mnx8fDE3ODgxNjE1MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1605857840732-188f2f08cb31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDUwMDQ5fDB8MXxzZWFyY2h8MTF8fHlvdW5nJTIwcHJvZmVzc2lvbmFsJTIwZmFjZSUyMHBvcnRyYWl0fGVufDB8Mnx8fDE3ODgxNjE1MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1678282955808-de92256dbd59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDUwMDQ5fDB8MXxzZWFyY2h8MTJ8fHlvdW5nJTIwcHJvZmVzc2lvbmFsJTIwZmFjZSUyMHBvcnRyYWl0fGVufDB8Mnx8fDE3ODgxNjE1MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1633625576932-348e73c45e82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDUwMDQ5fDB8MXxzZWFyY2h8MTN8fHlvdW5nJTIwcHJvZmVzc2lvbmFsJTIwZmFjZSUyMHBvcnRyYWl0fGVufDB8Mnx8fDE3ODgxNjE1MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1582478815754-803ac0d85bef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDUwMDQ5fDB8MXxzZWFyY2h8MTR8fHlvdW5nJTIwcHJvZmVzc2lvbmFsJTIwZmFjZSUyMHBvcnRyYWl0fGVufDB8Mnx8fDE3ODgxNjE1MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDUwMDQ5fDB8MXxzZWFyY2h8MTV8fHlvdW5nJTIwcHJvZmVzc2lvbmFsJTIwZmFjZSUyMHBvcnRyYWl0fGVufDB8Mnx8fDE3ODgxNjE1MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1759701546655-d90ec831aa52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDUwMDQ5fDB8MXxzZWFyY2h8MTZ8fHlvdW5nJTIwcHJvZmVzc2lvbmFsJTIwZmFjZSUyMHBvcnRyYWl0fGVufDB8Mnx8fDE3ODgxNjE1MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1739391313544-b8ad62509770?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDUwMDQ5fDB8MXxzZWFyY2h8MTd8fHlvdW5nJTIwcHJvZmVzc2lvbmFsJTIwZmFjZSUyMHBvcnRyYWl0fGVufDB8Mnx8fDE3ODgxNjE1MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1632328153416-ba25c37d9226?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDUwMDQ5fDB8MXxzZWFyY2h8MTh8fHlvdW5nJTIwcHJvZmVzc2lvbmFsJTIwZmFjZSUyMHBvcnRyYWl0fGVufDB8Mnx8fDE3ODgxNjE1MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1748028313767-67d97c23a0d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDUwMDQ5fDB8MXxzZWFyY2h8MTl8fHlvdW5nJTIwcHJvZmVzc2lvbmFsJTIwZmFjZSUyMHBvcnRyYWl0fGVufDB8Mnx8fDE3ODgxNjE1MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1625241189662-2980453ebffc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDUwMDQ5fDB8MXxzZWFyY2h8MjB8fHlvdW5nJTIwcHJvZmVzc2lvbmFsJTIwZmFjZSUyMHBvcnRyYWl0fGVufDB8Mnx8fDE3ODgxNjE1MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1678282955795-200c1e18bc7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDUwMDQ5fDB8MXxzZWFyY2h8MjF8fHlvdW5nJTIwcHJvZmVzc2lvbmFsJTIwZmFjZSUyMHBvcnRyYWl0fGVufDB8Mnx8fDE3ODgxNjE1MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1551625864-3e291c567ab2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDUwMDQ5fDB8MXxzZWFyY2h8MjJ8fHlvdW5nJTIwcHJvZmVzc2lvbmFsJTIwZmFjZSUyMHBvcnRyYWl0fGVufDB8Mnx8fDE3ODgxNjE1MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1617157435664-4a596993ed2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDUwMDQ5fDB8MXxzZWFyY2h8MjN8fHlvdW5nJTIwcHJvZmVzc2lvbmFsJTIwZmFjZSUyMHBvcnRyYWl0fGVufDB8Mnx8fDE3ODgxNjE1MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1622012078302-f96923901c29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDUwMDQ5fDB8MXxzZWFyY2h8MjR8fHlvdW5nJTIwcHJvZmVzc2lvbmFsJTIwZmFjZSUyMHBvcnRyYWl0fGVufDB8Mnx8fDE3ODgxNjE1MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1650056200016-70c0cb987ce7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDUwMDQ5fDB8MXxzZWFyY2h8MjV8fHlvdW5nJTIwcHJvZmVzc2lvbmFsJTIwZmFjZSUyMHBvcnRyYWl0fGVufDB8Mnx8fDE3ODgxNjE1MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1710777915903-a7d7f159f2c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDUwMDQ5fDB8MXxzZWFyY2h8MjZ8fHlvdW5nJTIwcHJvZmVzc2lvbmFsJTIwZmFjZSUyMHBvcnRyYWl0fGVufDB8Mnx8fDE3ODgxNjE1MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1768247695912-ed8f44d62649?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDUwMDQ5fDB8MXxzZWFyY2h8Mjd8fHlvdW5nJTIwcHJvZmVzc2lvbmFsJTIwZmFjZSUyMHBvcnRyYWl0fGVufDB8Mnx8fDE3ODgxNjE1MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1699607178193-7b87beae167f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDUwMDQ5fDB8MXxzZWFyY2h8Mjh8fHlvdW5nJTIwcHJvZmVzc2lvbmFsJTIwZmFjZSUyMHBvcnRyYWl0fGVufDB8Mnx8fDE3ODgxNjE1MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1588518403000-e0fe6b56f5b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDUwMDQ5fDB8MXxzZWFyY2h8Mjl8fHlvdW5nJTIwcHJvZmVzc2lvbmFsJTIwZmFjZSUyMHBvcnRyYWl0fGVufDB8Mnx8fDE3ODgxNjE1MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1768247695735-e10baa73e917?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDUwMDQ5fDB8MXxzZWFyY2h8MzB8fHlvdW5nJTIwcHJvZmVzc2lvbmFsJTIwZmFjZSUyMHBvcnRyYWl0fGVufDB8Mnx8fDE3ODgxNjE1MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
  ]
};

export const careersLocationsData = [
  {
    id: "loc-1",
    country: "United States",
    type: "HQ",
    city: "Sheridan",
    address: "123 Business Ave, Suite 100, San Francisco, CA 94107",
    phone: "+1 339-337-6252",
    x: 20,
    y: 30,
  },
  {
    id: "loc-2",
    country: "India",
    type: "Engineering Centre",
    city: "Ahmedabad",
    address: "101 Alpha Hub, SG Highway, Ahmedabad 380015, Gujarat, India",
    phone: "+91 92747-37954",
    x: 65,
    y: 45,
  }
];
