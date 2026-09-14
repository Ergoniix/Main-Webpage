"use client";

import {
  Home, ShoppingBag, LayoutGrid, Box, Shirt, Search,
  Heart, ShoppingCart, User, CreditCard, Package, MapPin
} from "lucide-react";
import { useState } from "react";

const topItems = [
  { icon: Home, label: "Home" },
  { icon: ShoppingBag, label: "Shop" },
  { icon: LayoutGrid, label: "Categories" },
  { icon: Box, label: "3D Viewer" },
  { icon: Shirt, label: "Try-On" },
  { icon: Search, label: "Search" },
  { icon: Heart, label: "Wishlist" },
  { icon: ShoppingCart, label: "Cart" },
  { icon: User, label: "Account" },
  { icon: CreditCard, label: "Checkout" },
  { icon: Package, label: "Payment" },
  { icon: MapPin, label: "Tracking" },
];

export default function TopBar() {
  const [active, setActive] = useState("Home");

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] hidden lg:flex items-center justify-center gap-6 px-8"
      style={{
        height: "52px",
        background: "rgba(6, 8, 14, 0.95)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      {topItems.map(({ icon: Icon, label }) => (
        <button
          key={label}
          onClick={() => setActive(label)}
          className="flex flex-col items-center gap-0.5 group transition-all duration-200"
        >
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200"
            style={{
              background: active === label ? "rgba(255,255,255,0.12)" : "transparent",
              border: active === label ? "1px solid rgba(255,255,255,0.15)" : "1px solid transparent",
            }}
          >
            <Icon size={13} color={active === label ? "#fff" : "#4b5563"} />
          </div>
          <span
            className="text-[8px] tracking-wide transition-colors duration-200"
            style={{ color: active === label ? "#9ca3af" : "#374151" }}
          >
            {active === label ? "• " : ""}{label}
          </span>
        </button>
      ))}
    </div>
  );
}
