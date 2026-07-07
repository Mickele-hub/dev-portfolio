import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  stack: string[];
  link: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Portfolio Dev",
    description: "Un portfolio moderne et responsive développé avec Next.js, Tailwind CSS et Vite, qui présente mes compétences et mes projets.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vite"],
    link: "https://dev-portfolio-mickele.vercel.app",
    image: "/image/dev.png",
  },
  {
    title: "Portfolio Admin",
    description: "Administrateur Système et Réseau passionné par l’infrastructure informatique, la cybersécurité et l’automatisation. Ce portfolio présente mes projets, mes compétences techniques et les solutions que j’ai mises en place dans les domaines des systèmes, des réseaux et de la sécurité.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vite"],
    link: "https://mickele-admin.vercel.app",
    image: "/image/admin.png",
  },
  {
    title: "Gestion stock médicament",
    description: "Une application de gestion de stock pour une pharmacie, permettant de suivre les entrées et sorties de médicaments.",
    stack: ["Next.js", "NestJS", "Tailwind CSS", "PostgreSQL"],
    link: "https://github.com/Mickele-hub/Front-IHM",
    image: "/image/ihm.png",
  },
  {
    title: "Chat App",
    description: "Application de chat en temps réel permettant aux utilisateurs de communiquer instantanément, d’envoyer des messages et de rester connectés facilement.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
    link: "https://realchatvone.vercel.app",
    image: "/image/chat.png",
  },
];

const FeaturedProjects: React.FC = () => {
  return (
    <section id="projects" className="py-20 sm:py-32 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm font-medium mb-4">
            Mes réalisations
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
            Projets Récents
          </h2>
        </motion.div>
        
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative p-6">
                {/* Project image */}
                <div className="relative mb-6 rounded-xl overflow-hidden bg-gray-900/50 group-hover:bg-gray-900/30 transition-colors duration-300">
                  <div className="aspect-video flex items-center justify-center p-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-contain max-h-full max-w-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Project content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div>
                    <span className="text-sm font-medium text-purple-400 mb-2 block">Stack technique:</span>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-sm text-purple-300 hover:bg-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 group-hover:scale-105"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Voir le projet
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
