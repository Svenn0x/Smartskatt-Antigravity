'use client';

import React, { useEffect, useState } from 'react';

export default function AnimatedCounter({ 
  value, 
  isCurrency = true 
}: { 
  value: number; 
  isCurrency?: boolean;
}) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = displayValue;
    const end = value;
    if (start === end) return;
    
    let totalDuration = 800; // 0.8 seconds
    let startTimestamp: number | null = null;
    let animationFrame: number;
    
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / totalDuration, 1);
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setDisplayValue(start + easeProgress * (end - start));
      
      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(step);
      } else {
        setDisplayValue(end);
      }
    };
    
    animationFrame = window.requestAnimationFrame(step);
    
    return () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, [value]); // intentionally not including displayValue in deps

  if (isCurrency) {
    return <>{new Intl.NumberFormat('no-NO', { style: 'currency', currency: 'NOK', maximumFractionDigits: 0 }).format(Math.round(displayValue))}</>;
  }
  return <>{Math.floor(displayValue)}</>;
}
