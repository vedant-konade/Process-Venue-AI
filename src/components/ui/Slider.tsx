'use client'
import React from 'react'

type Props = {
  value: number
  onChange: (v: number) => void
  min?: number
  max?: number
}

export default function Slider({ value, onChange, min = 0, max = 100 }: Props) {
  return (
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
    />
  )
}
