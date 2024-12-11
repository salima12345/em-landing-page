"use client";

import React, { useEffect, useState, ReactNode } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "@/lib/themes";

interface ExpandableSectionProps<T> {
  title: string;
  items: T[];
  renderItem?: (item: T, index: number, totalItems: number) => ReactNode;
  className?: string;
  testId?: string;
  defaultExpanded?: boolean;
  pushContent?: boolean;
  isHeader?: boolean;
  isExpanded?: boolean;
  setExpanded?: (expanded: boolean) => void;
  isMenuOpen?: boolean;
}

function ExpandableSection<T>({
  title,
  items,
  renderItem,
  className = "",
  testId,
  defaultExpanded = false,
  pushContent = false,
  isHeader = false,
  isExpanded: parentExpanded,
  setExpanded: parentSetExpanded,
  isMenuOpen = false,
}: ExpandableSectionProps<T>): React.JSX.Element {
  const { theme } = useTheme();
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [localIsExpanded, setLocalIsExpanded] = useState(defaultExpanded);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isUserToggled, setIsUserToggled] = useState(false);

  const isControlled = parentExpanded !== undefined && parentSetExpanded !== undefined;
  const isExpanded = isControlled ? parentExpanded : localIsExpanded;

  const handleAutoExpand = (shouldExpand: boolean) => {
    if (isControlled) {
      parentSetExpanded(shouldExpand);
    } else {
      setLocalIsExpanded(shouldExpand);
    }
  };

  useEffect(() => {
    setMounted(true);

    if (isHeader && isHomePage && !isUserToggled) {
      const timer = setTimeout(() => {
        const shouldExpand = window.scrollY === 0;
        handleAutoExpand(shouldExpand);
      }, 1000);

      const handleScroll = () => {
        if (!hasScrolled && window.scrollY > 0) {
          setHasScrolled(true);
        }
        if (window.scrollY === 0 && !isUserToggled) {
          handleAutoExpand(true);
          setHasScrolled(false);
        } else if (window.scrollY > 0 && !isUserToggled) {
          handleAutoExpand(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        clearTimeout(timer);
      };
    }
  }, [isHeader, isHomePage, hasScrolled, isUserToggled]);

  useEffect(() => {
    if (isControlled && !isUserToggled) {
      setLocalIsExpanded(parentExpanded);
    }
  }, [parentExpanded, isControlled, isUserToggled]);

  if (!mounted) {
    return (
      <div className="relative" data-testid={testId}>
        <div className="w-[290px] h-[56px]"></div>
      </div>
    );
  }

  const toggleExpand = () => {
    setIsUserToggled(true);
    const newExpandedState = !isExpanded;
    if (isControlled) {
      parentSetExpanded(newExpandedState);
    } else {
      setLocalIsExpanded(newExpandedState);
    }
  };

  return (
    <div className={`relative ${pushContent ? "mb-4" : ""}`} data-testid={testId}>
      <div
        className={`${
          pushContent ? "" : "absolute z-[50]"
        } xl:w-[287px] w-full overflow-hidden rounded-[26px] cursor-pointer transition-colors duration-300
        ${theme === 'dark' ? 'bg-grayDark text-white' : 'bg-[#E6E5DF] text-black'}
        ${className}`}
        style={{
          zIndex: isExpanded ? 10 : "auto",
        }}
      >
        <button
          className={`w-full h-[56px] px-6 py-4 flex items-center justify-between
          ${theme ==='dark' ? 'bg-grayDark text-white' : 'bg-[#E6E5DF] text-black'}`
        }
          onClick={toggleExpand}
          aria-expanded={isExpanded}
          aria-controls={`${testId}-content`}
        >
          <p>{title}</p>
          <Image
            src={theme === 'dark' ? "/images/icons/arrow-circle.svg" : "/images/icons/arrow-circle-black.svg"}
            width={16}
            height={16}
            className={`transform ${isExpanded ? "rotate-180" : ""}`}
            style={{
              transition: "transform 0.7s ease-in-out",
            }}
            alt={isExpanded ? "Collapse" : "Expand"}
          />
        </button>

        <div
          id={`${testId}-content`}
          className="flex flex-col gap-5 "
          style={{
            maxHeight: isExpanded ? "500px" : "0px",
            opacity: isExpanded ? 1 : 0,
            transform: `scaleY(${isExpanded ? 1 : 0.8})`,
            transition: `
              max-height 0.7s ease-in-out,
              opacity 0.7s ease-in-out ${isExpanded ? "0.2s" : "0s"},
              transform 0.7s ease-in-out
            `,
          }}
        >
          {items.map((item, index) =>
            renderItem ? (
              renderItem(item, index, items.length)
            ) : (
              <div
                key={index}
                className={`px-5 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
                style={{
                  transition: "all 0.7s ease-in-out",
                  transitionDelay: isExpanded ? "0.2s" : "0s",
                }}
              >
                {JSON.stringify(item)}
              </div>
            )
          )}
        </div>
      </div>

      {!pushContent && <div className="w-[287px] h-[56px] invisible"></div>}
    </div>
  );
}

export default ExpandableSection;