"use client";

import { useEffect, ReactNode, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { usePathname, useSearchParams } from "next/navigation";

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const pathname = usePathname(); // Detects path changes
  const searchParams = useSearchParams(); // Detects query param changes
  const lenisRef = useRef<Lenis | null>(null); // Store Lenis instance

  // Save scroll position in sessionStorage before refresh or navigation
  useEffect(() => {
    const saveScrollPosition = () => {
      sessionStorage.setItem("scrollPosition", `${window.scrollY}`);
    };

    window.addEventListener("beforeunload", saveScrollPosition);

    // Save scroll position whenever the path or search parameters change
    saveScrollPosition();

    return () => {
      window.removeEventListener("beforeunload", saveScrollPosition);
    };
  }, [pathname, searchParams]);

  // Initialize Lenis and restore scroll position
  useEffect(() => {
    const scrollPosition = sessionStorage.getItem("scrollPosition");

    const lenis = new Lenis({
      duration: 1.5,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
    });

    lenisRef.current = lenis; // Store Lenis instance in ref

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Restore scroll position after Lenis initializes
    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition, 10));
      lenis.scrollTo(parseInt(scrollPosition, 10)); // Smoothly scroll to saved position
    }

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
