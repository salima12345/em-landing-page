'use client'

import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { RxHamburgerMenu } from "react-icons/rx"
import { motion } from "framer-motion"
import LanguageSelector from "./LanguageSelectorDesktop"
import LanguageSelectorMobile from "./LanguagesSelectorMobile"
import Expertise from "./Expertise"
import MadeIn from "./MadeIn"
import Ecosystem from "./Ecosystem"

export default function Header() {
  const [expandExpertise, setExpandExpertise] = useState(false);
  const [expandMadeIn, setExpandMadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExpandExpertise(true);
      setExpandMadeIn(true);
    }, 500); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.section 
      className="relative"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
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
          <Expertise initialExpanded={expandExpertise} />
          <MadeIn initialExpanded={expandMadeIn} />
        </div>

        <Ecosystem/>

        <div className="flex items-center gap-4  3xl:right-0 3xl:-mr-12">
          <div className="xl:hidden">
            <LanguageSelectorMobile />
          </div>
          
          <div className="flex items-center xl:fixed flex-col items-end z-30">
            <div className="flex items-center gap-2 xl:pb-2">
              <button className="rounded-full flex items-center justify-center w-[54px] h-[54px] bg-grayDark text-foreground">
                <RxHamburgerMenu />
              </button>
            </div>
            
            <div className="hidden xl:block xl:sticky z-30">
              <LanguageSelector />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}