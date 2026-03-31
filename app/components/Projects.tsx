'use client'

import { motion } from 'framer-motion'
import { Binary, Bot, ExternalLink, Github, Package, TerminalSquare, type LucideIcon } from 'lucide-react'
import SectionHeading from '@/app/components/SectionHeading'
import { projects } from '@/app/data/resume'

const projectIcons: Record<string, LucideIcon> = {
  'ai-notes': Bot,
  quickly: TerminalSquare,
  'algo-visualiser': Binary,
}

const linkIcons = {
  github: Github,
  npm: Package,
  external: ExternalLink,
} as const

export default function Projects() {
  return (
    <section id="projects" className="space-y-8 scroll-mt-28">
      <SectionHeading index="02" title="Projects" eyebrow="Selected builds and shipped tooling" />

      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project, index) => {
          const ProjectIcon = projectIcons[project.id]

          return (
            <motion.article
              key={project.id}
              className="panel flex h-full flex-col overflow-hidden p-7"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="rounded-2xl border border-amber-100/15 bg-amber-100/10 p-3 text-stone-50">
                  <ProjectIcon className="h-6 w-6" />
                </div>

                <div className="rounded-full border border-emerald-100/15 bg-emerald-100/10 px-3 py-1 text-right">
                  <p className="font-code text-[10px] uppercase tracking-[0.28em] text-emerald-50/70">Impact</p>
                  <p className="mt-1 text-xs text-emerald-50">{project.impact}</p>
                </div>
              </div>

              <div className="mt-6">
                <p className="font-code text-[11px] uppercase tracking-[0.3em] text-stone-400">{project.label}</p>
                <h3 className="mt-2 text-2xl font-semibold text-stone-50">{project.title}</h3>
              </div>

              <div className="mt-5 space-y-3">
                {project.description.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-amber-200" />
                    <p className="text-sm leading-7 text-stone-300">{point}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="chip-muted">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                {project.links.map((link) => {
                  const LinkIcon = linkIcons[link.kind]

                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-stone-200 transition hover:-translate-y-0.5 hover:border-amber-100/20 hover:text-amber-50"
                    >
                      <LinkIcon className="h-4 w-4" />
                      {link.label}
                    </a>
                  )
                })}
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
