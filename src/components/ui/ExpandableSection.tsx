"use client"
import React, { useState, useEffect, ReactNode } from "react";
import { FaArrowAltCircleDown } from "react-icons/fa";

interface ExpandableSectionProps<T> {
  title: string;
  items: T[]; 
  initialExpanded?: boolean;
  renderItem?: (item: T, index: number, totalItems: number) => ReactNode;
  className?: string;
  testId?: string;
}

function ExpandableSection<T>({
  title,
  items,
  initialExpanded = false,
  renderItem,
  className = "",
  testId,
}: ExpandableSectionProps<T>): React.JSX.Element {
  const [isExpanded, setIsExpanded] = useState<boolean>(initialExpanded);

  useEffect(() => {
    setIsExpanded(initialExpanded);
  }, [initialExpanded]);

  return (
    <div className="relative" data-testid={testId}>
      <div
        className={`absolute bg-grayDark xl:w-[290px] w-full overflow-hidden transition-all duration-1000 ease-in-out cursor-pointer rounded-[26px] ${className}`}
        style={{ zIndex: isExpanded ? 10 : "auto" }}
      >
        <div
          className="h-[56px] p-3 px-5 flex items-center justify-between"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <p>{title}</p>
          <FaArrowAltCircleDown
            size={14}
            className={`text-white transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </div>

        <div
          className="flex flex-col gap-5 transition-all duration-1000 ease-in-out origin-top"
          style={{
            maxHeight: isExpanded ? "500px" : "0px",
            opacity: isExpanded ? 1 : 0,
            transform: `scaleY(${isExpanded ? 1 : 0.8})`,
          }}
        >
          {items.map((item, index) =>
            renderItem
              ? renderItem(item, index, items.length)
              : (
                <div key={index} className="px-5">
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
