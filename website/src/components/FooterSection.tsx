"use client";

import { Zap, ArrowRight, Globe, MessageCircle, Play } from "lucide-react";

export default function FooterSection() {
  return (
    <footer
      className="w-full pt-20 pb-10"
      style={{
        background: "linear-gradient(180deg, #0a0c18 0%, #060810 100%)",
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Newsletter CTA */}
        <div
          className="rounded-3xl p-10 mb-16 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(40,60,200,0.15) 0%, rgba(80,40,180,0.1) 100%)",
            border: "1px solid rgba(80,120,255,0.15)",
          }}
        >
          <div className="absolute inset-0" style={{
            background: "radial-gradient(circle at 70% 50%, rgba(60,100,255,0.06) 0%, transparent 60%)"
          }} />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Join the Future of Fashion
              </h3>
              <p className="text-gray-400 text-sm">
                Get early access to drops, 3D previews and exclusive offers.
              </p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-3 rounded-xl text-sm text-white placeholder-gray-500 outline-none"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              />
              <button
                className="px-5 py-3 rounded-xl text-sm font-semibold text-black flex items-center gap-2"
                style={{ background: "white" }}
              >
                Subscribe <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Footer columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #4060ff, #8040ff)" }}>
                <Zap size={14} color="white" />
              </div>
              <span className="text-white font-bold text-xl tracking-[0.15em]">NEOMA</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Fashion meets technology. Explore a new dimension of style with 3D visualization and virtual try-on.
            </p>
            <div className="flex gap-3">
              {[Globe, MessageCircle, Play].map((Icon, i) => (
                <button
                  key={i}
                  className="w-9 h-9 rounded-xl flex items-center justify-center hover:bg-white/10 transition-colors"
                  style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <Icon size={15} color="#6b7280" />
                </button>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">Shop</h4>
            <ul className="space-y-3">
              {["New Arrivals", "Men", "Women", "Collections", "Sale", "Gift Cards"].map(link => (
                <li key={link}>
                  <button className="text-gray-500 hover:text-white text-sm transition-colors">{link}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Experience */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">Experience</h4>
            <ul className="space-y-3">
              {["3D Viewer", "Virtual Try-On", "Customize", "Size Guide", "Lookbook", "Sustainability"].map(link => (
                <li key={link}>
                  <button className="text-gray-500 hover:text-white text-sm transition-colors">{link}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">Support</h4>
            <ul className="space-y-3">
              {["FAQ", "Shipping & Returns", "Order Tracking", "Contact Us", "Privacy Policy", "Terms"].map(link => (
                <li key={link}>
                  <button className="text-gray-500 hover:text-white text-sm transition-colors">{link}</button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
        >
          <p className="text-gray-600 text-xs tracking-wide">
            © 2025 NEOMA. All rights reserved. Fashion in a new dimension.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Cookies"].map(link => (
              <button key={link} className="text-gray-600 hover:text-gray-400 text-xs tracking-wide transition-colors">
                {link}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
