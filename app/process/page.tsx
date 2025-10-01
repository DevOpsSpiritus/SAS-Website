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
    <>
      <Section title="Our Process" description="From discovery to support">
        <div className="relative">
          <div className="hidden lg:block absolute left-0 right-0 top-10 flex items-center justify-center">
            <div className="h-1 w-3/4 bg-gradient-to-r from-brand-500 to-accent-500 opacity-30 rounded-full" />
          </div>

          <div className="grid lg:grid-flow-col lg:auto-cols-fr gap-6">
            {steps.map((s, i) => (
              <div key={i} className="lg:odd:translate-y-6">
                <ProcessStep number={i+1} title={s.title} description={s.description} />
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="bg-gradient-to-r from-brand-700 to-accent-500 p-12 rounded-2xl text-center">
          <h2 className="text-2xl font-display">Ready to unlock the future of work?</h2>
          <div className="mt-6">
            <button className="bg-black/70 text-white px-5 py-2 rounded-md">Partner With Us</button>
          </div>
        </div>
      </Section>
    </>
  )
}
