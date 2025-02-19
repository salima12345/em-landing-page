import React from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Media from './MediaCard';
import Statistics from './Statistics';
import QuoteCarousel from './Quotes';
import DateTimeWeather from './DateTimeWeather';
import EmImage from './EmImage';
import MiroviaImage from './MiroviaImage';
import LawCareImage from './LawCareImage';
import BlancheImage from './BlancheImage';
import WiloImage from './WiloImage';
import DeskImage from './DeskImage';
import { X } from 'lucide-react';

interface EcosystemModalProps {
  onClose: () => void;
}

export default function EcosystemModal({ onClose }: EcosystemModalProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, 
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const modalContent = (
    <motion.div
      className="fixed inset-0 w-screen h-screen bg-black bg-opacity-50 backdrop-blur-sm z-[50] overflow-auto px-5 py-1"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={containerVariants}
    >
      <div className="absolute top-4 right-4 ml-5 z-[9999]">
       <Button Icon={X} altText="Close" onClick={onClose}/>
        
      </div>

      <motion.div
        className="container mx-auto h-full flex flex-col py-10 gap-3 mt-12 3xl:mt-0"
        variants={containerVariants}
      >
        <motion.div
          className="flex flex-col xl:flex-row justify-between gap-3"
          variants={itemVariants}
        >
          {/* First column/row */}
          <motion.div className="w-full xl:w-1/3 flex flex-col gap-3" variants={itemVariants}>
            <motion.div className="flex gap-3" variants={itemVariants}>
              <motion.div className="h-[137px] w-1/2" variants={itemVariants}>
                <Media />
              </motion.div>
              <motion.div className="h-[137px] w-1/2" variants={itemVariants}>
                <Statistics value={45} title="Consultants and experts" />
              </motion.div>
            </motion.div>
            <motion.div className="xl:hidden flex gap-3" variants={itemVariants}>
              <div className="h-[137px] w-1/2">
                <Statistics value={800} title="References" />
              </div>
              <div className="h-[137px] w-1/2">
                <Statistics value={4} title="Continents" />
              </div>
            </motion.div>
            <motion.div className="h-[384px]" variants={itemVariants}>
              <QuoteCarousel />
            </motion.div>
            <motion.div className="flex gap-3" variants={itemVariants}>
              <div className="h-[170px] w-1/2">
                <DateTimeWeather city="Paris" continent="Europe" isDark={false} />
              </div>
              <div className="h-[170px] w-1/2">
                <DateTimeWeather city="Casablanca" continent="Africa" isDark={true} />
              </div>
            </motion.div>
          </motion.div>
          {/* Second column/row */}
          <motion.div className="w-full xl:w-1/3 flex flex-col gap-3" variants={itemVariants}>
            <motion.div className="hidden xl:flex gap-3" variants={itemVariants}>
              <div className="h-[137px] w-1/2">
                <Statistics value={800} title="References" />
              </div>
              <div className="h-[137px] w-1/2">
                <Statistics value={4} title="Continents" />
              </div>
            </motion.div>
            <motion.div className="h-[384px] flex" variants={itemVariants}>
              <EmImage className="w-full h-full" />
            </motion.div>
            <motion.div className="h-[170px]" variants={itemVariants}>
              <BlancheImage />
            </motion.div>
          </motion.div>
          {/* Third column/row */}
          <motion.div className="w-full xl:w-1/3 flex flex-col gap-3" variants={itemVariants}>
            <motion.div className="h-[171px]" variants={itemVariants}>
              <MiroviaImage />
            </motion.div>
            <motion.div className="h-[170px]" variants={itemVariants}>
              <LawCareImage />
            </motion.div>
            <motion.div className="h-[171px]" variants={itemVariants}>
              <DeskImage />
            </motion.div>
            <motion.div className="h-[170px] bg-[#F3F0E7] rounded-[25px]" variants={itemVariants}>
              <WiloImage />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );

  return createPortal(modalContent, document.body);
}
