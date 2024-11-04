"use client";
import React from 'react';
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
    <section className="flex flex-col xl:flex-row xl:justify-between gap-8 w-full">
      <div className="overflow-hidden w-full 3xl:-ml-24">
        <div className="overflow-hidden">
          <h1 className="font-semibold leading-tight text-[60px] xl:text-[80px]">
            Turning expertise into experience
          </h1>
        </div>
      </div>
      <div className="overflow-hidden w-full">
        <div className="overflow-hidden flex flex-col gap-5">
          <p className="font-semibold text-[20px] sm:text-[24px] xl:text-[26px]">
            The very best in communications and branding to promote your brand and enhance its influence.
          </p>
          <button 
            className="rounded-full flex items-center justify-center w-[54px] h-[54px] bg-grayDark text-white"
            onClick={scrollToSection}
          >
            <Image src="/images/icons/arrowAltV.svg" alt="Arrow Icon" width={6} height={6} />
          </button>
        </div>
      </div>
      <div className="overflow-hidden block xl:hidden w-full">
        <div className="flex flex-col gap-4">
          <Expertise />
          <MadeIn />
        </div>
      </div>
    </section>
  );
}

export default AboutTop;