"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from "framer-motion";

interface AnimatedNumberProps {
  targetValue: number;
  duration?: number;
}

function AnimatedNumber({ targetValue, duration = 800 }: AnimatedNumberProps) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = targetValue / (duration / 16);

    function animate() {
      start += increment;
      if (start >= targetValue) {
        setValue(targetValue);
      } else {
        setValue(Math.floor(start));
        requestAnimationFrame(animate);
      }
    }
    animate();
  }, [targetValue, duration]);

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
        triggerAnimation && <AnimatedNumber targetValue={value} />
      )}
      <h4 className="font-semibold text-[26px]">{title}</h4>
    </div>
  );
}

function AboutBottom() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          controls.start({ y: 0, opacity: 1 });
        }
      },
      { threshold: 0.3 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);

  return (
    <motion.section 
      ref={sectionRef}
      id="about-bottom" 
      className="flex justify-end w-full pt-8"
      initial={{ y: 100, opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex-1"></div> 
      <div className="flex flex-col xl:max-w-[782px] w-full">
        <p className="text-2xl leading-[34px]">
          As a pioneering agency, eliott & markus is both a witness to and a key player in digital, societal, and commercial trends of professional services firms and organizations.
          Thanks to our integrated, global approach to communications, enriched by our in-depth knowledge of complex markets, eliott & markus builds brand awareness for its customers in today’s attention economy.
        </p>
        <div className="flex flex-col xl:flex-row items-center gap-5 pt-6">
          <StatCard title="consultants and experts" value={45} triggerAnimation={isInView} />
          <StatCard title="References" value={800} triggerAnimation={isInView} />
          <StatCard title="Continents" value={4} triggerAnimation={isInView} />
          <StatCard title="Ranked as Leading" value={1} staticValue isOrdinal triggerAnimation={isInView} />
        </div>
      </div>
    </motion.section>
  );
}

export default AboutBottom;
