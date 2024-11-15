import React, { useEffect, useState } from 'react';
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

interface EcosystemModalProps {
  onClose: () => void;
}

export default function EcosystemModal({ onClose }: EcosystemModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const modalContent = (
    <motion.div
      className="fixed inset-0 w-screen h-screen bg-black bg-opacity-50 backdrop-blur-sm z-[50] overflow-auto px-5 py-1"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }} 
    >
      <div className="absolute top-4 right-4 ml-5 z-[9999]">
        <Button
          imageSrc="/images/icons/close.svg"
          altText="close"
          onClick={onClose}
        />
      </div>
      <div className="container mx-auto h-full flex flex-col py-10 gap-3 mt-12 3xl:mt-0">
        <div className="flex flex-col xl:flex-row justify-between gap-3">
          {/* First column/row */}
          <div className="w-full xl:w-1/3 flex flex-col gap-3">
            <div className="flex gap-3">
              <div className="h-[137px] w-1/2">
                <Media />
              </div>
              <div className="h-[137px] w-1/2">
                <Statistics value={45} title='Consultants and experts' />
              </div>
            </div>
            <div className="xl:hidden flex gap-3">
              <div className="h-[137px] w-1/2">
                <Statistics value={800} title='References' />
              </div>
              <div className="h-[137px] w-1/2">
                <Statistics value={4} title='Continents' />
              </div>
            </div>
            <div className="h-[384px]">
              <QuoteCarousel />
            </div>
            <div className="flex gap-3">
              <div className="h-[170px] w-1/2">
                <DateTimeWeather city="Paris" continent="Europe" isDark={false} />
              </div>
              <div className="h-[170px] w-1/2">
                <DateTimeWeather city="Casablanca" continent="Africa" isDark={true} />
              </div>
            </div>
          </div>
          {/* Second column/row */}
          <div className="w-full xl:w-1/3 flex flex-col gap-3">
            <div className="hidden xl:flex gap-3">
              <div className="h-[137px] w-1/2">
                <Statistics value={800} title='References' />
              </div>
              <div className="h-[137px] w-1/2">
                <Statistics value={4} title='Continents' />
              </div>
            </div>
            <div className="h-[384px] flex">
              <EmImage className="w-full h-full" />
            </div>
            <div className="h-[170px]">
              <BlancheImage />
            </div>
          </div>
          {/* Third column/row */}
          <div className="w-full xl:w-1/3 flex flex-col gap-3">
            <div className="h-[171px]">
              <MiroviaImage />
            </div>
            <div className="h-[170px]">
              <LawCareImage />
            </div>
            <div className="h-[171px]">
              <DeskImage />
            </div>
            <div className="h-[170px] bg-[#F3F0E7] rounded-[25px]">
              <WiloImage />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return mounted ? createPortal(modalContent, document.body) : null;
}