'use client'

import { motion } from 'framer-motion'
import { CalendarRange, MapPin } from 'lucide-react'
import Image from 'next/image'
import SectionHeading from '@/app/components/SectionHeading'
import { experiences } from '@/app/data/resume'

const companyMeta: Record<
  string,
  {
    logo: string
    pillClass: string
    dotClass: string
  }
> = {
  oracle: {
    logo: '/oracle-logo.svg',
    pillClass: 'border-rose-100/20 bg-rose-100/10 text-rose-50',
    dotClass: 'bg-rose-200',
  },
  studypaq: {
    logo: '/studypaq-logo.svg',
    pillClass: 'border-emerald-100/20 bg-emerald-100/10 text-emerald-50',
    dotClass: 'bg-emerald-200',
  },
} as const

export default function Experience() {
  return (
    <section id="experience" className="space-y-8 scroll-mt-28">
      <SectionHeading index="01" title="Experience" eyebrow="Roles, ownership, and measured outcomes" />

      <div className="space-y-8">
        {experiences.map((experience, index) => {
          const meta = companyMeta[experience.id]

          return (
            <motion.article
              key={experience.id}
              className="panel overflow-hidden p-7 sm:p-8"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="space-y-5">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <div className="rounded-[20px] border border-white/10 bg-white px-4 py-3 shadow-[0_16px_40px_rgba(0,0,0,0.18)]">
                      <Image
                        src={meta.logo}
                        alt={`${experience.company} logo`}
                        width={128}
                        height={36}
                        className="h-8 w-auto object-contain"
                      />
                    </div>

                    <div>
                      <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium ${meta.pillClass}`}>
                        {experience.company}
                      </span>
                      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-stone-50">{experience.title}</h3>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-stone-400">
                    <span className="flex items-center gap-2">
                      <CalendarRange className="h-4 w-4 text-stone-300/70" />
                      {experience.duration}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-stone-300/70" />
                      {experience.location}
                    </span>
                  </div>

                  <p className="max-w-3xl text-base leading-7 text-stone-300">{experience.overview}</p>
                </div>

                <div className="rounded-[24px] border border-white/10 bg-black/20 px-5 py-4 lg:max-w-xs">
                  <p className="font-code text-[11px] uppercase tracking-[0.3em] text-stone-400">Stack</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {experience.technologies.map((technology) => (
                      <span key={technology} className="chip">
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 grid gap-4">
                {experience.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-start gap-3 rounded-[22px] border border-white/10 bg-white/[0.03] px-4 py-4"
                  >
                    <span className={`mt-2 h-2 w-2 rounded-full ${meta.dotClass}`} />
                    <p className="text-sm leading-7 text-stone-300">{highlight}</p>
                  </div>
                ))}
              </div>

              {experience.tracks ? (
                <div className="mt-8 grid gap-5 xl:grid-cols-2">
                  {experience.tracks.map((track) => (
                    <div
                      key={track.name}
                      className="rounded-[26px] border border-white/10 bg-black/15 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.2)]"
                    >
                      <p className="font-code text-[11px] uppercase tracking-[0.3em] text-stone-400">Initiative</p>
                      <h4 className="mt-2 text-xl font-semibold text-stone-50">{track.name}</h4>
                      <p className="mt-3 text-sm leading-7 text-stone-400">{track.summary}</p>

                      <div className="mt-5 space-y-3">
                        {track.bullets.map((bullet) => (
                          <div key={bullet} className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-amber-200" />
                            <p className="text-sm leading-7 text-stone-300">{bullet}</p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {track.technologies.map((technology) => (
                          <span key={technology} className="chip-muted">
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
