import React from 'react'

type Props = {
  title?: string
  description?: string
  children?: React.ReactNode
}

export function Section({ title, description, children }: Props){
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {title && <h2 className="text-2xl font-semibold">{title}</h2>}
      {description && <p className="text-sm text-white/70 mt-2">{description}</p>}
      <div className="mt-6">{children}</div>
    </section>
  )
}
