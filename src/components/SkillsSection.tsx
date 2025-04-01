
import React from 'react';
import { Code, PenTool, Layout, Database, Sparkles, LineChart } from 'lucide-react';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SkillCard = ({ icon, title, description }: SkillCardProps) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow">
    <div className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 dark:text-white">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </div>
);

const SkillsSection = () => {
  const skills = [
    {
      icon: <Code size={24} />,
      title: "Desenvolvimento Front e Back End",
      description: "Experiência com JavaScript, React, TypeScript, Node.js, Express, Python, Next.js e diversas outras tecnologias para criar aplicações completas."
    },
    {
      icon: <Layout size={24} />,
      title: "Design Responsivo",
      description: "Criação de layouts adaptáveis que funcionam perfeitamente em todos os dispositivos e tamanhos de tela."
    },
    {
      icon: <Database size={24} />,
      title: "CI/CD",
      description: "Implementação de pipeline de integração e entrega contínua para automação de processos de desenvolvimento."
    },
    {
      icon: <PenTool size={24} />,
      title: "Sistemas de Controle",
      description: "Desenvolvimento de sistemas robustos para gerenciamento e controle de processos e operações."
    },
    {
      icon: <Sparkles size={24} />,
      title: "Sistemas de Análise de Dados",
      description: "Criação de soluções para coleta, processamento e visualização de dados para tomada de decisões."
    },
    {
      icon: <LineChart size={24} />,
      title: "SEO & Performance",
      description: "Otimização para mecanismos de busca e performance para garantir sites rápidos e bem posicionados."
    }
  ];

  return (
    <section id="habilidades" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
            Minhas <span className="text-blue-600 dark:text-blue-400">Habilidades</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Aqui estão algumas das habilidades e tecnologias que utilizo para criar projetos incríveis.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard 
              key={index}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
