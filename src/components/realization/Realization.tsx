"use client";
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Realization = () => {
  const { ref, inView } = useInView({
    threshold: 0.1, 
    triggerOnce: false 
  });

  useEffect(() => {
    const event = new CustomEvent('realizationInView', { 
      detail: { isVisible: inView } 
    });
    window.dispatchEvent(event);
  }, [inView]);

  return (
    <section 
      ref={ref} 
      className='container mt-[100px]'
    >
      <h3 className='font-bold text-[26px]'>Last creations</h3>
      <div className='w-full h-[200px]'>
      </div>
    </section>
  );
};

export default Realization;