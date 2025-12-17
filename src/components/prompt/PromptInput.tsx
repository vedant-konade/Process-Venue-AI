"use client";

import { useState } from "react";
import { useApp } from "../../context/AppContext";
import { mockResult } from "../../lib/mockResponse";

export default function PromptInput() {
  const { setResult, setMetrics } = useApp();
  const [prompt, setPrompt] = useState("");

  const runPrompt = () => {
    setMetrics({
      cost: 0.03,
      latency: 1200,
      tokens: 512,
    });
    setResult(mockResult);
  };

  return (
    <div className="mt-6">
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Write your prompt..."
        className="w-full border rounded p-3 mb-2"
        rows={3}
      />
      <button
        onClick={runPrompt}
        disabled={!prompt}
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        Run
      </button>
    </div>
  );
}
