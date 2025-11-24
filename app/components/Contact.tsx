import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react'; // Import icons for contact methods

// Define the neon blue color and shadow for consistency
const NEON_BLUE = 'rgb(0, 191, 255)'; 
const glowStyle = {
  boxShadow: `0 0 15px ${NEON_BLUE}` // Slightly smaller glow for subtle links
};
const baseStyle = {
  boxShadow: '0 0 0px rgba(0, 0, 0, 0)',
};

// Data structure for the links
const contactLinks = [
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:vashiraj2000@gmail.com',
    handle: 'vashiraj2000@gmail.com',
    color: 'text-red-400',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/raj-vashisht',
    handle: '/in/raj-vashisht',
    color: 'text-blue-500',
  },
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/rajVashishtha',
    handle: '/rajVashishtha',
    color: 'text-white',
  },
];

export default function Contact(){
  return (
    <section id="contact" className="space-y-6">
      <h2 className="text-3xl font-bold text-white">Get In Touch</h2>

      <p className="text-gray-400 mb-6 flex items-center space-x-2">
        <Send className="w-5 h-5 text-blue-400" />
        <span>I'm currently open to new opportunities. Let's connect!</span>
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {contactLinks.map((link, index) => (
          <motion.a 
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-gray-900 border border-gray-800 rounded-xl transition-colors duration-200 group"
            
            // Framer Motion for glow and scale
            initial={baseStyle}
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: '#1F2937', 
              ...glowStyle 
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 25, delay: index * 0.05 }}
          >
            {/* Icon */}
            <link.icon className={`w-8 h-8 mb-3 ${link.color} group-hover:animate-pulse`} strokeWidth={2} />
            
            {/* Name */}
            <p className="font-semibold text-white text-lg">{link.name}</p>
            
            {/* Handle/Link */}
            <p className="text-sm text-gray-400 mt-1 truncate max-w-full">
              {link.handle}
            </p>
          </motion.a>
        ))}
      </div>
    </section>
  )
}