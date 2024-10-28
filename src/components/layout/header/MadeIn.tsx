"use client";
import React, { useState, useEffect } from "react";
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

export default function MadeIn({ initialExpanded = false }) {
  const [isExpanded, setIsExpanded] = useState(initialExpanded);

  useEffect(() => {
    if (initialExpanded) {
      setIsExpanded(true);
    }
  }, [initialExpanded]);

  return (
    <div className="relative" data-testid={"made-in"}>
      <div
        className={`absolute bg-grayDark xl:w-[290px] w-full overflow-hidden transition-all duration-1000 ease-in-out cursor-pointer rounded-[26px]`}
        style={{ zIndex: isExpanded ? 10 : "auto" }}
      >
        <div
          className="h-[56px] p-3 px-5 flex items-center justify-between"
          onClick={() => setIsExpanded(!isExpanded)}
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
          className={`flex flex-col gap-5 transition-all duration-1000 ease-in-out origin-top`}
          style={{
            maxHeight: isExpanded ? '500px' : '0px',
            opacity: isExpanded ? 1 : 0,
            transform: `scaleY(${isExpanded ? 1 : 0.8})`
          }}
        >
          {madeIn.map((item, index) => (
            <div
              key={index}
              className={`group relative flex items-center gap-3 cursor-pointer px-5 transition-colors duration-200 ${
                index === madeIn.length - 1 ? "pb-4" : ""
              }`}
            >
              <p className="font-semibold">{item}</p>
              <div className="absolute top-0 right-0 h-full bg-[#E0643A] rounded-l-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-[5px]"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-[290px] h-[56px] invisible"></div>
    </div>
  );
}