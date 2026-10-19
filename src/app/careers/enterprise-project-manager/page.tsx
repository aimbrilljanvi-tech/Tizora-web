import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { JobDetailTemplate, JobDetailData } from '@/components/layout/JobDetailTemplate';

const data: JobDetailData = {
  title: 'Technical Project\nManager',
  slug: 'enterprise-project-manager',
  datePosted: '2026-09-11',
  validThrough: '2026-12-10',
  employmentType: 'FULL_TIME',
  experienceBadge: '4–6 Years Experience',
  typeBadge: 'Full-Time',
  locationBadge: 'Ahmedabad, India',
  intro: 'We are looking for an experienced Project Manager / Technical Project Manager who can take ownership of complex SaaS projects and work closely with engineering, product, QA, design, and business stakeholders to ensure successful product delivery. The ideal candidate should have strong experience in Agile/Scrum project management, SaaS platforms, enterprise software delivery, and product management collaboration — someone who can operate beyond task and timeline management to understand the product, challenge requirements, identify risks, manage dependencies, and drive teams toward measurable business outcomes.',
  sections: [
    {
      heading: 'Required Skills',
      type: 'tags',
      items: [
        'Project Management',
        'Agile & Scrum',
        'Enterprise SaaS Delivery',
        'Stakeholder Management',
        'Jira',
        'Confluence',
        'Software Development Lifecycle',
        'APIs & Integrations',
        'Cloud-Based Applications',
      ],
    },
    {
      heading: 'Key Responsibilities',
      type: 'checklist',
      items: [
        'Manage end-to-end delivery of enterprise SaaS projects.',
        'Plan and track scope, timelines, resources, risks, dependencies, and releases.',
        'Drive Scrum ceremonies and ensure effective Agile execution.',
        'Work closely with Product Owners/Product Managers on requirements, backlog, prioritization, and roadmap.',
        'Understand the product and translate business requirements into actionable delivery plans.',
        'Manage enterprise clients and stakeholders, including status reporting and escalations.',
        'Coordinate cross-functional teams across Engineering, QA, Product, UI/UX, and DevOps.',
        'Manage releases, production issues, hotfixes, and delivery risks.',
        'Identify blockers and proactively drive them to resolution.',
      ],
    },
    {
      heading: 'Experience & Required Skills',
      type: 'checklist',
      items: [
        '4–6 years of experience in Project Management / Software Delivery.',
        'Strong experience with Enterprise Software / SaaS platforms.',
        'Good understanding of Agile & Scrum practices.',
        'Experience working with Product Managers/Product Owners.',
        'Strong client and stakeholder management skills.',
        'Experience with Jira, Confluence, or similar tools.',
        'Good understanding of software development lifecycle, APIs, integrations, and cloud-based applications.',
        'Strong communication, leadership, problem-solving, and risk-management skills.',
      ],
    },
    {
      heading: 'Preferred',
      type: 'checklist',
      items: [
        'Scrum/Agile certification such as CSM, PSM, or equivalent.',
        'Experience managing B2B/B2B2C SaaS products.',
        'Exposure to AWS/Azure, DevOps, and production support.',
        'Experience working with enterprise clients and distributed teams.',
      ],
    },
  ],
  applySubject: 'Application: Enterprise Project Manager / Technical Project Manager',
};

export const metadata: Metadata = buildMetadata({
  title: `${data.title.replace(/\n/g, ' ')}`,
  description: data.intro,
  url: `https://www.tizora.ai/careers/${data.slug}`,
});

export default function EnterpriseProjectManagerPage() {
  return <JobDetailTemplate data={data} />;
}
