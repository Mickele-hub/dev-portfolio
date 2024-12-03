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
      className="bg-gray-800 p-4 sm:p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
    >
      <div className="flex items-center mb-4">
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500 mr-2" />
        <h3 className="text-lg sm:text-xl font-semibold text-white">{title}</h3>
      </div>
      <ul className="space-y-2 sm:space-y-3">
        {skills.map((skill: string, index: number) => (
          <motion.li
            key={index}
            className="text-gray-300 flex items-center p-2 rounded-md hover:bg-gray-700 transition-all duration-300 text-sm sm:text-base"
            whileHover={{ x: 10 }}
          >
            <span className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 flex items-center">
              {getSkillIcon(skill)}
            </span>
            {skill}
          </motion.li>
        ))}
      </ul>
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
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
          Compétences
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <SkillCategory
              key={category.title}
              {...category}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;