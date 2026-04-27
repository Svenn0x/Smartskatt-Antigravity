import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  size?: number;
}

export default function Logo({ className = '', variant = 'light', size = 32 }: LogoProps) {
  const textColor = variant === 'light' ? 'text-primary' : 'text-white';
  
  return (
    <div className={`flex items-center ${className}`}>
      <Image 
        src="/logo.png" 
        alt="Smartskatt.no - Finn dine skattefradrag" 
        width={size * 6} 
        height={size * 1.5} 
        className="flex-shrink-0 drop-shadow-sm object-contain" 
      />
    </div>
  );
}
