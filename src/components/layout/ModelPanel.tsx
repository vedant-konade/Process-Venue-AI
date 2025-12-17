"use client";

import { useApp, ModelType } from "../../context/AppContext";

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
    <aside className="border-l bg-white p-4 text-sm">
      <h3 className="font-semibold mb-4">Model Information</h3>

      <label htmlFor="model" className="block mb-2">Model</label>
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
        <div className="mt-6 text-xs text-gray-600">
          <p>Cost: ${metrics.cost.toFixed(4)}</p>
          <p>Latency: {metrics.latency} ms</p>
          <p>Tokens Used: {metrics.tokens}</p>
        </div>
      )}
    </aside>
  );
}
