"use client";

import React from "react";
import { useRouter } from "next/navigation"; 
import ExpandableSection from "./ExpandableSection";

const madeIn = [
  { name: "Creation and Launch", path: "/MadeIn/creation" },
  { name: "Interim Management", path: "/MadeIn/management" },
  { name: "Business Development", path: "/MadeIn/business" },
  { name: "ESG, Ethics and Soft Law", path: "/MadeIn/esg" },
  { name: "Association and Organization", path: "/MadeIn/association" },
  { name: "Start-up & Corporate Tech", path: "/MadeIn/coporate" },
  { name: "Finance and Investment Professions", path: "/MadeIn/finance" },
  { name: "Crisis Management", path: "/MadeIn/crisis" },
  { name: "Personal Branding", path: "/MadeIn/Branding" },
];

const renderMadeInItem = (
  item: { name: string; path: string },
  index: number,
  totalItems: number,
  router: ReturnType<typeof useRouter>
) => (
  <div
    key={index}
    className={`group relative flex items-center gap-3 cursor-pointer px-5 transition-colors duration-200 ${
      index === totalItems - 1 ? "pb-4" : ""
    }`}
    onClick={() => router.push(item.path)} 
  >
    <p className="font-semibold">{item.name}</p>
    <div className="absolute top-0 right-0 h-full bg-[#E0643A] rounded-l-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-[5px]"></div>
  </div>
);

interface MadeInProps {
  defaultExpanded?: boolean;
  pushContent?: boolean;
  isHeader?: boolean;
  isExpanded?: boolean;
  setExpanded?: (expanded: boolean) => void;
  isMenuOpen?: boolean;
}

export default function MadeIn({
  defaultExpanded = false,
  pushContent = false,
  isHeader = false,
  isExpanded,
  setExpanded,
  isMenuOpen = false,
}: MadeInProps) {
  const router = useRouter(); 

  return (
    <ExpandableSection
      title="Made in e&m"
      items={madeIn}
      renderItem={(item, index) =>
        renderMadeInItem(item, index, madeIn.length, router)
      }
      testId="made-in"
      defaultExpanded={defaultExpanded}
      pushContent={pushContent}
      isHeader={isHeader}
      isExpanded={isExpanded}
      setExpanded={setExpanded}
      isMenuOpen={isMenuOpen}
    />
  );
}
