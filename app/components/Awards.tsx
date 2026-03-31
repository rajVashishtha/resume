'use client'

import { motion } from 'framer-motion'
import { Award, BadgeCheck } from 'lucide-react'
import SectionHeading from '@/app/components/SectionHeading'
import { awards, certifications } from '@/app/data/resume'

const groups = [
  {
    title: 'Awards',
    eyebrow: 'Recognition',
    icon: Award,
    items: awards,
  },
  {
    title: 'Certifications',
    eyebrow: 'Validated skills',
    icon: BadgeCheck,
    items: certifications,
  },
] as const

export default function Awards() {
  return (
    <section id="credentials" className="space-y-8 scroll-mt-28">
      <SectionHeading index="04" title="Credentials" eyebrow="Awards and certifications" />

      <div className="grid gap-6 xl:grid-cols-2">
        {groups.map((group, index) => {
          const Icon = group.icon

          return (
            <motion.article
              key={group.title}
              className="panel overflow-hidden p-7"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div className="flex items-center gap-4">
                <div className="rounded-2xl border border-amber-100/15 bg-amber-100/10 p-3 text-stone-50">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-code text-[11px] uppercase tracking-[0.3em] text-stone-400">{group.eyebrow}</p>
                  <h3 className="mt-1 text-2xl font-semibold text-stone-50">{group.title}</h3>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {group.items.map((item) => (
                  <div key={item.name} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                    <h4 className="text-lg font-semibold text-stone-50">{item.name}</h4>
                    <p className="mt-1 text-sm text-amber-50/75">{item.issuer}</p>
                    <p className="mt-3 text-sm leading-7 text-stone-400">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
