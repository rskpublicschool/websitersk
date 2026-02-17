import { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionTitle({ 
  children, 
  subtitle, 
  centered = false,
  className = '' 
}: SectionTitleProps) {
  return (
    <div className={`mb-10 sm:mb-12 md:mb-14 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
        {children}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mt-4 ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
}

