import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Import necessary Lucide Icons
import {
  Atom, Cloud, Server, Bug, Zap, Bot, Workflow, Code, ChevronDown,
} from 'lucide-react';

// --- Skill Definitions (Reusing colors from the Skills component) ---
const SKILL_MAP: Record<string, any> = { 
  'React': { Icon: Atom, color: 'text-sky-400' },
  'Docker': { Icon: Cloud, color: 'text-blue-400' },
  'Node.js': { Icon: Server, color: 'text-green-500' },
  'Cypress': { Icon: Bug, color: 'text-green-400' },
  'Flask': { Icon: Bot, color: 'text-white' },
  'gRPC': { Icon: Zap, color: 'text-blue-400' },
  'Airflow': { Icon: Workflow, color: 'text-cyan-600' },
};

// --- Experience Data Structure ---
const experiences = [
  {
    id: 'oracle',
    title: 'Member of Technical Staff — Oracle (Frontend)',
    duration: 'Apr 2022 — Present · Noida',
    skills: ['React', 'Docker', 'Node.js', 'Cypress'],
    description: [
      'Designed and implemented a compliance assessment application, improving regulatory tracking efficiency by ~30%.',
      'Led migration of legacy plugins to a config-based UI, reducing maintenance by ~70% and standardizing the OCI console framework.',
      'Implemented Cypress integration tests (90% coverage), reducing regression risk in releases.',
      'Optimized large file download flow (custom API client) achieving ~25% performance improvement.',
      'Resolved customer-impacting bugs on OCI scanning platform to meet SLAs and reliability goals.',
    ],
  },
  {
    id: 'studypaq',
    title: 'Fullstack Engineer — Studypaq',
    duration: 'Feb 2021 — Apr 2022',
    skills: ['Node.js', 'Flask', 'gRPC', 'Airflow'],
    description: [
      'Led a 5-person team to ship an educational product; improved delivery speed and team collaboration.',
      'Designed Airflow DAG for document-to-HTML conversion reducing processing time by ~70%.',
      'Built microservices (Node/Flask/gRPC) and a Next.js frontend to improve SEO and rendering performance.',
      'Built CI/CD pipelines using Docker & Jenkins; cut deployment time and increased release velocity.',
    ],
  },
];

// --- Reusable SkillBadge Component ---
const SkillBadge = ({ skillName }: {skillName: string}) => {
  const skill = SKILL_MAP[skillName] || { Icon: Code, color: 'text-gray-400' };

  if (!skill) return null;

  return (
    <div className="flex items-center space-x-1 bg-gray-700/50 px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap">
      <skill.Icon className={`w-3 h-3 ${skill.color}`} strokeWidth={2.5} />
      <span className="text-gray-100">{skillName}</span>
    </div>
  );
};

// --- Main Experience Component ---
export default function Experience(){
  const [open, setOpen] = useState<string | null>(null);

  // Define the neon blue color and shadow for the glow effect
  const NEON_BLUE = 'rgb(0, 191, 255)'; 
  const glowStyle = {
    boxShadow: `0 0 20px ${NEON_BLUE}` 
  };
  // Define the style for when the glow is off (on hover out)
  const baseStyle = {
    boxShadow: '0 0 0px rgba(0, 0, 0, 0)',
  };

  return (
    <section id="experience" className="space-y-6">
      <h2 className="text-3xl font-bold text-white">Experience</h2>
      
      {experiences.map((exp, index) => {
        const isOpen = open === exp.id;

        return (
          <motion.div 
            key={exp.id}
            initial={{ opacity: 0, y: 15 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div 
              layout 
              className="card bg-gray-900 border border-gray-800 p-6 rounded-xl shadow-2xl cursor-pointer"
              onClick={() => setOpen(isOpen ? null : exp.id)}
              
              // Apply initial and whileHover styles for the glow
              initial={baseStyle}
              whileHover={{ 
                scale: 1.02, 
                backgroundColor: '#1F2937', 
                ...glowStyle 
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg text-white">{exp.title}</h3>
                  <p className="text-sm text-gray-400 mb-3">{exp.duration}</p>
                </div>
                
                {/* FIX: Increased size (w-6 h-6) and changed color to neon blue (text-blue-400) */}
                <ChevronDown className={`w-6 h-6 text-blue-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
              </div>

              <div className="flex flex-wrap gap-2 mt-2">
                {exp.skills.map(skill => (
                  <SkillBadge key={skill} skillName={skill} />
                ))}
              </div>

              <AnimatePresence>
                {isOpen && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="mt-4 text-sm text-gray-300 list-disc pl-5 space-y-2 overflow-hidden"
                  >
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        );
      })}
    </section>
  );
}