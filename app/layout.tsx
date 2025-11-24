import './globals.css'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'Raj Vashishtha — Resume',
  description: 'Interactive resume website',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
