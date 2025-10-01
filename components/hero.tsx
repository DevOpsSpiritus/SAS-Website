import React from 'react'
import { GlowButton } from './glow-button'
import ParticlesBg from './particles-bg'

export function Hero(){
  return (
    <section className="relative overflow-hidden">
      <ParticlesBg />
      <div className="max-w-7xl mx-auto px-4 py-28">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-display leading-tight">Agentic AI Solutions for the Future of Work</h1>
            <p className="mt-6 text-lg text-white/80">We design and deploy AI agents that streamline operations, accelerate delivery, and unlock measurable outcomes.</p>
            <div className="mt-8 flex gap-4">
              <GlowButton variant="primary">Explore Services</GlowButton>
              <GlowButton variant="secondary">Our Process</GlowButton>
            </div>
          </div>
          <div>
            <div className="card p-8">
              <h3 className="font-semibold">Trusted by teams building with agents</h3>
              <p className="mt-3 text-sm text-white/70">Placeholder logos and social proof.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
