import React from 'react'

type Props = {
  number: number
  title: string
  description: string
  icon?: React.ReactNode
}

export function ProcessStep({ number, title, description, icon }: Props){
  return (
    <div className="flex gap-4 items-start">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center font-bold text-black">{number}</div>
      <div>
        <div className="flex items-center gap-3">
          <div className="text-brand-300">{icon ?? <div className="h-4 w-4 rounded-sm bg-white/6" />}</div>
          <div className="font-semibold">{title}</div>
        </div>
        <p className="text-sm text-white/70 mt-1">{description}</p>
      </div>
    </div>
  )
}
