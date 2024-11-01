"use client";
import React from 'react';
import { motion } from "framer-motion";
import Expertise from '../layout/header/Expertise';
import MadeIn from '../layout/header/MadeIn';
import Image from 'next/image';

function AboutTop() {
  const scrollToSection = () => {
    const section = document.getElementById('about-bottom');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section 
      className="flex flex-col xl:flex-row justify-between gap-8 container"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="overflow-hidden w-full [@media(min-width:1250px)]:-ml-12">
        <motion.div 
          className="overflow-hidden"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: 0.3,
            staggerChildren: 0.15 
          }}
        >
          <h1 className="font-semibold leading-tight text-[60px] xl:text-[80px]">
            Turning expertise into experience
          </h1>
        </motion.div>
      </div>

      <div className="overflow-hidden w-full xl:ml-auto">
        <motion.div 
          className="overflow-hidden flex flex-col gap-5"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: 0.5,
            staggerChildren: 0.15
          }}
        >
          <p className="font-semibold text-[20px] sm:text-[24px] xl:text-[26px]">
            The very best in communications and branding to promote your brand and enhance its influence.
          </p>
          <motion.button 
            className="rounded-full flex items-center justify-center w-[54px] h-[54px] bg-grayDark text-white"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
            onClick={scrollToSection}
          >
            <Image src="/images/icons/arrowAltV.svg" alt="Arrow Icon" width={6} height={6} />
          </motion.button>
        </motion.div>
      </div>

      <div className="overflow-hidden block xl:hidden w-full">
        <motion.div 
          className="flex flex-col gap-4"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
        >
          <Expertise />
          <MadeIn />
        </motion.div>
      </div>
    </motion.section>
  );
}

export default AboutTop;