import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import Image from "next/image";
import ProfilePic from "../../public/profile_pic.jpg";

export default function Hero() {
  // Define animation for the primary text block
  const textVariants = {
    hidden: { opacity: 0, x: -24 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  // Define animation for the secondary/image block
  const visualVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.2 } },
  };

  return (
    <section className="grid md:grid-cols-3 gap-10 items-center py-12">
      
      {/* --- VISUAL COLUMN (Now uses order-first on mobile, order-last on desktop) --- 
      */}
      <motion.div
        className="md:col-span-1 flex justify-center md:justify-end order-first md:order-last"
        variants={visualVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="w-full max-w-xs aspect-square bg-gray-800 border-4 border-blue-400 rounded-full overflow-hidden relative shadow-2xl shadow-blue-400/40">
          {/* Ensure Image component has fill or defined height/width if not using the wrapper div dimensions */}
          <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm">
            <Image src={ProfilePic} alt='Profile picture' layout="fill" objectFit="cover" />
          </div>
        </div>
      </motion.div>

      {/* --- TEXT COLUMN (Now uses order-last on mobile, order-first on desktop) --- 
      */}
      <motion.div
        className="md:col-span-2 space-y-4 order-last md:order-first"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Primary Heading */}
        <h1 className="text-6xl font-extrabold leading-tight text-white tracking-tighter">
          Hi, I'm <span className="text-blue-400 drop-shadow-lg shadow-blue-400">Raj Vashisht</span>
        </h1>
        
        {/* Sub-heading / Elevator Pitch (HIGHLIGHTING FIXED) */}
        <p className="text-xl font-medium text-gray-300">
          <span className="font-bold text-white">Fullstack Software Engineer</span> building <span className="font-bold text-white">scalable, high-performance cloud applications</span>.
        </p>

        {/* Detailed Summary (HIGHLIGHTING FIXED) */}
        <p className="mt-2 text-lg text-gray-400 max-w-2xl">
          Expertise in crafting clean UIs and optimizing frontend performance using <span className="font-bold text-white">React</span>, while designing and implementing robust backend solutions with <span className="font-bold text-white">TypeScript</span>, <span className="font-bold text-white">Node.js</span>, and databases. Skilled in cloud-native practices, DevOps tools, and automation testing, with a proven track record of delivering measurable business outcomes and enhancing user experience across the entire stack.
        </p>

        {/* Action Buttons */}
        <div className="flex space-x-4 pt-4">
          
          {/* Contact Button */}
          <a 
            href="#contact" 
            className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-500 transition duration-300 transform hover:scale-105"
          >
            <span>Let's Connect</span>
            <ArrowRight className="w-5 h-5" />
          </a>

          {/* Resume Download Button */}
          <a 
            href="/raj_vashisht's_resume.pdf" // Update this path!
            download
            className="flex items-center space-x-2 px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-600 transition duration-300 transform hover:scale-105"
          >
            <span>Download CV</span>
            <Download className="w-5 h-5" />
          </a>
        </div>
      </motion.div>

    </section>
  )
}