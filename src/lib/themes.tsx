"use client";

import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

type Theme = "light" | "dark";
type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

const PAGE_THEMES: Record<string, Theme> = {
  "/": "dark",
  "/Expertise/Strategy": "light",
  "/Expertise/Media": "light",
  "/Expertise/Design": "light",
  "/Expertise/Web": "light",
  "/Expertise/Content": "light",
  "/Expertise/SocialMedia": "light",
  "/Expertise/Outsourcing": "light",


};

export function ThemeProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [theme, setTheme] = useState<Theme>(() => {
    return PAGE_THEMES[pathname] || "dark";
  });

  useEffect(() => {
    const newTheme = PAGE_THEMES[pathname] || "dark";
    setTheme(newTheme);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}