import React from 'react'

type Props = {
  number: number
  title: string
  description: string
}

export function ProcessStep({ number, title, description }: Props){
  return (
    <div className="flex gap-4 items-start">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center font-bold">{number}</div>
      <div>
        <div className="font-semibold">{title}</div>
        <p className="text-sm text-white/70 mt-1">{description}</p>
      </div>
    </div>
  )
}
