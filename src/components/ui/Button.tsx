
import React from 'react';
import MagneticButton from './MagneticButton';
import Image from 'next/image';

interface ButtonProps {
  imageSrc: string;
  altText: string;
  onClick?: () => void; 
  imageWidth?: number; 
  imageHeight?: number; 
}

const Button: React.FC<ButtonProps> = ({ 
  imageSrc, 
  altText, 
  onClick, 
  imageWidth = 16, 
  imageHeight = 16, 
}) => {
  return (
    <MagneticButton>
      <button 
        className="rounded-full flex items-center justify-center w-[54px] h-[54px] bg-grayDark text-white"
        onClick={onClick} 
      >
        <Image 
          src={imageSrc} 
          alt={altText} 
          width={imageWidth} 
          height={imageHeight} 
          className="w-4 h-4"
        />
      </button>
    </MagneticButton>
  );
}

export default Button;