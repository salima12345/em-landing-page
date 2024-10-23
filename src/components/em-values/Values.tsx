"use client"

import React, { useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"

export default function EMValues() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const animateFrom = 0.4
  const animateTo = 0.7

  const inclusionStyle = {
    left: useTransform(scrollYProgress, [animateFrom, animateTo], ["7%", "73%"]),
    rotate: useTransform(scrollYProgress, [animateFrom, animateTo], [0, 9]),


    opacity: 1,  
  }

  const intelligenceStyle = {
    right: useTransform(scrollYProgress, [animateFrom, animateTo], ["7%", "80%"]),
    rotate: useTransform(scrollYProgress, [animateFrom, animateTo], [0, 1]),


    opacity: 1,  }

  const creativiteStyle = {
    left: useTransform(scrollYProgress, [animateFrom, animateTo], ["7%", "45%"]),
    rotate: useTransform(scrollYProgress, [animateFrom, animateTo], [0, 5]),
    bottom: useTransform(scrollYProgress, [animateFrom, animateTo], ["-580px", "-580px"]),
    opacity: 1,  }

    const valuesStyle = {
      rotate: useTransform(scrollYProgress, [animateFrom, animateTo], [0, 5]),
      bottom: useTransform(scrollYProgress, [animateFrom, animateTo], ["-780px", "100px"]),
      opacity:1,
    }

  const authenticiteStyle = {
    right: useTransform(scrollYProgress, [animateFrom, animateTo], ["0%", "65%"]),
    rotate: useTransform(scrollYProgress, [animateFrom, animateTo], [0, 5]),
    bottom: useTransform(scrollYProgress, [animateFrom, animateTo], ["-580px", "-580px"]),
    opacity: 1,  }

  return (
    <section ref={sectionRef} className="em-values py-[360px]" id="em-values">
      <div className="content-em-values">
     
    <div className="flex items-center justify-center ">
    <h3 className="font-bold text-[30px] ">
        We're not just a way of doing, we’re also a way of being.
     </h3>
    </div>

        <div className="images">
          <motion.div className="inclusion img" style={inclusionStyle}>
            <img
              src="https://www.eliott-markus.com/wp-content/themes/em-wp/images/em-values/inclusion-min.png"
              alt="Inclusion"
              width={306}
              height={306}
            />
          </motion.div>
          <motion.div className="intelligence img" style={intelligenceStyle}>
            <img
              src="https://www.eliott-markus.com/wp-content/themes/em-wp/images/em-values/intelligence.png"
              alt="Intelligence"
              width={306}
              height={306}
            />
          </motion.div>
          <motion.div className="creativite img" style={creativiteStyle}>
            <img
              src="https://www.eliott-markus.com/wp-content/themes/em-wp/images/em-values/creativite-min.png"
              alt="Créativité"
              width={306}
              height={306}
            />
          </motion.div>
    
          <motion.div className="values" style={valuesStyle}>
            <Link href="https://www.eliott-markus.com/talents-equipe/">
              <div className="info">
                <h2>The people behind the values</h2>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12.943"
                    height="12.943"
                    viewBox="0 0 12.943 12.943"
                  >
                    <g
                      id="Groupe_1196"
                      data-name="Groupe 1196"
                      transform="translate(278.711 -2126.905)"
                    >
                      <path
                        id="Tracé_2300"
                        data-name="Tracé 2300"
                        d="M10.5,20.615,20.615,10.5"
                        transform="translate(-287.796 2117.82)"
                        fill="none"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></path>
                      <path
                        id="Tracé_2301"
                        data-name="Tracé 2301"
                        d="M10.5,10.5H20.615V20.615"
                        transform="translate(-287.796 2117.82)"
                        fill="none"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></path>
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
                />
              </div>
            </Link>
          </motion.div>
          <motion.div className="authenticite img" style={authenticiteStyle}>
            <img
              src="https://www.eliott-markus.com/wp-content/themes/em-wp/images/em-values/authenticite.png"
              alt="Authenticity"
              width={306}
              height={306}
            />
          </motion.div>
        </div>
    
      </div>
    </section>
  )
}