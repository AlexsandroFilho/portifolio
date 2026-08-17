import React from 'react';
import { Mail, Phone, ArrowUpRight, MessageSquareCode } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-[#171717] border-t border-[#444444]/30 text-[#EDEDED]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Grid de 3 Colunas */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Coluna 1: CTA (Call to Action) */}
          <div className="bg-[#444444]/20 border border-[#444444] p-8 rounded-2xl flex flex-col justify-between hover:border-[#DA0037]/50 transition-all shadow-lg">
            <div>
              <span className="text-xs font-bold text-[#DA0037] uppercase tracking-widest bg-[#DA0037]/10 px-3 py-1 rounded-full border border-[#DA0037]/30">
                CONTATO
              </span>
              <h3 className="text-3xl font-extrabold text-white mt-4 mb-3">
                Tem um projeto em mente?
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Estou sempre aberto a discutir novas oportunidades, parcerias ou ideias inovadoras para transformar em sistemas de alta performance.
              </p>
            </div>
            <div className="pt-8">
              <a
                href="mailto:alexsandro.filho0402@gmail.com"
                className="inline-flex items-center justify-center gap-2 bg-[#DA0037] hover:bg-[#B5002D] text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-[#DA0037]/20 w-full text-center hover:scale-[1.02] active:scale-[0.98]"
              >
                Fale Comigo
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Depoimento / Método de Trabalho */}
          <div className="bg-[#444444]/20 border border-[#444444] p-8 rounded-2xl flex flex-col justify-between hover:border-[#DA0037]/50 transition-all shadow-lg">
            <div>
              <div className="p-3 bg-[#171717] w-fit rounded-xl border border-[#444444] text-[#DA0037] mb-4">
                <MessageSquareCode className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">
                Método de Trabalho
              </h4>
              <p className="text-gray-300 text-sm italic leading-relaxed">
                "Acredito que o desenvolvimento de software vai além de escrever código: trata-se de construir soluções escaláveis, limpas e orientadas a resolver problemas reais com excelência técnica."
              </p>
            </div>
            <div className="pt-6 border-t border-[#444444]/50 mt-6">
              <p className="text-xs font-semibold text-white">Alexsandro Filho</p>
              <p className="text-xs text-gray-400">Desenvolvedor Full Stack</p>
            </div>
          </div>

          {/* Coluna 3: Redes & Contato Direto */}
          <div className="bg-[#444444]/20 border border-[#444444] p-8 rounded-2xl flex flex-col justify-between hover:border-[#DA0037]/50 transition-all shadow-lg space-y-6">
            <div>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-4">
                SIGA-ME
              </span>
              <div className="flex gap-4 mb-8">
                <a
                  href="https://github.com/AlexsandroFilho"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 bg-[#171717] border border-[#444444] rounded-xl text-gray-300 hover:text-[#DA0037] hover:border-[#DA0037] transition-all"
                  aria-label="GitHub"
                >
                  <FaGithub size={22} />
                </a>
                <a
                  href="https://www.linkedin.com/in/alexsandrofilho14/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 bg-[#171717] border border-[#444444] rounded-xl text-gray-300 hover:text-[#DA0037] hover:border-[#DA0037] transition-all"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={22} />
                </a>
              </div>

              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-3">
                INFORMAÇÕES DE CONTATO
              </span>
              <div className="space-y-4">
                <a
                  href="mailto:alexsandro.filho0402@gmail.com"
                  className="flex items-center gap-3 text-sm text-gray-300 hover:text-[#DA0037] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#DA0037]" />
                  alexsandro.filho0402@gmail.com
                </a>
                <a
                  href="https://wa.me/5513999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-gray-300 hover:text-[#DA0037] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#DA0037]" />
                  +55 (13) 99679-5870
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;