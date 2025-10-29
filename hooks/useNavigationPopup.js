import { useState } from "react";

export function useNavigationPopup() {
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
      category: item.category || subcategory,
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

  return {
    popupData,
    handleItemClick,
    closePopup,
  };
}