"use client";

import React from "react";

export default function StatsRow({
  totalCost = "0.00 cents",
  totalWait = "0.00 seconds",
}: {
  totalCost?: string;
  totalWait?: string;
}) {
  return (
    <div className="w-full flex justify-center pointer-events-none">
      <div className="pv-stats-floating pointer-events-auto" role="status" aria-label="Usage stats">
        <div className="pv-stat-item">
          <div className="pv-stat-label">Total Cost</div>
          <div className="pv-stat-value">{totalCost}</div>
        </div>

        <div className="pv-separator" aria-hidden />

        <div className="pv-stat-item">
          <div className="pv-stat-label">Total Wait Time</div>
          <div className="pv-stat-value">{totalWait}</div>
        </div>
      </div>
    </div>
  );
}