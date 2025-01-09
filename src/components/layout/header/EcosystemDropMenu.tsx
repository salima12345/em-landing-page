import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from "@/lib/themes";

interface EcosystemDropMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenModal: () => void;
}

const icons = [
  {
    url: 'https://www.eliott-markus.com/wp-content/themes/em-wp/images/em-menu/linkedin.svg',
    alt: 'LinkedIn'
  },
  {
    url: 'https://www.eliott-markus.com/wp-content/themes/em-wp/images/em-menu/x_icon.svg',
    alt: 'X'
  },
  {
    url: 'https://www.eliott-markus.com/wp-content/themes/em-wp/images/em-menu/instagram.svg',
    alt: 'Instagram'
  },
  {
    url: 'https://www.eliott-markus.com/wp-content/themes/em-wp/images/em-menu/facebook.svg',
    alt: 'Facebook'
  }
];

const EcosystemDropMenu: React.FC<EcosystemDropMenuProps> = ({ isOpen, onOpenModal }) => {
  const { theme } = useTheme();

  return (
    <div className="w-full md:w-[287px] 2xl:w-[388px] flex flex-col rounded-[25px] relative transition-all duration-400">
      <motion.div
        className="w-full rounded-[26px] absolute right-0 top-[-25px] max-w[388px] min-w-[287px]"
        animate={{ 
          backgroundColor: isOpen 
            ? (theme === 'dark' ? '#222222' : '#E6E5DF') 
            : 'transparent',
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
              : 'bg-[#D5D4CE] text-black'
            }`
          }
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
              className={`w-full px-5 py-[30px] rounded-b-[26px] opacity-0 
                ${theme === 'dark' 
                  ? 'bg-[#222222] text-white' 
                  : 'bg-[#E6E5DF] text-black'}
              `}
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
                    : 'text-black'}`
                }>
                  <li className="text-[24px] font-semibold text-center self-center cursor-pointer">
                    <Link href="/"> Agence</Link>
                  </li>
                  <li className="text-[24px] text-center self-center cursor-pointer relative">
                    <Link href="/References"> References <span className="text-[#E0643A] text-[20px]">*</span></Link>
                  </li>
                  <li className="text-[24px] text-center self-center cursor-pointer">
                    <Link href="/"> Talents</Link>
                  </li>
                  <li className="text-[24px] text-center self-center cursor-pointer">
                    <Link href="/">  Wilo Insights</Link>
                  </li>
                  <li className="text-[24px] text-center self-center cursor-pointer">
                    <Link href="/Contact" className='flex items-center gap-2'>Contact
                      <Image 
                        src="/images/icons/ArrowUpLight.svg" 
                        alt="" 
                        width={13} 
                        height={13} 
                        className='w-[13px] h-[13px]'
                      />
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="mt-10">
                <ul className="w-[170px] mx-auto flex items-center justify-between">
                  {icons.map((icon, index) => (
                    <li key={index}>
                      <Link href={(() => {
                        switch (icon.alt) {
                          case 'LinkedIn':
                            return 'https://www.linkedin.com/company/eliott-&-markus/';
                          case 'X':
                            return 'https://www.twitter.com/EliottMarkus';
                          case 'Instagram':
                            return 'https://www.instagram.com/eliottmarkus';
                          case 'Facebook':
                            return 'https://www.facebook.com/eliottmarkus';
                          default:
                            return '/';
                        }
                      })()} target="_blank" rel="noopener noreferrer">
                        <Image 
                          src={icon.url} 
                          alt={icon.alt} 
                          width={15} 
                          height={15} 
                          className="transition-all duration-500 hover:opacity-70 w-[15px] h-[15px] cursor-pointer"
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