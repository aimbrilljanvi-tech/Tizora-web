import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { JobDetailTemplate, JobDetailData } from '@/components/layout/JobDetailTemplate';

const data: JobDetailData = {
  title: 'Next.js Developer',
  slug: 'nextjs-developer',
  datePosted: '2026-09-11',
  validThrough: '2026-12-10',
  employmentType: 'FULL_TIME',
  experienceBadge: '1–3 Years Experience',
  typeBadge: 'Full-Time',
  locationBadge: 'Ahmedabad, India',
  intro: 'We are looking for a skilled and motivated Next.js Developer with 1–3 years of hands-on experience to join our development team. The ideal candidate should have strong expertise in Next.js and React.js, along with experience building modern, scalable, responsive, and high-performance web applications.',
  sections: [
    {
      heading: 'Mandatory Skills',
      type: 'tags',
      items: [
        'Next.js',
        'React.js',
        'TypeScript',
        'Express.js',
        'MongoDB',
        'Tailwind CSS',
        'PrimeReact',
        'REST API integration',
        'Git / version control',
      ],
    },
    {
      heading: 'Key Responsibilities',
      type: 'checklist',
      items: [
        'Develop, enhance, and maintain scalable web applications using Next.js and React.js.',
        'Build responsive, reusable, and high-performance user interfaces.',
        'Develop and integrate REST APIs and backend services.',
        'Write clean, maintainable, and well-structured code using TypeScript.',
        'Work with MongoDB for application data storage and management.',
        'Implement modern UI designs using Tailwind CSS and PrimeReact.',
        'Identify and resolve performance, usability, and application issues.',
        'Collaborate with designers, backend developers, QA, and other cross-functional teams.',
        'Participate in code reviews, debugging, testing, and deployment activities.',
        'Deliver high-quality features within agreed timelines in a fast-paced development environment.',
      ],
    },
    {
      heading: 'Experience',
      type: 'checklist',
      items: [
        '1–3 years of relevant professional development experience.',
        'Strong hands-on experience with Next.js and React.js is mandatory.',
        'Good understanding of modern JavaScript/TypeScript development practices.',
        'Understanding of responsive design, component-based architecture, and web performance optimization.',
      ],
    },
  ],
  applySubject: 'Application: Next.js Developer',
  heroImage: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*KDMx1YspSrBcFJG-NDZgDg.png',
};

export const metadata: Metadata = buildMetadata({
  title: `${data.title.replace(/\n/g, ' ')}`,
  description: data.intro,
  url: `https://www.tizora.ai/careers/${data.slug}`,
});

export default function NextJsDeveloperPage() {
  return <JobDetailTemplate data={data} />;
}
