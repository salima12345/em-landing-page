'use client'

import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import LanguageSelector from "./LanguageSelectorDesktop"
import LanguageSelectorMobile from "./LanguagesSelectorMobile"
import Expertise from "./Expertise"
import MadeIn from "./MadeIn"
import Ecosystem from "./Ecosystem"
import MagneticButton from "@/components/ui/MagneticButton"

export default function Header() {
  const [expandExpertise, setExpandExpertise] = useState(false)
  const [expandMadeIn, setExpandMadeIn] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [headerVisible, setHeaderVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > 170) {
        setHeaderVisible(false)
      } else {
        setHeaderVisible(true)
        setExpandExpertise(true)
        setExpandMadeIn(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  return (
    <section className="xl:sticky xl:top-0 z-50 container">
      <div className="flex items-center justify-between w-full transition-opacity duration-300">
        <div className={`flex items-center justify-between xl:flex-grow ${headerVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
          <Link href="/" className="flex-shrink-0">
            <Image 
              src="/images/logo.svg" 
              alt="logo" 
              width={120} 
              height={50} 
              className="w-[120px] h-[50px]" 
            />
          </Link>
          <div className="hidden xl:flex items-center gap-3 xl:mx-auto">
            <Expertise initialExpanded={expandExpertise} />
            <MadeIn initialExpanded={expandMadeIn} />
          </div>
          <div className="hidden xl:block xl:mx-auto">
            <Ecosystem />
          </div>
        </div>
        <div className="flex items-center gap-4 absolute right-4 xl:relative xl:right-0">
          <div className="xl:hidden">
            <LanguageSelectorMobile />
          </div>
          <div className="flex items-center flex-col items-end">
            <div className="flex items-center gap-2 xl:pb-2 xl:pt-4">
            <MagneticButton>
            <button className="rounded-full flex items-center justify-center w-[54px] h-[54px] bg-grayDark text-foreground">
                <Image 
                  src="/images/icons/burgerMenu.svg" 
                  alt="Menu" 
                  width={24} 
                  height={24} 
                  className="w-6 h-6"
                />
              </button>
            </MagneticButton>
          
            </div>
            <div className="hidden xl:block">
              <LanguageSelector />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}