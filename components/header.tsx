import Link from 'next/link'
import React from 'react'

export function Header(){
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-black/20 border-b border-white/6">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center ring-1 ring-white/6">S</div>
          <div>
            <div className="text-sm font-semibold">Spiritus Agentic Solutions</div>
            <div className="text-xs text-white/60">SAS</div>
          </div>
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="#">Landing</Link>
          <Link href="/services">Services</Link>
          <Link href="/process">Process</Link>
        </nav>
        <div className="md:hidden">
          <button aria-label="Open menu" className="p-2 rounded-md bg-white/3">Menu</button>
        </div>
      </div>
    </header>
  )
}
