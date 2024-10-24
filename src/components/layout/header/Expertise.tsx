"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaArrowAltCircleDown } from "react-icons/fa";

const expertises = [
  { icon: "/images/expertises/icons/strategy.svg", text: "Marketing Strategy" },
  { icon: "/images/expertises/icons/influence.svg", text: "Media Relations" },
  { icon: "/images/expertises/icons/design.svg", text: "Visual Design" },
  { icon: "/images/expertises/icons/tech.svg", text: "Tech & Web" },
  { icon: "/images/expertises/icons/content.svg", text: "Publishing & Content" },
  { icon: "/images/expertises/icons/influence.svg", text: "Social Media / SEO" },
  { icon: "/images/expertises/icons/consulting.svg", text: "Outsourcing" },
];

export default function Expertise() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative" data-testid={"expertise"}>
      <div
        className={`absolute bg-grayDark xl:w-[290px] w-full overflow-hidden transition-all duration-700 ease-in-out cursor-pointer rounded-[26px]`}
        style={{ zIndex: isExpanded ? 10 : "auto" }}
      >
        <div
          className="h-[56px] p-3 px-5 flex items-center justify-between"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <p>e&m expertise</p>
          <FaArrowAltCircleDown
            size={14}
            className={`text-white transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </div>

        <div
          className={`flex flex-col gap-5 transition-all duration-700 ease-in-out origin-top`}
          style={{
            maxHeight: isExpanded ? '500px' : '0px',
            opacity: isExpanded ? 1 : 0,
            transform: `scaleY(${isExpanded ? 1 : 0.8})`
          }}
        >
          {expertises.map((expertise, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 cursor-pointer px-5 transition-colors duration-200 ${
                index === expertises.length - 1 ? "pb-4" : ""
              }`}
            >
              <Image src={expertise.icon} alt={expertise.text} width={20} height={20} />
              <p className="font-medium">{expertise.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-[290px] h-[56px] invisible"></div>
    </div>
  );
}