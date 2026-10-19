import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { MainLayout } from '@/components/layout';
import { Shield, Trash2, Lock, UserCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy',
  url: 'https://www.tizora.ai/privacy',
  description:
    'Learn how Tizora protects enterprise data with zero-trust architecture, robust encryption, and strict confidentiality governance.',
});

const DATA_HANDLING_PILLARS = [
  {
    icon: Trash2,
    badge: 'ZERO RETENTION',
    title: 'We do not train on your data',
    description: 'Your inputs, prompts, and proprietary business outputs are processed exclusively for real-time delivery and never retained for foundation model training.'
  },
  {
    icon: Lock,
    badge: 'END-TO-END CIPHER',
    title: 'Encrypted in transit & at rest',
    description: 'All network traffic is encrypted via TLS 1.3 with forward secrecy. Persistent data stores are secured with hardware-backed AES-256 encryption.'
  },
  {
    icon: UserCheck,
    badge: 'SOVEREIGN OWNERSHIP',
    title: 'Your data stays exclusively yours',
    description: 'We do not monetize, share, or broker your organizational data with third parties across any enterprise service tier or custom engagement.'
  }
];

export default function PrivacyPage() {
  return (
    <MainLayout>
      <div className="w-full bg-background min-h-screen">

        {/* Hero Section */}
        <section className="w-full max-w-360 mx-auto px-5 sm:px-8 lg:px-12 pt-32 pb-16 lg:pt-36 lg:pb-20 border-b border-border/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

            {/* Left: Heading & Intro */}
            <div className="lg:col-span-7 flex flex-col">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] sm:text-[12px] font-semibold tracking-wider uppercase bg-primary text-surface w-fit mb-6 shadow-xs">
                ENTERPRISE PRIVACY POLICY
              </span>

              <h1 className="text-[36px] sm:text-[48px] lg:text-[60px] font-medium text-primary tracking-tight leading-[1.08] mb-6">
                Security is not a feature. <br className="hidden sm:inline" />
                <span className="text-accent">It is a core foundation.</span>
              </h1>

              <p className="text-[16px] sm:text-[18px] text-muted leading-relaxed max-w-2xl mb-8">
                Learn how Tizora safeguards organizational data, enforces zero-trust access controls, and gives your enterprise complete governance over its intellectual property.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-[13px] text-primary/80 font-medium">
                <span className="inline-flex items-center gap-1.5 bg-surface px-3.5 py-1.5 rounded-lg border border-border">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  SOC2 &amp; ISO-Aligned
                </span>
                <span className="inline-flex items-center gap-1.5 bg-surface px-3.5 py-1.5 rounded-lg border border-border">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  Zero-Model-Training Guarantee
                </span>
                <span className="inline-flex items-center gap-1.5 bg-surface px-3.5 py-1.5 rounded-lg border border-border">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  TLS 1.3 / AES-256
                </span>
              </div>
            </div>

            {/* Right: Visual Badge Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-105 aspect-4/3 sm:aspect-square rounded-2xl sm:rounded-3xl bg-linear-to-br from-primary via-primary-hover to-[#00222a] p-8 sm:p-12 shadow-xl border border-primary/20 flex flex-col justify-between overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/15 rounded-full blur-3xl pointer-events-none" />

                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-md">
                  <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-accent" strokeWidth={1.75} />
                </div>

                <div className="relative z-10 mt-12 sm:mt-0">
                  <div className="text-[12px] font-semibold text-accent uppercase tracking-widest mb-2">
                    CONFIDENTIALITY GUARANTEE
                  </div>
                  <div className="text-[20px] sm:text-[24px] font-normal text-surface leading-snug">
                    Deterministic security protocols protecting millions of mission-critical transactions.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Pillars Section */}
        <section className="w-full max-w-360 mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-24 border-b border-border/60">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-[11px] sm:text-[12px] font-semibold tracking-widest text-accent uppercase block mb-3">
              DATA GOVERNANCE
            </span>
            <h2 className="text-[28px] sm:text-[38px] font-medium text-primary tracking-tight leading-tight">
              How your data is handled &amp; protected
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {DATA_HANDLING_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-surface rounded-2xl p-7 sm:p-8 border border-border flex flex-col justify-between transition-all duration-300 hover:border-accent/50 hover:shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white border border-border flex items-center justify-center shadow-xs">
                      <pillar.icon className="w-5 h-5 text-accent" strokeWidth={1.75} />
                    </div>
                    <span className="text-[10.5px] font-bold uppercase tracking-wider text-muted px-2.5 py-1 rounded-md bg-white border border-border/80">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-[18px] sm:text-[19px] font-semibold text-primary mb-3 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-[14px] sm:text-[15px] text-muted leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Legal Text Policy Body */}
        <section className="w-full max-w-360 mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-24">
          <div className="max-w-3xl mx-auto bg-surface rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 border border-border shadow-xs">

            <div className="border-b border-border/70 pb-6 mb-10">
              <span className="text-[12px] font-semibold text-accent uppercase tracking-wider block mb-1">
                POLICY DOCUMENT
              </span>
              <h2 className="text-[24px] sm:text-[28px] font-semibold text-primary tracking-tight">
                Comprehensive Privacy Terms
              </h2>
              <p className="text-[13px] text-muted mt-1">
                Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </div>

            <div className="flex flex-col gap-10 text-[14.5px] sm:text-[15.5px] text-primary/85 leading-relaxed">

              <div>
                <p className="text-muted leading-relaxed">
                  At Tizora, we hold the privacy and security of your organization to the highest engineering standards. This Privacy Policy details our protocols for handling, storing, and safeguarding enterprise information when engaging with our AI products, consultation, and cloud architecture services.
                </p>
              </div>

              <div>
                <h3 className="text-[18px] font-bold text-primary mb-3 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-accent" />
                  1. Information We Collect
                </h3>
                <p className="text-muted mb-3">
                  We gather minimal required data solely to facilitate enterprise services:
                </p>
                <ul className="space-y-2.5 pl-4 border-l-2 border-accent/40">
                  <li>
                    <strong className="text-primary font-semibold">Account &amp; Contact Information:</strong> Name, business email, corporate domain, role, and phone details provided voluntarily during consultation.
                  </li>
                  <li>
                    <strong className="text-primary font-semibold">System &amp; Diagnostic Telemetry:</strong> Anonymized server logs, browser user agents, API latencies, and performance diagnostics used solely for SLA tracking and platform stability.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-[18px] font-bold text-primary mb-3 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-accent" />
                  2. Purpose &amp; Usage of Enterprise Data
                </h3>
                <p className="text-muted mb-3">
                  Collected information is utilized strictly to:
                </p>
                <ul className="space-y-2.5 pl-4 border-l-2 border-accent/40">
                  <li>Deliver bespoke software engineering, AI pipelines, and cloud systems under Master Service Agreements.</li>
                  <li>Maintain uptime monitoring, security audits, and automated vulnerability scanning.</li>
                  <li>Communicate mission-critical maintenance notices, security advisories, and system status reports.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-[18px] font-bold text-primary mb-3 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-accent" />
                  3. Non-Disclosure &amp; Third-Party Restrictions
                </h3>
                <p className="text-muted">
                  Tizora enforces a strict zero-sale, zero-brokerage data policy. We never sell, lease, or monetize customer data. Any sub-processors (e.g. SOC2-compliant cloud providers like AWS or GCP) are contractually bound by rigorous confidentiality agreements matching our security posture.
                </p>
              </div>

              <div>
                <h3 className="text-[18px] font-bold text-primary mb-3 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-accent" />
                  4. Security Governance &amp; Contact
                </h3>
                <p className="text-muted mb-4">
                  We implement enterprise-grade administrative, physical, and technical safeguards. All storage volumes are secured with AES-256 encryption at rest, and all data transfers require TLS 1.3.
                </p>

                <div className="bg-white rounded-xl p-5 border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-[13px] font-bold text-primary">Privacy &amp; Security Office</div>
                    <div className="text-[13px] text-muted">Direct inquiries regarding compliance, DPA, or data deletion:</div>
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
