"use client";

import { useApp } from "../../context/AppContext";

export default function ResultCard() {
  const { result, model } = useApp();

  if (!result) return null;

  return (
    <div className="bg-white border rounded p-6 mt-6">
      <h2 className="font-semibold mb-4">
        Result — {model}
      </h2>

      {result.sections.map((s) => (
        <div key={s.heading} className="mb-4">
          <h3 className="font-medium">{s.heading}</h3>
          <p className="text-sm text-gray-700">{s.content}</p>
        </div>
      ))}
    </div>
  );
}
