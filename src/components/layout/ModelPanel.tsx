"use client";

import { useApp } from "../../context/AppContext";
import type { ModelType } from "../../types";

export default function ModelPanel() {
  const {
    model,
    setModel,
    temperature,
    setTemperature,
    maxTokens,
    setMaxTokens,
    metrics,
  } = useApp();

  return (
<aside className="m-4 rounded-2xl bg-white/5 backdrop-blur-xl
                 border border-white/10 p-6 space-y-6">

      <h3 className="font-semibold text-sm uppercase tracking-wide text-gray-600">
  Execution Settings
</h3>


      <h3 className="font-semibold text-sm uppercase tracking-wide text-gray-600">
  Execution Settings
</h3>

      <select
        id="model"
        value={model}
        onChange={(e) => setModel(e.target.value as ModelType)}
        className="w-full border rounded px-2 py-1 mb-4"
      >
        <option value="gpt-4o">GPT-4</option>
        <option value="claude-3-opus">Claude-3</option>
        <option value="custom">Custom</option>
      </select>

      <label className="flex justify-between mb-1">
        <span>Temperature</span>
        <span className="text-gray-500">{temperature}</span>
      </label>
      <input
        type="range"
        min={0}
        max={1}
        step={0.1}
        value={temperature}
        onChange={(e) => setTemperature(Number(e.target.value))}
        className="w-full mb-4"
      />

      <label htmlFor="tokens">Max Tokens</label>
      <input
        id="tokens"
        type="number"
        min={1}
        max={8192}
        step={128}
        value={maxTokens}
        onChange={(e) =>
          setMaxTokens(Math.max(1, Number(e.target.value)))
        }
        className="w-full border px-2 py-1"
      />

{metrics && (
  <div className="rounded-md border border-[var(--border-soft)] bg-gray-50 p-3 text-xs space-y-1">
    <p><span className="text-gray-500">Cost</span>: ${metrics.cost.toFixed(4)}</p>
    <p><span className="text-gray-500">Latency</span>: {metrics.latency} ms</p>
    <p><span className="text-gray-500">Tokens</span>: {metrics.tokens}</p>
  </div>
)}
    </aside>
  );
}
