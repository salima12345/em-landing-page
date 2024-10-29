
"use client";
import React from "react";
import ExpandableSection from "@/components/ui/ExpandableSection";

const madeIn = [
  { text: "Creation and Launch" },
  { text: "Interim Management" },
  { text: "Business Development" },
  { text: "ESG, Ethics and Soft Law" },
  { text: "Association and Organization" },
  { text: "Start-up & Corporate Tech" },
  { text: "Finance and Investment Professions" },
  { text: "Crisis Management" },
  { text: "Personal Branding" },
];

const renderMadeInItem = (item: { text: string }, index: number, totalItems: number) => (
  <div
    key={index}
    className={`group relative flex items-center gap-3 cursor-pointer px-5 transition-colors duration-200 ${
      index === totalItems - 1 ? "pb-4" : ""
    }`}
  >
    <p className="font-semibold">{item.text}</p>
    <div className="absolute top-0 right-0 h-full bg-[#E0643A] rounded-l-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-[5px]"></div>
  </div>
);

export default function MadeIn({ initialExpanded = false }: { initialExpanded?: boolean }) {
  return (
    <ExpandableSection
      title="Made in e&m"
      items={madeIn}
      initialExpanded={initialExpanded}
      renderItem={renderMadeInItem}
      testId="made-in"
      className="xl:w-[290px] bg-grayDark"
    />
  );
}
