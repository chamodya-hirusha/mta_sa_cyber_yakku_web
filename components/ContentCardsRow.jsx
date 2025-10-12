import React from 'react';

const cards = [
  {
    icon: '👨‍💼',
    title: 'CYBER AGENT SKIN',
    desc: 'Premium character skin with exclusive animations and effects',
    bg: 'bg-slate-400/50',
    grad: 'from-blue-500/20 to-purple-500/20',
  },
  {
    icon: '🏎️',
    title: 'NEON RACER VEHICLE',
    desc: 'High-speed racing vehicle with neon lighting effects',
    bg: 'bg-slate-800/50',
    grad: 'from-red-500/20 to-orange-500/20',
  },
  {
    icon: '💰',
    title: 'CURRENCY PACKAGE',
    desc: 'Get more credits with our special currency bundles',
    bg: 'bg-slate-800/50',
    grad: 'from-green-500/20 to-teal-500/20',
  },
  {
    icon: '⭐',
    title: 'PREMIUM BUNDLE',
    desc: 'Exclusive bundle with multiple premium items',
    bg: 'bg-slate-800/50',
    grad: 'from-pink-500/20 to-purple-500/20',
  },
    {
    icon: '⭐',
    title: 'PREMIUM BUNDLE',
    desc: 'Exclusive bundle with multiple premium items',
    bg: 'bg-slate-800/50',
    grad: 'from-pink-500/20 to-purple-500/20',
  },
];

export default function ContentCardsRow() {
  return (
<div className="mt-2">
  <div className="flex gap-2 sm:gap-2.5 md:gap-3 lg:gap-4 xl:gap-4 overflow-x-auto pb-2 sm:pb-2 md:pb-3 lg:pb-3 xl:pb-3 scrollbar-hide snap-x snap-mandatory">
    {cards.map((card, i) => (
      <div
        key={i}
        className={`flex-shrink-0 w-36 sm:w-40 md:w-44 lg:w-52 xl:w-56 ${card.bg} rounded-md sm:rounded-lg md:rounded-lg lg:rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 snap-start`}
      >
        <div className={`h-20 sm:h-22 md:h-24 lg:h-28 xl:h-32 bg-gradient-to-br ${card.grad} flex items-center justify-center`}>
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl">{card.icon}</div>
        </div>
        <div className="p-2 sm:p-2.5 md:p-3 lg:p-3 xl:p-3.5">
          <h3 className="text-xs sm:text-sm md:text-sm lg:text-base xl:text-base font-bold text-white mb-1 leading-tight">
            {card.title}
          </h3>
          <p className="text-[10px] sm:text-xs md:text-xs lg:text-sm xl:text-sm text-gray-400 leading-snug">
            {card.desc}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>

  );
}
