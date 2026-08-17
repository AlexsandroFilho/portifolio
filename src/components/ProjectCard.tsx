import React from 'react';
import { ExternalLink } from 'lucide-react';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-[#444444] rounded-xl overflow-hidden group hover:scale-[1.02] transition-transform duration-300 flex flex-col h-full shadow-lg">
      {project.imageUrl && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
        </div>
      )}

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#DA0037] transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-300 text-sm mb-4 line-clamp-3 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-medium bg-[#171717] text-gray-300 rounded border border-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold text-white hover:text-[#DA0037] transition-colors"
          >
          
            GitHub
          </a>

          {project.deployUrl && (
            <a
              href={project.deployUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-white hover:text-[#DA0037] transition-colors"
            >
              <ExternalLink size={18} />
              Deploy
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
