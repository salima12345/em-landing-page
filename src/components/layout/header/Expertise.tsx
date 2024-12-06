"use client";

import React from "react";
import ExpandableSection from "./ExpandableSection";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ExpertiseItem {
  icon: string;
  text: string;
  path?: string;
}

const expertises: ExpertiseItem[] = [
  { icon: "/images/expertises/icons/strategy.svg", text: "Marketing Strategy" },
  { icon: "/images/expertises/icons/influence.svg", text: "Media Relations", path: "/Expertise/Media" },
  { icon: "/images/expertises/icons/design.svg", text: "Visual Design" },
  { icon: "/images/expertises/icons/tech.svg", text: "Tech & Web" },
  { icon: "/images/expertises/icons/content.svg", text: "Publishing & Content" },
  { icon: "/images/expertises/icons/influence.svg", text: "Social Media / SEO" },
  { icon: "/images/expertises/icons/consulting.svg", text: "Outsourcing" },
];

const renderExpertiseItem = (item: ExpertiseItem, index: number, totalItems: number) => {
  const router = useRouter();

  const handleClick = () => {
    if (item.path) {
      router.push(item.path);
    }
  };

  return (
    <div
      key={index}
      className={`flex items-center gap-3 cursor-pointer px-5 transition-colors duration-200 ${
        index === totalItems - 1 ? "pb-4" : ""
      }`}
      onClick={handleClick}
    >
      <Image src={item.icon} alt={item.text} width={20} height={20} />
      <p className="font-medium">{item.text}</p>
    </div>
  );
};

interface ExpertiseProps {
  defaultExpanded?: boolean;
  pushContent?: boolean;
  isHeader?: boolean;
  isExpanded?: boolean;
  setExpanded?: (expanded: boolean) => void;
  isMenuOpen?: boolean;
}

export default function Expertise({
  defaultExpanded = false,
  pushContent = false,
  isHeader = false,
  isExpanded,
  setExpanded,
  isMenuOpen = false,
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
      isMenuOpen={isMenuOpen}
    />
  );
}