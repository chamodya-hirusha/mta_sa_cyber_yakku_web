"use client";

import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTitle } from "../ui/sheet";
import SideNavHeader from "../header/layout/SideNavHeader";
import UserProfileSection from "../user/UserProfileSection";
import NavigationLinks from "../navigation/NavigationLinks";
import CollapsibleMenu from "../navigation/CollapsibleMenu";
import AdditionalMenu from "../navigation/AdditionalMenu";
import LoginPopup from "../popup/LoginPopup";
import { sideNavLinks, menuLinks } from "../../lib/navigationData";

export default function SideNav({
  isLoggedIn,
  setIsLoggedIn,
  sidenavOpen,
  setShowSidenav,
  activeTab,
  setActiveTab,
}) {
  const [loginPopupOpen, setLoginPopupOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isVisible, setIsVisible] = useState(true); // 👈 Add this

  useEffect(() => {
    if (!sidenavOpen) {
      setLoginPopupOpen(false);
    }
  }, [sidenavOpen]);

  const handleSheetOpenChange = (nextOpen) => {
    if (!nextOpen && loginPopupOpen) return;
    setShowSidenav(nextOpen);
  };

  return (
    <Sheet open={sidenavOpen} onOpenChange={handleSheetOpenChange}>
     
        <SheetContent
          side="left"
          className="hidden w-[200px] sm:w-[320px] bg-slate-900/80 backdrop-blur-xl border-r border-purple-500/20 p-0 overflow-y-auto"
        >
          <SheetTitle className="sr-only"></SheetTitle>
          <SideNavHeader />
          <UserProfileSection isLoggedIn={isLoggedIn} user={user} />
          <NavigationLinks
            items={sideNavLinks}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            setShowSidenav={setShowSidenav}
          />
          <CollapsibleMenu
            items={menuLinks}
            setShowSidenav={setShowSidenav}
          />
          <AdditionalMenu
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            setLoginPopupOpen={setLoginPopupOpen}
            setUser={setUser}
          />
          <LoginPopup
            isOpen={loginPopupOpen}
            onClose={() => setLoginPopupOpen(false)}
            onLogin={(userData) => {
              setUser(userData);
              setIsLoggedIn(true);
              setLoginPopupOpen(false);
              setShowSidenav(false);
            }}
          />
        </SheetContent>
  
    </Sheet>
  );
}
