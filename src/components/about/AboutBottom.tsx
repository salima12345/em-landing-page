"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from "framer-motion";

interface AnimatedNumberProps {
  targetValue: number;
  duration?: number;
  shouldStart: boolean;
}

function AnimatedNumber({ targetValue, duration = 2000, shouldStart }: AnimatedNumberProps) {
  const [value, setValue] = useState(0);
  const animationRef = useRef<number>();
  const hasAnimated = useRef(false);

  useEffect(() => {
    // Only start animation if it hasn't run before and shouldStart is true
    if (!shouldStart || hasAnimated.current) {
      return;
    }

    let start = 0;
    const startTime = performance.now();
    hasAnimated.current = true;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      start = targetValue * progress;
      
      if (progress >= 1) {
        setValue(targetValue);
        return;
      }
      
      setValue(Math.floor(start));
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [targetValue, duration, shouldStart]);

  return <p className="font-semibold text-[26px]">{value}</p>;
}

interface StatCardProps {
  title: string;
  value: number;
  staticValue?: boolean;
  isOrdinal?: boolean;
  triggerAnimation: boolean;
}

function StatCard({ title, value, staticValue = false, isOrdinal = false, triggerAnimation }: StatCardProps) {
  const displayValue = isOrdinal && value === 1 ? (
    <span className="inline-flex items-start">
      1<sup className="leading-none pt-3 align-top">st</sup>
    </span>
  ) : (
    value
  );

  return (
    <div className="flex flex-col gap-3 py-2 border-t-2 border-foreground w-full min-w-[186px] h-[124px]">
      {staticValue ? (
        <p className="font-semibold text-[26px]">{displayValue}</p>
      ) : (
        <AnimatedNumber 
          targetValue={value} 
          shouldStart={triggerAnimation}
          duration={2000}
        />
      )}
      <h4 className="font-semibold text-[26px]">{title}</h4>
    </div>
  );
}

function AboutBottom() {
  const [hasTriggered, setHasTriggered] = useState(false);
  const sectionRef = useRef(null);
  const controls = useAnimation();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasTriggered) {
          setHasTriggered(true);
          controls.start({ y: 0, opacity: 1 });
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls, hasTriggered]);

  return (
    <motion.section
      ref={sectionRef}
      id="about-bottom"
      className="flex justify-end w-full pt-8"
      initial={{ y: 40, opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="flex-1"></div>
      <div className="flex flex-col xl:max-w-[782px] w-full">
        <p className="text-2xl leading-[34px]">
          As a pioneering agency, eliott &amp; markus is both a witness to and a key player in digital, societal, and commercial trends of professional services firms and organizations.
          Thanks to our integrated, global approach to communications, enriched by our in-depth knowledge of complex markets, eliott &amp; markus builds brand awareness for its customers in today&apos;s attention economy.
        </p>
        <div className="flex flex-col xl:flex-row items-center gap-5 pt-6">
          <StatCard title="consultants and experts" value={45} triggerAnimation={hasTriggered} />
          <StatCard title="References" value={800} triggerAnimation={hasTriggered} />
          <StatCard title="Continents" value={4} triggerAnimation={hasTriggered} />
          <StatCard title="Ranked as Leading" value={1} staticValue isOrdinal triggerAnimation={hasTriggered} />
        </div>
      </div>
    </motion.section>
  );
}

export default AboutBottom;