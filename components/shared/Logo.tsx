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
    <div className={`flex items-center gap-2.5 ${className}`}>
      <Image 
        src="/logo.png" 
        alt="Smartskatt.no - Finn dine skattefradrag" 
        width={size} 
        height={size} 
        className="flex-shrink-0 drop-shadow-sm" 
      />
      <span className={`font-extrabold tracking-tight leading-none ${textColor}`} style={{ fontSize: `${Math.max(22, size * 0.7)}px` }}>
        SmartSkatt
      </span>
    </div>
  );
}
