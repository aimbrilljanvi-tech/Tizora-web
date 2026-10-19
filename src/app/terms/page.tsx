import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { MainLayout } from '@/components/layout';
import { Scale, Code, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = buildMetadata({
  title: 'Terms & Conditions',
  url: 'https://www.tizora.ai/terms',
  description:
    'Understand your rights, deliverables ownership, and our enterprise service commitments when partnering with Tizora.',
});

const TERMS_CORE_PRINCIPLES = [
  {
    icon: Code,
    badge: 'INTELLECTUAL PROPERTY',
    title: 'Complete Client IP Ownership',
    description: 'All bespoke code, custom AI models, neural weights, and architectural systems created specifically for your engagement belong exclusively to you.'
  },
  {
    icon: ShieldCheck,
    badge: 'MUTUAL GOVERNANCE',
    title: 'Robust Mutual Protection',
    description: 'Standardized liability boundaries, strict mutual non-disclosure covenants, and enterprise compliance ensure safe collaboration across all stages.'
  },
  {
    icon: Scale,
    badge: 'TRANSPARENT ENGAGEMENT',
    title: 'Deterministic SLA & Terms',
    description: 'Clear milestone definitions, transparent deliverable acceptance criteria, and predictable commercial agreements with no hidden stipulations.'
  }
];

export default function TermsPage() {
  return (
    <MainLayout>
      <div className="w-full bg-background min-h-screen">

        {/* Hero Section */}
        <section className="w-full max-w-360 mx-auto px-5 sm:px-8 lg:px-12 pt-32 pb-16 lg:pt-36 lg:pb-20 border-b border-border/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

            {/* Left: Heading & Intro */}
            <div className="lg:col-span-7 flex flex-col">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] sm:text-[12px] font-semibold tracking-wider uppercase bg-primary text-surface w-fit mb-6 shadow-xs">
                MASTER TERMS OF SERVICE
              </span>

              <h1 className="text-[36px] sm:text-[48px] lg:text-[60px] font-medium text-primary tracking-tight leading-[1.08] mb-6">
                Clear rules for <br className="hidden sm:inline" />
                <span className="text-accent">complex engineering.</span>
              </h1>

              <p className="text-[16px] sm:text-[18px] text-muted leading-relaxed max-w-2xl mb-8">
                Understand your rights, deliverable ownership, and our enterprise service commitments when architecting and building systems with Tizora.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-[13px] text-primary/80 font-medium">
                <span className="inline-flex items-center gap-1.5 bg-surface px-3.5 py-1.5 rounded-lg border border-border">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  100% Client IP Ownership
                </span>
                <span className="inline-flex items-center gap-1.5 bg-surface px-3.5 py-1.5 rounded-lg border border-border">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  Enterprise SLA Standards
                </span>
                <span className="inline-flex items-center gap-1.5 bg-surface px-3.5 py-1.5 rounded-lg border border-border">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  Mutual Confidentiality
                </span>
              </div>
            </div>

            {/* Right: Visual Badge Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-105 aspect-4/3 sm:aspect-square rounded-2xl sm:rounded-3xl bg-linear-to-br from-primary via-primary-hover to-[#00222a] p-8 sm:p-12 shadow-xl border border-primary/20 flex flex-col justify-between overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/15 rounded-full blur-3xl pointer-events-none" />

                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-md">
                  <Scale className="w-7 h-7 sm:w-8 sm:h-8 text-accent" strokeWidth={1.75} />
                </div>

                <div className="relative z-10 mt-12 sm:mt-0">
                  <div className="text-[12px] font-semibold text-accent uppercase tracking-widest mb-2">
                    PARTNERSHIP ALIGNMENT
                  </div>
                  <div className="text-[20px] sm:text-[24px] font-normal text-surface leading-snug">
                    Transparent legal frameworks ensuring intellectual property security and operational trust.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Core Principles Section */}
        <section className="w-full max-w-360 mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-24 border-b border-border/60">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-[11px] sm:text-[12px] font-semibold tracking-widest text-accent uppercase block mb-3">
              CONTRACTUAL FOUNDATIONS
            </span>
            <h2 className="text-[28px] sm:text-[38px] font-medium text-primary tracking-tight leading-tight">
              Core Principles of our Master Agreement
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {TERMS_CORE_PRINCIPLES.map((principle, idx) => (
              <div
                key={idx}
                className="bg-surface rounded-2xl p-7 sm:p-8 border border-border flex flex-col justify-between transition-all duration-300 hover:border-accent/50 hover:shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white border border-border flex items-center justify-center shadow-xs">
                      <principle.icon className="w-5 h-5 text-accent" strokeWidth={1.75} />
                    </div>
                    <span className="text-[10.5px] font-bold uppercase tracking-wider text-muted px-2.5 py-1 rounded-md bg-white border border-border/80">
                      {principle.badge}
                    </span>
                  </div>

                  <h3 className="text-[18px] sm:text-[19px] font-semibold text-primary mb-3 leading-snug">
                    {principle.title}
                  </h3>
                  <p className="text-[14px] sm:text-[15px] text-muted leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Legal Policy Document Body */}
        <section className="w-full max-w-360 mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-24">
          <div className="max-w-3xl mx-auto bg-surface rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 border border-border shadow-xs">

            <div className="border-b border-border/70 pb-6 mb-10">
              <span className="text-[12px] font-semibold text-accent uppercase tracking-wider block mb-1">
                LEGAL AGREEMENT
              </span>
              <h2 className="text-[24px] sm:text-[28px] font-semibold text-primary tracking-tight">
                Master Terms &amp; Conditions
              </h2>
              <p className="text-[13px] text-muted mt-1">
                Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </div>

            <div className="flex flex-col gap-10 text-[14.5px] sm:text-[15.5px] text-primary/85 leading-relaxed">

              <div>
                <p className="text-muted leading-relaxed">
                  These Terms and Conditions govern the provision of software engineering, artificial intelligence integration, and consulting services by Tizora to client organizations. Specific Statements of Work (SOW) or Master Services Agreements (MSA) executed between parties shall incorporate and supersede general terms herein.
                </p>
              </div>

              <div>
                <h3 className="text-[18px] font-bold text-primary mb-3 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-accent" />
                  1. Engagement &amp; Scope of Services
                </h3>
                <p className="text-muted mb-3">
                  All engineering efforts, cloud architecture deployments, and algorithmic models are executed under designated Statements of Work (SOW):
                </p>
                <ul className="space-y-2.5 pl-4 border-l-2 border-accent/40">
                  <li>
                    <strong className="text-primary font-semibold">Service Delivery:</strong> Tizora will provide engineering services in accordance with the specifications, deliverables, and acceptance criteria detailed in the mutually executed SOW.
                  </li>
                  <li>
                    <strong className="text-primary font-semibold">Authorized Use:</strong> Client APIs, staging environments, and production systems shall be accessed and utilized exclusively for legitimate business purposes.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-[18px] font-bold text-primary mb-3 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-accent" />
                  2. Intellectual Property &amp; Deliverables
                </h3>
                <p className="text-muted mb-3">
                  We guarantee clear separation of pre-existing core tooling and custom client deliverables:
                </p>
                <ul className="space-y-2.5 pl-4 border-l-2 border-accent/40">
                  <li>
                    <strong className="text-primary font-semibold">Client Deliverables:</strong> Upon satisfaction of invoicing terms, all custom code, custom models, and bespoke software developed specifically for the client become the sole property of the client.
                  </li>
                  <li>
                    <strong className="text-primary font-semibold">Tizora Background Technology:</strong> Tizora retains ownership of its pre-existing libraries, generalized tools, and scaffolding frameworks, granting clients a perpetual, non-exclusive license to use them as embedded in deliverables.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-[18px] font-bold text-primary mb-3 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-accent" />
                  3. Warranties, SLA &amp; Liability
                </h3>
                <p className="text-muted">
                  Tizora warrants that services will be performed in a professional and workmanlike manner consistent with recognized industry standards. Except for intentional misconduct or gross negligence, neither party's aggregate liability under any SOW shall exceed total fees paid under the applicable agreement within the preceding twelve months.
                </p>
              </div>

              <div>
                <h3 className="text-[18px] font-bold text-primary mb-3 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-accent" />
                  4. Governing Law &amp; Legal Inquiries
                </h3>
                <p className="text-muted mb-4">
                  These Terms shall be interpreted and governed in accordance with the corporate laws of Delaware, United States, without giving effect to conflicts of law principles.
                </p>

                <div className="bg-white rounded-xl p-5 border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-[13px] font-bold text-primary">Tizora Legal &amp; Contracts</div>
                    <div className="text-[13px] text-muted">Direct questions regarding MSAs, SOWs, or custom licensing:</div>
                  </div>
                  <a
                    href="mailto:sales@tizora.ai"
                    className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-accent hover:text-accent-hover transition-colors"
                  >
                    sales@tizora.ai
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>

          </div>
        </section>

      </div>
    </MainLayout>
  );
}
