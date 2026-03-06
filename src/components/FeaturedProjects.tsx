import React from "react";
import { motion } from "framer-motion";

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
    <section id="projects" className="relative py-16 px-4 md:px-16 bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900">
      {/* Effet décoratif similaire à Hero */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>
      <h2 className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">Mes projets</h2>
      <div className="relative z-10 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="bg-gray-800/80 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center overflow-hidden border border-gray-700 backdrop-blur-sm"
          >
            <div className="flex justify-center items-center w-full bg-transparent pt-6">
              <img
                src={project.image}
                alt={project.title}
                className="object-contain mx-auto"
              />
            </div>
            <div className="w-full p-6 flex flex-col justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white drop-shadow">{project.title}</h3>
                <p className="mb-4 text-gray-300">{project.description}</p>
                <div className="mb-4">
                  <span className="font-medium text-purple-400">Stack:</span>
                  <ul className="flex flex-wrap gap-2 mt-2">
                    {project.stack.map((tech, i) => (
                      <li
                        key={i}
                        className="bg-purple-900/40 px-3 py-1 rounded-full text-sm text-purple-200 border border-purple-700"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:to-red-600 text-white font-semibold px-5 py-2 rounded-lg transition-colors duration-200 text-center shadow-md"
              >
                Voir le projet
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
