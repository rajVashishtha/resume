import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
// Import necessary Lucide Icons
import {
  Code, // JS, General
  Layers, // HTML/CSS
  MousePointerClick, // JQuery
  Rocket, // Vercel
  Atom, // React
  ArrowBigRight, // Redux
  Palette, // MUI
  Brush, // Styled CSS / General CSS
  Cloud,
  ChevronDown, // Used for the expand/collapse indicator
} from 'lucide-react';

// --- Skill Definitions for Projects (Must match tags in DATA) ---
const SKILL_MAP: Record<string, any> = {
  'HTML': { Icon: Layers, color: 'text-orange-500' },
  'CSS': { Icon: Layers, color: 'text-blue-500' },
  'JS': { Icon: Code, color: 'text-yellow-400' },
  'JQuery': { Icon: MousePointerClick, color: 'text-blue-600' },
  'Vercel': { Icon: Rocket, color: 'text-white' },
  'React': { Icon: Atom, color: 'text-sky-400' },
  'Redux': { Icon: ArrowBigRight, color: 'text-purple-500' },
  'MUI': { Icon: Palette, color: 'text-sky-500' },
  'Styled CSS': { Icon: Brush, color: 'text-pink-500' },
  'Heroku': { Icon: Cloud, color: 'text-purple-600' },
};

// --- Reusable SkillBadge Component ---
const SkillBadge = ({ skillName }: { skillName: string }) => {
  const skill = SKILL_MAP[skillName] || { Icon: Code, color: 'text-gray-400' };

  return (
    <div className="flex items-center space-x-1 bg-gray-700/50 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap">
      <skill.Icon className={`w-3 h-3 ${skill.color}`} strokeWidth={2.5} />
      <span className="text-gray-100">{skillName}</span>
    </div>
  );
};

// --- Project Data ---
const DATA = [
  {
    id: 'algo',
    title: 'Algo Visualiser',
    short: 'Interactive sorting & searching algorithm visualizer.',
    long: `Created an interactive visual app illustrating sorting/search operations and improved user comprehension and engagement. Optimized frontend performance for real-time demos.`,
    tags: ['HTML', 'CSS', 'JS', 'JQuery', 'Vercel']
  },
  {
    id: 'boond',
    title: 'Boond — Blood Bank Coordination',
    short: 'Platform to coordinate blood banks and hospitals.',
    long: `Built a responsive frontend (React, Redux, Material UI) and integrated APIs to streamline communication and reduce manual effort in resource management.`,
    tags: ['React', 'Redux', 'MUI', 'Styled CSS', 'Heroku']
  }
];

// --- Projects Component ---
export default function Projects() {
  const [open, setOpen] = useState<string | null>(null);

  const NEON_BLUE = 'rgb(0, 191, 255)';
  const glowStyle = {
    boxShadow: `0 0 20px ${NEON_BLUE}`
  };

  const baseStyle = {
    boxShadow: '0 0 0px rgba(0, 0, 0, 0)',
  };

  return (
    <section id="projects" className="space-y-6">
      <h2 className="text-3xl font-bold text-white">Projects</h2>

      <div className="grid gap-4">
        {DATA.map(p => (
          <motion.div 
            layout 
            key={p.id} 
            className="card bg-gray-900 border border-gray-800 p-5 rounded-xl cursor-pointer"
            onClick={() => setOpen(open === p.id ? null : p.id)}
            initial={baseStyle}
            whileHover={{ scale: 1.02, backgroundColor: '#1F2937', ...glowStyle }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            {/* NEW STRUCTURE: Combined title, description, and arrow */}
            <div className="flex justify-between items-center mb-3">
              {/* Left side: Title and Short Description */}
              <div className="flex-1 min-w-0 pr-4">
                <h3 className="font-semibold text-lg text-white">{p.title}</h3>
                <p className="text-sm text-gray-400 mt-1">{p.short}</p>
              </div>

              {/* Right side: Expand/Collapse Arrow */}
              <ChevronDown 
                className={`w-6 h-6transition-transform duration-300 ${open === p.id ? 'rotate-180' : 'rotate-0'}`} 
              />
            </div>
            
            {/* SKILL BADGE ROW */}
            <div className="flex flex-wrap gap-2">
              {p.tags.map(tag => (
                <SkillBadge key={tag} skillName={tag} />
              ))}
            </div>
            {/* END SKILL BADGE ROW */}

            <AnimatePresence>
              {open === p.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="mt-4 text-sm text-gray-300 overflow-hidden"
                >
                  {p.long}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  )
}