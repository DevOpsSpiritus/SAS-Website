import React from 'react'

export function Footer(){
  return (
    <footer className="mt-16 border-t border-white/6 py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <div className="font-semibold">Spiritus Agentic Solutions (SAS)</div>
          <div className="text-sm text-white/60">© {new Date().getFullYear()} Spiritus Agentic Solutions</div>
        </div>
        <div className="flex gap-6">
          <a href="#">About</a>
          <a href="/services">Services</a>
          <a href="/process">Process</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  )
}
