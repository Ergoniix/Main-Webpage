"use client";

import dynamic from "next/dynamic";
import HeroSection from "@/components/HeroSection";
import CollectionsSection from "@/components/CollectionsSection";
import FooterSection from "@/components/FooterSection";
import TopBar from "@/components/TopBar";
import SidebarNav from "@/components/SidebarNav";
import Navbar from "@/components/Navbar";

const FeaturesSection = dynamic(() => import("@/components/FeaturesSection"), { ssr: false });
const ProductsSection = dynamic(() => import("@/components/ProductsSection"), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: "#080a0f" }}>
      {/* Top bar navigation */}
      <TopBar />

      {/* Main navbar */}
      <div className="lg:pt-[52px]">
        <Navbar cartCount={3} wishlistCount={2} />
      </div>

      {/* Sidebar navigations */}
      <SidebarNav />

      {/* Hero */}
      <HeroSection />

      {/* Features: 3D View, Try-On, Customize, Mix & Match */}
      <FeaturesSection />

      {/* Collections */}
      <CollectionsSection />

      {/* Products */}
      <ProductsSection />

      {/* Footer */}
      <FooterSection />
    </main>
  );
}
