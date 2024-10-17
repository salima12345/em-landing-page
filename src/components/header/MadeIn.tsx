"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaArrowAltCircleDown } from "react-icons/fa";

const madeIn = [
  "Creation and Launch",
  "Interim Management",
  "Business Development",
  "ESG, Ethics and Soft Law",
  "Association and Organization",
  "Start-up & Corporate Tech",
  "Finance and Investment Professions",
  "Crisis Management",
  "Personal Branding", 
];

export default function MadeIn() {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  useEffect(() => {
   
    if (isExpanded && contentRef.current) {
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
    } else if (contentRef.current) {
      contentRef.current.style.maxHeight = "0px";
    }
  }, [isExpanded]);

  return (
    <div className="relative">
      <div
        className={`absolute bg-grayDark w-[290px] overflow-hidden transition-all duration-700 ease-in-out cursor-pointer ${
          isExpanded ? "rounded-[26px]" : "rounded-[26px]"
        }`}
        style={{ zIndex: isExpanded ? 10 : "auto" }}
      >
        <div
          className="h-[56px] p-3 px-5 flex items-center justify-between"
          onClick={toggleExpand}
        >
          <p>Made in e&m</p>
          <FaArrowAltCircleDown
            size={14}
            className={`text-white transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </div>

        <div
          ref={contentRef}
          className={` flex flex-col gap-5 transition-[max-height] duration-700 ease-in-out`}
          style={{ maxHeight: "0px" }} 
        >
          {madeIn.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 cursor-pointer px-5 hover:bg-gray-700 transition-colors duration-200 ${
                index === madeIn.length - 1 ? "pb-4" : ""
              }`} 
            >
              <p className="font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </div>

    
      <div className="w-[290px] h-[56px] invisible"></div>
    </div>
  );
}
