"use client";

import React from "react";
import ExpandableSection from "./ExpandableSection";
import Image from "next/image";

interface ExpertiseItem {
  icon: string;
  text: string;
}

const expertises: ExpertiseItem[] = [
  { icon: "/images/expertises/icons/strategy.svg", text: "Marketing Strategy" },
  { icon: "/images/expertises/icons/influence.svg", text: "Media Relations" },
  { icon: "/images/expertises/icons/design.svg", text: "Visual Design" },
  { icon: "/images/expertises/icons/tech.svg", text: "Tech & Web" },
  { icon: "/images/expertises/icons/content.svg", text: "Publishing & Content" },
  { icon: "/images/expertises/icons/influence.svg", text: "Social Media / SEO" },
  { icon: "/images/expertises/icons/consulting.svg", text: "Outsourcing" },
];

const renderExpertiseItem = (item: ExpertiseItem, index: number, totalItems: number) => (
  <div
    key={index}
    className={`flex items-center gap-3 cursor-pointer px-5 transition-colors duration-200 ${
      index === totalItems - 1 ? "pb-4" : ""
    }`}
  >
    <Image src={item.icon} alt={item.text} width={20} height={20} />
    <p className="font-medium">{item.text}</p>
  </div>
);

interface ExpertiseProps {
  isExpanded?: boolean; 
  setExpanded?: (expanded: boolean) => void;
  defaultExpanded?: boolean;
  pushContent?: boolean;
  isHeader?: boolean;
}

export default function Expertise({
  isExpanded,
  setExpanded,
  defaultExpanded = false,
  pushContent = false,
  isHeader = false,
}: ExpertiseProps) {
  return (
    <ExpandableSection<ExpertiseItem>
      title="e&m expertise"
      items={expertises}
      renderItem={renderExpertiseItem}
      testId="expertise"
      defaultExpanded={defaultExpanded}
      pushContent={pushContent}
      isHeader={isHeader}
      isExpanded={isExpanded}
      setExpanded={setExpanded}
    />
  );
}
