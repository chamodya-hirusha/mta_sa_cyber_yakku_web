import React from 'react';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import ProductImage from './card/ProductImage';
import ProductRating from './card/ProductRating';
import ProductPrice from './card/ProductPrice';

export default function ProductCard({ product = { name: 'Premium Headphones', image: '🎧', price: 199.99, rating: 4, sales: 1250, discount: 15 }, addToCart = () => {} }) {
  return (
    <div className="w-full group bg-gradient-to-br from-slate-900/50 to-purple-900/20 border border-purple-500/20 hover:border-red-400/50 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10 cursor-pointer relative overflow-hidden touch-manipulation [-webkit-tap-highlight-color:transparent]">
      {/* Discount Badge */}
      {product.discount > 0 && (
        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-gradient-to-r from-red-500 to-pink-500 px-2 py-1 sm:px-3 rounded-full text-xs font-bold text-white shadow-lg z-30">
          -{product.discount}%
        </div>
      )}

      {/* Clickable link for main content */}
      <Link 
        href={`/products/${product.id}`}
        className="block mb-4"
        aria-label={`View ${product.name}`}
      >
        <ProductImage product={product} />
        
        {/* Product Name */}
        <h3 className="font-bold text-white mb-3 text-sm sm:text-base md:text-lg line-clamp-2">{product.name}</h3>

        <ProductRating product={product} />
      </Link>

      {/* Price and Add to Cart - outside the link */}
      <div className="flex items-center justify-between gap-3">
        <ProductPrice product={product} />
        <button
          onClick={(e) => {
            e.preventDefault();
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