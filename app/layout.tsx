import './globals.css'
import React from 'react'
import { Header } from '../components/header'
import { Footer } from '../components/footer'

export const metadata = {
  title: 'Spiritus Agentic Solutions (SAS) - Agentic AI Solutions for the Future of Work',
  description: 'We design and deploy AI agents that streamline operations, accelerate delivery, and unlock measurable outcomes.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link sr-only focus:not-sr-only" href="#content">Skip to content</a>
        <Header />
        <main id="content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
