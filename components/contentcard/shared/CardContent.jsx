export default function CardContent({ card, isMobile = false }) {
  return (
    <div className={`${isMobile ? 'p-4 bg-slate-900/80 backdrop-blur-sm' : 'p-5 bg-slate-900/80 backdrop-blur-sm'}`}>
      <h3 className={`${isMobile ? 'text-sm font-bold text-white mb-2 leading-tight tracking-wide line-clamp-1' : 'text-lg font-bold text-white mb-2 leading-tight tracking-wide'}`}>
        {card.title}
      </h3>
      <p className={`${isMobile ? 'text-xs text-gray-400 leading-relaxed line-clamp-2' : 'text-sm text-gray-400 leading-relaxed mb-4'}`}>
        {card.desc}
      </p>
      <button className={`${isMobile ? 'mt-3 w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-xs font-semibold py-2 rounded-lg transition-all duration-300 hover:scale-105' : 'w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-sm font-semibold py-2.5 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/30'}`}>
        {isMobile ? 'Get Now' : 'Add to Cart'}
      </button>
    </div>
  );
}