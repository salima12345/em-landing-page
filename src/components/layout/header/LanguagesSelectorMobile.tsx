"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function LanguageSelectorMobile() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="relative block xl:hidden "  data-testid={"language-selector-mobile"}>
      <motion.div
        className="bg-grayDark text-white rounded-full overflow-hidden cursor-pointer flex items-center justify-end"
        initial={{ width: 54, height: 54 }}
        animate={{
          width: isExpanded ? 108 : 54,
          height: 54,
        }}
        transition={{
          width: { delay: 0.1, duration: 0.3, ease: "easeOut" },
        }}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        onClick={toggleExpand}
      >
        <div className="w-[54px] h-[54px] flex items-center justify-center">
          <span className="font-medium text-sm">EN</span>
        </div>
        <motion.div
          className="absolute left-0 w-[54px] h-[54px] flex items-center justify-center"
          initial={{ opacity: 0, x: 54 }}
          animate={{
            opacity: isExpanded ? 1 : 0,
            x: isExpanded ? 0 : 54,
          }}
          transition={{
            opacity: { delay: 0.2, duration: 0.2 },
            x: { delay: 0.1, duration: 0.3, ease: "easeOut" },
          }}
        >
          <span className="font-medium text-sm">FR</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
