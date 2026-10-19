import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import { ContentImage as Image } from '@/components/common/ContentImage';

export interface ProfileSpotlightProps {
  data: {
    name: string;
    role: string;
    image: string;
    aboutHeading: string;
    aboutText: string
    socials: {
      facebook?: string;
      twitter?: string;
      linkedin?: string;
    };
  };
}

export function ProfileSpotlight({ data }: ProfileSpotlightProps) {
  return (
    <section
      data-component-id="C034"
      data-component-name="ProfileSpotlight"
      className="relative w-full min-h-[70vh] bg-background flex items-center overflow-hidden"
    >
      {/* Split Background */}
      <div className="absolute left-0 top-0 bottom-0 w-[20%] lg:w-[25%] bg-primary hidden md:block" />

      <div className="relative z-10 w-full max-w-275 mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between py-20">

        {/* Left Side: Mobile BG (visible only on mobile) */}
        <div className="absolute left-0 top-0 bottom-0 w-full h-[40%] bg-primary md:hidden -z-10" />

        {/* Profile Image */}
        <div className="relative w-full max-w-75 lg:max-w-95 shrink-0 mt-10 md:mt-0 md:ml-4">

          {/* Main Image Container */}
          <div className="relative w-full aspect-3/4 rounded-[10px] overflow-hidden shadow-xl">
            <Image
              src={data.image}
              alt={data.name}
              fill
              sizes="(min-width: 1024px) 380px, 300px"
              className="object-cover"
            />
            {/* Gradient overlay for text */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

            {/* Name & Role */}
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
              <h3 className="text-white text-[24px] lg:text-[32px] font-normal leading-tight mb-1">
                {data.name}
              </h3>
              <p className="text-white/80 text-[14px] lg:text-[15px]">
                {data.role}
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: About Text */}
        <div className="w-full md:flex-1 mt-20 md:mt-0 md:pl-12 lg:pl-20 max-w-lg">
          <h2 className="text-primary text-[28px] lg:text-[36px] font-normal mb-6 tracking-tight lowercase">
            {data.aboutHeading}
          </h2>
          <p className="text-black text-[15px] lg:text-[17px] leading-[1.8]">
            {data.aboutText}
          </p>
        </div>

      </div>

      {/* Absolute UI Elements (Socials & Pagination) */}

      {/* Social Icons - Bottom Left */}
      <div className="absolute bottom-8 left-8 md:left-12 flex items-center gap-6 z-20">
        {data.socials.facebook && (
          <a href={data.socials.facebook} className="text-white hover:text-white/70 transition-colors">
            <Facebook size={18} fill="currentColor" strokeWidth={0} />
          </a>
        )}
        {data.socials.twitter && (
          <a href={data.socials.twitter} className="text-white hover:text-white/70 transition-colors">
            <Twitter size={18} fill="currentColor" strokeWidth={0} />
          </a>
        )}
        {data.socials.linkedin && (
          <a href={data.socials.linkedin} className="text-white hover:text-white/70 transition-colors">
            <Linkedin size={18} fill="currentColor" strokeWidth={0} />
          </a>
        )}
      </div>

    </section>
  );
}
