'use client';

import React, { useState } from "react";
import ExpandableSection from "./ExpandableSection";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

interface ExpertiseItem {
  icon: string;
  text: string;
  path: string;
}

const expertises: ExpertiseItem[] = [
  { icon: "/images/expertises/icons/strategy.svg", text: "Marketing Strategy", path: "/Expertise/Strategy" },
  { icon: "/images/expertises/icons/influence.svg", text: "Media Relations", path: "/Expertise/Media" },
  { icon: "/images/expertises/icons/design.svg", text: "Visual Design", path: "/Expertise/Design" },
  { icon: "/images/expertises/icons/tech.svg", text: "Tech & Web", path: "/Expertise/Web" },
  { icon: "/images/expertises/icons/content.svg", text: "Publishing & Content", path: "/Expertise/Content" },
  { icon: "/images/expertises/icons/influence.svg", text: "Social Media / SEO", path: "/Expertise/SocialMedia" },
  { icon: "/images/expertises/icons/consulting.svg", text: "Outsourcing", path: "/Expertise/Outsourcing" },
];

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
  const router = useRouter();
  const pathname = usePathname();
  const [isNavigating, setIsNavigating] = useState(false);

  const renderExpertiseItem = (item: ExpertiseItem, index: number, totalItems: number) => {
    const isActive = pathname === item.path;
    
    const handleClick = async () => {
      if (isNavigating || pathname === item.path) return;
      
      setIsNavigating(true);
      
      if (setExpanded) {
        setExpanded(false);
      }

      // Add a small delay for visual feedback
      await new Promise(resolve => setTimeout(resolve, 150));
      
      router.push(item.path);
      
      // Reset navigation state after a delay
      setTimeout(() => {
        setIsNavigating(false);
      }, 300);
    };

    return (
      <div
        key={index}
        className={`
          flex items-center gap-3 cursor-pointer px-5 
          transition-all duration-200 ease-in-out
          ${isNavigating ? 'opacity-50 pointer-events-none' : 'opacity-100'}
          ${index === totalItems - 1 ? "pb-4" : ""}
        `}
        onClick={handleClick}
      >
        <div className="relative w-5 h-5">
          <Image 
            src={item.icon} 
            alt={item.text} 
            fill
            className={`transition-transform duration-200 ${isActive ? 'scale-110' : ''}`}
            style={{ objectFit: 'contain' }}
          />
        </div>
        <p className={`font-medium transition-colors duration-200  }`}>
          {item.text}
        </p>
      </div>
    );
  };

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