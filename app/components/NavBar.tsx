import { Download, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Define the navigation links
const navLinks = [
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#awards', label: 'Awards' },
  { href: '#contact', label: 'Contact' },
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700/50 shadow-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        
        {/* --- 1. Brand/Name (Left Side) --- */}
        <a href="#" className="text-xl font-bold text-white tracking-wider hover:text-blue-400 transition-colors duration-300">
          Raj Vashisht
        </a>

        {/* --- 2. Navigation Links (Center) --- */}
        <nav className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm text-gray-300 font-medium rounded-md transition-all duration-300 hover:text-white hover:bg-gray-800/50 hover:shadow-lg hover:shadow-blue-500/10"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* --- 3. Resume & Actions (Right Side) --- */}
        <nav className="flex items-center gap-4">
          
          {/* Resume Download Button (Primary Action) */}
          <motion.a 
            href="/raj_vashisht's_resume.pdf" // Ensure this path is correct
            download // Allows modern browsers to download the file directly
            className="flex items-center gap-1.5 px-4 py-2 text-sm rounded-full bg-blue-600 text-white font-semibold transition-all duration-300 border border-blue-600"
            
            // Neon Hover Effect
            whileHover={{ 
                scale: 1.05, 
                backgroundColor: '#2563EB', // A slightly different blue on hover
                boxShadow: '0 0 12px rgb(0, 191, 255)' 
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <span className="hidden sm:inline">Download CV</span>
            <Download className="w-4 h-4" />
          </motion.a>

          {/* Simple Contact Button for smaller screens (optional) */}
          <a href="#contact" className="lg:hidden px-3 py-1 text-sm text-blue-400 border border-blue-400 rounded-md hover:bg-blue-400/20">
             Contact
          </a>

        </nav>
      </div>
    </header>
  )
}