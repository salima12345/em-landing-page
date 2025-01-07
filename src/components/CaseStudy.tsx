"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
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
  const ref = React.useRef(null);
  const isInView = useInView(ref, { 
    once: true,
    margin: "-100px"
  });

  return (
    <Link 
      href={href}
      className="group block transition-transform duration-300 hover:-translate-y-1"
    >
      <div className='flex flex-col gap-4 max-w-[590px]'>
        <motion.div 
          ref={ref}
          className="relative w-full aspect-[590/388] rounded-[14px] overflow-hidden"
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { 
            opacity: 1, 
            y: 0,
            transition: {
              duration: 1,
              ease: [0.25, 0.4, 0.3, 0.96],
            }
          } : { opacity: 0, y: 100 }}
        >
          <motion.div
            className="w-full h-full"
            initial={{ scale: 1.4 }}
            animate={isInView ? { 
              scale: 1,
              transition: {
                duration: 1.5,
                ease: [0.25, 0.4, 0.3, 0.96],
              }
            } : { scale: 1.4 }}
          >
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 590px) 100vw, 590px"
            />
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-2"
        >
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
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`text-[20px] font-medium text-foreground`}
        >
          {description}
        </motion.div>
      </div>
    </Link>
  );
}

export default CaseStudy;