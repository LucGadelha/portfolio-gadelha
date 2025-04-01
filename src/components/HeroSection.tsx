
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 to-white pt-16">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 animate-fade-in">
            Olá, eu sou <span className="text-blue-600">Seu Nome</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Desenvolvedor Web & Designer de Interfaces
          </p>
          <div className="flex justify-center space-x-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:email@exemplo.com" 
              className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
          <a 
            href="#sobre" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors animate-fade-in-up"
            style={{ animationDelay: '0.6s' }}
          >
            Saiba mais <ArrowDown size={18} />
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
