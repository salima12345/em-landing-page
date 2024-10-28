"use client"
import React from 'react'
import Image from 'next/image'
import AnimatedTitle from '@/components/ui/TitleReveal'

function Footer() {
  return (
    <div className="container mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div>
          <AnimatedTitle
            text="A project to carry out? Let's talk about it!"
            className="font-medium text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-[40px] leading-[40px] "
          />
        </div>
        <div className="flex justify-end">
          <button className="rounded-full w-[78px] h-[78px] sm:w-[98px] sm:h-[98px] bg-[#ECC6C7] flex items-center justify-center">
            <Image src="/images/icons/contact-arrow.svg" alt="" width={16} height={16} className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Footer