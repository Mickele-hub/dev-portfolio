import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative py-16 sm:py-20 bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900 overflow-hidden">
      {/* Cercles décoratifs */}
      <div className="absolute top-10 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
      <div className="absolute bottom-10 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
          Contact
        </h2>
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative bg-gray-800/80 backdrop-blur-lg rounded-lg p-6 sm:p-8 shadow-2xl border border-gray-700"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-red-500/10 rounded-lg" />
            <div className="relative space-y-4 sm:space-y-6">
              <motion.div 
                className="flex items-center space-x-4"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a 
                  href="https://wa.me/261389215928" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 sm:space-x-4 w-full group"
                >
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 sm:p-3 rounded-full shadow-lg group-hover:shadow-purple-500/50 transition-shadow">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">WhatsApp</h3>
                    <p className="text-sm sm:text-base text-gray-300">+261389215928</p>
                  </div>
                </a>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-4"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a 
                  href="mailto:andrianarivonymickele2@gmail.com"
                  className="flex items-center space-x-3 sm:space-x-4 w-full group"
                >
                  <div className="bg-gradient-to-r from-pink-500 to-red-500 p-2 sm:p-3 rounded-full shadow-lg group-hover:shadow-pink-500/50 transition-shadow">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-pink-400 transition-colors">Email</h3>
                    <p className="text-sm sm:text-base text-gray-300 break-all">andrianarivonymickele2@gmail.com</p>
                  </div>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;