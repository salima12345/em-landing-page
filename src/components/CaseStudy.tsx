"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '@/lib/themes';

interface Expertise {
  name: string;
}

interface CaseStudyProps {
  imageUrl: string;
  title: string;
  description: string;
  expertise: Expertise[];
  href: string;
}

function CaseStudy({ imageUrl, title, expertise, description, href }: CaseStudyProps) {
  const { theme } = useTheme();

  return (
    <Link 
      href={href}
      className="group block transition-transform duration-300 hover:-translate-y-1"
    >
      <div className='flex flex-col gap-4 max-w-[590px]'>
        <div className="relative w-full aspect-[590/388] rounded-[14px] overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 590px) 100vw, 590px"
          />
        </div>
        
        <div className="flex flex-wrap gap-2">
          {expertise.map((item, index) => (
            <span
              key={index}
              className={`
                px-4 py-1.5 rounded-[27px] text-[14px] font-medium text-foreground
                ${theme === 'dark' 
                  ? 'bg-grayDark ' 
                  : 'bg-[#E6E5DF] '}
              `}
            >
              {item.name}
            </span>
          ))}
        </div>

        <div className={`
          text-[20px] font-medium text-foreground
        `}>
          {description}
        </div>
      </div>
    </Link>
  );
}

export default CaseStudy;