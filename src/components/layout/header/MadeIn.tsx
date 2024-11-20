"use client";

import React from "react";
import ExpandableSection from "./ExpandableSection";

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

const renderMadeInItem = (item: string, index: number, totalItems: number) => (
  <div
    key={index}
    className={`group relative flex items-center gap-3 cursor-pointer px-5 transition-colors duration-200 ${
      index === totalItems - 1 ? "pb-4" : ""
    }`}
  >
    <p className="font-semibold">{item}</p>
    <div className="absolute top-0 right-0 h-full bg-[#E0643A] rounded-l-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-[5px]"></div>
  </div>
);
interface MadeInProps {
  isExpanded?: boolean; 
  setExpanded?: (expanded: boolean) => void;
  defaultExpanded?: boolean;
  pushContent?: boolean;
  isHeader?: boolean;
}

export default function MadeIn({
  isExpanded,
  setExpanded,
  defaultExpanded = false,
  pushContent = false,
  isHeader = false,
}: MadeInProps) {
  return (
    <ExpandableSection
      title="Made in e&m"
      items={madeIn}
      renderItem={renderMadeInItem}
      testId="made-in"
      defaultExpanded={defaultExpanded}
      pushContent={pushContent}
      isHeader={isHeader}
      isExpanded={isExpanded}
      setExpanded={setExpanded}
    />
  );
}

