import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  className?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ 
  placeholder, 
  className = '', 
  error,
  autoComplete = 'new-password',
  name,
  ...props 
}) => {
  // Générer un nom unique pour empêcher l'autocomplétion
  const uniqueName = React.useMemo(() => 
    `${name || 'input'}_${Math.random().toString(36).substr(2, 9)}`, 
    [name]
  );

  return (
    <div className="w-full">
      <input 
        type="text" 
        className="hidden" 
        tabIndex={-1}
        aria-hidden="true"
        autoComplete="new-password" 
      />
      
      {/* Champ principal */}
      <input
        {...props}
        name={uniqueName}
        autoComplete="nope" 
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        data-form-type="other"
        aria-autocomplete="none"
        placeholder={placeholder}
        className={` 
          ${className}
          [&:-webkit-autofill]:bg-transparent
          [&:-webkit-autofill]:text-white
          [&:-webkit-autofill]:[box-shadow:0_0_0_1000px_#222222_inset]
          [&:-webkit-autofill]:[text-fill-color:white]
          [&:-webkit-autofill]:[-webkit-text-fill-color:white]
        `}
      />
      
      {/* Message d'erreur */}
      {error && (
        <p className="text-red-500 text-xs mt-1">{error}</p>
      )}
    </div>
  );
};
