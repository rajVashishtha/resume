'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, Mail, Phone } from 'lucide-react'
import { profile, resumeFile } from '@/app/data/resume'

const contactMethods = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: 'Phone',
    value: profile.phone,
    href: profile.phoneHref,
    icon: Phone,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/vashiraj2000',
    href: profile.linkedIn,
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    value: 'github.com/vashiraj2000',
    href: profile.github,
    icon: Github,
  },
] as const

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-28 pb-8">
      <motion.div
        className="panel relative overflow-hidden px-6 py-10 sm:px-10 sm:py-12"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.45 }}
      >
        <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-amber-100/10 blur-3xl" />

        <div className="mx-auto max-w-3xl text-center">
          <p className="font-code text-xs uppercase tracking-[0.34em] text-stone-400">06 / Contact</p>
          <h2 className="font-display mt-4 text-5xl font-semibold text-stone-50">Let&apos;s connect</h2>
          <p className="mt-5 text-base leading-8 text-stone-300 sm:text-lg">
            I&apos;m always happy to talk about product-minded engineering, frontend architecture, distributed systems, or AI-native tools.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            const isExternal = method.href.startsWith('http')

            return (
              <motion.a
                key={method.label}
                href={method.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noreferrer' : undefined}
                className="rounded-[24px] border border-white/10 bg-black/20 p-5 text-left transition hover:-translate-y-1 hover:border-amber-100/20"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl border border-amber-100/15 bg-amber-100/10 p-3 text-stone-50">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-code text-[11px] uppercase tracking-[0.3em] text-stone-400">{method.label}</p>
                    <p className="mt-1 truncate text-sm text-stone-300">{method.value}</p>
                  </div>
                </div>
              </motion.a>
            )
          })}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-2xl bg-stone-100 px-6 py-3 text-sm font-semibold text-[#111111] transition hover:-translate-y-0.5 hover:bg-white"
          >
            <span className="text-[#111111]">Email Raj</span>
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
        </div>
      </motion.div>
    </section>
  )
}
