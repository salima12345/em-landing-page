"use client";
import React, { useState } from "react";
import ExpandableSection from "@/components/ui/ExpandableSection";
import Link from "next/link";
import Newsletter from "./Newsletter";

const europeItems = [
  { text: "10, rue Myrha 75018 Paris" },
  { text: "Tél. + 33 (0)1 53 41 41 96" },
  { text: "paris@eliott-markus.com" },
];

const africaItems = [
  { text: "4 Rue Abdelkader Mouftakar, Casablanca 20080" },
  { text: "Tél. + 212 522270645" },
  { text: "africa@eliott-markus.com" },
];

const renderAddressItem = (item: { text: string }, index: number, totalItems: number) => (
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

export default function Info() {
  const [expandedSection, setExpandedSection] = useState<string>("Europe"); 

  const handleToggle = (section: string) => {
    setExpandedSection((prev) => (prev === section ? "" : section)); 
  };

  return (
    <div className="py-8 border-t border-[#454545]">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <Link href="/" className="font-semibold">
            Agency
          </Link>
          <Link href="/" className="font-semibold">
            References <span className="text-[#E0643A] text-[20px]">*</span>
          </Link>
          <Link href="/" className="font-semibold">
            Team
          </Link>
          <Link href="/" className="font-semibold">
            Wilo Insights
          </Link>
        </div>
        <div className="mt-8 flex flex-col gap-4">
        <div onClick={() => handleToggle("Europe")}>
          <ExpandableSection
            title="Europe"
            items={europeItems}
            initialExpanded={expandedSection === "Europe"}
            renderItem={renderAddressItem}
            className="bg-grayDark"
            testId="europe-section"
          />
        </div>

        <div onClick={() => handleToggle("Africa")}>
          <ExpandableSection
            title="Africa"
            items={africaItems}
            initialExpanded={expandedSection === "Africa"}
            renderItem={renderAddressItem}
            className="bg-grayDark"
            testId="africa-section"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
           <p className="font-semibold">Follow us </p>
           <div className="flex items-center gap-4">
              <div className="flex flex-col gap-2">
                <Link href="/">LinkedIn</Link>
                <Link href="/">Twiter</Link>
                <Link href="/"></Link>

              </div>
              <div className="flex flex-col gap-2">
                <Link href="/">Facebook</Link>
                <Link href="/">Instagram</Link>
                <Link href="/"></Link>

              </div>
           </div>
          
       
        </div>
        <div className="flex flex-col gap-2">
           <p className="font-semibold">Newsletter</p>
           <Newsletter/>

        
          
       
        </div>

      </div>

 
    </div>
  );
}
