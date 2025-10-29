import React from 'react';
import { Star, ChevronRight, ShoppingCart } from 'lucide-react';
import Image from 'next/image';

export default function ProductCard({ product = { name: 'Premium Headphones', image: '🎧', price: 199.99, rating: 4, sales: 1250, discount: 15 }, addToCart = () => {} }) {
  return (
    <div className="w-full group bg-gradient-to-br rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10 cursor-pointer relative overflow-hidden touch-manipulation [-webkit-tap-highlight-color:transparent]">
      {/* Discount Badge */}
      {product.discount > 0 && (
        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-gradient-to-r from-red-500 to-pink-500 px-2 py-1 sm:px-3 rounded-full text-xs font-bold text-white shadow-lg">
          -{product.discount}%
        </div>
      )}

      {/* Product Image */}
      <div className="relative mb-4 sm:mb-5 h-28 sm:h-32 md:h-40 lg:h-40 flex items-center justify-center bg-gradient-to-br from-purple-500/10 to-red-500/10 rounded-lg overflow-hidden">
        {product.image && product.image.startsWith('http') ? (
          <Image
            // src={product.image}
            // alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
          />
        ) : (
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl group-hover:scale-110 transition-transform duration-300 select-none">
            {product.image}
          </div>
        )}
      </div>

      {/* Product Name */}
      <h3 className="font-bold text-white mb-3 text-sm sm:text-base md:text-lg line-clamp-2">{product.name}</h3>

      {/* Rating and Sales */}
      <div className="flex items-center gap-2 mb-4">
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-colors ${
                i < Math.floor(product.rating)
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-gray-600'
              }`}
            />
          ))}
        </div>
        <span className="text-xs sm:text-sm md:text-sm text-gray-400">({(product.sales || 0).toLocaleString()})</span>
      </div>

      {/* Price and Add to Cart */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <span className="text-base sm:text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-red-400">
            ${product.price?.toFixed(2) || '0.00'}
          </span>
          {product.discount > 0 && (
            <span className="text-xs sm:text-sm text-gray-500 line-through">
              ${(product.price / (1 - product.discount / 100)).toFixed(2)}
            </span>
          )}
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            addToCart?.(product);
          }}
          className="p-3 bg-gradient-to-r from-purple-500 to-red-500 hover:from-purple-600 hover:to-red-600 text-white rounded-lg transition-all hover:scale-110 active:scale-95 shadow-lg touch-manipulation [-webkit-tap-highlight-color:transparent] min-h-[48px] min-w-[48px] flex items-center justify-center"
          aria-label="Add to cart"
        >
          <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>
  );
}