"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { navigationData } from "@/lib/navigationData";
import { useNavigationPopup } from "../../hooks/useNavigationPopup";
import RelatedItemsPopup from "./navigation/RelatedItemsPopup";
import NavigationContent from "./navigation/NavigationContent";

// Main navigation menu component
export default function DynamicNavigationMenu({ activeTab = "Home" }) {
  const { popupData, handleItemClick, closePopup } = useNavigationPopup();

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
              <NavigationContent
                navData={navData}
                activeTab={activeTab}
                onItemClick={handleItemClick}
              />
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
