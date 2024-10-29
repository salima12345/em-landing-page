'use client'

import React from 'react'
import AnimatedTitle from '@/components/ui/TitleReveal'
import { MdOutlineArrowOutward } from "react-icons/md";
import Info from './Info';
import Copyright from './Copyright';


function Footer() {
  return (
    <>
    <div className="container mt-8 ">
      <div className='flex items-center justify-between py-10'>
      <div>
          <AnimatedTitle
            text={`A project in mind? Let's talk!`}
            className="font-medium text-[21px] lg:text-[31px] xl:text-[41px] 2xl:text-[51px] 3xl:text-[61px]  max-w-[800px]"
          />
        </div>
          <button className="rounded-full w-[58px] h-[58px] lg:w-[68px]  lg:h-[68px] 2xl:w-[78px]  2xl:h-[78px] bg-[#ECC6C7] flex items-center justify-center">
           <MdOutlineArrowOutward size={27} color='black'/>
          </button>

      </div>
      <Info/>
    </div>
    <Copyright/>
    </>
  )
}

export default Footer