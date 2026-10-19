import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { JobDetailTemplate, JobDetailData } from '@/components/layout/JobDetailTemplate';

const data: JobDetailData = {
  title: 'UI/UX Designer',
  slug: 'ui-ux-designer',
  datePosted: '2026-09-17',
  validThrough: '2026-12-16',
  employmentType: 'FULL_TIME',
  experienceBadge: '2–3 Years Experience',
  typeBadge: 'Full-Time',
  locationBadge: 'Ahmedabad, India',
  intro: 'We are looking for a creative and detail-oriented UI/UX Designer with 2–3 years of experience to design modern, intuitive, and engaging digital experiences for web and mobile applications.',
  sections: [
    {
      heading: 'Key Responsibilities',
      type: 'checklist',
      items: [
        'Design user-friendly UI/UX for web and mobile applications.',
        'Create wireframes, user flows, prototypes, and high-fidelity designs.',
        'Build and maintain design systems and reusable components.',
        'Collaborate closely with developers and product teams.',
        'Apply responsive design, accessibility, and usability best practices.',
        'Use AI tools to accelerate ideation, research, prototyping, content, and design workflows.',
      ],
    },
    {
      heading: 'Skills Required',
      type: 'checklist',
      items: [
        'Strong hands-on experience with Figma and modern UI/UX practices.',
        'Good understanding of UX research, user journeys, information architecture, and interaction design.',
        'Knowledge of AI-powered design/productivity tools such as Figma AI, ChatGPT, Adobe Firefly, Midjourney, or similar tools.',
        'Understanding of HTML/CSS and frontend development concepts is a plus.',
        'Strong visual design, creativity, problem-solving, and communication skills.',
      ],
    },
    {
      heading: 'Experience',
      type: 'tags',
      items: ['2–3 Years', 'Full-Time'],
    },
    {
      heading: 'Portfolio',
      type: 'text',
      text: 'A strong UI/UX portfolio showcasing relevant projects is required.',
    },
  ],
  applySubject: 'Application: UI/UX Designer',
};

export const metadata: Metadata = buildMetadata({
  title: `${data.title.replace(/\n/g, ' ')}`,
  description: data.intro,
  url: `https://www.tizora.ai/careers/${data.slug}`,
});

export default function UiUxDesignerPage() {
  return <JobDetailTemplate data={data} />;
}
