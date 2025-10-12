import React from 'react';

export default function HeroSection2() {
  return (
    <div className="container py-3 tablet:py-4 desktop:py-5">
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-lg tablet:rounded-xl overflow-hidden border border-purple-500/20 shadow-lg hover:shadow-purple-500/10 transition-all">
        <div className="grid grid-cols-1 desktop:grid-cols-2 gap-0">
          
          {/* Left Panel - Text Content */}
          <div className="p-3 tablet:p-5 desktop:p-6 flex flex-col justify-center space-y-3 tablet:space-y-4 desktop:space-y-5 order-2 desktop:order-1">
            
            <div>
              <span className="text-xs tablet:text-xs font-semibold text-purple-400 uppercase tracking-wider">
                CYBER YAKKU
              </span>
            </div>

            <h2 className="text-lg tablet:text-2xl desktop:text-3xl font-bold text-white leading-tight">
              Limited Time Offer
            </h2>

            <p className="text-xs tablet:text-sm desktop:text-base text-gray-300 leading-relaxed">
              Get exclusive access to our premium collection with special discounts and bonus items!
            </p>

            <div>
              <button className="inline-flex items-center px-3 tablet:px-5 py-1.5 tablet:py-2 bg-gradient-to-r from-purple-600 to-red-600 hover:from-purple-700 hover:to-red-700 text-white font-bold rounded-md tablet:rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/25 text-xs tablet:text-sm w-fit">
                Join Premium
              </button>
            </div>

          </div>

          {/* Right Panel - Image */}
          <div className="relative h-28 tablet:h-36 desktop:h-auto order-1 desktop:order-2">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-red-500/20"></div>
            <div className="relative h-full flex items-center justify-center">
              <div className="text-3xl tablet:text-5xl desktop:text-6xl">
                <img src="https://cs3.gtaall.com/screenshots/4dc09/2017-05/original/c6822365098147bf9f1ed76b2206d9694591c1e0/401867-gta-sa-2017-05-28-16-15-04-24.jpg" alt="" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
