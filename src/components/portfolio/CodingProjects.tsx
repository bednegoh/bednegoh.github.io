import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { CodingProject } from '../../types/portfolio';

const CodingProjects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          renderLinks={(project) => (
            <div className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00ffff] hover:text-white transition-colors"
                >
                  <Github size={20} />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00ffff] hover:text-white transition-colors"
                >
                  <ExternalLink size={20} />
                </a>
              )}
            </div>
          )}
        />
      ))}
    </div>
  );
};

const projects: CodingProject[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform built with React and Node.js',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com/username/ecommerce',
    liveUrl: 'https://example.com',
    category: 'coding'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    github: 'https://github.com/username/task-manager',
    category: 'coding'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A weather dashboard with location-based forecasts and interactive maps',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=800',
    tags: ['JavaScript', 'Weather API', 'Chart.js'],
    github: 'https://github.com/username/weather-app',
    liveUrl: 'https://example.com',
    category: 'coding'
  }
];

export default CodingProjects;