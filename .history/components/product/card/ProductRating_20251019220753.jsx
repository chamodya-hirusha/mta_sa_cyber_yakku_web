import { Star } from 'lucide-react';

export default function ProductRating({ product }) {
  return (
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
  );
}