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
