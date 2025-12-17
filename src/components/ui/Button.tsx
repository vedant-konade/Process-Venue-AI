'use client'
import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'default' }

export default function Button({ children, variant = 'default', ...rest }: Props) {
  const cls = variant === 'primary' ? 'btn primary' : 'btn'
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  )
}
