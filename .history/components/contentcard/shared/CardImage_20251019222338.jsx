export default function CardImage({ card, isMobile = false, heightClass = 'h-48' }) {
  return (
    <div className={`${heightClass} bg-gradient-to-br ${card.grad} relative overflow-hidden group`}>
      <img
        src={card.image}
        alt={card.title}
        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
      <div className={`absolute inset-0 bg-gradient-to-br ${card.grad} ${isMobile ? '' : 'opacity-60 group-hover:opacity-40 transition-opacity duration-500'}`}></div>

      {/* Icon Overlay */}
      <div className={`absolute top-3 right-3 ${isMobile ? 'text-4xl' : 'top-4 right-4 text-5xl lg:text-6xl'} drop-shadow-2xl opacity-90 ${isMobile ? '' : 'group-hover:scale-110 transition-transform duration-300'}`}>
        {card.icon}
      </div>

      {/* Price Badge */}
      <div className={`absolute bottom-3 left-3 ${isMobile ? 'bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-purple-400/30' : 'bottom-4 left-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-purple-400/30'}`}>
        <span className={`text-purple-300 font-bold ${isMobile ? 'text-sm' : ''}`}>$9.99</span>
      </div>
    </div>
  );
}