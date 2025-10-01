import React from 'react'
import { Hero } from '../components/hero'
import { Section } from '../components/section'
import { ServiceCard } from '../components/service-card'
import { GlowButton } from '../components/glow-button'

export default function Page() {
  return (
    <>
      <Hero />
      <Section title="Feature Highlights" description="Our agents help teams ship faster">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard title="Agentic Workflows" description="Design autonomous task flows that coordinate tools, data, and teams." />
          <ServiceCard title="AI Knowledge Ops" description="Centralize, index, and route knowledge for instant, safe retrieval." />
          <ServiceCard title="Automation & Integrations" description="Connect CRMs, ticketing, and data pipelines for hands-free throughput." />
          <ServiceCard title="Observability & Analytics" description="Instrument agents with metrics, traces, and feedback loops." />
        </div>
      </Section>
      <Section title="Trusted by" description="Our agents help teams ship faster">
        <div className="flex gap-6 items-center justify-center py-8">
          <div className="h-8 w-32 bg-white/6 rounded-md" />
          <div className="h-8 w-32 bg-white/6 rounded-md" />
          <div className="h-8 w-32 bg-white/6 rounded-md" />
        </div>
      </Section>
      <Section>
        <div className="bg-gradient-to-r from-brand-700 to-accent-500 p-12 rounded-2xl text-center">
          <h2 className="text-2xl font-display">Start your agentic transformation</h2>
          <p className="mt-3">We design and deploy AI agents that streamline operations, accelerate delivery, and unlock measurable outcomes.</p>
          <div className="mt-6 flex gap-4 justify-center">
            <GlowButton variant="primary">Explore Services</GlowButton>
            <GlowButton variant="secondary">Our Process</GlowButton>
          </div>
        </div>
      </Section>
    </>
  )
}
