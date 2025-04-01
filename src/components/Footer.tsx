
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Lucas Gadelha | Portfólio</h3>
            <p className="text-gray-400 mt-2">Desenvolvedor Full stack</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <p className="text-gray-400">
              &copy; {currentYear} - Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
