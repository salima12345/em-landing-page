"use client";
import React, { useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import Image from "next/image";
import AnimatedTitle from "../ui/TitleReveal";

const items = [
  {
    title: "From August Debouzy to the A.D. experience: branding for a success story",
    image: "https://www.eliott-markus.com/wp-content/uploads/2023/08/Groupe-1597@2x-min.png",
  },
  {
    title: "From U.V & Associés to Screeb notaires: innovative positioning for a successful rebranding",
    image: "https://www.eliott-markus.com/wp-content/uploads/2023/08/Groupe-1876@2x-min.png",
  },
  {
    title: "Create a common base for daughter brands and satellite brands to belong to the Oasys & Cie group",
    image: "https://www.eliott-markus.com/wp-content/uploads/2023/08/Groupe-1928@2x.png",
  },
];

interface WorkItemProps {
  title: string;
  index: number;
  onHover: (index: number | null) => void;
}



const WorkItem: React.FC<WorkItemProps> = ({ title, index, onHover }) => (
  <div
    className="py-10 border-y border-white cursor-pointer opacity-60 hover:opacity-100 transition-opacity duration-500"
    onMouseEnter={() => onHover(index)}
    onMouseLeave={() => onHover(null)}
  >
    <div>
      <h4 className=" text-[21px] xl:text-[26px] text-white font-medium">{title}</h4>
    </div>
  </div>
);

function Realization() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    controls.start({
      y: -280 * (hoverIndex ?? 0),
      transition: { duration: 0.3, ease: "easeInOut" },
    });
  }, [hoverIndex, controls]);

  return (
    <section className="container mt-12">
      <AnimatedTitle text="Last creations"  className="font-bold text-[21px] xl:text-[26px]"/>
      
      <AnimatePresence>
        <motion.div
          id="gallery-work"
          className="fixed w-[385px] h-[280px] pointer-events-none z-30 overflow-hidden"
          style={{
            top: cursorPos.y,
            left: cursorPos.x,
            transform: "translate(-20%, -45%)",
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: hoverIndex === null ? 0 : 1,
            transition: { duration: 0.3 },
          }}
        >
          <motion.div
            id="work-images"
            className="w-full h-[840px] flex flex-col"
            animate={controls}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className="work-image bg-cover bg-center w-full h-[280px]"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
            ))}
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <div className="w-full pt-8">
        <div className="flex flex-col">
          {items.map((item, index) => (
            <WorkItem
              key={index}
              title={item.title}
              index={index}
              onHover={setHoverIndex}
            />
          ))}
          <div className="border-b border-[#E0643A] cursor-pointer flex items-center justify-between">
            <h4 className="text-[21px] xl:text-[26px] text-[#E0643A] font-medium">
              See all our creations
            </h4>
            <Image
              src="/images/icons/heart-arrow.svg"
              alt=""
              width={114}
              height={114}
              className="w-[114px] h-[114px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Realization;