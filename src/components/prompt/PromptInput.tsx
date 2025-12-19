"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Sparkles,
  Globe,
  Mic,
  Settings,
  Paperclip,
  Activity,
  Check,
} from "lucide-react";

const MODELS = [
  { id: "pv-fast", label: "Process Fast", desc: "Quick & lightweight" },
  { id: "pv-pro", label: "Process Pro", desc: "Best quality answers" },
  { id: "pv-reason", label: "Process Reason", desc: "Deep reasoning" },
];

export default function PromptBar() {
  const [open, setOpen] = useState(false);
  const [model, setModel] = useState(MODELS[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="w-full flex justify-center relative">
      <div
        className="w-full max-w-[820px] rounded-[22px] px-6 py-[14px]
                   bg-[color:var(--pv-surface)] border border-[color:var(--pv-border)]
                   shadow-[0_18px_40px_rgba(0,0,0,0.45)]"
        style={{
          boxShadow:
            "0 40px 90px rgba(2,6,23,0.7), inset 0 -10px 28px rgba(0,0,0,0.65)",
        }}
      >
        <div className="flex items-center gap-6">
          {/* LEFT ICONS */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center justify-center"
              style={{
                height: 56,
                width: 56,
                borderRadius: 12,
                background: "var(--pv-input-bg)",
                border: "1px solid var(--pv-border)",
                marginLeft: 12,
              }}
            >
              <Sparkles size={18} className="pv-icon" />
            </button>
{open && (
  <div className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 z-50">
    <div className="pv-dropdown">
      {MODELS.map((m) => (
        <div
          key={m.id}
          onClick={() => {
            setModel(m);
            setOpen(false);
          }}
          className="pv-dropdown-item"
        >
          <div className="pv-dropdown-icon">
            <Sparkles size={14} className="pv-icon" />
          </div>

          <div className="flex-1">
            <div className="pv-dropdown-title">{m.label}</div>
            <div className="pv-dropdown-sub">{m.desc}</div>
          </div>

          {model.id === m.id && (
            <Check size={14} className="text-[color:var(--pv-accent)]" />
          )}
        </div>
      ))}

      <div className="pv-dropdown-divider" />

      <div className="pv-dropdown-item">
        <div className="pv-dropdown-icon">
          <Settings size={14} className="pv-icon" />
        </div>
        <div className="pv-dropdown-title">More models</div>
      </div>
    </div>
  </div>
)}
            </div>
          {/* INPUT */}
          <div className="flex-1 min-h-[84px] flex items-center">
            <input
              className="pv-input flex-1 text-[18px] focus:outline-none bg-transparent"
              placeholder={`Ask anything (${model.label})`}
            />
          </div>

          {/* RIGHT ICONS */}
          <div className="flex items-center gap-4">
            {[Globe, Settings, Paperclip, Mic].map((Icon, i) => (
              <button
                key={i}
                className="inline-flex items-center justify-center"
                style={{
                  height: 40,
                  width: 40,
                  borderRadius: 12,
                  background: "var(--pv-input-bg)",
                  border: "1px solid var(--pv-border)",
                }}
              >
                <Icon size={16} className="pv-icon" />
              </button>
            ))}

            <button
              aria-label="Run"
              style={{
                height: 60,
                padding: "0 22px",
                borderRadius: 36,
                background:
                  "linear-gradient(90deg,var(--pv-accent-start),var(--pv-accent-end))",
                color: "var(--pv-accent-contrast)",
                boxShadow: "0 10px 28px rgba(16,120,120,0.18)",
                marginLeft: 22,
                marginRight: -30,
              }}
            >
              <Activity size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
