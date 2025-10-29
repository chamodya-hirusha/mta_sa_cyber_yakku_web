import React from 'react';
import { Button } from "./ui/button";

export default function HeroSection1() {
  return (
    <div className="w-full  px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8 overflow-x-hidden">
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

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-0">
          
          {/* Left Panel - Text Content */}
          <div className="relative p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 flex flex-col justify-center
          space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 order-2 lg:order-1 z-10 min-h-0">
            
            {/* Badge */}
            <div className="inline-flex">
              <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-bold 
              text-purple-300 uppercase tracking-wider bg-purple-500/20 rounded-full border border-purple-400/30 backdrop-blur-sm">
                <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
                CYBER YAKKU
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-transparent 
            bg-clip-text bg-gradient-to-r from-white via-purple-200 to-pink-200 leading-tight">
              Experience the Ultimate Gaming Collection
            </h1>

            {/* Subheading */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300/90 leading-relaxed max-w-xl">
              Discover exclusive skins, vehicles, and currency packages in our premium gaming marketplace!
            </p>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Button
                className="group relative px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-purple-600 
                via-purple-500 to-pink-600 hover:from-purple-700 hover:via-purple-600 hover:to-pink-700 text-white font-bold rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-105 shadow-xl shadow-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/50 text-sm sm:text-base md:text-lg overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Now
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              
              <Button
                variant="outline"
                className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-transparent border-2 border-purple-500/50 hover:border-purple-400 text-purple-300 hover:text-white font-bold rounded-lg sm:rounded-xl transition-all duration-300 hover:bg-purple-500/10 text-sm sm:text-base md:text-lg backdrop-blur-sm"
              >
                Learn More
              </Button>
            </div>

            {/* Stats or Features */}
            <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 pt-4 sm:pt-6">
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">500+</span>
                <span className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">Items</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">50K+</span>
                <span className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">Users</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">4.9★</span>
                <span className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">Rating</span>
              </div>
            </div>

          </div>

          {/* Right Panel - Image */}
          <div className="relative h-64 sm:h-72 md:h-80 lg:h-auto min-h-[400px] lg:min-h-[500px] order-1 lg:order-2 overflow-hidden">
            
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-transparent to-pink-500/30 z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-slate-900/50 lg:to-slate-900/80 z-10"></div>
            
            {/* Image Container */}
            <div className="relative h-full flex items-center justify-center overflow-hidden">
              <img
                src="https://cs3.gtaall.com/screenshots/4dc09/2025-10/original/8feff91f4da8e96ded7ee44839213c2f5e386e5a/1584544-gta_sa_us-2025-10-09-04-45-58-17.jpg"
                alt="Cyber Yakku Gaming"
                className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
            </div>

            {/* Floating elements */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 z-20 bg-black/40 backdrop-blur-md px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-purple-500/30">
              <p className="text-xs sm:text-sm text-purple-300 font-semibold">🔥 Trending Now</p>
            </div>

          </div>

        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        
      </div>
    </div>
  );
}