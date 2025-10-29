import React from 'react';

const cards = [
  {
  
    title: 'CYBER AGENT SKIN',
    desc: 'Premium character skin with exclusive animations and effects',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop',
    bg: 'bg-slate-800/50',
    grad: 'from-blue-500/20 to-purple-500/20',
  },
  {

    title: 'NEON RACER VEHICLE',
    desc: 'High-speed racing vehicle with neon lighting effects',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=400&h=300&fit=crop',
    bg: 'bg-slate-800/50',
    grad: 'from-red-500/20 to-orange-500/20',
  },
  {
   
    title: 'PREMIUM BUNDLE',
    desc: 'Exclusive bundle with multiple premium items',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop',
    bg: 'bg-slate-800/50',
    grad: 'from-pink-500/20 to-purple-500/20',
  },
  {

    title: 'WEAPON SKINS',
    desc: 'Customize your arsenal with legendary weapon designs',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop',
    bg: 'bg-slate-800/50',
    grad: 'from-cyan-500/20 to-blue-500/20',
  }
];

export default function ContentCardsRow() {
  return (
    <div className="w-full group bg-gradient-to-br from-slate-900/50 to-purple-900/20 border border-purple-500/20 hover:border-red-400/50 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10 cursor-pointer relative overflow-hidden touch-manipulation [-webkit-tap-highlight-color:transparent]">
      <div className="max-w-7xl mx-auto">
        {/* Mobile: Diverse Horizontal Scroll with Varied Sizes */}
        <div className="md:hidden">
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory scroll-smooth">
            {cards.map((card, i) => {
              // Create diverse card widths for mobile
              const widths = ['w-72', 'w-64', 'w-80', 'w-64', 'w-72', 'w-68'];
              const heights = ['h-48', 'h-44', 'h-52', 'h-44', 'h-48', 'h-46'];
              
              return (
                <div
                  key={i}
                  className={`flex-shrink-0 ${widths[i % widths.length]} ${card.bg} rounded-xl overflow-hidden border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 snap-start backdrop-blur-sm shadow-lg hover:shadow-purple-500/20`}
                >
                  {/* Image Section */}
                  <div className={`${heights[i % heights.length]} bg-gradient-to-br ${card.grad} relative overflow-hidden group`}>
                    <img 
                      src={card.image} 
                      alt={card.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${card.grad}`}></div>
                    
                    {/* Icon Overlay */}
                    <div className="absolute top-3 right-3 text-4xl drop-shadow-2xl opacity-90">
                      {card.icon}
                    </div>
                    
                    {/* Price Badge */}
                    <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-purple-400/30">
                      <span className="text-purple-300 font-bold text-sm">$9.99</span>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-4 bg-slate-900/80 backdrop-blur-sm">
                    <h3 className="text-sm font-bold text-white mb-2 leading-tight tracking-wide line-clamp-1">
                      {card.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">
                      {card.desc}
                    </p>
                    <button className="mt-3 w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-xs font-semibold py-2 rounded-lg transition-all duration-300 hover:scale-105">
                      Get Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Mobile Scroll Indicator */}
          <div className="flex justify-center gap-1.5 mt-4">
            {cards.map((_, i) => (
              <div 
                key={i} 
                className="w-1.5 h-1.5 rounded-full bg-purple-500/40 transition-all duration-300"
              ></div>
            ))}
          </div>
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`${card.bg} rounded-xl overflow-hidden border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 backdrop-blur-sm cursor-pointer group`}
            >
              {/* Image Section */}
              <div className={`h-48 lg:h-52 bg-gradient-to-br ${card.grad} relative overflow-hidden`}>
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className={`absolute inset-0 bg-gradient-to-br ${card.grad} opacity-60 group-hover:opacity-40 transition-opacity duration-500`}></div>
                
                {/* Icon Overlay */}
                <div className="absolute top-4 right-4 text-5xl lg:text-6xl drop-shadow-2xl opacity-90 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                
                {/* Price Badge */}
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-purple-400/30">
                  <span className="text-purple-300 font-bold">$9.99</span>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-5 bg-slate-900/80 backdrop-blur-sm">
                <h3 className="text-lg font-bold text-white mb-2 leading-tight tracking-wide">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                  {card.desc}
                </p>
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-sm font-semibold py-2.5 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/30">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}