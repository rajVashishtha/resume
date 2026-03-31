import './globals.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Cormorant_Garamond, IBM_Plex_Mono, Manrope } from 'next/font/google'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-ibm-plex-mono',
})

export const metadata: Metadata = {
  title: 'Raj Vashisht | Fullstack Software Engineer',
  description:
    'Interactive resume for Raj Vashisht featuring Oracle experience, AI-native projects, cloud platforms, and fullstack engineering work.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${manrope.variable} ${cormorant.variable} ${ibmPlexMono.variable} min-h-screen bg-[#0b0d10] text-stone-100 antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
