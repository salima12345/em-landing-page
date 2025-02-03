"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useTheme } from "@/lib/themes";
import LanguageSelector from "./LanguageSelectorDesktop";
import LanguageSelectorMobile from "./LanguagesSelectorMobile";
import Expertise from "./Expertise";
import MadeIn from "./MadeIn";
import EcosystemDropMenu from "./EcosystemDropMenu";
import EcosystemModal from "./EcosystemModal/EcosystemModal";
import Button from "@/components/ui/Button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const { theme } = useTheme();

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
    document.body.classList.remove("menu-open");
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show the header if the menu is open
      if (isMenuOpen) {
        setHeaderVisible(true);
        return;
      }

      // Hide the header only if scrolling down and not at the top
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setHeaderVisible(false);
      } else {
        setHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, isMenuOpen]);

  const handleBurgerClick = () => {
    const newMenuState = !isMenuOpen;
    setIsMenuOpen(newMenuState);
    document.body.classList.toggle("menu-open", newMenuState);

    if (!newMenuState) {
      setExpertiseUserCollapsed(false);
      setMadeInUserCollapsed(false);
      setIsExpertiseExpanded(false);
      setIsMadeInExpanded(false);
    } else {
      setIsExpertiseExpanded(!expertiseUserCollapsed);
      setIsMadeInExpanded(!madeInUserCollapsed);
    }
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove("menu-open");
    setExpertiseUserCollapsed(false);
    setMadeInUserCollapsed(false);
    setIsExpertiseExpanded(false);
    setIsMadeInExpanded(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setIsMenuOpen(false);
    document.body.classList.remove("menu-open");
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
                      src={theme === "dark" ? "/images/logo.svg" : "/images/darkLogo.svg"}
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
                  <motion.div
                    key={isMenuOpen ? "close" : "menu"}
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button
                      Icon={isMenuOpen ? X : Menu}
                      lightIconColor="#333333"
                      darkIconColor="#ffffff"
                      altText="Menu"
                      onClick={handleBurgerClick}
                    />
                  </motion.div>
                </div>
                <div className="hidden [@media(min-width:1190px)]:block">
                  <LanguageSelector />
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="sticky inset-0 z-40 bg-background [@media(min-width:1190px)]:hidden mx-auto mt-[130px]"
          >
                  <EcosystemDropMenu 
                    isOpen={true}
                    onClose={handleCloseMenu}
                    onOpenModal={handleOpenModal}
                  />
          </motion.div>
        )}
      </AnimatePresence>

      {isModalOpen && <EcosystemModal onClose={handleCloseModal} />}
    </>
  );
}