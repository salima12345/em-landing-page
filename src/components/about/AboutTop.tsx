"use client";

import React from 'react';
import Expertise from '../layout/header/Expertise';
import MadeIn from '../layout/header/MadeIn';
import Button from '../ui/Button';
import { motion } from 'framer-motion';
import { MoveVertical } from 'lucide-react';

function AboutTop() {
  const scrollToSection = () => {
    const section = document.getElementById('about-bottom');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="flex flex-col xl:flex-row xl:justify-between gap-8 w-full">
      <div className="overflow-hidden w-full 3xl:-ml-12">
        <div className="overflow-hidden">
        <motion.h1
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, ease: [0.33, 1, 0.68, 1] }}
        className="font-semibold leading-tight text-[60px] xl:text-[80px] "
      >
       Turning expertise into experience

      </motion.h1>
          <h1 className="font-semibold leading-tight text-[60px] xl:text-[80px] animate-slide-in-up">
          </h1>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col gap-5 overflow-hidden">
        <motion.p
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, ease: [0.33, 1, 0.68, 1] }}
        className="font-semibold text-[20px] sm:text-[24px] xl:text-[26px]"
      >
        The very best in communications and branding to promote your brand and enhance its influence.


      </motion.p>

          
          <div className='w-[60px]'>
            <Button
              Icon={MoveVertical}
              lightIconColor="#333333"
              darkIconColor="#ffffff"
              altText="Arrow Icon"
              onClick={scrollToSection}
            />
          </div>
        </div>
      </div>
      <div className="overflow-hidden block xl:hidden w-full">
        <div className="flex flex-col gap-4">
          <Expertise defaultExpanded={true} pushContent={true} />
          <MadeIn defaultExpanded={false} pushContent={true} />
        </div>
      </div>
    </section>
  );
}

export default AboutTop;