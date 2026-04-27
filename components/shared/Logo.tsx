import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export default function Logo({ className = '', variant = 'light' }: LogoProps) {
  const textColor = variant === 'light' ? 'text-primary' : 'text-white';
  
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <Image 
        src="/icon.svg" 
        alt="Smartskatt.no - Finn dine skattefradrag" 
        width={32} 
        height={32} 
        className="flex-shrink-0 drop-shadow-sm" 
      />
      <span className={`font-extrabold text-[22px] tracking-tight leading-none ${textColor}`}>
        SmartSkatt
      </span>
    </div>
  );
}
