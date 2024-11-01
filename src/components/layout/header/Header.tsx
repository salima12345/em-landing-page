"use client"
import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import LanguageSelector from "./LanguageSelectorDesktop"
import LanguageSelectorMobile from "./LanguagesSelectorMobile"
import Expertise from "./Expertise"
import MadeIn from "./MadeIn"
import Ecosystem from "./Ecosystem"

export default function Header() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false)
  const [expandExpertise, setExpandExpertise] = useState(false)
  const [expandMadeIn, setExpandMadeIn] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isScrollingDown, setIsScrollingDown] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const headerRef = useRef(null)

  useEffect(() => {
    // Delay header visibility and initial expansion
    const timer = setTimeout(() => {
      setIsHeaderVisible(true)
      setExpandExpertise(true)
      setExpandMadeIn(true)
    }, 500)

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Scroll behavior logic
      if (currentScrollY > 50) {
        setIsScrolled(true)
        setExpandExpertise(false)
        setExpandMadeIn(false)
      } else {
        setIsScrolled(false)
        setExpandExpertise(true)
        setExpandMadeIn(true)
      }

      setIsScrollingDown(currentScrollY > lastScrollY)
      setLastScrollY(currentScrollY)
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  return (
    <motion.section
      ref={headerRef}
      className="sticky top-0 left-0 right-0 z-50 container"
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: isHeaderVisible ? 0 : -100, 
        opacity: isHeaderVisible ? 1 : 0 
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex items-center justify-between w-full">
        <AnimatePresence>
          {(!isScrollingDown || !isScrolled) && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-between xl:flex-grow"
            >
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
                <Expertise initialExpanded={expandExpertise} />
                <MadeIn initialExpanded={expandMadeIn} />
              </div>
              <div className="hidden xl:block mr-auto">
                <Ecosystem />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Right-aligned container - always visible */}
        <div className="flex items-center gap-4 ml-auto">
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
      </div>
    </motion.section>
  )
}