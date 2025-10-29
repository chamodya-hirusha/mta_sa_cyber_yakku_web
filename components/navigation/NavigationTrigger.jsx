import React from "react";
import { ChevronDown } from "lucide-react";

function NavigationTrigger({ category, isOpen, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-purple-900/40 hover:bg-purple-900/60 border border-purple-500/30 rounded-lg text-white text-sm font-medium transition-all flex items-center gap-2 whitespace-nowrap"
    >
      {category.name}
      <ChevronDown
        className={`w-2 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
      />
    </button>
  );
}

export default NavigationTrigger;