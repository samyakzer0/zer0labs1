import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, className = '' }) => {
  return (
    <div className={`mb-10 sm:mb-12 md:mb-16 border-l-2 sm:border-l-4 border-white/80 pl-4 sm:pl-6 md:pl-8 ${className}`}>
      {subtitle && (
        <p className="text-cyan-400 font-pixel text-[9px] sm:text-[10px] md:text-xs mb-2 sm:mb-3 tracking-wider sm:tracking-widest uppercase animate-pulse">
          {subtitle}
        </p>
      )}
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white font-pixel leading-tight">
        {title}
      </h2>
    </div>
  );
};