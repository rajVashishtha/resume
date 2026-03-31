import Awards from '@/app/components/Awards'
import Contact from '@/app/components/Contact'
import Education from '@/app/components/Education'
import Experience from '@/app/components/Experience'
import Hero from '@/app/components/Hero'
import NavBar from '@/app/components/NavBar'
import Projects from '@/app/components/Projects'
import Skills from '@/app/components/Skills'

export default function Page() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <NavBar />
      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-5 pb-20 pt-8 sm:px-6 lg:px-8">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Awards />
        <Education />
        <Contact />
      </main>
    </div>
  )
}
