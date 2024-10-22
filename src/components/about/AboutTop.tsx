import React from 'react';
import { FaArrowsAltV } from "react-icons/fa";
import Expertise from '../layout/Navigation/Expertise';
import MadeIn from '../layout/Navigation/MadeIn';

function AboutTop() {
  return (
    <div className=" flex flex-col xl:flex-row justify-between gap-8  ">
      <div className="flex  max-w-[580px]">
        <h1 className="font-semibold leading-tight text-[60px] xl:text-[80px]">
          Turning expertise into experience
        </h1>
      </div>
   

      <div className="flex flex-col gap-5 ml-auto max-w-[590px]">
        <p className="font-semibold text-[20px] sm:text-[24px] xl:text-[26px]">
          The very best in communications and branding to promote your brand and enhance its influence.
        </p>
        <button className="rounded-full flex items-center justify-center w-[54px] h-[54px] bg-grayDark text-white">
          <FaArrowsAltV />
        </button>
      </div>
      <div  className='block xl:hidden  flex flex-col gap-4'>
        <Expertise/>
        <MadeIn/>
      </div>
    </div>
  );
}

export default AboutTop;
