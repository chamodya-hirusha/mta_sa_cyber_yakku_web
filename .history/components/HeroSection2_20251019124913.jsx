import React from 'react';
import { Button } from "./ui/button";

export default function HeroSection2() {
  return (
    <div className="w-full max-w-3x1 mx-auto  md:pt-20 sm:px-4 px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
      <div className="relative bg-gradient-to-br from-red-950/40 via-purple-950/30 to-slate-900 rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden border border-red-500/30 shadow-2xl hover:shadow-red-500/20 transition-all duration-500 backdrop-blur-sm">
        
        {/* Animated background effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-purple-600/10 to-pink-600/10 animate-pulse"></div>
        
        {/* Diagonal stripes pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(239, 68, 68, 0.3) 10px, rgba(239, 68, 68, 0.3) 20px)',
        }}></div>

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-0">
          
          {/* Left Panel - Text Content */}
          <div className="relative p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 flex flex-col justify-center space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 order-2 lg:order-1 z-10">
            
            {/* Badge with Timer Effect */}
            <div className="inline-flex">
              <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-bold text-red-300 uppercase tracking-wider bg-red-500/20 rounded-full border border-red-400/40 backdrop-blur-sm animate-pulse">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                CYBER YAKKU
              </span>
            </div>

            {/* Main Heading with Urgency */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-400 to-purple-400">
                Limited Time
              </span>
              <span className="block text-white mt-1 sm:mt-2">
                Offer
              </span>
            </h2>

            {/* Subheading */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300/90 leading-relaxed max-w-xl">
              Get exclusive access to our premium collection with special discounts and bonus items!
            </p>

            {/* Offer Highlights */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <span className="px-3 py-1 bg-red-500/20 border border-red-500/30 rounded-full text-xs sm:text-sm text-red-300 font-semibold backdrop-blur-sm">
                🎁 Bonus Items
              </span>
              <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-xs sm:text-sm text-purple-300 font-semibold backdrop-blur-sm">
                💎 Exclusive Access
              </span>
              <span className="px-3 py-1 bg-pink-500/20 border border-pink-500/30 rounded-full text-xs sm:text-sm text-pink-300 font-semibold backdrop-blur-sm">
                ⚡ Special Discounts
              </span>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Button
                className="group relative px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 hover:from-red-700 hover:via-pink-700 hover:to-purple-700 text-white font-bold rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-105 shadow-xl shadow-red-500/30 hover:shadow-2xl hover:shadow-red-500/50 text-sm sm:text-base md:text-lg overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Join Premium
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              
              <Button
                variant="outline"
                className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-transparent border-2 border-red-500/50 hover:border-red-400 text-red-300 hover:text-white font-bold rounded-lg sm:rounded-xl transition-all duration-300 hover:bg-red-500/10 text-sm sm:text-base md:text-lg backdrop-blur-sm"
              >
                View Details
              </Button>
            </div>

            {/* Countdown or Urgency Indicator */}
            <div className="flex items-center gap-3 sm:gap-4 pt-2 sm:pt-4">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-xs sm:text-sm text-red-300 font-semibold">Offer ends soon!</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="text-xs sm:text-sm text-gray-400">1,234 users claimed</span>
              </div>
            </div>

          </div>

          {/* Right Panel - Image */}
          <div className="relative h-64 sm:h-72 md:h-80 lg:h-auto min-h-[400px] lg:min-h-[500px] order-1 lg:order-2">
            
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/30 via-transparent to-purple-500/30 z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-slate-900/50 lg:to-slate-900/80 z-10"></div>
            
            {/* Image Container */}
            <div className="relative h-full flex items-center justify-center overflow-hidden">
              <img 
                src="https://cs3.gtaall.com/screenshots/4dc09/2017-05/original/c6822365098147bf9f1ed76b2206d9694591c1e0/401867-gta-sa-2017-05-28-16-15-04-24.jpg" 
                alt="Cyber Yakku Special Offer" 
                className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Floating Discount Badge */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 z-20">
              <div className="relative">
                <div className="absolute inset-0 bg-red-500 blur-xl opacity-50 animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-red-600 to-pink-600 backdrop-blur-md px-4 sm:px-5 py-3 sm:py-4 rounded-lg border border-red-400/50 shadow-2xl">
                  <p className="text-xs text-red-100 font-semibold uppercase tracking-wide">Save Up To</p>
                  <p className="text-2xl sm:text-3xl font-black text-white">50%</p>
                </div>
              </div>
            </div>

            {/* Limited Stock Indicator */}
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-20 bg-black/50 backdrop-blur-md px-3 sm:px-4 py-2 rounded-lg border border-red-500/30">
              <p className="text-xs sm:text-sm text-red-300 font-semibold flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                Limited Stock
              </p>
            </div>

          </div>

        </div>

        {/* Bottom accent line with animation */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse"></div>
        
      </div>
    </div>
  );
}