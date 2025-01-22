'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import AnimatedTitle from '@/components/ui/TitleReveal';
import TeamReveal from '@/components/TeamReveal';
import { teamGroups } from '@/Data/TeamData';
import type { TeamMember } from '@/Data/TeamData';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';

const Team = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const imageRef = React.useRef(null);
  const isImageInView = useInView(imageRef, { once: true });
  const teamListRef = useRef<HTMLDivElement>(null);

  const imageVariants = {
    hidden: {
      y: "-100%",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

  const activeMembers: TeamMember[] = activeCategory === 'ALL' 
    ? teamGroups.flatMap(group => group.members)
    : teamGroups.find(category => category.name === activeCategory)?.members || [];

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    
    // Scroll to the top of the team list
    if (teamListRef.current) {
      const listTop = teamListRef.current.offsetTop;
      const currentScroll = window.pageYOffset;
      
      // Only scroll if we're not already at the top of the list
      if (currentScroll > listTop) {
        window.scrollTo({
          top: listTop,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <>
    <Header/>
    <div className="py-8">
      <div className="container mx-auto px-4">
        <AnimatedTitle
          text="Talents"
          className="font-semibold text-[14px] py-10"
        />
        <div className="overflow-hidden flex flex-col md:flex-row items-start gap-10 w-full">
          <motion.h5
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, ease: [0.33, 1, 0.68, 1] }}
            className="font-semibold text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-[36px] md:min-w-[560px]"
          >
            We are eliott & markus
          </motion.h5>
          <p className="xl:max-w-[489px]">
            <motion.strong
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, ease: [0.33, 1, 0.68, 1] }}
              className="text-[16px] text-foreground"
            >
              eliott & markus is a community of talented people with unique personalities and varied backgrounds.
              <br />
              What makes us unique is the way we bring them all together to serve our clients.
            </motion.strong>
          </p>
        </div>
      </div>

      <div className="relative mt-8 mx-4 2xl:mx-12 w-auto xl:h-[344px] h-[255px] overflow-hidden rounded-lg">
        <motion.div
          ref={imageRef}
          variants={imageVariants}
          initial="hidden"
          animate={isImageInView ? "visible" : "hidden"}
          className="h-full w-full"
        >
          <Image
            src="https://www.eliott-markus.com/wp-content/uploads/2023/05/talent-bg-scaled.jpg.webp"
            alt="Eliott & Markus Team"
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-lg"
          />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 mt-16">
        <div className="flex flex-col md:flex-row gap-24">
          <div className="w-auto md:sticky md:top-28 self-start">
            <ul className="flex flex-row md:flex-col flex-wrap gap-3">
              <motion.li
                onClick={() => handleCategoryClick('ALL')}
                className={`w-fit px-4 py-2 rounded-full cursor-pointer text-sm font-medium transition-all duration-300 ${
                  activeCategory === 'ALL'
                    ? 'bg-[#222222] text-[#E6E5DF]'
                    : 'bg-[#E6E5DF] hover:bg-[#E6E5DF]/80'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                ALL
              </motion.li>
              {teamGroups.map((category) => (
                <motion.li
                  key={category.name}
                  onClick={() => handleCategoryClick(category.name)}
                  className={`w-fit px-4 py-2 rounded-full cursor-pointer text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.name
                      ? 'bg-[#222222] text-[#E6E5DF]'
                      : 'bg-[#E6E5DF] hover:bg-[#E6E5DF]/80'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {category.name}
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div ref={teamListRef} className="flex-grow">
            <TeamReveal members={activeMembers} />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    </>
  );
};

export default Team;

