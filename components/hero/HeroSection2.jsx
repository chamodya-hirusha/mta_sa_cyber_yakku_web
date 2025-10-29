import React from 'react';
import HeroContent2 from './section2/HeroContent2';
import HeroImage2 from './section2/HeroImage2';
import { heroSection2 } from '../../lib/heroData';

export default function HeroSection2() {
  return (
    <div className="w-full group bg-gradient-to-br rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10 cursor-pointer relative overflow-hidden touch-manipulation [-webkit-tap-highlight-color:transparent]">
      <div className="relative bg-gradient-to-br from-red-950/40 via-purple-950/30 to-slate-900 rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden border border-red-500/30 shadow-2xl hover:shadow-red-500/20 transition-all duration-500 backdrop-blur-sm">

        {/* Animated background effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-purple-600/10 to-pink-600/10 animate-pulse"></div>

        {/* Diagonal stripes pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(239, 68, 68, 0.3) 10px, rgba(239, 68, 68, 0.3) 20px)',
        }}></div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0">
          <HeroContent2 data={heroSection2} />
          <HeroImage2 data={heroSection2} />
        </div>

        {/* Bottom accent line with animation */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse"></div>

      </div>
    </div>
  );
}