import React, { useState, useEffect, ReactNode, useRef } from "react";
import Image from 'next/image'

interface ExpandableSectionProps<T> {
  title: string;
  items: T[];
  initialExpanded?: boolean;
  renderItem?: (item: T, index: number, totalItems: number) => ReactNode;
  className?: string;
  testId?: string;
}

function useScrollCollapse(initialExpanded: boolean = false) {
  const [isExpanded, setIsExpanded] = useState(initialExpanded);
  const lastScrollY = useRef(0);

  useEffect(() => {
    setIsExpanded(initialExpanded);
  }, [initialExpanded]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 50 && isExpanded) {
        setIsExpanded(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isExpanded]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return { isExpanded, toggleExpand };
}

function ExpandableSection<T>({
  title,
  items,
  initialExpanded = false,
  renderItem,
  className = "",
  testId,
}: ExpandableSectionProps<T>): React.JSX.Element {
  const { isExpanded, toggleExpand } = useScrollCollapse(initialExpanded);

  return (
    <div className="relative" data-testid={testId}>
      <div
        className={`absolute bg-grayDark xl:w-[290px] w-full overflow-hidden rounded-[26px] cursor-pointer ${className}`}
        style={{ 
          zIndex: isExpanded ? 10 : "auto",
          transition: "all 0.7s ease-in-out"
        }}
      >
        <div
          className="h-[56px] px-6 py-4 flex items-center justify-between"
          onClick={toggleExpand}
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
            alt="Arrow Icon"
          />
        </div>

        <div
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

      <div className="w-[290px] h-[56px] invisible"></div>
    </div>
  );
}

export default ExpandableSection;