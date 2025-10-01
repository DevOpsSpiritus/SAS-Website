import React from 'react'
import { Section } from '../../components/section'
import { ServiceCard } from '../../components/service-card'

export default function ServicesPage(){
  return (
    <>
      <Section title="Services" description="What we build">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard title="Agentic Workflows" description="Design autonomous task flows that coordinate tools, data, and teams." />
          <ServiceCard title="AI Knowledge Ops" description="Centralize, index, and route knowledge for instant, safe retrieval." />
          <ServiceCard title="Automation & Integrations" description="Connect CRMs, ticketing, and data pipelines for hands-free throughput." />
          <ServiceCard title="Observability & Analytics" description="Instrument agents with metrics, traces, and feedback loops." />
        </div>
      </Section>
    </>
  )
}
