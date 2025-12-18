"use client";

import React from "react";
import { Sparkles, Globe, Mic, Settings, Paperclip, Activity } from "lucide-react";

export default function PromptBar() {
  return (
    <div className="w-full flex justify-center">
      <div
        className="  w-full max-w-[820px]
          rounded-[22px]
          px-6 py-[14px]
          bg-[#1c1f1e]
          shadow-[0_18px_40px_rgba(0,0,0,0.45)]
          border border-white/5"
        style={{
          background: "#0f1416",
          borderRadius: 18,
          border: "1px solid rgba(255,255,255,0.04)",
          boxShadow: "0 40px 90px rgba(2,6,23,0.7), inset 0 -10px 28px rgba(0,0,0,0.65)",
        }}
      >
        <div className="flex items-center gap-6">
          {/* left icon group */}
          <div className="flex items-center gap-4">

            <button
              type="button"
              aria-hidden
              style={{
                height: 56,
                width: 56,
                borderRadius: 12,
                background: "#0b1112",
                border: "1px solid rgba(255,255,255,0.03)",
                color: "rgba(156,163,175,1)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: 12,
              }}
            >
              <Sparkles size={18} className="text-gray-400 opacity-70"/>
            </button>
          </div>

          {/* input area (container defines height) */}
          <div className="flex-1 min-h-[84px] flex items-center">
<input
            type="text"
            placeholder="Ask anything. Type @ for mentions and / for shortcuts."
            className="
              flex-1 bg-transparent
              text-[18px] text-gray-200
              placeholder:text-gray-500
              focus:outline-none
            "
          />
          </div>

          {/* right icon group */}
          <div className="flex items-center gap-4 text-gray-400">
            {[
              <Globe key="g" />,
              <Settings key="s" />,
              <Paperclip key="p" />,
              <Mic key="m" />,
            ].map((icon, i) => (
              <button
                key={i}
                type="button"
                aria-hidden
                style={{
                  height: 40,
                  width: 40,
                  padding: "5px",
                  borderRadius: 12,
                  background: "#0b1112",
                  border: "1px solid rgba(255,255,255,0.03)",
                  color: "rgba(156,163,175,1)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {icon}
              </button>
            ))}

            <button
              type="button"
              aria-label="Run"
              style={{
                height: 60,
                padding: "0 22px",
                borderRadius: 36,
                background: "linear-gradient(90deg,#2bd0c6,#10b7b0)",
                color: "#031312",
                boxShadow: "0 10px 28px rgba(16,120,120,0.18)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                border: "none",
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