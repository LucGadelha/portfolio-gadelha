import React from 'react';

const AboutSection = () => {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden mx-auto md:mx-0">
                <img
                  src="/images/profile/perfil.jpg"
                  alt="Foto de Perfil"
                  className="w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-blue-100 -z-10"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-blue-50 -z-10"></div>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative">
              <span className="text-blue-600">Sobre</span> Mim
              <div className="h-1 w-20 bg-blue-600 mt-2"></div>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Olá! Sou Desenvolvedor Full stack com 3 anos de experiência construindo aplicações do zero, tanto no front-end quanto no back-end. Minha jornada começou com projetos diversos, desde landing pages para lojas e restaurantes até APIs robustas para e-commerce e bibliotecas. Trabalhei com tecnologias como JavaScript, React, TypeScript, Node.js, Express, Python, Next.js, Tailwind CSS e testes com Nest.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Transformo desafios em soluções inovadoras, combinando criatividade técnica com uma paixão ardente por desenvolvimento de software. Meu compromisso vai além do código: busco constantemente superar expectativas e criar experiências digitais excepcionais.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Estou determinado a ser o melhor no que faço, sempre buscando excelência e aprendizado contínuo. Minha missão é entregar resultados que não apenas atendam, mas superem as expectativas de cada projeto.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <a href="#projetos" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center">
                Ver Projetos
              </a>
              <a href="#contato" className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-center">
                Entre em Contato
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
