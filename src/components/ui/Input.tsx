import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  className?: string; 
}

export const Input: React.FC<InputProps> = ({ placeholder, className, ...props }) => {
  return (
    <input
      {...props}
      placeholder={placeholder}
      className={className}
    />
  );
};
