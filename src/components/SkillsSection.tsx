
import React from 'react';
import { Code, PenTool, Layout, Database, Sparkles, LineChart } from 'lucide-react';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SkillCard = ({ icon, title, description }: SkillCardProps) => (
  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
    <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const SkillsSection = () => {
  const skills = [
    {
      icon: <Code size={24} />,
      title: "Desenvolvimento Front-end",
      description: "HTML, CSS, JavaScript, React.js, Vue.js, e outras tecnologias modernas para criar interfaces interativas."
    },
    {
      icon: <Layout size={24} />,
      title: "UI/UX Design",
      description: "Criação de interfaces intuitivas e atraentes focadas na experiência do usuário."
    },
    {
      icon: <Database size={24} />,
      title: "Desenvolvimento Back-end",
      description: "Node.js, Express, SQL, MongoDB e outros para criar APIs e serviços robustos."
    },
    {
      icon: <PenTool size={24} />,
      title: "Design Responsivo",
      description: "Layouts adaptáveis que funcionam perfeitamente em todos os dispositivos e tamanhos de tela."
    },
    {
      icon: <Sparkles size={24} />,
      title: "Animações e Interações",
      description: "Criação de animações fluidas e interações que enriquecem a experiência do usuário."
    },
    {
      icon: <LineChart size={24} />,
      title: "SEO & Performance",
      description: "Otimização para mecanismos de busca e performance para garantir sites rápidos e bem posicionados."
    }
  ];

  return (
    <section id="habilidades" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Minhas <span className="text-blue-600">Habilidades</span>
          </h2>
          <p className="text-gray-600">
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
