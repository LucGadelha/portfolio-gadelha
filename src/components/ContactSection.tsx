
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contato" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
            Entre em <span className="text-blue-600 dark:text-blue-400">Contato</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Tem um projeto em mente? Entre em contato comigo para conversarmos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <form>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">Nome</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Seu nome"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="seu@email.com"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">Mensagem</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Como posso ajudar?"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <Send size={18} />
                <span>Enviar Mensagem</span>
              </button>
            </form>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email</h3>
                  <p className="text-gray-600 dark:text-gray-300">gadelhadev0@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Telefone</h3>
                  <a
                    href="https://wa.me/92981634154" 
                    target="_blank"
                    rel="noopener noreferrer">
                    <p className="text-gray-600 dark:text-gray-300">(92) 98163-4154</p>
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Localização</h3>
                  <p className="text-gray-600 dark:text-gray-300">Manaus - AM, Brasil</p>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3">Redes Sociais</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://linkedin.com/in/lucas-gadelha/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                    </svg>
                  </a>
                  <a 
                    href="https://github.com/LucGadelha" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition-colors"
                    aria-label="GitHub"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a 
                    href="mailto:gadelhadev0@gmail.com" 
                    className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition-colors"
                    aria-label="Email"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
