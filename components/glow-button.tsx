import React from 'react'

type Props = {
  variant?: 'primary' | 'secondary'
  children?: React.ReactNode
}

export function GlowButton({ variant = 'primary', children }: Props){
  const classes = variant === 'primary' ? 'bg-brand-500 text-black px-4 py-2 rounded-md font-semibold' : 'bg-white/6 text-white px-4 py-2 rounded-md'
  return <button className={`${classes} focus-ring`}>{children}</button>
}
