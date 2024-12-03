import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
            À Propos
          </h2>
          <div className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed">
            <p className="mb-6">
              Passionné par la création d'expériences numériques exceptionnelles, je suis un développeur 
              Fullstack qui transforme des idées en solutions innovantes. Avec une expertise approfondie 
              dans les technologies modernes du web, je m'efforce de créer des applications performantes, 
              évolutives et centrées sur l'utilisateur.
            </p>
            <p>
              Ma passion pour l'apprentissage continu et mon engagement envers l'excellence technique 
              me permettent de rester à la pointe des dernières avancées technologiques. Je suis toujours 
              prêt à relever de nouveaux défis et à collaborer sur des projets passionnants.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;