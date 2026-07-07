import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/stars.png')] opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
      </div>
      
      {/* Enhanced decorative blobs with more vibrant colors */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
      
      {/* Additional floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-1000" />
      <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-cyan-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-3000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-white text-center md:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4"
          >
            <span className="inline-block px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium backdrop-blur-sm">
              👋 Bienvenue sur mon portfolio
            </span>
          </motion.div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
              Bonjour, je suis
            </span>
            <br />
            <span className="text-white">Mickele</span>
          </h1>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl md:text-3xl mb-6 text-gray-300"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Développeur Fullstack
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-400 text-lg mb-8 max-w-lg"
          >
            Passionné par la création d'expériences numériques exceptionnelles et innovantes.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center"
          >
            <a
              href="#projects"
              className="group relative px-8 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <span className="relative z-10 flex items-center gap-2">
                Voir mes projets
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            
            <div className="flex gap-4">
              <a 
                href="https://github.com/Mickele-hub" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-gray-800/50 border border-gray-700 rounded-full text-gray-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 backdrop-blur-sm"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/mickele-andrianarivony-a43474308/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-gray-800/50 border border-gray-700 rounded-full text-gray-400 hover:text-white hover:border-pink-500/50 hover:bg-pink-500/10 transition-all duration-300 backdrop-blur-sm"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mt-8 md:mt-0 px-4 sm:px-0"
        >
          <div className="relative max-w-[350px] mx-auto">
            {/* Enhanced glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full animate-pulse filter blur-2xl opacity-50"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/30 to-gray-900 rounded-full"></div>
            
            {/* Rotating border effect */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full"
            >
              <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-purple-500 border-r-pink-500 border-b-red-500" />
            </motion.div>
            
            <img
              src="/image/photo(1)(1).png"
              alt="Profile"
              className="relative rounded-full w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 object-cover mx-auto border-4 border-white/20 backdrop-blur-sm"
            />
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-purple-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;