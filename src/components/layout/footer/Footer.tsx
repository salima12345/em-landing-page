'use client';

import React from 'react';
import Image from 'next/image';
import AnimatedTitle from '@/components/ui/TitleReveal';
import Info from './Info';
import Copyright from './Copyright';

interface FooterProps {
  bgColor?: string; 
  buttonIcon?: string;
}

function Footer({
  bgColor = '#ECC6C7', 
  buttonIcon = '/images/icons/arrowUpRight.svg', 
}: FooterProps) {
  return (
    <footer className="relative w-full">
      <div className="container mt-10  ">
        <div className="flex items-center justify-between pb-5 xl:pb-8">
          <div>
            <AnimatedTitle
              text={`A project in mind? Let's talk!`}
              className="font-medium text-[21px] lg:text-[31px] xl:text-[41px] 2xl:text-[51px] 3xl:text-[61px] max-w-[800px] "
            />
          </div>
          <button
            className={`rounded-full w-[58px] h-[58px] lg:w-[68px] lg:h-[68px] 2xl:w-[78px] 2xl:h-[78px] flex items-center justify-center transform transition-transform duration-300 hover:scale-105`}
            style={{ backgroundColor: bgColor }} 
          >
            <Image
              src={buttonIcon} 
              alt="Arrow Outward"
              width={14}
              height={14}
              className="w-4 h-4"
            />
          </button>
        </div>
        <Info />
        <Copyright />
      </div>
    </footer>
  );
}

export default Footer;
