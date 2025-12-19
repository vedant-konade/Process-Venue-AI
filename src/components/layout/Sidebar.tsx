"use client";

import {
  PencilLine,
  Search,
  Image,
  Grid,
  Folder,
  Box,
  Dock,
  Moon,
  Sun,
} from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function Sidebar() {
  const { toggleTheme,theme  } = useTheme();

  const chats = [
    "API Rules",
    "GSoC 2026 overview",
    "IT DA Job Market Analysis",
    "Fitness plan restart",
    "AI system development guide",
    "Write react code",
  ];

  return (
    <aside className="pv-sidebar">
      {/* BRAND */}
      <div className="pv-brand text-left">
        <span className="font-semibold">Process Venue</span>
      </div>

      {/* TOP ACTIONS */}
      <div className="pv-section pv-top-actions">
        <SidebarItem icon={<PencilLine size={16} />} label="New chat" active />
        <SidebarItem icon={<Search size={16} />} label="Search chats" />
        <SidebarItem icon={<Image size={16} />} label="Images" />
        <SidebarItem icon={<Grid size={16} />} label="Apps" />
        <SidebarItem icon={<Folder size={16} />} label="Projects" />
      </div>

      {/* GPTs */}
      <div className="pv-section">
        <div className="pv-section-title">Wrapers</div>
        <SidebarItem icon={<Dock size={16} />} label="Software Architect " />
        <SidebarItem icon={<Box size={16} />} label="Flutter" />
        <SidebarItem icon={<Grid size={16} />} label="Explore " />
      </div>

      {/* CHATS */}
      <div className="pv-section pv-chats">
        <div className="pv-section-title">Your chats</div>
        {chats.map((chat, i) => (
          <button key={i} className="pv-chat-item text-left">
            {chat}
          </button>
        ))}
      </div>

      {/* FOOTER */}
<div className="pv-footer">
  <button
    onClick={toggleTheme}
    aria-label="Toggle theme"
    className="pv-theme-btn p-2 rounded-full hover:bg-white/4 transition flex items-center justify-center"
    title="Toggle theme"
  >
    {theme === "dark" ? (
      <Sun size={24} />
    ) : (
      <Moon size={24} />
    )}
  </button>
</div>

    </aside>
  );
}

/* ---------- Item ---------- */

function SidebarItem({
  icon,
  label,
  badge,
  active,
}: {
  icon: React.ReactNode;
  label: string;
  badge?: string;
  active?: boolean;
}) {
  return (
    // left-aligned label, icon tight to text, label grows
    <button
      className={`pv-item flex items-center gap-2 px-2 py-2 text-sm ${active ? "pv-item-active" : ""}`}
      style={{ justifyContent: "flex-start" }}
    >
      <span className="pv-item-icon w-6 h-6 flex items-center justify-center">
        {icon}
      </span>

      <span className="pv-item-label flex-1 text-left truncate">{label}</span>

      {badge && <span className="pv-badge ml-2">{badge}</span>}
    </button>
  );
}
