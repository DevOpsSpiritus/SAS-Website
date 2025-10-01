import React from 'react'
import { Hero } from '../components/hero'
import { Section } from '../components/section'
import { ServiceCard } from '../components/service-card'
import { GlowButton } from '../components/glow-button'

export default function Page() {
  return (
    <>
      <Hero />
      <Section title="Who we are" description="Spiritus Agentic Solutions designs multi-agent workflows for modern teams.">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
          <div className="card p-6">
            <h3 className="font-semibold">Who We Are</h3>
            <p className="mt-2 text-sm text-white/70">A team of researchers and engineers building agentic systems that augment human teams.</p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold">What We Do</h3>
            <p className="mt-2 text-sm text-white/70">We design, build, and integrate AI agents into business workflows to unlock automation and scale.</p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold">Why It Matters</h3>
            <p className="mt-2 text-sm text-white/70">Agentic systems increase throughput, reduce toil, and surface insights across teams and systems.</p>
          </div>
        </div>
      </Section>

      <Section title="Services" description="Our core offerings">
        <div id="services" className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <ServiceCard title="Agentic Workflows" description="Design autonomous task flows that coordinate tools, data, and teams." />
          <ServiceCard title="AI Knowledge Ops" description="Centralize, index, and route knowledge for instant, safe retrieval." />
          <ServiceCard title="Automation & Integrations" description="Connect CRMs, ticketing, and data pipelines for hands-free throughput." />
          <ServiceCard title="Observability & Analytics" description="Instrument agents with metrics, traces, and feedback loops." />
        </div>
        <div className="mt-8 text-center">
          <GlowButton variant="secondary">Request a Consultation</GlowButton>
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
        <div id="process" className="bg-gradient-to-r from-brand-700 to-accent-500 p-12 rounded-2xl text-center">
          <h2 className="text-2xl font-display">Partner with SAS to unlock the future of work.</h2>
          <p className="mt-3">We design and deploy AI agents that streamline operations, accelerate delivery, and unlock measurable outcomes.</p>
          <div className="mt-6 flex gap-4 justify-center">
            <a href="#services"><GlowButton variant="primary">Explore Services</GlowButton></a>
            <a href="#process"><GlowButton variant="secondary">Our Process</GlowButton></a>
          </div>
        </div>
      </Section>
    </>
  )
}
