
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  liveDemo?: string;
}

const ProjectCard = ({ title, description, image, tags, github, liveDemo }: ProjectCardProps) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700">
    <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
      {image ? (
        <img src={image} alt={title} className="w-full h-full object-cover" />
      ) : (
        <span className="text-gray-400 dark:text-gray-500">Imagem do Projeto</span>
      )}
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span key={index} className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        {github && (
          <a 
            href={github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Github size={18} />
            <span>Código</span>
          </a>
        )}
        {liveDemo && (
          <a 
            href={liveDemo} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ExternalLink size={18} />
            <span>Demo</span>
          </a>
        )}
      </div>
    </div>
  </div>
);

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-commerce Responsivo",
      description: "Uma loja online completa com sistema de carrinho, pagamentos e painel administrativo.",
      image: "",
      tags: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/LucGadelha/sales-dashboard-lg",
      liveDemo: "https://example.com",
    },
    {
      title: "App de Previsão do Tempo",
      description: "Aplicativo que mostra previsões do tempo para qualquer cidade do mundo.",
      image: "",
      tags: ["React", "Bootstrap", "TypeScript"],
      github: "https://github.com/LucGadelha/Weather-Forecast",
      liveDemo: "https://dnc-weather-l.netlify.app",
    },
    {
      title: "Blog de Tecnologia",
      description: "Plataforma de conteúdo com sistema de comentários e perfis de usuário.",
      image: "",
      tags: ["Next.js", "Tailwind CSS", "Prisma"],
      github: "https://github.com",
      liveDemo: "https://example.com",
    },
    {
      title: "Dashboard Analítico",
      description: "Painel administrativo com visualização de dados em tempo real.",
      image: "",
      tags: ["Angular", "Express", "D3.js"],
      github: "https://github.com",
      liveDemo: "https://example.com",
    },
    {
      title: "App de Clima",
      description: "Aplicativo que mostra previsões do tempo para qualquer cidade do mundo.",
      image: "",
      tags: ["React Native", "API RESTful"],
      github: "https://github.com",
      liveDemo: "https://example.com",
    },
    {
      title: "Landingpage Intasany",
      description: "Landingpage de apresentação de empresa.",
      image: "",
      tags: ["TypeScript", "HTML", "CSS"],
      github: "https://github.com/LucGadelha/Instasany-LP",
      liveDemo: "https://instasany-lp.vercel.app",
    }
  ];

  return (
    <section id="projetos" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meus <span className="text-blue-600">Projetos</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Uma seleção dos meus trabalhos recentes e projetos pessoais.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              github={project.github}
              liveDemo={project.liveDemo}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <a 
            href="https://github.com/LucGadelha/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Github size={20} />
            <span>Ver mais no GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
