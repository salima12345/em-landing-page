"use client";

import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from "@/lib/themes";
import { Linkedin, Twitter, Instagram, Facebook, ArrowUpRight } from 'lucide-react';
interface EcosystemDropMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenModal: () => void;
}

const EcosystemDropMenu: React.FC<EcosystemDropMenuProps> = ({ isOpen, onOpenModal }) => {
  const { theme } = useTheme();

  // Tableau d'icônes Lucide avec leurs liens
  const icons = [
    {
      icon: Linkedin,
      link: 'https://www.linkedin.com/company/eliott-&-markus/',
      alt: 'LinkedIn'
    },
    {
      icon: Twitter,
      link: 'https://www.twitter.com/EliottMarkus',
      alt: 'X'
    },
    {
      icon: Instagram,
      link: 'https://www.instagram.com/eliottmarkus',
      alt: 'Instagram'
    },
    {
      icon: Facebook,
      link: 'https://www.facebook.com/eliottmarkus',
      alt: 'Facebook'
    }
  ];

  return (
    <div className="w-[290px] md:w-[388px] lg:w-[288px] xl:w-[388px] 2xl:w-[388px] flex flex-col rounded-[25px] relative transition-all duration-400">
      <motion.div
        className={`w-full rounded-[26px] absolute right-0 -top-[25px] max-w-[388px] min-w-[287px] 
          md:top-[-25px] md:right-0 md:rounded-[26px]
          ${theme === 'dark' ? 'bg-[#222222]' : 'bg-[#E6E5DF]'}`}
        animate={{ 
          backgroundColor: isOpen 
            ? (theme === 'dark' ? '#222222' : '#E6E5DF') 
            : 'rgba(34, 34, 34, 0)',
          padding: isOpen ? '8px' : '0px',
          height: isOpen ? 'auto' : '56px'
        }}
      >
        <motion.div
          initial={{
            width: '218px',
            height: '56px',
            borderRadius: '26px'
          }}
          className={`mx-auto flex items-center justify-center cursor-pointer z-[2] relative transition-all duration-500 
            ${theme === 'dark' 
              ? 'bg-[#454545] text-white' 
              : 'bg-[#D5D4CE] text-black'}
            md:w-[218px] w-full md:rounded-[26px] rounded-none`}
          animate={{ 
            width: isOpen ? '100%' : '218px',
            height: isOpen ? '62px' : '56px',
            borderRadius: isOpen ? '19px' : '26px'
          }}
          onClick={onOpenModal}
        >
          <span className="text-[16px] tracking-[5px] uppercase text-center">
            Ecosystem
          </span>
        </motion.div>

        <AnimatePresence>
          {isOpen && (
            <motion.div 
              style={{ position: 'relative' }}
              className={`w-full px-4 md:px-5 py-6 md:py-[30px] rounded-none md:rounded-b-[26px] opacity-0 
                ${theme === 'dark' 
                  ? 'bg-[#222222] text-white' 
                  : 'bg-[#E6E5DF] text-black'}`}
              initial={{ 
                opacity: 0, 
                height: 0,
                transform: 'translateY(-10px)'
              }}
              animate={{ 
                opacity: 1, 
                height: 'auto',
                transform: 'translateY(0)'
              }}
              transition={{ 
                duration: 0.3,
                type: 'tween'
              }}
            >
              <nav>
                <ul className={`flex flex-col gap-5 
                  ${theme === 'dark' 
                    ? 'text-white' 
                    : 'text-black'}`}
                >
                  <li className="text-[20px] md:text-[24px] font-semibold text-center self-center cursor-pointer">
                    <Link href="/">Agence</Link>
                  </li>
                  <li className="text-[20px] md:text-[24px] text-center self-center cursor-pointer relative">
                    <Link href="/References">References <span className="text-[#E0643A] text-[20px]">*</span></Link>
                  </li>
                  <li className="text-[20px] md:text-[24px] text-center self-center cursor-pointer">
                    <Link href="/Team">Talents</Link>
                  </li>
                  <li className="text-[20px] md:text-[24px] text-center self-center cursor-pointer">
                    <Link href="/Wilo">Wilo Insights</Link>
                  </li>
                  <li className="text-[20px] md:text-[24px] text-center self-center cursor-pointer">
                  <Link href="/Contact" className="flex items-center gap-2">
                      Contact
                      <ArrowUpRight 
                        size={20} 
                        color={theme === 'dark' ? '#ffffff' : '#000000'} 
                        className="cursor-pointer transition-all duration-500 hover:opacity-70"
                      />
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="mt-6 md:mt-10">
                <ul className="w-[140px] md:w-[170px] mx-auto flex items-center justify-between">
                  {icons.map((icon, index) => (
                    <li key={index}>
                      <Link href={icon.link} target="_blank" rel="noopener noreferrer">
                        <icon.icon 
                          size={20}
                          color={theme === 'dark' ? '#ffffff' : '#000000'} 
                          className="cursor-pointer transition-all duration-500 hover:opacity-70"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default EcosystemDropMenu;