import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900">
      {/* Effet de particules/étoiles en arrière-plan */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/stars.png')] opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
      </div>
      
      {/* Cercles décoratifs flous */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-white text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
              Bonjour, je suis Mickele
            </span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl mb-6 text-gray-300">
            Développeur Fullstack
          </h2>
          <div className="flex space-x-4 justify-center md:justify-start">
            <a 
              href="https://github.com/Mickele-hub" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/mickele-andrianarivony-a43474308/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mt-8 md:mt-0 px-4 sm:px-0"
        >
          <div className="relative max-w-[300px] mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full animate-pulse filter blur-xl opacity-70"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/30 to-gray-900 rounded-full"></div>
            <img
              src="/image/photo(1)(1).png"
              alt="Profile"
              className="relative rounded-full w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover mx-auto border-4 border-white"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;