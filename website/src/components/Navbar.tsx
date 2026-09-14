"use client";

import { useState } from "react";
import { Search, Heart, ShoppingBag, User, Menu, X, Zap } from "lucide-react";

interface NavbarProps {
  cartCount: number;
  wishlistCount: number;
}

export default function Navbar({ cartCount, wishlistCount }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navLinks = ["Men", "Women", "Collections", "Customize", "About"];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12"
      style={{
        height: "72px",
        background: "rgba(8, 10, 15, 0.85)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer select-none">
        <div className="w-7 h-7 rounded-lg flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, #4060ff, #8040ff)" }}>
          <Zap size={14} color="white" />
        </div>
        <span className="text-white font-bold text-xl tracking-[0.15em]">NEOMA</span>
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <button
            key={link}
            className="nav-link text-sm text-gray-400 hover:text-white transition-colors duration-200 tracking-wide"
          >
            {link}
          </button>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        {/* Search bar */}
        <div className={`hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300 ${searchOpen ? "w-48" : "w-9"}`}
          style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
          <button onClick={() => setSearchOpen(!searchOpen)}>
            <Search size={16} color="#9ca3af" />
          </button>
          {searchOpen && (
            <input
              type="text"
              placeholder="Search..."
              autoFocus
              className="bg-transparent text-white text-sm outline-none w-full placeholder-gray-500"
            />
          )}
        </div>

        {/* Wishlist */}
        <button className="relative p-2 rounded-full transition-colors hover:bg-white/5">
          <Heart size={18} color="#9ca3af" />
          {wishlistCount > 0 && (
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full text-[9px] font-bold flex items-center justify-center"
              style={{ background: "#ff3c64", color: "white" }}>
              {wishlistCount}
            </span>
          )}
        </button>

        {/* Cart */}
        <button className="relative p-2 rounded-full transition-colors hover:bg-white/5">
          <ShoppingBag size={18} color="#9ca3af" />
          {cartCount > 0 && (
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full text-[9px] font-bold flex items-center justify-center"
              style={{ background: "#4060ff", color: "white" }}>
              {cartCount}
            </span>
          )}
        </button>

        {/* Profile */}
        <button className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center"
          style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}>
          <User size={16} color="#9ca3af" />
        </button>

        {/* Mobile menu */}
        <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={20} color="white" /> : <Menu size={20} color="#9ca3af" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="absolute top-full left-0 right-0 flex flex-col py-4"
          style={{
            background: "rgba(8, 10, 15, 0.98)",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link}
              className="py-3 px-6 text-left text-gray-300 hover:text-white hover:bg-white/5 text-sm tracking-wide transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
