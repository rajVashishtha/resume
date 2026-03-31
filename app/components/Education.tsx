'use client'

import { motion } from 'framer-motion'
import { Calendar, GraduationCap, MapPin } from 'lucide-react'
import SectionHeading from '@/app/components/SectionHeading'
import { education } from '@/app/data/resume'

export default function Education() {
  return (
    <section id="education" className="space-y-8 scroll-mt-28">
      <SectionHeading index="05" title="Education" eyebrow="Academic foundation" />

      <motion.article
        className="panel overflow-hidden p-8 sm:p-10"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.45 }}
      >
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex items-start gap-4">
            <div className="rounded-2xl border border-amber-100/15 bg-amber-100/10 p-4 text-stone-50">
              <GraduationCap className="h-7 w-7" />
            </div>

            <div className="space-y-3">
              <div>
                <p className="font-code text-xs uppercase tracking-[0.32em] text-stone-400">Degree</p>
                <h3 className="mt-2 text-2xl font-semibold text-stone-50">{education.degree}</h3>
              </div>

              <div>
                <p className="text-base text-stone-300">{education.institution}</p>
                <div className="mt-2 flex flex-wrap gap-4 text-sm text-stone-400">
                  <span className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-stone-300/70" />
                    {education.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-stone-300/70" />
                    Graduated {education.graduation}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-sm rounded-[24px] border border-white/10 bg-black/20 p-5">
            <p className="font-code text-xs uppercase tracking-[0.32em] text-stone-400">Snapshot</p>
            <p className="mt-3 text-sm leading-7 text-stone-400">
              Formal computer science training paired with production engineering work across frontend, backend, distributed systems, and AI-assisted workflows.
            </p>
          </div>
        </div>
      </motion.article>
    </section>
  )
}
