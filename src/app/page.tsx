"use client";

import dynamic from "next/dynamic";
import { ArrowUpRight, Code2, Cpu, Layers3 } from "lucide-react";

const Scene3D = dynamic(() => import("@/components/Scene3D"), { ssr: false });

const services = [
  { icon: Code2, title: "Web Experiences", text: "High-performance websites with rich motion, polished interfaces and responsive engineering." },
  { icon: Layers3, title: "Digital Systems", text: "Dashboards, internal tools and connected software designed around real operational workflows." },
  { icon: Cpu, title: "AI & Automation", text: "Practical AI integrations and automation that reduce repetitive work and make products feel smarter." },
];

export default function Home() {
  return <main className="site-shell">
    <div className="noise" />
    <nav className="navbar">
      <a className="brand" href="#top"><span className="brand-mark"><span>E</span></span> ERGONIX</a>
      <div className="nav-links"><a className="nav-link" href="#services">Services</a><a className="nav-link" href="#approach">Approach</a><a className="nav-link" href="#contact">Contact</a></div>
      <a className="nav-cta" href="#contact">Start a project ↗</a>
    </nav>

    <section className="hero" id="top">
      <div className="hero-glow" style={{left:"-260px", top:"12%"}} />
      <div className="hero-copy animate-slide-up">
        <span className="eyebrow"><span className="eyebrow-dot" /> Digital engineering studio</span>
        <h1>Ideas built into <span className="gradient-text">reality.</span></h1>
        <p>We create modern websites, software systems and intelligent digital experiences that look sharp, run fast and feel deliberately engineered.</p>
        <div className="hero-actions">
          <a className="primary-btn btn-neon" href="#contact">Build with us <ArrowUpRight size={16}/></a>
          <a className="secondary-btn" href="#services">Explore capabilities</a>
        </div>
      </div>
      <div className="hero-visual animate-fade-in">
        <div className="hero-canvas"><Scene3D /></div>
        <div className="hero-card card-3d">
          <div className="hero-card-top"><span>System status</span><span>Live</span></div>
          <div className="metric"><strong>99.9%</strong><span>optimized delivery</span></div>
        </div>
      </div>
      <div className="ticker"><div className="ticker-track"><span>Web engineering</span><span>3D experiences</span><span>AI integration</span><span>software systems</span><span>product design</span><span>Web engineering</span><span>3D experiences</span><span>AI integration</span><span>software systems</span><span>product design</span></div></div>
    </section>

    <section className="section" id="services">
      <div className="section-head">
        <div><div className="section-kicker">Capabilities / 01</div><h2>Built for the modern web.</h2></div>
        <p className="section-note">From the first screen to the backend logic, every layer is designed to work together—not just look good in a mockup.</p>
      </div>
      <div className="services">
        {services.map((item, i) => <article className="service product-card" key={item.title}><item.icon size={22} strokeWidth={1.4}/><div className="service-index">0{i+1}</div><h3>{item.title}</h3><p>{item.text}</p></article>)}
      </div>
    </section>

    <section className="section" id="approach">
      <div className="section-head"><div><div className="section-kicker">Approach / 02</div><h2>Less noise. More working product.</h2></div><p className="section-note">Clear structure, responsive behavior, practical technology choices and details that make the final result feel premium.</p></div>
      <div className="cta-panel glow-ring" id="contact">
        <div><div className="section-kicker">Have something in mind?</div><h3>Let’s turn the idea into something people can actually use.</h3></div>
        <a className="primary-btn" href="#top">Start a conversation <ArrowUpRight size={16}/></a>
      </div>
    </section>

    <footer className="footer"><span>© 2026 ERGONIX</span><span>Designed & engineered for the web.</span></footer>
  </main>;
}
