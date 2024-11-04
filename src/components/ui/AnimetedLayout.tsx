"use client";

import { motion } from "framer-motion";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";

export default function AnimatedLayout({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
      <Header />
      {children}
      <Footer />
    </motion.div>
  );
}
