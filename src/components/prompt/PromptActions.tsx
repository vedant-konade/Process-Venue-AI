'use client'
import React from 'react'
import { useAppContext } from '../../context/AppContext'

export default function PromptActions() {
  const { prompt, setPrompt, addResult } = useAppContext()

  const submit = () => {
    if (!prompt.trim()) return
    addResult({ id: String(Date.now()), title: 'Result', content: `Echo: ${prompt}`, references: [] })
    setPrompt('')
  }

  const clear = () => setPrompt('')

  return (
    <div className="prompt-actions">
      <button onClick={submit} className="btn primary">Run</button>
      <button onClick={clear} className="btn">Clear</button>
    </div>
  )
}
