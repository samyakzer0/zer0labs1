import React from 'react';
import { SectionTitle } from './SectionTitle';
import { ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/projects';

interface WorkSectionProps {
  onProjectClick: (projectId: number) => void;
}

export const WorkSection: React.FC<WorkSectionProps> = ({ onProjectClick }) => {
  return (
    <section id="work" className="relative min-h-screen py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="PORTFOLIO" subtitle="OUR WORK" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {projectsData.map((project) => (
            <div 
              key={project.id}
              className="group relative h-72 sm:h-80 md:h-96 border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden hover:border-white/30 transition-all duration-500 flex flex-col justify-end p-6 sm:p-8"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-cyan-400 font-mono text-[10px] sm:text-xs mb-2 tracking-wider sm:tracking-widest">{project.category}</p>
                <h3 className="text-xl sm:text-2xl md:text-3xl text-white font-pixel mb-4 sm:mb-6 leading-tight">{project.title}</h3>
                
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-1.5 sm:px-2 py-0.5 sm:py-1 border border-white/20 text-[9px] sm:text-[10px] text-gray-300 font-mono">
                      {tag}
                    </span>
                  ))}
                </div>

                <button 
                  onClick={() => onProjectClick(project.id)}
                  className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-pixel text-white border-b border-transparent group-hover:border-white transition-all pb-1"
                >
                  VIEW CASE STUDY <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>

              {/* Decorative Number */}
              <span className="absolute top-4 sm:top-6 right-4 sm:right-6 font-pixel text-3xl sm:text-4xl text-white/5 group-hover:text-white/10 transition-colors">
                0{project.id}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};