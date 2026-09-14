"use client";

import { useState } from "react";
import {
  Settings, Filter, Ruler, Book, Leaf, Share2,
  Star, LayoutGrid, Tag, BookOpen, Headphones
} from "lucide-react";

const leftItems = [
  { icon: Settings, label: "Customization" },
  { icon: Filter, label: "Filters" },
  { icon: Ruler, label: "Size Guide" },
  { icon: Book, label: "Lookbook" },
  { icon: Leaf, label: "Sustainability" },
  { icon: Share2, label: "Social Share" },
];

const rightItems = [
  { icon: Star, label: "Reviews" },
  { icon: LayoutGrid, label: "Recommendations" },
  { icon: Tag, label: "Offers" },
  { icon: BookOpen, label: "Blog" },
  { icon: Headphones, label: "Support" },
];

function SideItem({ icon: Icon, label }: { icon: React.ComponentType<{ size?: number; color?: string }>; label: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      className="flex flex-col items-center gap-1.5 group transition-all duration-200"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200"
        style={{
          background: hovered ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.03)",
          border: hovered ? "1px solid rgba(255,255,255,0.15)" : "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <Icon size={15} color={hovered ? "#fff" : "#4b5563"} />
      </div>
      <span className="text-[9px] tracking-wide text-gray-500 group-hover:text-gray-300 transition-colors">{label}</span>
    </button>
  );
}

export default function SidebarNav() {
  return (
    <>
      {/* Left sidebar */}
      <div
        className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-5 py-6 px-3 rounded-2xl"
        style={{
          background: "rgba(10, 12, 20, 0.8)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        {leftItems.map((item) => (
          <SideItem key={item.label} icon={item.icon} label={item.label} />
        ))}
      </div>

      {/* Right sidebar */}
      <div
        className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-5 py-6 px-3 rounded-2xl"
        style={{
          background: "rgba(10, 12, 20, 0.8)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        {rightItems.map((item) => (
          <SideItem key={item.label} icon={item.icon} label={item.label} />
        ))}
      </div>
    </>
  );
}
