'use client'

import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import LanguageSelector from "./LanguageSelectorDesktop"
import LanguageSelectorMobile from "./LanguagesSelectorMobile"
import Expertise from "./Expertise"
import MadeIn from "./MadeIn"
import Ecosystem from "./Ecosystem"

export default function Header() {
  const [expandExpertise, setExpandExpertise] = useState(false)
  const [expandMadeIn, setExpandMadeIn] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isScrollingDown, setIsScrollingDown] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [headerAnimationComplete, setHeaderAnimationComplete] = useState(false)

  useEffect(() => {
    // Délai pour l'expansion après l'animation du header
    const expansionTimer = setTimeout(() => {
      if (headerAnimationComplete) {
        setExpandExpertise(true)
        // Petit délai entre les deux expansions
        setTimeout(() => {
          setExpandMadeIn(true)
        }, 100)
      }
    }, 200) // Délai après la fin de l'animation du header

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > 170) {
        setIsScrolled(true)
        setExpandExpertise(false)
        setExpandMadeIn(false)
      } else {
        setIsScrolled(false)
        if (headerAnimationComplete) {
          setExpandExpertise(true)
          setExpandMadeIn(true)
        }
      }

      setIsScrollingDown(currentScrollY > lastScrollY)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      clearTimeout(expansionTimer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY, headerAnimationComplete])

  return (
    <motion.section 
      className="sticky top-0 z-50 container"
      initial={{ y: 40 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onAnimationComplete={() => setHeaderAnimationComplete(true)}
    >
      <div className="flex items-center justify-between w-full">
        <AnimatePresence>
          <motion.div
            key="header-content"
            initial={{ opacity: 1, y: 0 }}
            animate={{ 
              opacity: (!isScrollingDown || !isScrolled) ? 1 : 0,
              y: (!isScrollingDown || !isScrolled) ? 0 : -20
            }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-between w-full"
          >
            <div className="flex items-center justify-between xl:flex-grow">
              <Link href="/" className="flex-shrink-0">
                <Image 
                  src="/images/Logo.svg" 
                  alt="logo" 
                  width={120} 
                  height={50} 
                  className="w-[120px] h-[50px]" 
                />
              </Link>

              <div className="hidden xl:flex items-center gap-3 xl:mx-auto">
                <Expertise 
                  initialExpanded={expandExpertise} 
                />
                <MadeIn 
                  initialExpanded={expandMadeIn} 
                />
              </div>

              <div className="hidden xl:block xl:mx-auto">
                <Ecosystem />
              </div>
            </div>

            <div className="flex items-center gap-4 3xl:right-0 3xl:-mr-12">
              <div className="xl:hidden">
                <LanguageSelectorMobile />
              </div>
              
              <div className="flex items-center flex-col items-end">
                <div className="flex items-center gap-2 xl:pb-2 xl:pt-4">
                  <button className="rounded-full flex items-center justify-center w-[54px] h-[54px] bg-grayDark text-foreground">
                    <Image 
                      src="/images/icons/burgerMenu.svg" 
                      alt="Menu" 
                      width={24} 
                      height={24} 
                      className="w-6 h-6"
                    />
                  </button>
                </div>
                
                <div className="hidden xl:block">
                  <LanguageSelector />
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  )
}