'use client'

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { RxHamburgerMenu } from "react-icons/rx"
import LanguageSelector from "./LanguageSelectorDesktop"
import LanguageSelectorMobile from "./LanguagesSelectorMobile"
import Expertise from "./Expertise"
import MadeIn from "./MadeIn"
import Ecosystem from "./Ecosystem"

export default function Header() {
  return (
    <section className="relative">
      <div className="container flex items-center justify-between w-full py-4">
        <Link href="/" className="flex-shrink-0">
          <Image 
            src="/images/Logo.svg" 
            alt="logo" 
            width={120} 
            height={50} 
            className="w-[120px] h-[50px]" 
          />
        </Link>

        <div className="hidden xl:flex items-center gap-3">
          <Expertise/>
          <MadeIn/>
        </div>

        <Ecosystem/>

        <div className="flex items-center gap-4">
          <div className="xl:hidden">
            <LanguageSelectorMobile />
          </div>
          
          <div className="flex items-center xl:fixed xl:flex-col xl:items-end xl:-mr-24 z-30 ">
            <div className="flex items-center gap-2 xl:pb-2">
              <button className="rounded-full flex items-center justify-center w-[54px] h-[54px] bg-grayDark text-foreground">
                <RxHamburgerMenu />
              </button>
            </div>
            
            <div className="hidden xl:block xl:sticky xl:-mr:24 z-30">
              <LanguageSelector />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}