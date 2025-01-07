"use client"

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface AnimatedTitleProps {
  text: string
  className?: string
  style?: React.CSSProperties
}

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ text, className, style }) => {
  const characters = Array.from(text)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`} style={style}>
      <motion.div
        initial={{ y: '100%' }}
        animate={isInView ? { y: 0 } : { y: '100%' }}
      >
        {characters.map((char, index) => (
          <motion.span
            key={index}
            className="inline-block"
            initial={{ y: '100%' }}
            animate={isInView ? { y: 0 } : { y: '100%' }}
            transition={{
              duration: 2,
              ease: [0.33, 1, 0.68, 1],
              delay: index * 0.02,
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.div>
    </div>
  )
}

export default AnimatedTitle

