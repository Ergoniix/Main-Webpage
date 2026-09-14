"use client";

import { useState } from "react";
import Image from "next/image";
import { RotateCcw, Palette, Type, Layers } from "lucide-react";

const sizes = ["XS", "S", "M", "L", "XL"];
const customOptions = [
  { icon: Palette, label: "Color" },
  { icon: () => <span className="text-xs font-bold">Lo</span>, label: "Logo" },
  { icon: Type, label: "Text" },
  { icon: Layers, label: "Pattern" },
  { icon: () => <span className="text-xs font-bold">Fb</span>, label: "Fabric" },
];

export default function FeaturesSection() {
  const [selectedSize, setSelectedSize] = useState("L");
  const [rotation, setRotation] = useState(0);
  const [applied, setApplied] = useState(false);

  return (
    <section
      className="w-full py-24"
      style={{ background: "linear-gradient(180deg, #080a0f 0%, #0a0d1a 50%, #080a0f 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px" style={{ background: "rgba(80,120,255,0.4)" }} />
            <span className="text-xs tracking-[0.3em] uppercase text-gray-500">Experience</span>
            <div className="w-12 h-px" style={{ background: "rgba(80,120,255,0.4)" }} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Technology Features</h2>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

          {/* 3D Product View */}
          <div className="rounded-2xl overflow-hidden p-5 relative"
            style={{ background: "rgba(13, 17, 27, 0.9)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="bracket-tl" /><div className="bracket-tr" /><div className="bracket-bl" /><div className="bracket-br" />
            <div className="text-xs tracking-[0.2em] uppercase text-gray-400 font-semibold mb-4">3D Product View</div>

            <div className="relative h-40 flex items-center justify-center mb-4">
              <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle, rgba(40,80,200,0.08) 0%, transparent 70%)" }} />
              <Image
                src="/images/product-sneaker.png"
                alt="3D Sneaker"
                width={160}
                height={160}
                className="object-contain"
                style={{
                  transform: `rotate(${rotation}deg)`,
                  transition: "transform 0.3s ease",
                  filter: "drop-shadow(0 10px 20px rgba(60,100,255,0.3))",
                }}
              />
            </div>

            {/* Controls */}
            <div className="flex flex-col gap-2">
              {["Rotate", "Zoom", "Change Color", "View Details"].map((ctrl, i) => (
                <div key={ctrl} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(80,120,255,0.7)" }} />
                  <span className="text-xs text-gray-400">{ctrl}</span>
                </div>
              ))}
            </div>

            {/* Rotate control */}
            <button
              onClick={() => setRotation(r => r + 45)}
              className="mt-4 w-full py-2 rounded-lg text-xs text-white flex items-center justify-center gap-2 transition-colors hover:bg-white/5"
              style={{ border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <RotateCcw size={12} /> Rotate View
            </button>
          </div>

          {/* Virtual Try-On */}
          <div className="rounded-2xl overflow-hidden relative"
            style={{ background: "rgba(13, 17, 27, 0.9)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="bracket-tl" /><div className="bracket-tr" /><div className="bracket-bl" /><div className="bracket-br" />
            <div className="p-5 pb-0">
              <div className="text-xs tracking-[0.2em] uppercase text-gray-400 font-semibold mb-4">Virtual Try-On</div>
            </div>

            <div className="grid grid-cols-5 gap-0 px-5 mb-3">
              {sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedSize(s)}
                  className="size-btn py-1.5 rounded text-xs font-semibold transition-all duration-200"
                  style={{
                    background: selectedSize === s ? "white" : "rgba(255,255,255,0.05)",
                    color: selectedSize === s ? "black" : "#9ca3af",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {s}
                </button>
              ))}
            </div>

            {/* Person image */}
            <div className="relative h-52 overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/20248582/pexels-photo-20248582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Virtual Try On"
                fill
                className="object-cover object-top"
                sizes="300px"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,17,27,1) 0%, transparent 50%)" }} />

              {/* AR button */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
                <button
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white"
                  style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.2)" }}
                >
                  <span>⊕</span> Try in AR
                </button>
              </div>
            </div>
          </div>

          {/* Customize */}
          <div className="rounded-2xl overflow-hidden p-5 relative"
            style={{ background: "rgba(13, 17, 27, 0.9)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="bracket-tl" /><div className="bracket-tr" /><div className="bracket-bl" /><div className="bracket-br" />
            <div className="text-xs tracking-[0.2em] uppercase text-gray-400 font-semibold mb-4">Customize</div>

            {/* Hoodie image */}
            <div className="relative h-36 flex items-center justify-center mb-4">
              <div className="w-28 h-28 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(20,25,40,0.8)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <Image
                  src="https://images.pexels.com/photos/35240866/pexels-photo-35240866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="Customize"
                  width={96}
                  height={96}
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 text-center">
                <span className="text-[10px] text-gray-500 tracking-widest">YOUR DESIGN</span>
              </div>
            </div>

            {/* Custom options */}
            <div className="space-y-2 mb-4">
              {customOptions.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 py-1.5 px-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                    <Icon size={10} color="#9ca3af" />
                  </div>
                  <span className="text-xs text-gray-400">{label}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => { setApplied(true); setTimeout(() => setApplied(false), 1500); }}
              className="w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-300"
              style={{
                background: applied ? "rgba(60,200,100,0.8)" : "white",
                color: "black",
              }}
            >
              {applied ? "Applied!" : "Apply"}
            </button>
          </div>

          {/* Mix & Match */}
          <div className="rounded-2xl overflow-hidden p-5 relative"
            style={{ background: "rgba(13, 17, 27, 0.9)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="bracket-tl" /><div className="bracket-tr" /><div className="bracket-bl" /><div className="bracket-br" />
            <div className="text-xs tracking-[0.2em] uppercase text-gray-400 font-semibold mb-4">Mix & Match</div>

            {/* Outfit grid */}
            <div className="grid grid-cols-2 gap-2">
              <div className="col-span-1 row-span-2 rounded-xl overflow-hidden h-40 relative">
                <Image
                  src="https://images.pexels.com/photos/20248584/pexels-photo-20248584.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="Outfit 1"
                  fill
                  className="object-cover"
                  sizes="120px"
                />
              </div>
              <div className="rounded-xl overflow-hidden h-[76px] relative">
                <Image
                  src="https://images.pexels.com/photos/27988923/pexels-photo-27988923.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="Outfit 2"
                  fill
                  className="object-cover"
                  sizes="100px"
                />
              </div>
              <div className="rounded-xl overflow-hidden h-[76px] relative">
                <Image
                  src="https://images.pexels.com/photos/9099873/pexels-photo-9099873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="Outfit 3"
                  fill
                  className="object-cover object-top"
                  sizes="100px"
                />
              </div>
            </div>

            <div className="mt-4 text-center">
              <p className="text-xs text-gray-500 leading-relaxed uppercase tracking-widest">
                Fashion<br />In A<br />New Dimension
              </p>
              <div className="w-8 h-px mx-auto mt-2" style={{ background: "rgba(255,255,255,0.2)" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
