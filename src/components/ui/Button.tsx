import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { ButtonHTMLAttributes } from 'react';

interface TextRollButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: 'dark' | 'orange';
  arrowSize?: 'small' | 'large';
  className?: string;
  /** When set, the button is a real link to this page instead of a <button>. */
  href?: string;
}

export function TextRollButton({ text, variant: _variant, arrowSize = 'small', className = '', href, ...props }: TextRollButtonProps) {
  const baseBg = 'bg-[#696e2e] hover:bg-[#585c26]';
  const textClass = 'text-white';
  
  const arrowContainerSize = arrowSize === 'small' ? 'w-6 h-6' : 'w-7 h-7 sm:w-8 sm:h-8';
  const arrowIconSize = arrowSize === 'small' ? 'w-3.5 h-3.5' : 'w-3.5 h-3.5 sm:w-4 sm:h-4';
  
  const classes = `group flex items-center justify-between gap-4 rounded-full py-2 pl-5 sm:pl-6 pr-2 text-[13px] font-medium transition-colors ${baseBg} ${textClass} ${className}`;
  const content = (
    <>
      <div className="relative h-[20px] overflow-hidden inline-block">
        <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-[20px]">
          <span className="h-[20px] flex items-center leading-none whitespace-nowrap">{text}</span>
          <span className="h-[20px] flex items-center leading-none whitespace-nowrap">{text}</span>
        </div>
      </div>
      <div className={`flex items-center justify-center bg-white rounded-full shrink-0 ${arrowContainerSize}`}>
        <ArrowRight 
          className={`transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45 ${arrowIconSize} text-[#696e2e]`} 
        />
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }
  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
