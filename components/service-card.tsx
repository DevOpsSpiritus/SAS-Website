import React from 'react'

type Props = {
  title: string
  description: string
  onClick?: () => void
}

export function ServiceCard({ title, description, onClick }: Props){
  return (
    <div role="button" tabIndex={0} onClick={onClick} className="card p-6 glow-hover focus-ring">
      <div className="text-sm font-semibold">{title}</div>
      <p className="mt-2 text-sm text-white/70">{description}</p>
    </div>
  )
}
