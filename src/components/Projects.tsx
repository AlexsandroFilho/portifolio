import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-[#171717]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12 border-l-4 border-[#DA0037] pl-4">
          Meus Projetos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
