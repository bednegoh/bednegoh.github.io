import React, { useState } from 'react';
import CodingProjects from './portfolio/CodingProjects';
import PhotographyProjects from './portfolio/PhotographyProjects';
import Button from './ui/Button';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState<'coding' | 'photography'>('coding');

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-black via-black/95 to-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
          My Portfolio
        </h2>

        <div className="flex justify-center gap-4 mb-12">
          <Button
            variant={activeTab === 'coding' ? 'primary' : 'outline'}
            onClick={() => setActiveTab('coding')}
            size="lg"
          >
            Coding Projects
          </Button>
          <Button
            variant={activeTab === 'photography' ? 'primary' : 'outline'}
            onClick={() => setActiveTab('photography')}
            size="lg"
          >
            Photography
          </Button>
        </div>

        <div className="animate-fade-in">
          {activeTab === 'coding' ? <CodingProjects /> : <PhotographyProjects />}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;