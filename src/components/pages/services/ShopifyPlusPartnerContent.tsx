'use client';

import { textImageData } from '@/data/pages/services/shopifyPlusPageData';
import React from 'react';
import { HeroSplit } from '@/components/sections/C001_HeroSplit';
import { C036_TextImage } from '@/components/sections/C036_TextImage';
import { OutcomeSlider } from '@/components/sections/C022_OutcomeSlider';
import { AgileTimeline } from '@/components/sections/C038_AgileTimeline';
import { TestimonialCarousel } from '@/components/sections/C007_TestimonialCarousel';
import { FeatureList } from '@/components/sections/C021_FeatureList';
import { TechStack } from '@/components/sections/C039_TechStack';
import { motion } from 'motion/react';
import { MainLayout } from '@/components/layout';
import { agileTimelineData } from '@/data/pages/services/agileTimelineData';

const partnerLogos = [
  "https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1788427314/client_logo-1.png",
  "https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1788427316/client_logo-2.png",
  "https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1788427316/client_logo-3.png",
  "https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1788427315/client_logo-4.png",
  "https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1788427315/client_logo-5.png",
  "https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1788427315/client_logo-6.png",
  "https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1788427314/client_logo-7.png",
  "https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1788427314/client_logo-8.png"
];
// Duplicate for infinite marquee effect
const marqueeLogos = [...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos];

