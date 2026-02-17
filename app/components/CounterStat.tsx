'use client';

import { useEffect, useState, useRef } from 'react';

interface CounterStatProps {
  endValue: number;
  suffix?: string;
  label: string;
  colorClass?: string;
  iconClass?: string;
  duration?: number;
}

export default function CounterStat({
  endValue,
  suffix = '',
  label,
  colorClass = 'from-blue-50 to-blue-100',
  iconClass = 'text-blue-600',
  duration = 2000
}: CounterStatProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * endValue);
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, endValue, duration]);

  return (
    <div
      ref={counterRef}
      className={`bg-gradient-to-br ${colorClass} rounded-xl p-4 sm:p-5 text-center shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 border border-white/50`}
    >
      <div className={`w-8 h-8 sm:w-10 sm:h-10 ${iconClass} mx-auto mb-2 sm:mb-3 flex items-center justify-center`}>
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      </div>
      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-1">
        {count}{suffix}
      </div>
      <div className="text-xs sm:text-sm text-gray-600 font-medium leading-tight">
        {label}
      </div>
    </div>
  );
}

