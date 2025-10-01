import React from 'react'
import { Section } from '../../components/section'
import { ProcessStep } from '../../components/process-step'

const steps = [
  { title: 'Discovery', description: 'We align on goals, constraints, and success metrics.' },
  { title: 'Strategy', description: 'Define agent roles, data sources, and integration points.' },
  { title: 'Agentic Design', description: 'Design flows, safety nets, and monitoring for agents.' },
  { title: 'Build & Test', description: 'Implement agents with iterative testing and human-in-the-loop checks.' },
  { title: 'Deploy & Support', description: 'Deploy agents, instrument observability, and provide ongoing support.' }
]

export default function ProcessPage(){
  return (
    <Section title="Our Process" description="From discovery to support">
      <div className="space-y-6">
        {steps.map((s, i) => (
          <ProcessStep key={i} number={i+1} title={s.title} description={s.description} />
        ))}
      </div>
    </Section>
  )
}
