"use client";
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';

export default function ProductCarousel({ title, icon, products, addToCart }) {
  const [pos, setPos] = useState(0);
  const itemWidth = 280;

  const scroll = (direction) => {
    if (direction === 'left') {
      setPos(Math.max(0, pos - itemWidth));
    } else {
      setPos(Math.min((products.length - 6) * itemWidth, pos + itemWidth));
    }
  };

  return (
    <div className="mb-12">
      <div className="flex items-center gap-2 mb-6">
        <span className="text-xl">{icon}</span>
        <h2 className="text-2xl font-bold text-white">{title}</h2>
      </div>
      <div className="relative">
        <button
          onClick={() => scroll('left')}
          disabled={pos === 0}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 
            bg-gradient-to-r from-purple-600 to-red-600 rounded-lg transition-all 
            ${pos === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:from-purple-700 hover:to-red-700'}`}
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <div className="overflow-hidden rounded-xl">
          <div
            className="flex gap-4 transition-transform duration-300"
            style={{ transform: `translateX(-${pos}px)` }}
          >
            {products.map(product => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
          </div>
        </div>
        <button
          onClick={() => scroll('right')}
          disabled={products.length <= 6 || pos >= (products.length - 6) * itemWidth}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 
            bg-gradient-to-r from-purple-600 to-red-600 rounded-lg transition-all
            ${products.length <= 6 || pos >= (products.length - 6) * itemWidth ? 'opacity-30 cursor-not-allowed' : 'hover:from-purple-700 hover:to-red-700'}`}
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
}
