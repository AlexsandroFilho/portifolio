import React from 'react';
import { 
  SiDotnet, 
  SiSpringboot, 
  SiTypescript, 
  SiReact, 
  SiPostgresql, 
  SiRabbitmq, 
  SiPython,
  SiGit,
  SiAngular
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa6';

interface SkillItem {
  name: string;
  percentage: number;
  icon: React.ReactNode;
}

const skills: SkillItem[] = [
  { name: '.NET / C#', percentage: 90, icon: <SiDotnet className="text-[#DA0037] w-6 h-6" /> },
  { name: 'Java / Spring Boot', percentage: 88, icon: <SiSpringboot className="text-[#DA0037] w-6 h-6" /> },
  { name: 'TypeScript', percentage: 85, icon: <SiTypescript className="text-[#DA0037] w-6 h-6" /> },
  { name: 'React', percentage: 80, icon: <SiReact className="text-[#DA0037] w-6 h-6" /> },
  { name: 'Python & IA Generativa', percentage: 82, icon: <SiPython className="text-[#DA0037] w-6 h-6" /> },
  { name: 'Angular', percentage: 75, icon: <SiAngular className="text-[#DA0037] w-6 h-6" /> },
  { name: 'SQL & PostgreSQL', percentage: 88, icon: <SiPostgresql className="text-[#DA0037] w-6 h-6" /> },
  { name: 'RabbitMQ & Microsserviços', percentage: 80, icon: <SiRabbitmq className="text-[#DA0037] w-6 h-6" /> },
  { name: 'AWS & Cloud', percentage: 75, icon: <FaAws className="text-[#DA0037] w-6 h-6" /> },
  { name: 'Git & GitOps', percentage: 92, icon: <SiGit className="text-[#DA0037] w-6 h-6" /> },
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-[#171717] text-[#EDEDED]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-widest text-[#DA0037] bg-[#DA0037]/10 px-3 py-1 rounded-full border border-[#DA0037]/30 font-semibold">
            MINHAS HABILIDADES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-white">
            Tecnologias que Domino
          </h2>
          <p className="text-gray-400 mt-2 max-w-xl mx-auto text-sm">
            Ferramentas, linguagens e frameworks que utilizo diariamente para construir sistemas escaláveis e de alta performance.
          </p>
        </div>

        {/* Grid de Skills com Barras de Progresso */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill) => (
            <div 
              key={skill.name} 
              className="bg-[#444444] p-5 rounded-xl border border-gray-700/50 hover:border-[#DA0037]/50 transition-all shadow-md"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#171717] rounded-lg">
                    {skill.icon}
                  </div>
                  <span className="font-semibold text-white">{skill.name}</span>
                </div>
                <span className="text-sm font-bold text-[#DA0037]">{skill.percentage}%</span>
              </div>

              {/* Trilho da Barra de Progresso */}
              <div className="w-full bg-[#171717] h-2.5 rounded-full overflow-hidden">
                <div 
                  className="bg-[#DA0037] h-full rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;