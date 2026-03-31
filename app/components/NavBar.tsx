'use client'

import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { Download } from 'lucide-react'
import { useState } from 'react'
import { profile, resumeFile } from '@/app/data/resume'

const navLinks = [
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#credentials', label: 'Credentials' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export default function NavBar() {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 24)
  })

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`mx-auto mt-4 flex max-w-6xl items-center justify-between gap-4 rounded-[28px] px-4 py-3 transition-all duration-300 sm:px-5 ${
          isScrolled
            ? 'border border-white/10 bg-[#121417]/88 shadow-[0_16px_60px_rgba(0,0,0,0.38)] backdrop-blur-2xl'
            : 'border border-transparent bg-transparent'
        }`}
      >
        <a href="#hero" className="flex min-w-0 items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-amber-100/20 bg-amber-100/10 text-sm font-semibold text-stone-50">
            RV
          </div>
          <div className="min-w-0">
            <p className="font-code text-[11px] uppercase tracking-[0.28em] text-stone-400">Resume site</p>
            <p className="truncate text-sm font-semibold text-stone-50 sm:text-base">{profile.name}</p>
          </div>
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-black/20 p-1 backdrop-blur lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-stone-300 transition hover:bg-white/[0.04] hover:text-amber-50"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={resumeFile}
          download
          className="inline-flex items-center gap-2 rounded-2xl border border-amber-100/15 bg-amber-100/10 px-4 py-2 text-sm font-semibold text-amber-50 transition hover:-translate-y-0.5 hover:bg-amber-100 hover:text-zinc-950"
        >
          <span className="hidden sm:inline">Download resume</span>
          <span className="sm:hidden">Resume</span>
          <Download className="h-4 w-4" />
        </a>
      </div>
    </motion.header>
  )
}
