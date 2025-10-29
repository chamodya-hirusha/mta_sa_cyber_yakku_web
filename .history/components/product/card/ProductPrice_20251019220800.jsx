export default function ProductPrice({ product }) {
  return (
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
  );
}