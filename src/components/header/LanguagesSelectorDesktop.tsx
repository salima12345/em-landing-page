"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function LanguageSelector() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className=" relative w-[54px] hidden xl:block ">
      <motion.div
        className="absolute top-0 left-0 right-0 bg-grayDark text-foreground rounded-full overflow-hidden cursor-pointer"
        initial={{ height: 54, width: 54 }}
        animate={{
          height: isExpanded ? 108 : 54,
          width: 54,
        }}
        transition={{
          height: { delay: 0.1, duration: 0.3, ease: "easeOut" },
        }}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        onClick={toggleExpand}
      >
        <div className="h-[54px] flex items-center justify-center">
          <span className="font-medium text-sm">EN</span>
        </div>
        <motion.div
          className="h-[54px] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{
            opacity: isExpanded ? 1 : 0,
          }}
          transition={{
            opacity: { delay: 0.2, duration: 0.2 },
          }}
        >
          <span className="font-medium text-sm">FR</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
