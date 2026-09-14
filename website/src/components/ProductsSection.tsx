"use client";

import { useState } from "react";
import { Filter, SlidersHorizontal } from "lucide-react";
import ProductCard3D from "./ProductCard3D";

const products = [
  {
    id: 1,
    name: "Urban Stealth Hoodie",
    price: 189,
    originalPrice: 249,
    category: "Streetwear",
    rating: 4.8,
    reviews: 342,
    image: "https://images.pexels.com/photos/19461584/pexels-photo-19461584.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    badge: "HOT",
    colors: ["#1a1a1a", "#f5f0e8", "#4a6080"],
  },
  {
    id: 2,
    name: "Shadow Runner Pro",
    price: 245,
    category: "Footwear",
    rating: 4.9,
    reviews: 567,
    image: "https://images.pexels.com/photos/27988921/pexels-photo-27988921.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    badge: "NEW",
    colors: ["#000000", "#b0c0d0", "#8060a0"],
  },
  {
    id: 3,
    name: "Lunar Cargo Jacket",
    price: 320,
    originalPrice: 420,
    category: "Outerwear",
    rating: 4.7,
    reviews: 218,
    image: "https://images.pexels.com/photos/9099873/pexels-photo-9099873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    badge: "SALE",
    colors: ["#2a2a2a", "#1a2a3a", "#3a2a1a"],
  },
  {
    id: 4,
    name: "Neon Pulse Sneakers",
    price: 178,
    category: "Footwear",
    rating: 4.6,
    reviews: 189,
    image: "https://images.pexels.com/photos/27988923/pexels-photo-27988923.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    badge: "NEW",
    colors: ["#c0c8d0", "#e8c8a0", "#b0d0c0"],
  },
  {
    id: 5,
    name: "Void Tech Bomber",
    price: 289,
    category: "Outerwear",
    rating: 4.8,
    reviews: 412,
    image: "https://images.pexels.com/photos/29113506/pexels-photo-29113506.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    colors: ["#cc2020", "#1a1a1a", "#2a2a2a"],
  },
  {
    id: 6,
    name: "Eclipse Tee Collection",
    price: 89,
    originalPrice: 120,
    category: "Casual",
    rating: 4.5,
    reviews: 823,
    image: "https://images.pexels.com/photos/20248582/pexels-photo-20248582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    badge: "HOT",
    colors: ["#ffffff", "#1a1a1a", "#4a6080"],
  },
  {
    id: 7,
    name: "Quantum Cargo Pants",
    price: 165,
    category: "Streetwear",
    rating: 4.7,
    reviews: 294,
    image: "https://images.pexels.com/photos/28666269/pexels-photo-28666269.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    colors: ["#3a3a3a", "#4a5040", "#2a3a4a"],
  },
  {
    id: 8,
    name: "Neo Formal Blazer",
    price: 450,
    category: "Formal",
    rating: 4.9,
    reviews: 156,
    image: "https://images.pexels.com/photos/1649673/pexels-photo-1649673.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    badge: "NEW",
    colors: ["#1a1a1a", "#2a2040", "#1a2a1a"],
  },
];

const filterTabs = ["All", "Streetwear", "Footwear", "Outerwear", "Casual", "Formal"];

export default function ProductsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [cart, setCart] = useState<number[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [sortBy, setSortBy] = useState("popular");

  const filtered = activeFilter === "All"
    ? products
    : products.filter(p => p.category === activeFilter);

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return b.reviews - a.reviews;
  });

  const handleAddToCart = (id: number) => {
    setCart(prev => [...prev, id]);
  };

  const handleWishlist = (id: number) => {
    setWishlist(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <section
      className="w-full py-20"
      style={{ background: "linear-gradient(180deg, #080a0f 0%, #0a0c18 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px" style={{ background: "rgba(80,120,255,0.5)" }} />
              <span className="text-xs tracking-[0.3em] uppercase text-gray-500">Catalogue</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Products</h2>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-3">
            <SlidersHorizontal size={14} color="#6b7280" />
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="text-xs text-gray-400 bg-transparent border-none outline-none cursor-pointer"
            >
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 flex-wrap mb-10">
          {filterTabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className="category-chip px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200"
              style={{
                background: activeFilter === tab ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.03)",
                border: activeFilter === tab ? "1px solid rgba(255,255,255,0.2)" : "1px solid rgba(255,255,255,0.06)",
                color: activeFilter === tab ? "white" : "#6b7280",
              }}
            >
              {tab}
            </button>
          ))}
          <div className="ml-auto flex items-center gap-1 text-xs text-gray-500">
            <Filter size={12} />
            <span>{sorted.length} items</span>
          </div>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {sorted.map(product => (
            <ProductCard3D
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              onWishlist={handleWishlist}
              isWishlisted={wishlist.includes(product.id)}
            />
          ))}
        </div>

        {/* Load more */}
        <div className="flex justify-center mt-12">
          <button
            className="btn-neon px-10 py-3.5 rounded-full text-sm font-semibold text-white tracking-wide transition-all duration-300 hover:bg-white/10"
            style={{ border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.04)" }}
          >
            Load More Products
          </button>
        </div>
      </div>
    </section>
  );
}
