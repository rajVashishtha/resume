import { motion } from 'framer-motion';
import { Award, Star } from 'lucide-react'; // Using the Award and Star icons

// --- Awards and Certifications Data ---
const awardsData = [
  {
    icon: Award, // Lucide Award icon
    name: 'Employee Recognition Award, Oracle',
    description: 'Initiative in building the new UI framework (MAUI).',
    color: 'text-yellow-400',
  },
  {
    icon: Star, // Lucide Star icon
    name: 'Hacknovate 2.0, ABESIT',
    description: '3rd Prize Winner at National Hackathon.',
    color: 'text-sky-400',
  },
  {
    icon: Award,
    name: 'Coding Competition, 1st Prize',
    description: 'Algorithmic Problem Solving.',
    color: 'text-yellow-500',
  },
  {
    icon: Star,
    name: 'React Professional Certificate',
    description: 'Hackerrank.',
    color: 'text-green-500',
  },
];

export default function AwardsAndCertifications(){
  // Framer Motion variants for a staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delay between each award item
      },
    },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    show: { x: 0, opacity: 1 },
  };

  return (
    <section id="awards" className="space-y-6">
      <h2 className="text-3xl font-bold text-white">Awards & Certifications</h2>

      <motion.div
        className="space-y-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {awardsData.map((award, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex items-start p-4 bg-gray-800/70 border-l-4 border-l-yellow-500 rounded-lg shadow-xl"
            
          >
            {/* Icon */}
            <award.icon className={`w-6 h-6 mr-4 flex-shrink-0 ${award.color}`} strokeWidth={2.5} />

            {/* Content */}
            <div>
              <p className="font-semibold text-white">{award.name}</p>
              <p className="text-sm text-gray-400 mt-1">{award.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}