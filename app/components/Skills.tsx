'use client'

import { motion } from 'framer-motion'
import { Bot, Cloud, Code2, MonitorSmartphone, Server, type LucideIcon } from 'lucide-react'
import SectionHeading from '@/app/components/SectionHeading'
import { skillGroups } from '@/app/data/resume'

const iconMap: Record<string, LucideIcon> = {
  Languages: Code2,
  Frontend: MonitorSmartphone,
  Backend: Server,
  'AI & Data': Bot,
  'Cloud, DevOps & Quality': Cloud,
}

export default function Skills() {
  return (
    <section id="skills" className="space-y-8 scroll-mt-28">
      <SectionHeading
        index="03"
        title="Skills"
        eyebrow="Languages, frameworks, platforms, and delivery tooling"
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group, index) => {
          const Icon = iconMap[group.title]

          return (
            <motion.article
              key={group.title}
              className="panel overflow-hidden p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <div className="flex items-center gap-4">
                <div className="rounded-2xl border border-amber-100/15 bg-amber-100/10 p-3 text-stone-50">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mt-1 text-xl font-semibold text-stone-50">{group.title}</h3>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span key={skill} className="chip-muted">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
