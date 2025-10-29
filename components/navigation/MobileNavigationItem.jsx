import React from "react";
import { Info } from "lucide-react";
import Link from "next/link";

function MobileNavigationItem({ item, category, subcategory, onItemClick }) {
  return (
    <div className="border-l border-purple-500/20 pl-4 ml-2">
      <div className="flex items-center justify-between py-2">
        <Link
          href={item.href}
          className="flex-1 text-purple-300 hover:text-white transition-colors"
        >
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">{item.name}</span>
            <span className="text-xs text-purple-400 bg-purple-900/40 px-2 py-1 rounded-full">
              {item.count}
            </span>
          </div>
        </Link>
        <button
          onClick={() => onItemClick(item, subcategory)}
          className="text-purple-400 hover:text-white transition-colors p-1"
          aria-label={`View related items for ${item.name}`}
        >
          <Info className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default MobileNavigationItem;