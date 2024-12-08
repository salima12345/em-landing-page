import React, { useEffect, useState, ReactNode } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [localIsExpanded, setLocalIsExpanded] = useState(defaultExpanded);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isUserToggled, setIsUserToggled] = useState(false);

  const isControlled = parentExpanded !== undefined && parentSetExpanded !== undefined;
  const isExpanded = isControlled ? parentExpanded : localIsExpanded;

  useEffect(() => {
    setMounted(true);

    if (isHeader && isHomePage) {
      const timer = setTimeout(() => {
        if (!isUserToggled) {
          const newState = window.scrollY === 0;
          setLocalIsExpanded(newState);
          if (parentSetExpanded) {
            parentSetExpanded(newState);
          }
        }
      }, 1000);

      const handleScroll = () => {
        if (!hasScrolled && window.scrollY > 0) {
          setHasScrolled(true);
        }
        if (window.scrollY === 0 && !isUserToggled) {
          const newState = true;
          setLocalIsExpanded(newState);
          if (parentSetExpanded) {
            parentSetExpanded(newState);
          }
          setHasScrolled(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        clearTimeout(timer);
      };
    }
  }, [isHeader, isHomePage, hasScrolled, parentSetExpanded, isUserToggled]);

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
    setLocalIsExpanded(newExpandedState);
    if (parentSetExpanded) {
      parentSetExpanded(newExpandedState);
    }
  };

  return (
    <div className={`relative ${pushContent ? "mb-4" : ""}`} data-testid={testId}>
      <div
        className={`${
          pushContent ? "" : "absolute z-[50]"
        } bg-grayDark xl:w-[287px] w-full overflow-hidden rounded-[26px] cursor-pointer ${className}`}
        style={{
          zIndex: isExpanded ? 10 : "auto",
          transition: "all 0.7s ease-in-out",
        }}
      >
        <button
          className="w-full h-[56px] px-6 py-4 flex items-center justify-between"
          onClick={toggleExpand}
          aria-expanded={isExpanded}
          aria-controls={`${testId}-content`}
        >
          <p>{title}</p>
          <Image
            src="/images/icons/arrow-circle.svg"
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
          className="flex flex-col gap-5 origin-top"
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
                className="px-5"
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