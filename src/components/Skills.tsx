import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Database, Server, Code, Layout } from 'lucide-react';
import { 
  FaReact, 
  FaNodeJs, 
  FaGitAlt
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiDjango, 
  SiFirebase, 
  SiMongodb, 
  SiPostgresql,
  SiJest
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

interface SkillCategoryProps {
  title: string;
  skills: string[];
  icon: React.ElementType;
  delay?: number;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, icon: Icon, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getSkillIcon = (skillName: string): JSX.Element => {
    const icons: { [key: string]: JSX.Element } = {
      "React": <FaReact className="text-[#61DAFB]" />,
      "TypeScript": <SiTypescript className="text-[#3178C6]" />,
      "Node.js": <FaNodeJs className="text-[#339933]" />,
      "Django": <SiDjango className="text-[#092E20]" />,
      "Firebase": <SiFirebase className="text-[#FFCA28]" />,
      "MongoDB": <SiMongodb className="text-[#47A248]" />,
      "PostgreSQL": <SiPostgresql className="text-[#336791]" />,
      "Git": <FaGitAlt className="text-[#F05032]" />,
      "VS Code": <VscCode className="text-[#007ACC]" />,
    };
    return icons[skillName] || <span className="w-2 h-2 bg-purple-500 rounded-full" />;
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="group relative bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        <ul className="space-y-3">
          {skills.map((skill: string, index: number) => (
            <motion.li
              key={index}
              className="text-gray-300 flex items-center p-3 rounded-xl hover:bg-gray-700/50 transition-all duration-300 text-sm sm:text-base group/skill"
              whileHover={{ x: 8 }}
            >
              <span className="w-6 h-6 mr-3 flex items-center group-hover/skill:scale-110 transition-transform duration-300">
                {getSkillIcon(skill)}
              </span>
              <span className="group-hover/skill:text-white transition-colors">{skill}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const categories = [
    {
      title: "Frontend",
      icon: Layout,
      skills: ["React", "TypeScript", "Responsive Design", "Modern UI/UX"],
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Node.js", "Django", "Firebase"],
    },
    {
      title: "Base de données",
      icon: Database,
      skills: ["MongoDB", "PostgreSQL"],
    },
    {
      title: "Outils & Autres",
      icon: Code,
      skills: ["Git", "VS Code"],
    },
  ];

  return (
    <section id="skills" className="py-20 sm:py-32 bg-gradient-to-b from-gray-900 to-gray-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm font-medium mb-4">
            Mes compétences
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
            Technologies & Outils
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <SkillCategory
              key={category.title}
              {...category}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;