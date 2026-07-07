import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Zap, Target, Users } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Code,
      title: "Développement Fullstack",
      description: "Expertise en React, Next.js, Node.js et Django pour créer des applications web complètes et performantes."
    },
    {
      icon: Zap,
      title: "Performance Optimisée",
      description: "Focus sur l'optimisation des performances, l'accessibilité et l'expérience utilisateur pour des applications rapides."
    },
    {
      icon: Target,
      title: "Solutions Innovantes",
      description: "Approche créative pour transformer des idées complexes en solutions élégantes et efficaces."
    },
    {
      icon: Users,
      title: "Collaboration Agile",
      description: "Expérience de travail en équipe avec des méthodologies agiles pour livrer des projets de qualité."
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-32 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm font-medium mb-4"
          >
            À propos de moi
          </motion.span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
              Qui suis-je ?
            </span>
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

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
              className="group relative p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;