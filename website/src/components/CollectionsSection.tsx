"use client";

import { useState } from "react";
import Image from "next/image";

const collections = [
  { name: "Casual", img: "https://images.pexels.com/photos/19461584/pexels-photo-19461584.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280" },
  { name: "Streetwear", img: "https://images.pexels.com/photos/29113506/pexels-photo-29113506.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280" },
  { name: "Formal", img: "https://images.pexels.com/photos/2416871/pexels-photo-2416871.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280" },
  { name: "Sports", img: "https://images.pexels.com/photos/28666269/pexels-photo-28666269.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280" },
  { name: "Outerwear", img: "https://images.pexels.com/photos/20248582/pexels-photo-20248582.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280" },
  { name: "Footwear", img: "https://images.pexels.com/photos/27988921/pexels-photo-27988921.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280" },
  { name: "Accessories", img: "https://images.pexels.com/photos/27988923/pexels-photo-27988923.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280" },
  { name: "Seasonal", img: "https://images.pexels.com/photos/34110542/pexels-photo-34110542.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280" },
  { name: "Limited", img: "https://images.pexels.com/photos/9099873/pexels-photo-9099873.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280" },
  { name: "Sustainable", img: "https://images.pexels.com/photos/1649673/pexels-photo-1649673.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280" },
];

export default function CollectionsSection() {
  const [active, setActive] = useState("Streetwear");

  return (
    <section
      className="w-full py-20"
      style={{ background: "#080a0f" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px" style={{ background: "rgba(80,120,255,0.5)" }} />
              <span className="text-xs tracking-[0.3em] uppercase text-gray-500">Browse</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Collection Types</h2>
          </div>
          <button className="hidden md:block text-xs text-gray-500 hover:text-white transition-colors tracking-widest uppercase border-b border-gray-700 pb-0.5">
            View All →
          </button>
        </div>

        {/* Collection grid */}
        <div className="grid grid-cols-5 md:grid-cols-10 gap-3">
          {collections.map((col) => (
            <button
              key={col.name}
              onClick={() => setActive(col.name)}
              className="collection-item flex flex-col items-center gap-2 group"
            >
              <div
                className="relative w-full aspect-square rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  border: active === col.name ? "1px solid rgba(255,255,255,0.3)" : "1px solid rgba(255,255,255,0.06)",
                  boxShadow: active === col.name ? "0 0 20px rgba(80,120,255,0.15)" : "none",
                }}
              >
                <Image
                  src={col.img}
                  alt={col.name}
                  fill
                  className="object-cover transition-transform duration-400 group-hover:scale-110"
                  sizes="(max-width: 768px) 20vw, 100px"
                />
                <div className="absolute inset-0 transition-opacity duration-300"
                  style={{
                    background: active === col.name
                      ? "linear-gradient(to top, rgba(60,100,255,0.3), transparent)"
                      : "linear-gradient(to top, rgba(0,0,0,0.4), transparent)",
                  }}
                />
              </div>
              <span
                className="text-[10px] font-medium transition-colors duration-200"
                style={{ color: active === col.name ? "white" : "#6b7280" }}
              >
                {col.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
