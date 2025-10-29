import React from 'react';
import MobileCard from './mobile/MobileCard';
import DesktopCard from './desktop/DesktopCard';
import ScrollIndicator from './mobile/ScrollIndicator';
import { contentCards } from '../../lib/contentData';

export default function ContentCardsRow() {
  return (
    <div className="w-full group bg-gradient-to-br  rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10 cursor-pointer relative overflow-hidden touch-manipulation [-webkit-tap-highlight-color:transparent]">
      <div className="max-w-7xl mx-auto">
        {/* Mobile: Diverse Horizontal Scroll with Varied Sizes */}
        <div className="md:hidden">
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory scroll-smooth">
            {contentCards.map((card, i) => (
              <MobileCard key={i} card={card} index={i} />
            ))}
          </div>

          <ScrollIndicator cards={contentCards} />
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {contentCards.map((card, i) => (
            <DesktopCard key={i} card={card} />
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