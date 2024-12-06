"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import LanguageSelector from "./LanguageSelectorDesktop";
import LanguageSelectorMobile from "./LanguagesSelectorMobile";
import Expertise from "./Expertise";
import MadeIn from "./MadeIn";
import EcosystemDropMenu from "./EcosystemDropMenu";
import EcosystemModal from "./EcosystemModal/EcosystemModal";
import Button from "@/components/ui/Button";

export default function Header() {
  const pathname = usePathname();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExpertiseExpanded, setIsExpertiseExpanded] = useState(false);
  const [isMadeInExpanded, setIsMadeInExpanded] = useState(false);
  const [expertiseUserCollapsed, setExpertiseUserCollapsed] = useState(false);
  const [madeInUserCollapsed, setMadeInUserCollapsed] = useState(false);

  // Reset menu state when pathname changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsModalOpen(false);
    setExpertiseUserCollapsed(false);
    setMadeInUserCollapsed(false);
    setIsExpertiseExpanded(false);
    setIsMadeInExpanded(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setHeaderVisible(false);
        setIsMenuOpen(false);
        setIsModalOpen(false);
      } else {
        setHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const handleBurgerClick = () => {
    const newMenuState = !isMenuOpen;
    setIsMenuOpen(newMenuState);
    
    if (!newMenuState) {
      // Reset user collapsed states when menu is closed
      setExpertiseUserCollapsed(false);
      setMadeInUserCollapsed(false);
      setIsExpertiseExpanded(false);
      setIsMadeInExpanded(false);
    } else {
      // When menu is opened, expand only sections that weren't manually collapsed
      setIsExpertiseExpanded(!expertiseUserCollapsed);
      setIsMadeInExpanded(!madeInUserCollapsed);
    }
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
    setExpertiseUserCollapsed(false);
    setMadeInUserCollapsed(false);
    setIsExpertiseExpanded(false);
    setIsMadeInExpanded(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setIsMenuOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleExpertiseToggle = (expanded: boolean) => {
    setIsExpertiseExpanded(expanded);
    if (!expanded && isMenuOpen) {
      setExpertiseUserCollapsed(true);
    }
  };

  const handleMadeInToggle = (expanded: boolean) => {
    setIsMadeInExpanded(expanded);
    if (!expanded && isMenuOpen) {
      setMadeInUserCollapsed(true);
    }
  };

  return (
    <>
      <section className="[@media(min-width:1190px)]:sticky [@media(min-width:1190px)]:top-0 z-50 container">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="flex items-center justify-between w-full"
          >
            <div className="flex items-center 3xl:-mr-[124px]">
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
                  <div className="hidden [@media(min-width:1190px)]:flex items-center gap-5 ml-[44px] 2xl:ml-[88px]">
                    <Expertise 
                      isHeader={true}
                      isExpanded={isExpertiseExpanded}
                      setExpanded={handleExpertiseToggle}
                      defaultExpanded={false}
                      isMenuOpen={isMenuOpen}
                    />
                    <MadeIn 
                      isHeader={true}
                      isExpanded={isMadeInExpanded}
                      setExpanded={handleMadeInToggle}
                      defaultExpanded={false}
                      isMenuOpen={isMenuOpen}
                    />
                    <EcosystemDropMenu 
                      isOpen={isMenuOpen} 
                      onClose={handleCloseMenu} 
                      onOpenModal={handleOpenModal}
                    />
                  </div>
                </>
              )}
            </div>
            <div className="flex items-center gap-4 absolute right-0 [@media(min-width:1190px)]:relative 3xl:-mr-[100px]">
              <div className="[@media(min-width:1190px)]:hidden">
                <LanguageSelectorMobile />
              </div>
              <div className="flex items-center flex-col items-end">
                <div className="flex items-center gap-2 [@media(min-width:1190px)]:pb-2 [@media(min-width:1190px)]:pt-4">
                  <Button
                    imageSrc={isMenuOpen ? "/images/icons/close.svg" : "/images/icons/burgerMenu.svg"}
                    altText="Menu"
                    onClick={handleBurgerClick}
                  />
                </div>
                <div className="hidden [@media(min-width:1190px)]:block">
                  <LanguageSelector />
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {isModalOpen && <EcosystemModal onClose={handleCloseModal} />}
    </>
  );
}