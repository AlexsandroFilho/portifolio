import React from 'react';
import { SiHtml5, SiJavascript, SiTypescript, SiReact, SiDotnet, SiSpringboot } from 'react-icons/si';
import { ArrowRight, FileText } from 'lucide-react';
import heroImg from '../assets/hero.jpg';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-[#171717] overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Coluna Esquerda */}
        <div className="flex flex-col items-start text-left space-y-6">
          {/* Badge superior */}
          <div className="inline-flex items-center px-3 py-1 rounded-md bg-[#444444]/30 border border-[#444444] animate-fade-in">
            <span className="text-xs font-bold text-[#DA0037] uppercase tracking-wider">
              DESENVOLVEDOR FULL STACK
            </span>
          </div>

          {/* Título Principal */}
          <h1 className="text-5xl sm:text-7xl font-extrabold text-[#EDEDED] leading-tight tracking-tighter">
            Criando experiências <br />
            <span className="text-[#DA0037]">digitais incríveis</span>
          </h1>

          {/* Texto de apoio */}
          <p className="text-lg text-[#EDEDED]/70 max-w-lg leading-relaxed">
            Especialista em transformar ideias em aplicações robustas e escaláveis,
            unindo design moderno com performance de alto nível.
          </p>

          {/* Botões de Ação */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 bg-[#DA0037] hover:bg-[#B5002D] text-[#EDEDED] px-8 py-3.5 rounded-lg text-base font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#DA0037]/20"
            >
              Veja meus projetos
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-[#444444] hover:border-[#DA0037] text-[#EDEDED] px-8 py-3.5 rounded-lg text-base font-bold transition-all hover:bg-[#444444]/20"
            >
              <FileText className="w-5 h-5" />
              Download CV
            </a>
          </div>

          {/* Barra inferior de tecnologias */}
          <div className="pt-12 w-full">
            <div className="flex flex-col space-y-4">
              <span className="text-xs font-bold text-[#EDEDED]/50 uppercase tracking-[0.2em]">
                TECNOLOGIAS COM AS QUAIS TRABALHO
              </span>
              <div className="flex flex-wrap gap-6 text-3xl text-[#EDEDED]/60">
                <SiHtml5 className="hover:text-[#E34F26] transition-colors cursor-pointer" title="HTML5" />
                <SiJavascript className="hover:text-[#F7DF1E] transition-colors cursor-pointer" title="JavaScript" />
                <SiTypescript className="hover:text-[#3178C6] transition-colors cursor-pointer" title="TypeScript" />
                <SiReact className="hover:text-[#61DAFB] transition-colors cursor-pointer" title="React" />
                <SiDotnet className="hover:text-[#512BD4] transition-colors cursor-pointer" title=".NET" />
                <SiSpringboot className="hover:text-[#6DB33F] transition-colors cursor-pointer" title="Spring Boot" />
              </div>
            </div>
          </div>
        </div>

        {/* Coluna Direita */}
        <div className="relative flex justify-center lg:justify-end items-center">
          <div className="relative w-72 h-72 sm:w-96 sm:h-96">
            <div className="absolute inset-0 rounded-full bg-[#444444]/20 border border-[#444444]/30 animate-pulse"></div>
            <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-[#DA0037]/30 to-transparent"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#DA0037]/50 shadow-2xl">
              <img
                src={heroImg}
                alt="Alexsandro Filho"
                className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
              />
            </div>

            {/* Card flutuante de Código */}
            <div className="absolute -bottom-6 -left-8 sm:-left-12 bg-[#171717] border border-[#444444] p-5 rounded-xl shadow-2xl hidden sm:block">
              <div className="flex gap-1.5 mb-3">
                <div className="w-3 h-3 rounded-full bg-[#DA0037]"></div>
                <div className="w-3 h-3 rounded-full bg-[#444444]"></div>
                <div className="w-3 h-3 rounded-full bg-[#EDEDED]/20"></div>
              </div>
              <code className="text-sm font-mono leading-relaxed">
                <span className="text-[#DA0037]">const</span> <span className="text-[#EDEDED]">desenvolvedor</span> = {'{'} <br />
                &nbsp;&nbsp;nome: <span className="text-[#DA0037]">'Alexsandro'</span>,<br />
                &nbsp;&nbsp;cargo: <span className="text-[#DA0037]">'Full Stack'</span>,<br />
                &nbsp;&nbsp;cafe: <span className="text-[#DA0037]">true</span>,<br />
                &nbsp;&nbsp;status: <span className="text-[#DA0037]">'Codando...'</span><br />
                {'}'};
              </code>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};