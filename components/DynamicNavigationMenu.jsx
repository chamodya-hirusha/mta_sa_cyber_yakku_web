"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink, Info } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { navigationData, relatedItemsData } from "@/lib/navigationData";

// Popup component for related items
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

// Navigation item component
function NavigationItem({ item, category, subcategory, onItemClick }) {
  return (
    <li className="group">
      <NavigationMenuLink asChild>
        <Link
          href={item.href}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-900/40 hover:text-accent-foreground focus:bg-purple-900/40 focus:text-accent-foreground"
        >
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium leading-none text-white">
              {item.name}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-purple-400 bg-purple-900/40 px-2 py-1 rounded-full">
                {item.count}
              </span>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onItemClick(item, subcategory);
                }}
                className="opacity-0 group-hover:opacity-100 transition-opacity text-purple-400 hover:text-white"
                aria-label={`View related items for ${item.name}`}
              >
                <Info className="w-4 h-4" />
              </button>
            </div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-purple-300">
            Click to explore {item.name.toLowerCase()} options
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

// Main navigation menu component
export default function DynamicNavigationMenu({ activeTab = "Home" }) {
  const [popupData, setPopupData] = useState({
    isOpen: false,
    item: null,
    category: null,
    subcategory: null,
  });

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

  // Get navigation data based on active tab
  const getNavigationData = () => {
    const tabKey = activeTab.toLowerCase();
    return navigationData[tabKey] || null;
  };

  const navData = getNavigationData();

  // Don't render navigation menu for Home tab
  if (activeTab === "Home" || !navData) {
    return null;
  }

  return (
    <>
      <NavigationMenu className="relative z-50 flex max-w-max flex-1 items-center justify-center">
        <NavigationMenuList>
          {navData.categories.map((category, index) => (
            <NavigationMenuItem key={category.name}>
              <NavigationMenuTrigger className="bg-transparent hover:bg-purple-900/40 text-white border-none">
                <div className="flex items-center gap-2">
                  <span>{category.name}</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 md:w-[500px] lg:w-[600px] lg:grid-cols-2">
                  <div className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-purple-900/20 to-red-900/20 p-6 no-underline outline-none focus:shadow-md"
                        href={`/${activeTab.toLowerCase()}`}
                      >
                        <div className="mb-2 mt-4 text-lg font-medium text-white">
                          {navData.title}
                        </div>
                        <p className="text-sm leading-tight text-purple-300">
                          {navData.description}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                  <div className="col-span-1">
                    <h4 className="mb-3 text-sm font-semibold text-purple-400">
                      {category.name}
                    </h4>
                    <ul className="space-y-1">
                      {category.items.map((item) => (
                        <NavigationItem
                          key={item.name}
                          item={item}
                          category={activeTab.toLowerCase()}
                          subcategory={category.name.toLowerCase()}
                          onItemClick={handleItemClick}
                        />
                      ))}
                    </ul>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

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