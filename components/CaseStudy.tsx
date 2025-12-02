import React from 'react';
import { ArrowLeft, ExternalLink, Target } from 'lucide-react';

interface CaseStudyProps {
  title: string;
  category: string;
  tags: string[];
  projectUrl: string;
  previewImage: string;
  aim: string;
  description: string;
  features?: string[];
  onBack: () => void;
}

export const CaseStudy: React.FC<CaseStudyProps> = ({
  title,
  category,
  tags,
  projectUrl,
  previewImage,
  aim,
  description,
  features = [],
  onBack,
}) => {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 sm:mb-12 font-pixel text-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          BACK TO PORTFOLIO
        </button>

        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <p className="text-cyan-400 font-mono text-xs sm:text-sm mb-3 tracking-widest uppercase">
            {category}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-pixel mb-6 sm:mb-8 leading-tight">
            {title}
          </h1>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 border border-white/20 text-xs text-gray-300 font-mono bg-white/5"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Project Link */}
          {projectUrl !== '#' && (
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-pixel text-xs hover:bg-cyan-400 transition-colors duration-300"
            >
              VIEW LIVE PROJECT
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Preview Section */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-pixel text-white mb-6">PREVIEW</h2>
          <div className="relative w-full aspect-video bg-white/5 border border-white/10 rounded-lg overflow-hidden group">
            {previewImage !== '#' ? (
              <img 
                src={previewImage} 
                alt={`${title} preview`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <div className="text-4xl sm:text-6xl mb-4 opacity-20">🖼️</div>
                  <p className="font-pixel text-xs sm:text-sm">PREVIEW IMAGE</p>
                  <p className="font-mono text-[10px] sm:text-xs mt-2 text-gray-600">Add image URL to display preview</p>
                </div>
              </div>
            )}
            {previewImage !== '#' && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            )}
          </div>
        </div>

        {/* Aim Section */}
        <div className="mb-12 sm:mb-16 border-l-4 border-cyan-500 pl-6 sm:pl-8 bg-white/5 p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-5 h-5 text-cyan-400" />
            <h2 className="text-xl sm:text-2xl font-pixel text-white">PROJECT AIM</h2>
          </div>
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base font-mono">
            {aim}
          </p>
        </div>

        {/* Description */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-pixel text-white mb-6">OVERVIEW</h2>
          <p className="text-gray-400 leading-relaxed text-sm sm:text-base font-mono">
            {description}
          </p>
        </div>

        {/* Features */}
        {features.length > 0 && (
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-pixel text-white mb-6">KEY FEATURES</h2>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 text-gray-400 font-mono text-sm sm:text-base"
                >
                  <span className="text-cyan-400 font-pixel text-xs mt-1">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="flex-1">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* CTA */}
        {projectUrl !== '#' && (
          <div className="border-t border-white/10 pt-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-pixel text-white mb-2">
                  LIKE WHAT YOU SEE?
                </h3>
                <p className="text-gray-400 text-sm font-mono">
                  Let's create something amazing together.
                </p>
              </div>
              <a
                href="#contact"
                className="px-8 py-4 bg-white text-black font-pixel text-xs hover:bg-cyan-400 transition-colors duration-300 whitespace-nowrap"
              >
                GET IN TOUCH
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