const AnimatedSection = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10%" }}
    transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export function ShopifyPlusPartnerContent() {
  return (
    <MainLayout>
      <main className="flex-1 overflow-hidden">
        <AnimatedSection delay={0.1}>
          <HeroSplit
            label="Certified Plus Partner"
            title={"Enterprise Commerce\nWithout Constraints"}
            description="As a certified Shopify Plus partner, Tizora builds high-performance, conversion-optimized commerce experiences for scaling global brands."
            buttonText="Start Your Migration"
            buttonHref="/contact"
            imageSrc="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000&auto=format&fit=crop"
            imageAlt="Shopify Plus Development"
            badgeSrc="https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1788426777/shopify.png"
            badgeAlt="Shopify Plus Partner"
          />
        </AnimatedSection>

        {/* Client Logos Marquee */}
        <AnimatedSection delay={0.2} className="w-full bg-background py-12 lg:py-16 border-b border-border/40 overflow-hidden">
          <div className="w-full max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 mb-10">
            <p className="text-center text-[12px] font-bold tracking-[0.15em] text-muted uppercase">
              Trusted by high-volume Shopify Plus merchants
            </p>
          </div>
          <div className="relative w-full max-w-[1600px] mx-auto">
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            <div className="flex w-fit animate-marquee hover:[animation-play-state:paused]">
              {marqueeLogos.map((logo, idx) => (
                <div key={idx} className="flex-shrink-0 flex items-center justify-center w-[160px] md:w-[200px] h-12 md:h-16 mx-6 opacity-70 hover:opacity-100 transition-opacity duration-300">
                  <img
                    src={logo}
                    alt={`Client Logo`}
                    className="max-h-full max-w-full object-contain transition-all duration-300 rounded-none!"
                  />
                </div>
              ))}
            </div>
          </div>
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-25%); }
            }
            .animate-marquee {
              animation: marquee 30s linear infinite;
            }
          `}</style>
        </AnimatedSection>

        <AnimatedSection>
          <C036_TextImage {...textImageData} />
        </AnimatedSection>

        <AnimatedSection>
          <OutcomeSlider
            data={{
              title: "Shopify Plus\nServices",
              items: [
                {
                  number: "01",
                  title: "Enterprise Migrations",
                  description: ["Seamlessly migrate from Magento, Salesforce Commerce Cloud, or custom backends to Shopify Plus with zero data loss and automated SEO redirects."],
                  footerTitle: "When replatforming requires absolute precision.",
                  footerLogo: "",
                  link: "#"
                },
                {
                  number: "02",
                  title: "Headless Architecture",
                  description: ["Decoupled front-end architectures using Hydrogen, Next.js, and modern CMS platforms (Sanity, Contentful) for ultimate sub-second performance."],
                  footerTitle: "For ultimate creative control and speed.",
                  footerLogo: "",
                  link: "#"
                },
                {
                  number: "03",
                  title: "Bespoke Applications",
                  description: ["Custom Shopify public and private apps built on Node.js/Python to solve specific operational complexities and automate back-office logic."],
                  footerTitle: "When native Shopify apps fall short.",
                  footerLogo: "",
                  link: "#"
                },
                {
                  number: "04",
                  title: "Systems Integration",
                  description: ["Deep middleware integration connecting Shopify Plus to major ERPs (NetSuite, SAP), WMS, PIMs, and 3PL networks for synchronized operations."],
                  footerTitle: "To unify your omni-channel tech stack.",
                  footerLogo: "",
                  link: "#"
                }
              ]
            }}
          />
        </AnimatedSection>

        <AnimatedSection>
          <AgileTimeline {...agileTimelineData} />
        </AnimatedSection>

        <AnimatedSection>
          <TestimonialCarousel
            tagTitle="Client Success"
            heading="Built for Plus Brands"
            description="Hear from the industry leaders who rely on Tizora to scale their Shopify Plus infrastructure."
            testimonials={[
              {
                type: "dark",
                stars: 5,
                quote: "Tizora's headless implementation transformed our conversion rates. The migration from Magento was completely flawless.",
                name: "E-Commerce Director",
                role: "Global Retail Brand",
                avatar: "https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1788427314/client_logo-1.png",
                isLogo: true
              },
              {
                type: "light",
                stars: 5,
                quote: "We needed a highly complex custom checkout app integrated with NetSuite. Tizora delivered ahead of schedule.",
                name: "Chief Technology Officer",
                role: "Direct-to-Consumer Leader",
                avatar: "https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1788427316/client_logo-2.png",
                isLogo: true
              },
              {
                type: "colored",
                stars: 5,
                quote: "The technical depth Tizora brings to Shopify Plus is unmatched. They are true engineering partners.",
                name: "VP of Digital",
                role: "Lifestyle Apparel",
                avatar: "https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1788427316/client_logo-3.png",
                isLogo: true
              },
              {
                type: "light",
                stars: 5,
                quote: "Our Hydrogen build is incredibly fast. The difference in site speed and architecture quality is night and day.",
                name: "Head of Engineering",
                role: "Beauty & Cosmetics",
                avatar: "https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1788427315/client_logo-4.png",
                isLogo: true
              },
              {
                type: "dark",
                stars: 5,
                quote: "Their team handled our entire data migration with zero downtime. We couldn't be happier with our Plus setup.",
                name: "Operations Manager",
                role: "B2B Wholesale",
                avatar: "https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1788427315/client_logo-5.png",
                isLogo: true
              },
              {
                type: "light",
                stars: 5,
                quote: "A true extension of our team. Their proactive architectural recommendations have saved us countless hours.",
                name: "Lead Developer",
                role: "Global Electronics",
                avatar: "https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1788427315/client_logo-6.png",
                isLogo: true
              },
              {
                type: "colored",
                stars: 5,
                quote: "We scaled to millions in BFCM revenue without a single hitch thanks to Tizora's rigorous load testing and optimizations.",
                name: "Founder & CEO",
                role: "DTC Startup",
                avatar: "https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1788427314/client_logo-7.png",
                isLogo: true
              }
            ]}
          />
        </AnimatedSection>

        <AnimatedSection>
          <FeatureList
            data={{
              label: "Bespoke Design",
              title: "Shopify Custom Theme Development",
              description: "Stand out in a crowded market with a completely custom, brand-first Shopify Plus theme built for performance and conversion. No templates. No compromises.",
              image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
              features: [
                {
                  icon: "",
                  title: "Pixel-Perfect UI",
                  description: "We translate your brand vision into a fully custom, accessible, and responsive user interface."
                },
                {
                  icon: "",
                  title: "Performance First",
                  description: "Optimized liquid architecture ensuring blazing fast load times and Core Web Vitals."
                },
                {
                  icon: "",
                  title: "Mobile Optimized",
                  description: "Frictionless mobile experiences designed to maximize your highest-traffic channel."
                },
                {
                  icon: "",
                  title: "Modular Sections",
                  description: "Empower your marketing team with flexible, native Shopify OS 2.0 sections for easy updates."
                }
              ]
            }}
          />
        </AnimatedSection>

        <AnimatedSection>
          <TechStack
            title="Tools & Technologies"
            description="We leverage the modern commerce stack to build fast, scalable, and resilient architectures."
            categories={[
              {
                name: "Language & JS",
                image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=900&auto=format&fit=crop",
                details: ["The languages and front-end tools our team builds Shopify storefronts and apps with."],
                items: [
                  { name: "Liquid", icon: "https://cdn.simpleicons.org/shopify" },
                  { name: "React Js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                  { name: "GoLan", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
                  { name: "Javascript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
                  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
                  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
                  { name: "NodeJs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
                  { name: "Jquery", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" }
                ]
              },
              {
                name: "Database",
                image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=900&auto=format&fit=crop",
                details: ["The databases and developer tooling behind the custom back-end work."],
                items: [
                  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
                  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
                  { name: "BitBucket", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg" },
                  { name: "VsCode", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" }
                ]
              },
              {
                name: "Project Management",
                image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=900&auto=format&fit=crop",
                details: ["The tools we use to plan work and keep delivery visible."],
                items: [
                  { name: "Jira", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
                  { name: "Asana" },
                  { name: "Trello", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" },
                  { name: "ZOHO" }
                ]
              }
            ]}
          />
        </AnimatedSection>

      </main>
    </MainLayout>
  );
}
