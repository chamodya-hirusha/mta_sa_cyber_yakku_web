import React, { useState } from "react";
import { ChevronRight, ChevronDown, Search, X, Info, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navigationData, relatedItemsData } from "@/lib/navigationData";
import Link from "next/link";

// Related Items Popup Component
function RelatedItemsPopup({ item, category, subcategory, isOpen, onClose }) {
  if (!isOpen || !item) return null;

  const getRelatedData = () => {
    const data = relatedItemsData[category];
    if (!data) return null;

    if (subcategory === "brands" || subcategory === "brand") {
      return data.brands?.[item.name];
    } else if (subcategory === "carTypes" || subcategory === "car type") {
      return data.carTypes?.[item.name];
    } else if (subcategory === "models" || subcategory === "model") {
      return data.models?.[item.name];
    } else if (subcategory === "skinTypes" || subcategory === "skin type") {
      return data.skinTypes?.[item.name];
    } else if (subcategory === "colors" || subcategory === "color") {
      return data.colors?.[item.name];
    } else if (subcategory === "currencyTypes" || subcategory === "currency type") {
      return data.currencyTypes?.[item.name];
    } else if (subcategory === "packages" || subcategory === "package size") {
      return data.packages?.[item.name];
    } else if (subcategory === "valueRanges" || subcategory === "value range") {
      return data.valueRanges?.[item.name];
    }
    return null;
  };

  const relatedData = getRelatedData();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={onClose}
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-slate-900 border border-purple-500/20 rounded-lg p-6 max-w-md w-full mx-4 max-h-[80vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">{item.name}</h3>
              <button
                onClick={onClose}
                className="text-purple-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>

            {relatedData ? (
              <div className="space-y-4">
                {Object.entries(relatedData).map(([key, value]) => (
                  <div key={key}>
                    <h4 className="text-sm font-semibold text-purple-400 mb-2 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {Array.isArray(value) ? (
                        value.map((item, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-purple-900/40 text-purple-300 rounded-full text-sm"
                          >
                            {item}
                          </span>
                        ))
                      ) : (
                        <span className="px-3 py-1 bg-purple-900/40 text-purple-300 rounded-full text-sm">
                          {value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <Info className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <p className="text-purple-300">No related items found for this selection.</p>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-purple-500/20">
              <Link
                href={item.href}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-red-600 hover:from-purple-700 hover:to-red-700 text-white rounded-lg transition-all"
                onClick={onClose}
              >
                View Details
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// Mobile Navigation Item Component
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

// Navigation Trigger Component
function NavigationTrigger({ category, isOpen, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-purple-900/40 hover:bg-purple-900/60 border border-purple-500/30 rounded-lg text-white text-sm font-medium transition-all flex items-center gap-2 whitespace-nowrap"
    >
      {category.name}
      <ChevronDown
        className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
      />
    </button>
  );
}

// Main Component
export default function MobileNavigationMenu({ activeTab }) {
  const [openCategory, setOpenCategory] = useState(null);
  const [popupData, setPopupData] = useState({
    isOpen: false,
    item: null,
    category: null,
    subcategory: null,
  });

  const getNavigationData = () => {
    const tabKey = activeTab.toLowerCase();
    return navigationData[tabKey] || null;
  };

  const navData = getNavigationData();

  const handleItemClick = (item, subcategory) => {
    setPopupData({
      isOpen: true,
      item,
      category: activeTab.toLowerCase(),
      subcategory,
    });
  };

  const closePopup = () => {
    setPopupData({
      isOpen: false,
      item: null,
      category: null,
      subcategory: null,
    });
  };

  if (activeTab === "Home" || !navData) {
    return null;
  }

  return (
    <>
      <div className="p-6">
        <div className="max-w-6xl mx-auto">
          {/* Navigation Menu */}
          <div className="p-6">
            {/* Header with Category Triggers */}
            <div className="flex flex-wrap gap-3 mb-8">
              {navData.categories.map((category) => (
                <NavigationTrigger
                  key={category.name}
                  category={category}
                  isOpen={openCategory === category.name}
                  onClick={() =>
                    setOpenCategory(
                      openCategory === category.name ? null : category.name
                    )
                  }
                />
              ))}
            </div>

            {/* Content */}
            <AnimatePresence>
              {openCategory && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="bg-gray-800/30 border border-purple-500/20 rounded-lg p-4">
                    <h3 className="text-sm font-semibold text-purple-400 mb-4">
                      {navData.categories.find((c) => c.name === openCategory)
                        ?.description}
                    </h3>
                    <div className="space-y-2">
                      {navData.categories
                        .find((c) => c.name === openCategory)
                        ?.items.map((item) => (
                          <MobileNavigationItem
                            key={item.name}
                            item={item}
                            category={activeTab.toLowerCase()}
                            subcategory={category.name.toLowerCase()}
                            onItemClick={handleItemClick}
                          />
                        ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Related Items Popup */}
      <RelatedItemsPopup
        item={popupData.item}
        category={popupData.category}
        subcategory={popupData.subcategory}
        isOpen={popupData.isOpen}
        onClose={closePopup}
      />
    </>
  );
}