import React, { useState } from 'react';
import Image from "next/image";

const ObjetMenu = () => {
  const [selectedItem, setSelectedItem] = useState("Subject");
  const [isExpanded, setIsExpanded] = useState(false);

  const items = ["Project", "Partnership", "Hiring", "Press", "Other"];

  return (
    <div className=" relative group">
      <div className="bg-grayDark xl:w-[287px] w-full rounded-[26px] border border-[#2e2e2e]">
      <button
          className="w-full h-[56px] px-6 py-4 flex items-center justify-between"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
        >
          <p>{selectedItem}</p>
          <Image
            src="/images/icons/arrow-circle.svg"
            width={16}
            height={16}
            className={`transform transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
            alt={isExpanded ? "Collapse" : "Expand"}
          />
        </button>

        <div 
          className={`
            overflow-hidden transition-all duration-300 ease-in-out
            ${isExpanded ? "opacity-100 visible h-auto" : "opacity-0 invisible h-0"}
          `}
        >
          {items.map((item) => (
            <button
              key={item}
              className="w-full px-6 py-4 text-left hover:bg-gray-800 transition-colors"
              onClick={() => {
                setSelectedItem(item);
                setIsExpanded(false);
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ObjetMenu;