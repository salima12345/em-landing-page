"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import LanguageSelector from "./LanguageSelectorDesktop"
import LanguageSelectorMobile from "./LanguagesSelectorMobile"
import Expertise from "./Expertise"
import MadeIn from "./MadeIn"
import Ecosystem from "./Ecosystem"
import Button from "@/components/ui/Button"
import EcosystemModal from "./EcosystemModal/EcosystemModal"

export default function Header() {
  const [lastScrollY, setLastScrollY] = useState(0)
  const [headerVisible, setHeaderVisible] = useState(true)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setHeaderVisible(false)
      } else {
        setHeaderVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  const handleOpenModal = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <>
      <section className="xl:sticky xl:top-0 z-50 container">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="flex items-center justify-between w-full"
          >
            <div className="flex items-center justify-between xl:flex-grow">
              {headerVisible && (
                <>
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
                    <Expertise autoExpand={true} />
                    <MadeIn autoExpand={true} />
                  </div>
                  <div className="hidden xl:block xl:mx-auto">
                    <Ecosystem onOpenModal={handleOpenModal} />
                  </div>
                </>
              )}
            </div>

            <div className="flex items-center gap-4 absolute right-4 xl:relative xl:right-0">
              <div className="xl:hidden">
                <LanguageSelectorMobile />
              </div>
              <div className="flex items-center flex-col items-end">
                <div className="flex items-center gap-2 xl:pb-2 xl:pt-4">
                  <Button 
                    imageSrc="/images/icons/burgerMenu.svg" 
                    altText="Menu" 
                  />
                </div>
                <div className="hidden xl:block">
                  <LanguageSelector />
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>
      {showModal && <EcosystemModal onClose={handleCloseModal} />}
    </>
  )
}