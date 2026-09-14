"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { ArrowRight, RotateCcw, Maximize2 } from "lucide-react";

const Scene3D = dynamic(() => import("./Scene3D"), { ssr: false });

const productImages = [
  "https://images.pexels.com/photos/19461584/pexels-photo-19461584.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/35240866/pexels-photo-35240866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/27988921/pexels-photo-27988921.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/9099873/pexels-photo-9099873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
];

export default function HeroSection() {
  const [activeThumb, setActiveThumb] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        height: "100vh",
        minHeight: "700px",
        background: "linear-gradient(135deg, #060810 0%, #080c18 50%, #060810 100%)",
      }}
    >
      {/* 3D Canvas Background */}
      <div className="canvas-container">
        {mounted && <Scene3D />}
      </div>

      {/* Background image overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Hero background"
          fill
          className="object-cover"
          style={{ opacity: 0.35 }}
          priority
        />
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to right, rgba(6,8,16,0.95) 0%, rgba(6,8,16,0.5) 50%, rgba(6,8,16,0.4) 100%)"
        }} />
      </div>

      {/* Scanline effect */}
      <div className="scanline-container z-10" />

      {/* Main content */}
      <div className="relative z-20 flex items-center h-full px-6 md:px-16 pt-20">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* LEFT: Text */}
          <div className="animate-slide-up">
            {/* Pre-label */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-px" style={{ background: "rgba(80,120,255,0.6)" }} />
              <span className="text-xs tracking-[0.3em] uppercase text-gray-400">Fashion Meets Technology</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-bold leading-none mb-6 text-white">
              WEAR<br />
              <span className="gradient-text">BEYOND</span><br />
              REALITY
            </h1>

            <p className="text-gray-400 text-base md:text-lg mb-8 max-w-md leading-relaxed">
              Explore. Customize. Experience in 3D.
              <br />
              <span className="text-gray-500 text-sm">Clothes for a brighter tomorrow.</span>
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <button
                className="btn-neon flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide text-black"
                style={{ background: "white" }}
              >
                Shop Collection
                <ArrowRight size={16} />
              </button>
              <button
                className="btn-neon flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide text-white"
                style={{ border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.04)" }}
              >
                3D Viewer
                <RotateCcw size={16} />
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-10">
              {[
                { value: "50K+", label: "Products" },
                { value: "360°", label: "3D View" },
                { value: "AR", label: "Try-On" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-500 tracking-widest uppercase">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: 3D Product Display */}
          <div className="relative flex items-center justify-center h-[500px]">
            {/* Orbit rings */}
            <div className="orbit-ring" />
            <div className="orbit-ring-2" />

            {/* Glow */}
            <div className="absolute"
              style={{
                width: "400px",
                height: "400px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(60,100,255,0.12) 0%, transparent 70%)",
              }} />

            {/* Main product image */}
            <div
              className="relative animate-float z-10"
              style={{
                width: "320px",
                height: "380px",
              }}
            >
              {/* Platform */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2"
                style={{
                  width: "260px",
                  height: "12px",
                  background: "radial-gradient(ellipse, rgba(80,140,255,0.5) 0%, transparent 70%)",
                  filter: "blur(6px)",
                  borderRadius: "50%",
                }}
              />

              <Image
                src="/images/hero-product.png"
                alt="Featured Product"
                fill
                className="object-contain"
                style={{
                  filter: "drop-shadow(0 20px 40px rgba(80,120,255,0.3))",
                }}
                priority
              />

              {/* Corner brackets on product */}
              <div className="bracket-tl" />
              <div className="bracket-tr" />
              <div className="bracket-bl" />
              <div className="bracket-br" />
            </div>

            {/* 360° badge */}
            <div
              className="absolute top-8 right-8 flex flex-col items-center justify-center w-16 h-16 rounded-full animate-pulse-glow"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.15)",
                backdropFilter: "blur(10px)",
              }}
            >
              <RotateCcw size={16} color="white" />
              <span className="text-[9px] text-white mt-0.5 font-semibold tracking-wider">360°</span>
            </div>

            {/* Expand badge */}
            <div
              className="absolute bottom-10 right-8 flex items-center justify-center w-10 h-10 rounded-full cursor-pointer hover:bg-white/10 transition-colors"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <Maximize2 size={14} color="#9ca3af" />
            </div>

            {/* Thumbnail strip */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-2">
              {productImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveThumb(i)}
                  className="relative w-14 h-14 rounded-xl overflow-hidden transition-all duration-200"
                  style={{
                    border: activeThumb === i ? "1px solid rgba(255,255,255,0.4)" : "1px solid rgba(255,255,255,0.08)",
                    opacity: activeThumb === i ? 1 : 0.5,
                  }}
                >
                  <Image src={img} alt={`Thumb ${i}`} fill className="object-cover" sizes="56px" />
                </button>
              ))}
            </div>

            {/* Scroll hint */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
              <span className="text-[9px] tracking-[0.25em] uppercase text-gray-500">Scroll to Explore</span>
              <div className="w-px h-6" style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
