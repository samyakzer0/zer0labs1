import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WorkSection } from './components/WorkSection';
import { ServicesSection } from './components/ServicesSection';
import { AgencySection } from './components/AgencySection';
import { ContactSection } from './components/ContactSection';
import { CaseStudy } from './components/CaseStudy';
import { projectsData } from './data/projects';
import './types'; // Import global types

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const handleProjectClick = (projectId: number) => {
    setSelectedProject(projectId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToPortfolio = () => {
    setSelectedProject(null);
    // Scroll to work section
    setTimeout(() => {
      const workSection = document.querySelector('#work');
      if (workSection) {
        workSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const currentProject = selectedProject !== null 
    ? projectsData.find(p => p.id === selectedProject) 
    : null;

  if (currentProject) {
    return (
      <div className="relative w-full min-h-screen bg-black text-white selection:bg-cyan-500/30">
        <CaseStudy
          title={currentProject.title}
          category={currentProject.category}
          tags={currentProject.tags}
          projectUrl={currentProject.url}
          previewImage={currentProject.previewImage}
          aim={currentProject.aim}
          description={currentProject.description}
          features={currentProject.features}
          onBack={handleBackToPortfolio}
        />
      </div>
    );
  }

  return (
    <div className="relative w-full min-h-screen bg-black text-white selection:bg-cyan-500/30" style={{ scrollBehavior: 'smooth' }}>
      
      {/* Navigation - Fixed Top */}
      <Navbar />

      {/* Scrolling Content */}
      <main className="relative flex flex-col w-full">
        <HeroSection />
        <WorkSection onProjectClick={handleProjectClick} />
        <ServicesSection />
        <AgencySection />
        <ContactSection />
      </main>
      
    </div>
  );
};

export default App;