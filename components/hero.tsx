import React from 'react'
import { GlowButton } from './glow-button'
import ParticlesBg from './particles-bg'

export function Hero(){
  return (
    <section id="home" className="relative overflow-hidden bg-black/60">
      <ParticlesBg />
      <div className="max-w-7xl mx-auto px-4 py-28">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-display leading-tight">Agentic AI Solutions for the Future of Work</h1>
            <p className="mt-6 text-lg text-white/80">Spiritus Agentic Solutions designs multi-agent workflows that empower businesses to scale, automate, and innovate.</p>
            <div className="mt-8 flex gap-4">
              <a href="#services"><GlowButton variant="primary">Explore Services</GlowButton></a>
              <a href="#process"><GlowButton variant="secondary">See Our Process</GlowButton></a>
            </div>
          </div>
          <div>
            <div className="card p-8">
              <h3 className="font-semibold">Trusted by forward-thinking organizations</h3>
              <p className="mt-3 text-sm text-white/70">Placeholder logos and social proof.</p>
              <div className="mt-6 flex gap-4 items-center">
                <div className="h-8 w-24 bg-white/6 rounded-md" />
                <div className="h-8 w-24 bg-white/6 rounded-md" />
                <div className="h-8 w-24 bg-white/6 rounded-md" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
