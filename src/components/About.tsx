import React from 'react';
import { Award, CheckCircle, Zap, Code2, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    {
      icon: <Award className="w-6 h-6 text-[#DA0037]" />,
      value: '1',
      label: 'Anos de Experiência'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-[#DA0037]" />,
      value: '2',
      label: 'Projetos Concluídos'
    },
    {
      icon: <Zap className="w-6 h-6 text-[#DA0037]" />,
      value: '100%',
      label: 'Foco em Performance'
    },
    {
      icon: <Code2 className="w-6 h-6 text-[#DA0037]" />,
      value: 'Clean',
      label: 'Código Limpo'
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#171717] border-t border-[#444444]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Coluna Esquerda */}
          <div className="flex flex-col space-y-6">
            <span className="text-[#DA0037] font-bold tracking-[0.2em] text-sm uppercase">
              SOBRE MIM
            </span>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#EDEDED] leading-tight">
              Criando soluções digitais <br />
              <span className="text-[#EDEDED]/50">com precisão e eficiência.</span>
            </h2>

            <p className="text-lg text-[#EDEDED]/70 leading-relaxed max-w-xl">
              Desenvolvedor Full Stack formado em Análise e Desenvolvimento de Sistemas pela FATEC, com experiência sólida na construção de aplicações escaláveis utilizando .NET, Java / Spring Boot e React. Meu foco principal é integrar arquiteturas de backend robustas com interfaces front-end modernas e otimizadas.
            </p>

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#DA0037] hover:bg-[#B5002D] text-[#EDEDED] px-8 py-3.5 rounded-lg text-base font-bold transition-all hover:scale-105 active:scale-95"
              >
                Vamos Conversar
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Coluna Direita (Cards de Estatísticas) */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-[#444444]/10 border border-[#444444] p-8 rounded-2xl hover:border-[#DA0037]/50 transition-colors group"
              >
                <div className="mb-4">
                  {stat.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-[#EDEDED] mb-1">
                    {stat.value}
                  </span>
                  <span className="text-sm font-medium text-[#EDEDED]/50 uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;