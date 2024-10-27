"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function EMValues() {
  const sectionRef = useRef(null);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 30, 
    damping: 30, 
    mass: 1.5, 
    restDelta: 0.001 
  });

  // Clamping smoothProgress to stop the animation at 50% of the screen
  const clampedProgress = useTransform(smoothProgress, (value) => Math.min(value, 0.5));

  const animateFrom = 0.2;
  const animateTo = 0.8;
  const opacityKeyframes = [0.2, 0.35, 0.8];
  const opacityValues = [0.4, 0.7, 0.9]; 

  const dragConstraints = {
    top: -200,
    right: 200,
    bottom: 200,
    left: -200
  };

  const defaultTransition = {
    duration: 0.8,
    ease: [0.32, 0.72, 0, 1]
  };

  const images = [
    {
      id: "inclusion",
      style: {
        left: useTransform(clampedProgress, [animateFrom, animateTo], ["7%", "30%"], { clamp: false }),
        top: useTransform(clampedProgress, [animateFrom, animateTo], ["0%", "0%"], { clamp: false }),
        rotate: useTransform(clampedProgress, [animateFrom, animateTo], [0, 9], { clamp: false }),
        opacity: useTransform(clampedProgress, opacityKeyframes, opacityValues),
        zIndex: draggedIndex === 0 ? 50 : 1
      },
      src: "https://www.eliott-markus.com/wp-content/themes/em-wp/images/em-values/inclusion-min.png",
      alt: "Inclusion"
    },
    {
      id: "intelligence",
      style: {
        right: useTransform(clampedProgress, [animateFrom, animateTo], ["7%", "41%"], { clamp: false }),
        top: useTransform(clampedProgress, [animateFrom, animateTo], ["0%", "0%"], { clamp: false }),
        rotate: useTransform(clampedProgress, [animateFrom, animateTo], [0, 1], { clamp: false }),
        opacity: useTransform(clampedProgress, opacityKeyframes, opacityValues),
        zIndex: draggedIndex === 1 ? 50 : 1
      },
      src: "https://www.eliott-markus.com/wp-content/themes/em-wp/images/em-values/intelligence.png",
      alt: "Intelligence"
    },
    {
      id: "creativite",
      style: {
        left: useTransform(clampedProgress, [animateFrom, animateTo], ["7%", "21%"], { clamp: false }),
        bottom: useTransform(clampedProgress, [animateFrom, animateTo], ["-780px","-400px"], { clamp: false }),
        rotate: useTransform(clampedProgress, [animateFrom, animateTo], [0, 5], { clamp: false }),
        opacity: useTransform(clampedProgress, opacityKeyframes, opacityValues),
        zIndex: draggedIndex === 2 ? 50 : 1
      },
      src: "https://www.eliott-markus.com/wp-content/themes/em-wp/images/em-values/creativite-min.png",
      alt: "Créativité"
    },
    {
      id: "authenticite",
      style: {
        right: useTransform(clampedProgress, [animateFrom, animateTo], ["0%", "30%"], { clamp: false }),
        bottom: useTransform(clampedProgress, [animateFrom, animateTo], ["-780px", "-400px"], { clamp: false }),
        rotate: useTransform(clampedProgress, [animateFrom, animateTo], [0, 5], { clamp: false }),
        opacity: useTransform(clampedProgress, opacityKeyframes, opacityValues),
        zIndex: draggedIndex === 3 ? 50 : 2
      },
      src: "https://www.eliott-markus.com/wp-content/themes/em-wp/images/em-values/authenticite.png",
      alt: "Authenticité"
    }
  ];

  const valuesStyle = {
    rotate: useTransform(clampedProgress, [animateFrom, animateTo], [0, 5], { clamp: false }),
    bottom: useTransform(clampedProgress, [animateFrom, animateTo], ["-780px", "-470px"], { clamp: false }),
    opacity: useTransform(clampedProgress, opacityKeyframes, opacityValues),
    zIndex: draggedIndex === 4 ? 50 : 1
  };

  return (
    <section ref={sectionRef} className=" container em-values" id="em-values">
      <div className="content-em-values relative w-full h-full">
        <div className="images relative w-full h-full">
          {images.map((image, index) => (
            <motion.div 
              key={image.id}
              className={`${image.id} img absolute cursor-grab active:cursor-grabbing`}
              style={image.style}
              drag
              dragConstraints={dragConstraints}
              dragElastic={0.05}
              dragMomentum={true}
              dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
              whileDrag={{ scale: 1.1, zIndex: 50 }}
              whileHover={{ scale: 1.05 }}
              onDragStart={() => setDraggedIndex(index)}
              onDragEnd={() => setDraggedIndex(null)}
              transition={defaultTransition}
            >
              <img
                src={image.src}
                alt={image.alt}
                width={306}
                height={306}
                className="pointer-events-none w-full h-full object-contain"
                draggable="false"
              />
            </motion.div>
          ))}
          <motion.div 
            className="values absolute cursor-grab active:cursor-grabbing"
            style={valuesStyle}
            drag
            dragConstraints={dragConstraints}
            dragElastic={0.05}
            dragMomentum={true}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
            whileDrag={{ scale: 1.1, zIndex: 50 }}
            whileHover={{ scale: 1.05 }}
            onDragStart={() => setDraggedIndex(4)}
            onDragEnd={() => setDraggedIndex(null)}
            transition={defaultTransition}
          >
            <Link href="https://www.eliott-markus.com/talents-equipe/" className="pointer-events-none">
              <div className="info">
                <h2 className="font-bold text-[20px]">The people behind the values</h2>
                <button className="pointer-events-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12.943"
                    height="12.943"
                    viewBox="0 0 12.943 12.943"
                  >
                    <g transform="translate(278.711 -2126.905)">
                      <path
                        d="M10.5,20.615,20.615,10.5"
                        transform="translate(-287.796 2117.82)"
                        fill="none"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                      <path
                        d="M10.5,10.5H20.615V20.615"
                        transform="translate(-287.796 2117.82)"
                        fill="none"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </g>
                  </svg>
                </button>
              </div>
              <div className="bg">
                <img
                  src="https://www.eliott-markus.com/wp-content/uploads/2023/05/marie.png"
                  alt="Image EM Value"
                  width={266}
                  height={266}
                  className="pointer-events-none w-full h-full object-contain"
                  draggable="false"
                />
              </div>
            </Link>
          </motion.div>
        </div>
        <div className="absolute z-10 w-full xl:max-w-[474px] flex items-center justify-center xl:pt-[500px]">
          <h3 className="font-bold text-[30px] leading-40">
            We're not just a way of doing, we're also a way of being.
          </h3>
        </div>
      </div>
    </section>
  );
}
