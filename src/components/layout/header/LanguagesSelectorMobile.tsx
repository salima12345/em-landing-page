"use client";

import React, { useState } from "react";

export default function LanguageSelectorMobile() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="relative block xl:hidden" data-testid={"language-selector-mobile"}>
      <div
        className="bg-grayDark text-white rounded-full overflow-hidden cursor-pointer flex items-center justify-end transition-all duration-300 ease-out"
        style={{
          width: isExpanded ? '108px' : '54px',
          height: '54px'
        }}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        onClick={toggleExpand}
      >
        <div className="w-[54px] h-[54px] flex items-center justify-center">
          <span className="font-medium text-sm">EN</span>
        </div>
        {isExpanded && (
          <div 
            className="absolute left-0 w-[54px] h-[54px] flex items-center justify-center transition-opacity duration-300 ease-out"
            style={{
              opacity: isExpanded ? 1 : 0
            }}
          >
            <span className="font-medium text-sm">FR</span>
          </div>
        )}
      </div>
    </div>
  );
}