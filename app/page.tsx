"use client"
import Hero from '@/app/components/Hero'
import NavBar from '@/app/components/NavBar'
import Skills from '@/app/components/Skills'
import Projects from '@/app/components/Projects'
import Experience from '@/app/components/Experience'
import Contact from '@/app/components/Contact'
import AwardsAndCertifications from './components/Awards'

export default function Page() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <AwardsAndCertifications />
        <Contact />
      </main>
    </div>
  )
}
