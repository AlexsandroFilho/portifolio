import React, { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre Mim', href: '#about' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#171717]/90 backdrop-blur-md border-b border-[#444444]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Marca */}
          <a href="#home" className="flex items-center gap-2 text-xl font-bold text-[#EDEDED] hover:text-[#DA0037] transition-colors">
            <Code2 className="w-7 h-7 text-[#DA0037]" />
            <span>Alexsandro<span className="text-[#DA0037]">.</span></span>
          </a>

          {/* Navegação Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#EDEDED]/80 hover:text-[#DA0037] text-sm font-medium transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#DA0037] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-[#DA0037] hover:bg-[#B5002D] text-[#EDEDED] px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-md hover:shadow-[#DA0037]/20"
            >
              Fale Comigo
            </a>
          </div>

          {/* Botão Menu Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-[#EDEDED] hover:text-[#DA0037] p-2 rounded-md focus:outline-none"
              aria-label="Abrir Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-[#171717] border-b border-[#444444] px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-[#EDEDED] hover:text-[#DA0037] px-3 py-2 text-base font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block text-center bg-[#DA0037] hover:bg-[#B5002D] text-[#EDEDED] px-4 py-2 rounded-lg text-base font-semibold transition-all"
          >
            Fale Comigo
          </a>
        </div>
      )}
    </nav>
  );
};