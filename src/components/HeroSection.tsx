
import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100); // Aumentei a velocidade alterando de 150 para 100

  const roles = ['Lucas Gadelha', 'Engenheiro de Software', 'Desenvolvedor', 'Programador'];
  
  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      // Ajustando a velocidade de digitação
      if (!isDeleting && text === fullText) {
        // Pausa antes de começar a apagar
        setTimeout(() => setIsDeleting(true), 1500);
        setTypingSpeed(80); // Aumentei a velocidade de deleção (de 100 para 80)
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(100); // Aumentei a velocidade inicial (de 150 para 100)
      } else {
        setTypingSpeed(isDeleting ? 80 : 100); // Aumentei ambas velocidades
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 to-white pt-16">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 animate-fade-in">
            Olá, eu sou <span className="text-blue-600 inline-block min-w-[200px] md:min-w-[300px]">
              {text}
              <span className="animate-pulse inline-block">|</span>
            </span>
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
