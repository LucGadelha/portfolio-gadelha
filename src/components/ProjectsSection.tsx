
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
      title: "Dashboard de Vendas",
      description: "Dashboard administrativo para visualização e gerenciamento de vendas, com gráficos interativos e análise de dados em tempo real.",
      image: "/images/projects/dashboard.png",
      tags: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
      github: "https://github.com/LucGadelha/sales-dashboard-lg",
      liveDemo: "https://sales-dashboard-lg.vercel.app"
    },
    {
      title: "Sistema de Vistoria",
      description: "Aplicativo para gerenciamento de vistorias com interface intuitiva e resultados detalhados.",
      image: "/images/projects/Vistoria.png",
      tags: ["React", "TypeScript", "Tailwind CSS", "Nest"],
      github: "https://github.com/LucGadelha/sistema-vistoria-proxion",
      liveDemo: "https://sistema-vistoria-proxion-nt.vercel.app"
    },
    {
      title: "Instasany's Landing Page",
      description: "Landing page moderna e responsiva para apresentação de empresa, com design clean e animações suaves.",
      image: "/images/projects/Instasany.png",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/LucGadelha/Instasany-LP",
      liveDemo: "https://instasany-lp.vercel.app"
    },
    {
      title: "Controle de Usuários",
      description: "Aplicativo web para cálculo do Índice de Massa Corporal (IMC) com interface intuitiva e resultados detalhados.",
      image: "/images/projects/imagem_2025-04-07_222309142.png",
      tags: ["React", "JavaScript", "CSS"],
      github: "https://github.com/LucGadelha/user-management",
      liveDemo: "https://user-management-one-dun.vercel.app"
    },
    {
      title: "Lista de Tarefas",
      description: "Aplicativo de gerenciamento de tarefas com funcionalidades de adicionar, editar, marcar como concluído e excluir tarefas.",
      image: "/images/projects/Todo.png",
      tags: ["React", "TypeScript", "CSS"],
      github: "https://github.com/LucGadelha/Lista-de-Tarefas",
      liveDemo: "https://github.com/LucGadelha/todo-gipyo"
    },
    {
      title: "Portfolio Pool Landing",
      description: "Portfólio profissional moderno com tema escuro/claro, animações suaves e design responsivo, desenvolvido com as mais recentes tecnologias web.",
      image: "/images/projects/Portfolio.png",
      tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      github: "https://github.com/LucGadelha/portfolio-pool-landing",
      liveDemo: "https://portfolio-lucas-gadelha.vercel.app"
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
