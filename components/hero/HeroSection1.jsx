import React from 'react';
import HeroContent1 from './section1/HeroContent1';
import HeroImage1 from './section1/HeroImage1';
import { heroSection1 } from '../../lib/heroData';

export default function HeroSection1() {
  return (
    <div className="w-full group bg-gradient-to-br rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10 cursor-pointer relative overflow-hidden touch-manipulation [-webkit-tap-highlight-color:transparent]">
      <div className="relative bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900
      rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden border border-purple-500/30 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 backdrop-blur-sm"
      style={{ WebkitOverflowScrolling: 'touch' }}>

        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-red-600/10 animate-pulse"></div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0 min-h-0">
          <HeroContent1 data={heroSection1} />
          <HeroImage1 data={heroSection1} />
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

      </div>
    </div>
  );
}