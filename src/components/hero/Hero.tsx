"use client"
import React from 'react';
import { motion } from 'framer-motion';
import SliderSwiper from './Slider';

function Hero() {
  return (
    <motion.section 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <SliderSwiper />
    </motion.section>
  );
}

export default Hero;