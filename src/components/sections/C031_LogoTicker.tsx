'use client';

import { motion } from 'motion/react';

const PARTNERS = [
  { url: "https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1788426775/aws_Partner.png", alt: "AWS Partner" },
  { url: "https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1788426779/google.png", alt: "Google Partner" },
  { url: "https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1788776520/shopify_plus_partner.png", alt: "Shopify Plus Partners", small: true },
  { url: "https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1788426784/bigcommerce.png", alt: "BigCommerce Certified" },
  { url: "https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1788426778/adobe.png", alt: "Adobe Certified" },
];

// Duplicate partners for infinite scroll effect
const DUPLICATED_PARTNERS = [...PARTNERS, ...PARTNERS, ...PARTNERS];

export function LogoTicker() {
  return (
    <section
      data-component-id="C031"
      data-component-name="LogoTicker"
      className="w-full bg-background py-10 lg:py-14 border-b border-border/40 overflow-hidden"
    >
      <div className="w-full">
        <p className="text-center text-[13px] font-medium tracking-wide text-black uppercase mb-8 px-4">
          Trusted by leading technology partners
        </p>

        <div className="relative flex overflow-hidden group">
          <motion.div
            animate={{ x: ["0%", "-33.333333%"] }}
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
            className="flex items-center gap-12 sm:gap-16 lg:gap-24 w-max shrink-0 px-6 sm:px-12"
          >
            {DUPLICATED_PARTNERS.map((logo, idx) => (
              <div
                key={idx}
                className={`flex items-center justify-center shrink-0 ${logo.small ? 'h-7 sm:h-9 md:h-11 lg:h-13' : 'h-12 sm:h-16 md:h-20 lg:h-24'}`}
              >
                <img
                  src={logo.url}
                  alt={logo.alt}
                  className="h-full w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}