import Image from 'next/image';

export default function ProductImage({ product }) {
  return (
    <div className="relative mb-4 sm:mb-5 h-28 sm:h-32 md:h-40 lg:h-40 flex items-center justify-center bg-gradient-to-br from-purple-500/10 to-red-500/10 rounded-lg overflow-hidden">
      {product.image && product.image.startsWith('http') ? (
        <Image
          src={product.image}
          alt={product.name}
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
  );
}