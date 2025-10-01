import React from 'react'

type Props = {
  title: string
  description: string
  icon?: React.ReactNode
  onClick?: () => void
}

export function ServiceCard({ title, description, icon, onClick }: Props){
  return (
    <div role="button" tabIndex={0} onClick={onClick} className="card p-6 glow-hover focus-ring transition-transform duration-200 ease-out hover:-translate-y-1">
      <div className="flex items-start gap-4">
        <div className="flex-none text-brand-400">{icon ?? <div className="h-8 w-8 rounded-md bg-white/6" />}</div>
        <div>
          <div className="text-sm font-semibold">{title}</div>
          <p className="mt-2 text-sm text-white/70">{description}</p>
        </div>
      </div>
    </div>
  )
}
