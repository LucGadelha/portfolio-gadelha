
import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white dark:bg-gray-900 shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#" className="text-xl font-bold text-blue-600 dark:text-blue-400">Lucas Gadelha | Portfólio</a>
          
          {/* Mobile menu button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="text-gray-700 dark:text-gray-300 focus:outline-none"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-700 dark:text-gray-300 focus:outline-none">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#sobre" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Sobre</a>
              <a href="#habilidades" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Habilidades</a>
              <a href="#projetos" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projetos</a>
              <a href="#contato" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contato</a>
            </div>
          </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a href="#sobre" onClick={toggleMenu} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Sobre</a>
              <a href="#habilidades" onClick={toggleMenu} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Habilidades</a>
              <a href="#projetos" onClick={toggleMenu} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projetos</a>
              <a href="#contato" onClick={toggleMenu} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contato</a>
            </div>
          </div>
        )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
