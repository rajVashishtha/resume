import { motion } from 'framer-motion';

// Import necessary icons from lucide-react
import {
  Code, // General programming
  Type, // TypeScript
  Terminal, // Backend / Shell
  Database, // SQL
  Atom, // React
  ArrowBigRight, // Redux
  Globe, // Next.js
  Square, // Angular
  Brush, // Tailwind / CSS
  Palette, // MUI
  Server, // Node.js / Express / NEST.js
  Bot, // Flask / Django
  Zap, // GoLang / gRPC
  Cloud, // AWS / Docker / Kubernetes
  Workflow, // Jenkins / TeamCity / Airflow
  Bug, // Testing (Cypress / Jest)
  GitBranch, // Git
  ClipboardCheck, // JIRA
} from 'lucide-react';

// --- 1. Structured Skills Data ---
const categorizedSkills = {
  'Programming Languages': [
    { name: 'JavaScript', Icon: Code, color: 'text-yellow-400' },
    { name: 'TypeScript', Icon: Type, color: 'text-blue-500' },
    { name: 'Python', Icon: Code, color: 'text-sky-600' },
    { name: 'Java', Icon: Terminal, color: 'text-red-600' },
    { name: 'C/C++', Icon: Terminal, color: 'text-blue-700' },
    { name: 'GoLang', Icon: Zap, color: 'text-cyan-500' },
    { name: 'SQL', Icon: Database, color: 'text-amber-500' },
  ],
  'Frontend': [
    { name: 'React.js', Icon: Atom, color: 'text-sky-400' },
    { name: 'Redux', Icon: ArrowBigRight, color: 'text-purple-500' },
    { name: 'Next.js', Icon: Globe, color: 'text-white' },
    { name: 'Angular', Icon: Square, color: 'text-red-500' },
    { name: 'Tailwind', Icon: Brush, color: 'text-cyan-400' },
    { name: 'CSS', Icon: Brush, color: 'text-blue-400' },
    { name: 'MUI', Icon: Palette, color: 'text-sky-500' },
  ],
  'Backend': [
    { name: 'Node.js', Icon: Server, color: 'text-green-500' },
    { name: 'Express', Icon: Server, color: 'text-gray-300' },
    { name: 'Flask', Icon: Bot, color: 'text-white' },
    { name: 'Django', Icon: Bot, color: 'text-green-700' },
    { name: 'NEST.js', Icon: Server, color: 'text-red-500' },
    { name: 'gRPC', Icon: Zap, color: 'text-blue-400' },
  ],
  'Tools & DevOps': [
    { name: 'AWS', Icon: Cloud, color: 'text-orange-500' },
    { name: 'Docker', Icon: Cloud, color: 'text-blue-400' },
    { name: 'Jenkins', Icon: Workflow, color: 'text-yellow-500' },
    { name: 'TeamCity', Icon: Workflow, color: 'text-sky-600' },
    { name: 'Airflow', Icon: Workflow, color: 'text-cyan-600' },
    { name: 'Cypress', Icon: Bug, color: 'text-green-400' },
    { name: 'Jest', Icon: Bug, color: 'text-red-400' },
    { name: 'Git', Icon: GitBranch, color: 'text-orange-600' },
    { name: 'JIRA', Icon: ClipboardCheck, color: 'text-blue-600' },
  ],
};

export default function Skills(){
  // --- 2. Framer Motion Variants ---
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Slight stagger between categories
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <section id="skills" className="space-y-8">
      <h2 className="text-3xl font-bold text-white mb-6">Technical Skills</h2>

      {/* Map over the categories in the skills object */}
      {Object.entries(categorizedSkills).map(([category, skillsList]) => (
        <motion.div 
          key={category}
          variants={containerVariants} // Animate the container of this category
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-4"
        >
          {/* Subheading */}
          <h3 className="text-xl font-semibold text-gray-200 border-b border-gray-700 pb-2 mb-4 mt-4">
            {category}
          </h3>

          {/* Badge Grid for the skills in this category */}
          <div className="flex flex-wrap gap-3">
            {skillsList.map((s) => (
              <motion.div
                key={s.name}
                variants={itemVariants} // Animate the individual badge
                className="flex items-center space-x-2 bg-gray-800/70 backdrop-blur-sm text-white px-4 py-2 rounded-lg shadow-lg border border-gray-700/50 hover:bg-gray-700/80 transition duration-300 ease-in-out cursor-default"
              >
                {/* Lucide Icon */}
                <s.Icon 
                  className={`w-5 h-5 ${s.color}`} 
                  strokeWidth={2.2}
                />
                
                {/* Skill Name */}
                <span className="text-sm font-medium whitespace-nowrap">
                  {s.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </section>
  );
}