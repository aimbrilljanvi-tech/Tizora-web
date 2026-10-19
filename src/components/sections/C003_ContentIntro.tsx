'use client';

import { TextRollButton } from '../ui';
import { motion } from 'motion/react';
import { ReactNode } from 'react';

export interface AboutProps {
  tagTitle: string;
  heading: ReactNode;
  paragraph1: ReactNode;
  buttonText: string;
  buttonAction?: () => void;
  /** Page the button links to. When set, the button is a real link. */
  buttonHref?: string;
  imageSmall: string;
  imageLarge: string;
}

export function ContentIntro({
  tagTitle,
  heading,
  paragraph1,
  buttonText,
  buttonAction,
  buttonHref,
  imageSmall,
  imageLarge
}: AboutProps) {
  return (
    <section 
      data-component-id="C003" 
      data-component-name="About"
      className="bg-background pt-16 sm:pt-20 lg:pt-32 pb-12 sm:pb-16 lg:pb-24 overflow-hidden"
    >
      <div className="max-w-360 mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 mb-6 sm:mb-8"
        >
          <div className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary text-surface text-[11px] sm:text-[12px] font-semibold leading-none">
            1
          </div>
          <div className="text-[12px] sm:text-[13px] font-medium border border-border rounded-full px-3 sm:px-4 py-1 sm:py-1.5 leading-none text-primary">
            {tagTitle}
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="text-[26px] sm:text-[36px] lg:text-[52px] font-normal leading-[1.15] tracking-[-0.02em] text-primary mb-8 sm:mb-16 lg:mb-28 max-w-240 pr-4 sm:pr-0"
        >
          {heading}
        </motion.h2>

        {/* MOBILE/TABLET STACK */}
        <div className="flex flex-col lg:hidden gap-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-start gap-6"
          >
            <p className="text-[15px] sm:text-[17px] leading-[1.6] font-medium text-primary">
              {paragraph1}
            </p>
            <TextRollButton text={buttonText} onClick={buttonAction} href={buttonHref} variant="dark" arrowSize="small" className="bg-primary hover:bg-primary-hover text-surface" />
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
            <motion.img
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              src={imageSmall} 
              alt="Studio small" 
              className="w-full sm:w-[45%] aspect-438/346 rounded-xl sm:rounded-2xl object-cover" 
            />
            <motion.img
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
              src={imageLarge} 
              alt="Studio large" 
              className="w-full sm:w-[55%] aspect-900/600 rounded-xl sm:rounded-2xl object-cover" 
            />
          </div>
        </div>

        {/* DESKTOP GRID */}
        <div className="hidden lg:grid grid-cols-[26%_1fr_48%] items-end gap-6 xl:gap-8">
          <motion.img
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            src={imageSmall} 
            alt="Studio small" 
            className="w-full aspect-438/346 rounded-2xl object-cover self-end" 
          />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="self-start flex flex-col items-start gap-8 justify-end h-[calc(100%-80px)]"
          >
            {/* Split paragraph into line breaks if provided as string? The text has <br/> tags in the original. It's best if we let the parent pass it with formatting or wrap the string. */}
            <p className="text-[16px] xl:text-[18px] leading-[1.65] font-medium text-primary pt-[20%]">
              {paragraph1}
            </p>
            <TextRollButton text={buttonText} onClick={buttonAction} href={buttonHref} variant="dark" arrowSize="small" className="bg-primary hover:bg-primary-hover text-surface" />
          </motion.div>
          <motion.img
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            src={imageLarge} 
            alt="Studio large" 
            className="w-full aspect-3/2 rounded-2xl object-cover self-end" 
          />
        </div>
      </div>
    </section>
  );
}