'use client'
import React from 'react'
import type { Reference } from '../../types'

export default function References({ refs }: { refs: Reference[] }) {
  return (
    <div className="references">
      <h5>References</h5>
      <ul>
        {refs.map((r, i) => (
          <li key={i}>
            <a href={r.url} target="_blank" rel="noreferrer">
              {r.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
