'use client';
import React from 'react';

import { motion } from 'framer-motion';
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Values from "@/components/em-values/Values";
import ValuesMobile from "@/components/em-valuesMobile/ValuesMobile";
import Realization from "@/components/realization/Realization";
import Clients from "@/components/clients/Clients";
import Footer from '@/components/layout/footer';

export default function Home() {
  return (
    < >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .5 }}
      >
        <Hero />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <About />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="hidden xl:block"
      >
        <Values />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="xl:hidden"
      >
        <ValuesMobile />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <Realization />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <Clients />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <Footer />
      </motion.div>
    </>
  );
}

