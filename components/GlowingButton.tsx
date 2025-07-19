
import React from 'react';

interface GlowingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

const GlowingButton: React.FC<GlowingButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  const baseClasses = 'px-6 py-3 font-orbitron font-bold text-base rounded-lg transition-all duration-300 ease-in-out transform focus:outline-none';
  
  const primaryClasses = `
    bg-primary-purple text-white 
    hover:bg-purple-700 hover:shadow-glow-purple
    focus:ring-4 focus:ring-primary-purple/50
    disabled:bg-primary-purple/50 disabled:shadow-none disabled:cursor-not-allowed
  `;
  
  const secondaryClasses = `
    bg-transparent border-2 border-accent-blue text-accent-blue 
    hover:bg-accent-blue hover:text-background-black hover:shadow-glow-blue
    focus:ring-4 focus:ring-accent-blue/50
    disabled:border-accent-blue/50 disabled:text-accent-blue/50 disabled:bg-transparent disabled:shadow-none disabled:cursor-not-allowed
  `;

  const variantClasses = variant === 'primary' ? primaryClasses : secondaryClasses;

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default GlowingButton;
