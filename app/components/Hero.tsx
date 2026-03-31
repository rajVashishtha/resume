'use client'

import { motion, type Variants } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'
import { profile, resumeFile } from '@/app/data/resume'

const quickLinks = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: '/in/vashiraj2000',
    href: profile.linkedIn,
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    value: '/vashiraj2000',
    href: profile.github,
    icon: Github,
  },
] as const

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.12,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: 'easeOut',
    },
  },
}

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center scroll-mt-28 pt-28">
      <div className="grid w-full items-center gap-12 lg:grid-cols-[1.12fr_0.88fr]">
        <motion.div variants={containerVariants} initial="hidden" animate="show" className="space-y-8">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-3 rounded-full border border-amber-100/15 bg-amber-100/10 px-4 py-2">
            <span className="h-2.5 w-2.5 rounded-full bg-amber-200 shadow-[0_0_16px_rgba(251,191,36,0.4)]" />
            <span className="font-code text-xs uppercase tracking-[0.28em] text-stone-200/90">
              Currently building at {profile.currentCompany}
            </span>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-5">
            <p className="font-code text-xs uppercase tracking-[0.34em] text-stone-400">
              Fullstack engineer / cloud platforms / AI workflows
            </p>

            <div className="space-y-2">
              <h1 className="font-display text-6xl leading-[0.92] text-stone-50 sm:text-7xl lg:text-[5.4rem]">
                Raj{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">Vashisht</span>
                  <span className="absolute inset-x-1 bottom-3 h-3 rounded-full bg-amber-100/20" />
                </span>
              </h1>
              <p className="max-w-2xl text-xl font-semibold tracking-tight text-stone-200">
                Building dependable interfaces, distributed systems, and AI-assisted products with measurable product impact.
              </p>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-stone-300">{profile.summary}</p>
            <p className="max-w-2xl text-base leading-7 text-stone-400">{profile.focus}</p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-2xl bg-stone-100 px-6 py-3 text-sm font-semibold text-[#111111] transition hover:-translate-y-0.5 hover:bg-white"
            >
              <span className="text-[#111111]">View projects</span>
              <ArrowRight className="h-4 w-4 text-[#111111]" />
            </a>

            <a
              href={resumeFile}
              download
              className="inline-flex items-center gap-2 rounded-2xl border border-amber-100/15 bg-amber-100/10 px-6 py-3 text-sm font-semibold text-amber-50 transition hover:-translate-y-0.5 hover:bg-amber-100 hover:text-zinc-950"
            >
              Download resume
              <Download className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="grid gap-3 sm:grid-cols-3">
            {quickLinks.map((link) => {
              const Icon = link.icon
              const isExternal = link.href.startsWith('http')

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noreferrer' : undefined}
                  className="panel flex items-center gap-4 p-4 hover:-translate-y-0.5"
                >
                  <div className="rounded-2xl border border-amber-100/15 bg-amber-100/10 p-3 text-stone-50">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-code text-[11px] uppercase tracking-[0.28em] text-stone-400">{link.label}</p>
                    <p className="truncate text-sm text-stone-300">{link.value}</p>
                  </div>
                </a>
              )
            })}
          </motion.div>

          <motion.div variants={itemVariants} className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {profile.stats.map((stat) => (
              <div key={stat.label} className="panel p-5">
                <p className="font-display text-4xl font-semibold leading-none text-stone-50">{stat.value}</p>
                <p className="mt-3 text-sm leading-6 text-stone-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="relative mx-auto w-full max-w-[430px]"
        >
          <div className="absolute inset-x-6 top-12 h-48 rounded-full bg-amber-100/12 blur-3xl" />

          <div className="absolute -right-2 top-10 hidden rounded-2xl border border-amber-100/15 bg-[rgba(24,27,32,0.92)] px-4 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.28)] sm:block">
            <p className="font-code text-[10px] uppercase tracking-[0.3em] text-stone-400">Distributed scale</p>
            <p className="mt-1 text-lg font-semibold text-stone-50">10k+ agents</p>
          </div>

          <div className="absolute -left-3 bottom-14 hidden rounded-2xl border border-amber-100/15 bg-[rgba(24,27,32,0.92)] px-4 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.28)] sm:block">
            <p className="font-code text-[10px] uppercase tracking-[0.3em] text-stone-400">Product impact</p>
            <p className="mt-1 text-lg font-semibold text-stone-50">30% better tracking</p>
          </div>

          <div className="panel overflow-hidden p-4 sm:p-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-white/10 bg-[#101216]">
              <Image
                src="/profile_pic.jpg"
                alt={profile.name}
                fill
                priority
                sizes="(min-width: 1024px) 420px, (min-width: 640px) 70vw, 90vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            <div className="grid gap-3 pt-4 sm:grid-cols-2">
              <div className="rounded-[22px] border border-white/10 bg-black/20 p-4">
                <p className="font-code text-[10px] uppercase tracking-[0.3em] text-stone-400">Current role</p>
                <p className="mt-2 text-lg font-semibold text-stone-50">{profile.title}</p>
                <p className="text-sm text-stone-400">
                  {profile.currentCompany} / {profile.location}
                </p>
              </div>

              <div className="rounded-[22px] border border-white/10 bg-black/20 p-4">
                <p className="font-code text-[10px] uppercase tracking-[0.3em] text-stone-400">Core stack</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {profile.specialties.slice(0, 4).map((skill) => (
                    <span key={skill} className="chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
