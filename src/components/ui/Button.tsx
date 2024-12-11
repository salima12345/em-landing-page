
"use client";

import React from "react";
import MagneticButton from "./MagneticButton";
import Image from "next/image";
import { useTheme } from "@/lib/themes";

interface ButtonProps {
  lightImageSrc: string; 
  darkImageSrc: string;  
  altText: string;
  onClick?: () => void;
  imageWidth?: number;
  imageHeight?: number;
}

const Button: React.FC<ButtonProps> = ({
  lightImageSrc,
  darkImageSrc,
  altText,
  onClick,
  imageWidth = 16,
  imageHeight = 16,
}) => {
  const { theme } = useTheme();

  const iconSrc = theme === "dark" ? darkImageSrc : lightImageSrc;

  return (
    <MagneticButton>
      <button
        className={`rounded-full flex items-center justify-center w-[54px] h-[54px]
          ${theme === "dark" 
            ? "bg-grayDark text-white" 
            : "bg-[#E6E5DF] text-black"
          }`}
        onClick={onClick}
      >
        <Image
          src={iconSrc}
          alt={altText}
          width={imageWidth}
          height={imageHeight}
          className="w-4 h-4"
        />
      </button>
    </MagneticButton>
  );
};

export default Button;
