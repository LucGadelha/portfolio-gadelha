
import React from 'react';

const AboutSection = () => {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden mx-auto md:mx-0">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 text-lg">Sua Foto</span>
                </div>
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
            <p className="text-gray-600 mb-4">
              Olá! Sou um desenvolvedor com paixão por criar experiências digitais intuitivas e impactantes. Com mais de X anos de experiência na área, tenho me especializado em desenvolver soluções web modernas e responsivas.
            </p>
            <p className="text-gray-600 mb-6">
              Meu objetivo é combinar design atraente com funcionalidade prática, garantindo que cada projeto não apenas pareça incrível, mas também ofereça uma experiência de usuário excepcional.
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
