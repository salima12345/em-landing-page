"use client";

import React, { PropsWithChildren, useEffect } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import { LenisOptions } from "@studio-freight/lenis";

const SmoothScroll = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    // Sauvegarde la position du scroll avant le rafraîchissement
    if (typeof window !== 'undefined') {
      window.addEventListener('beforeunload', () => {
        sessionStorage.setItem('scrollPosition', window.scrollY.toString());
      });
    }

    // Restaure la position du scroll après le rafraîchissement
    const scrollPosition = sessionStorage.getItem('scrollPosition');
    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition));
      sessionStorage.removeItem('scrollPosition');
    }
  }, []);

  const lenisOptions: LenisOptions = {
    duration: 3,
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    infinite: false,
    orientation: "vertical" as const,
    gestureOrientation: "vertical" as const,
  };

  return (
    <ReactLenis 
      root 
      options={lenisOptions}
      autoRaf={true}
    >
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;