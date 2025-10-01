import React from 'react'
import { Section } from '../../components/section'
import { ServiceCard } from '../../components/service-card'
import { Cpu } from 'lucide-react'

export default function ServicesPage(){
  return (
    <>
      <Section title="Services" description="What we build">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <ServiceCard icon={<Cpu size={20} />} title="Agentic Workflows" description="Design autonomous task flows that coordinate tools, data, and teams." />
          <ServiceCard icon={<div className="h-5 w-5 rounded-sm bg-white/6" />} title="AI Knowledge Ops" description="Centralize, index, and route knowledge for instant, safe retrieval." />
          <ServiceCard icon={<div className="h-5 w-5 rounded-sm bg-white/6" />} title="Automation & Integrations" description="Connect CRMs, ticketing, and data pipelines for hands-free throughput." />
          <ServiceCard icon={<div className="h-5 w-5 rounded-sm bg-white/6" />} title="Observability & Analytics" description="Instrument agents with metrics, traces, and feedback loops." />
        </div>
        <div className="mt-8 text-center">
          <button className="bg-white/6 px-5 py-2 rounded-md">Request a Consultation</button>
        </div>
      </Section>
    </>
  )
}
