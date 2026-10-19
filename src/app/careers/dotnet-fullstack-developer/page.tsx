import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { JobDetailTemplate, JobDetailData } from '@/components/layout/JobDetailTemplate';

const data: JobDetailData = {
  title: '.NET Full Stack Developer',
  slug: 'dotnet-fullstack-developer',
  datePosted: '2026-09-11',
  validThrough: '2026-12-10',
  employmentType: 'FULL_TIME',
  experienceBadge: '3–6 Years Experience',
  typeBadge: 'Full-Time',
  locationBadge: 'Ahmedabad, India',
  intro: 'We are looking for a .NET Full Stack Developer to build scalable, secure, and production-ready applications using modern Microsoft and cloud technologies.',
  sections: [
    {
      heading: 'Key Skills',
      type: 'tags',
      items: [
        'C#, .NET Core / ASP.NET Core',
        'ReactJS & Next.js',
        'SQL Server',
        'Azure',
        'Microservices Architecture & REST APIs',
        'Authentication & Authorization — JWT, OAuth/OIDC, RBAC',
        'Git, CI/CD and Agile development',
        'AI-assisted development using GitHub Copilot and Claude',
      ],
    },
    {
      heading: 'Responsibilities',
      type: 'checklist',
      items: [
        'Develop and maintain scalable full-stack applications and microservices.',
        'Build secure APIs and integrate React/Next.js frontends.',
        'Design and optimize SQL databases and queries.',
        'Deploy and manage applications on Azure.',
        'Implement secure authentication, authorization, and API security.',
        'Use GitHub Copilot and Claude effectively for coding, debugging, refactoring, documentation, and improving development productivity.',
        'Collaborate with product, QA, and engineering teams to deliver high-quality features.',
      ],
    },
    {
      heading: 'Good to Have',
      type: 'text',
      text: 'Docker/Kubernetes, Azure DevOps, cloud-native architecture, and experience with AI-enabled SaaS products.',
    },
  ],
  applySubject: 'Application: .NET Full Stack Developer',
};

export const metadata: Metadata = buildMetadata({
  title: `${data.title.replace(/\n/g, ' ')}`,
  description: data.intro,
  url: `https://www.tizora.ai/careers/${data.slug}`,
});

export default function DotnetFullstackDeveloperPage() {
  return <JobDetailTemplate data={data} />;
}
