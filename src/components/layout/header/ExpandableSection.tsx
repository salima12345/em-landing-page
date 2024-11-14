import React, { useState, useEffect, ReactNode } from "react";
import Image from 'next/image';

interface ExpandableSectionProps<T> {
  title: string;
  items: T[];
  renderItem?: (item: T, index: number, totalItems: number) => ReactNode;
  className?: string;
  testId?: string;
  defaultExpanded?: boolean;
  pushContent?: boolean;
  isHeader?: boolean;
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
}: ExpandableSectionProps<T>): React.JSX.Element {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (isHeader) {
      const timer = setTimeout(() => {
        setIsExpanded(window.scrollY === 0);
      }, 1000);

      const handleScroll = () => {
        if (!hasScrolled && window.scrollY > 0) {
          setHasScrolled(true);
        }
        if (window.scrollY === 0) {
          setIsExpanded(true);
          setHasScrolled(false);
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
        clearTimeout(timer);
      };
    }
  }, [isHeader, hasScrolled]);

  if (!mounted) {
    return (
      <div className="relative" data-testid={testId}>
        <div className="w-[290px] h-[56px]"></div>
      </div>
    );
  }

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`relative ${pushContent ? 'mb-4' : ''}`} data-testid={testId}>
      <div
        className={`${pushContent ? '' : 'absolute'} bg-grayDark xl:w-[290px] w-full overflow-hidden rounded-[26px] cursor-pointer ${className}`}
        style={{
          zIndex: isExpanded ? 10 : "auto",
          transition: "all 0.7s ease-in-out"
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
            className={`transform ${isExpanded ? 'rotate-180' : ''}`}
            style={{
              transition: "transform 0.7s ease-in-out"
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
              opacity 0.7s ease-in-out ${isExpanded ? '0.2s' : '0s'},
              transform 0.7s ease-in-out
            `
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
                  transitionDelay: isExpanded ? "0.2s" : "0s"
                }}
              >
                {JSON.stringify(item)}
              </div>
            )
          )}
        </div>
      </div>

      {/* Invisible spacer to prevent layout shift */}
      {!pushContent && <div className="w-[290px] h-[56px] invisible"></div>}
    </div>
  );
}

export default ExpandableSection;