"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, ShoppingBag, Eye, Star } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  colors: string[];
}

interface ProductCard3DProps {
  product: Product;
  onAddToCart: (id: number) => void;
  onWishlist: (id: number) => void;
  isWishlisted: boolean;
}

export default function ProductCard3D({ product, onAddToCart, onWishlist, isWishlisted }: ProductCard3DProps) {
  const [hovered, setHovered] = useState(false);
  const [selectedColor, setSelectedColor] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setAddedToCart(true);
    onAddToCart(product.id);
    setTimeout(() => setAddedToCart(false), 1500);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div
      className="product-card relative rounded-2xl overflow-hidden cursor-pointer select-none"
      style={{
        background: "rgba(15, 18, 28, 0.9)",
        border: "1px solid rgba(255,255,255,0.06)",
        transform: hovered ? "translateY(-10px) scale(1.02)" : "translateY(0) scale(1)",
        transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
        boxShadow: hovered
          ? "0 30px 60px rgba(0,0,0,0.5), 0 0 40px rgba(60,100,255,0.08)"
          : "0 4px 20px rgba(0,0,0,0.3)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Corner brackets */}
      <div className="bracket-tl" />
      <div className="bracket-tr" />
      <div className="bracket-bl" />
      <div className="bracket-br" />

      {/* Badge */}
      {product.badge && (
        <div
          className="absolute top-3 left-3 z-20 px-2 py-1 rounded-md text-[10px] font-semibold tracking-wider uppercase"
          style={{
            background: product.badge === "NEW" ? "rgba(60,200,100,0.9)" :
              product.badge === "HOT" ? "rgba(255,80,60,0.9)" :
              "rgba(80,120,255,0.9)",
          }}
        >
          {product.badge}
        </div>
      )}

      {/* Discount badge */}
      {discount > 0 && (
        <div className="absolute top-3 right-3 z-20 px-2 py-1 rounded-md text-[10px] font-semibold"
          style={{ background: "rgba(255,80,60,0.9)" }}>
          -{discount}%
        </div>
      )}

      {/* Wishlist button */}
      <button
        onClick={(e) => { e.stopPropagation(); onWishlist(product.id); }}
        className="absolute top-10 right-3 z-20 p-2 rounded-full transition-all duration-200"
        style={{
          background: isWishlisted ? "rgba(255,60,100,0.8)" : "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <Heart size={14} fill={isWishlisted ? "white" : "none"} color="white" />
      </button>

      {/* Image area */}
      <div className="relative h-56 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0a0d1a 0%, #111827 100%)" }}>
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            background: "radial-gradient(circle at 50% 60%, rgba(60,100,255,0.1) 0%, transparent 70%)",
            opacity: hovered ? 1 : 0.5,
          }}
        />
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500"
          style={{ transform: hovered ? "scale(1.08)" : "scale(1)" }}
          sizes="(max-width: 768px) 100vw, 300px"
        />

        {/* Quick view overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
          style={{
            background: "rgba(0,0,0,0.4)",
            opacity: hovered ? 1 : 0,
          }}
        >
          <button className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
            style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", backdropFilter: "blur(10px)" }}>
            <Eye size={14} />
            Quick View
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">{product.category}</div>
        <h3 className="text-white font-semibold text-sm mb-2 truncate">{product.name}</h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={10}
              fill={i < Math.floor(product.rating) ? "#fbbf24" : "none"}
              color={i < Math.floor(product.rating) ? "#fbbf24" : "#4b5563"}
            />
          ))}
          <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
        </div>

        {/* Colors */}
        <div className="flex gap-1.5 mb-3">
          {product.colors.map((color, i) => (
            <button
              key={i}
              onClick={() => setSelectedColor(i)}
              className="w-4 h-4 rounded-full transition-all duration-200"
              style={{
                background: color,
                border: selectedColor === i ? "2px solid white" : "2px solid transparent",
                outline: selectedColor === i ? "1px solid rgba(255,255,255,0.3)" : "none",
                outlineOffset: "1px",
              }}
            />
          ))}
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-white font-bold text-base">${product.price}</span>
            {product.originalPrice && (
              <span className="text-gray-500 line-through text-xs ml-2">${product.originalPrice}</span>
            )}
          </div>
          <button
            onClick={handleAddToCart}
            className="btn-neon flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-300"
            style={{
              background: addedToCart ? "rgba(60,200,100,0.8)" : "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "white",
            }}
          >
            <ShoppingBag size={13} />
            {addedToCart ? "Added!" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
}
