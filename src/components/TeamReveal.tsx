import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

interface TeamMember {
  name: string;
  image: string;
  jobTitle: string;
  hasBiography?: boolean;
}

const teamItems: TeamMember[] = [
  {
    name: "Gwénaëlle Henri",
    image: "https://www.eliott-markus.com/wp-content/uploads/2023/11/Capture-decran-2023-11-10-a-19.24.14.png",
    jobTitle: "President & Founder",
    hasBiography: true
  },
  {
    name: "Ilias Meslohi",
    image: "https://www.eliott-markus.com/wp-content/uploads/2023/05/Ilias_Meslohi-scaled.jpg",
    jobTitle: "Head of Strategy",
    hasBiography: true
  },
  {
    name: "Chama Loufa",
    image: "https://www.eliott-markus.com/wp-content/uploads/2023/05/Chama_Loufa-scaled.jpg",
    jobTitle: "Brand Consultant"
  },
  {
    name: "Sara Elkinani",
    image: "https://www.eliott-markus.com/wp-content/uploads/2023/05/Sara_Elkinani-scaled.jpg",
    jobTitle: "Brand Consultant",
    hasBiography: true
  },
  {
    name: "Hind Sody",
    image: "https://www.eliott-markus.com/wp-content/uploads/2023/05/EM_SITE_HIND_CASA.jpg",
    jobTitle: "Junior Brand Consultant"
  },
  {
    name: "Florence Jouffroy",
    image: "https://www.eliott-markus.com/wp-content/uploads/2023/11/EM_SITE_Florence-Jouffroy.png",
    jobTitle: "Senior Advisor",
    hasBiography: true
  }
];

interface TeamItemProps {
  name: string;
  index: number;
  jobTitle: string;
  hasBiography?: boolean;
  onHover: (index: number | null) => void;
  isHovered: boolean;
}

const TeamItem: React.FC<TeamItemProps> = ({ 
  name, 
  index, 
  jobTitle,
  hasBiography = false, 
  onHover,
  isHovered 
}) => (
  <div
    className={`
      relative 
      py-7 
      border-b-[0.5px] 
      ${index === 0 ? 'border-t-[0.5px]' : ''} 
      border-black 
      cursor-pointer 
      transition-all 
      duration-300 
      ease-in-out
      overflow-hidden
    `}
    onMouseEnter={() => onHover(index)}
    onMouseLeave={() => onHover(null)}
  >
    <div className="flex items-center gap-10">
      <motion.div 
        className="relative flex items-center"
        animate={{
          x: isHovered ? 20 : 0
        }}
        transition={{
          duration: 0.3,
          ease: [0.19, 1, 0.22, 1]
        }}
      >
        <motion.div 
          className="absolute right-full mr-2 w-2 h-2 rounded-full bg-yellow-400"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: isHovered ? 1 : 0,
            opacity: isHovered ? 1 : 0
          }}
          transition={{
            duration: 0.2,
            ease: "easeOut"
          }}
        />
        <motion.h3 
          className="text-[23px] font-semibold"
          animate={{
            x: isHovered ? 10 : 0
          }}
          transition={{
            duration: 0.3,
            ease: [0.19, 1, 0.22, 1]
          }}
        >
          {name}
        </motion.h3>
      </motion.div>
      <motion.p 
        className="text-[23px]"
        animate={{
          x: isHovered ? 10 : 0
        }}
        transition={{
          duration: 0.3,
          ease: [0.19, 1, 0.22, 1]
        }}
      >
        {jobTitle}
      </motion.p>
      {hasBiography && (
        <motion.span 
          className="ml-4 px-3 py-1 bg-yellow-400 text-black text-sm rounded-full"
          animate={{
            x: isHovered ? 10 : 0
          }}
          transition={{
            duration: 0.3,
            ease: [0.19, 1, 0.22, 1]
          }}
        >
          Biography
        </motion.span>
      )}
    </div>
  </div>
);

function TeamReveal() {
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
      transition: { 
        duration: 0.3, 
        ease: [0.19, 1, 0.22, 1] 
      }
    });
  }, [hoverIndex, controls]);

  return (
    <div className="relative py-12">
      <motion.div
        className="fixed w-[250px] h-[280px] pointer-events-none z-30 overflow-hidden rounded-[10px] shadow-2xl"
        style={{
          top: cursorPos.y,
          left: cursorPos.x,
          transform: "translate(-20%, -65%)",
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: hoverIndex === null ? 0 : 1,
          scale: hoverIndex === null ? 0.95 : 1,
          transition: { 
            duration: 0.2, 
            ease: [0.19, 1, 0.22, 1] 
          },
        }}
      >
        <motion.div
          className="w-full flex flex-col"
          animate={controls}
        >
          {teamItems.map((item, index) => (
            <div
              key={index}
              className="w-full h-[280px] rounded-[10px] overflow-hidden"
            >
              <div
                className="w-full h-full bg-cover bg-center transform transition-transform duration-500 ease-out hover:scale-105 [image-rendering:crisp-edges]"
                style={{ 
                  backgroundImage: `url(${item.image})`
                }}
              />
            </div>
          ))}
        </motion.div>
      </motion.div>

      <div className="w-full max-w-[1200px] ">
        <div className="flex flex-col">
          {teamItems.map((item, index) => (
            <TeamItem
              key={index}
              name={item.name}
              index={index}
              jobTitle={item.jobTitle}
              hasBiography={item.hasBiography}
              onHover={setHoverIndex}
              isHovered={hoverIndex === index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamReveal;