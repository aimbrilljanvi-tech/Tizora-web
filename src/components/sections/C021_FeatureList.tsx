import React from "react";
import { ContentImage as Image } from "@/components/common/ContentImage";
import { SplitTextReveal } from "../ui/SplitTextReveal";

export interface FeatureListProps {
  data: {
    label: string;
    title: string;
    description: string;
    image: string;
    imageAlt?: string;
    features: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
  animatedText?: boolean;
}

export function FeatureList({ data, animatedText = false }: FeatureListProps) {
  return (
    <section
      data-component-id="C021"
      data-component-name="FeatureList"
      className="w-full bg-background py-24 lg:py-32"
    >
      <div className="w-full px-5 sm:px-8 lg:px-12 max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left: Text + Features */}
          <div className="flex-1 flex flex-col justify-center">
            <span className="text-[12px] font-semibold tracking-widest uppercase text-muted mb-6 block">
              {data.label}
            </span>
            <h2 className="text-[36px] sm:text-[44px] lg:text-[52px] font-normal text-primary tracking-tight leading-[1.1] mb-6">
              {animatedText ? (
                <SplitTextReveal
                  text={data.title}
                  trigger="inView"
                  wordDelay={0.025}
                />
              ) : (
                data.title
              )}
            </h2>
            <p className="text-[16px] text-black leading-relaxed mb-12 max-w-lg">
              {animatedText ? (
                <SplitTextReveal
                  text={data.description}
                  trigger="inView"
                  wordDelay={0.012}
                />
              ) : (
                data.description
              )}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {data.features.map((feature, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <h3 className="text-[16px] font-normal text-primary">
                    {feature.title}
                  </h3>
                  <p className="text-[14px] text-muted leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative w-full flex-1 aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:min-h-[500px] rounded-[5px] overflow-hidden">
            <Image
              src={data.image}
              alt={data.imageAlt || data.title}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
