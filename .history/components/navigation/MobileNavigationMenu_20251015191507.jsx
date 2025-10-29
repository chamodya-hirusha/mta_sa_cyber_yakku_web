import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navigationData } from "@/lib/navigationData";
import RelatedItemsPopup from "./RelatedItemsPopup";
import MobileNavigationItem from "./MobileNavigationItem";
import NavigationTrigger from "./NavigationTrigger";

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
  const selectedCategory = openCategory
    ? navData?.categories.find((c) => c.name === openCategory)
    : null;

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
                      {selectedCategory?.description}
                    </h3>
                    <div className="space-y-2">
                      {selectedCategory?.items.map((item) => (
                          <MobileNavigationItem
                            key={item.name}
                            item={item}
                            category={activeTab.toLowerCase()}
                          subcategory={selectedCategory.name.toLowerCase()}
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
