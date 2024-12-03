import React from 'react';
import { Project } from '../../types/portfolio';

interface ProjectCardProps {
  project: Project;
  renderLinks: (project: Project) => React.ReactNode;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, renderLinks }) => {
  return (
    <div className="bg-black/50 rounded-lg overflow-hidden group hover:shadow-lg hover:shadow-[#00ffff]/20 transition-all duration-300">
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 gradient-text">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        {'tags' in project && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-[#00ffff]/10 text-[#00ffff] text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <div className="flex justify-end">
          {renderLinks(project)}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;