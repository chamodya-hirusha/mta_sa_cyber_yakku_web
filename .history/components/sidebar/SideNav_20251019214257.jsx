"use client";

import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTitle } from "../ui/sheet";
import SideNavHeader from "./SideNavHeader.jsx";
import SideNavProfile from "../components/user/UserProfileSection ";
import SideNavNavigation from "./SideNavNavigation";
import SideNavMenuDropdown from "./SideNavMenuDropdown";
import SideNavFooterMenu from "./SideNavFooterMenu";

export default function SideNav({ isLoggedIn, setIsLoggedIn, sidenavOpen, setShowSidenav, activeTab, setActiveTab }) {
  const [loginPopupOpen, setLoginPopupOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!sidenavOpen) setLoginPopupOpen(false);
  }, [sidenavOpen]);

  const handleSheetOpenChange = (nextOpen) => {
    if (!nextOpen && loginPopupOpen) return;
    setShowSidenav(nextOpen);
  };

  return (
    <Sheet open={sidenavOpen} onOpenChange={handleSheetOpenChange}>
      <SheetContent
        side="left"
        className="w-[200px] sm:w-[320px] bg-slate-900/80 backdrop-blur-xl border-r border-purple-500/20 p-0"
      >
        <SheetTitle className="sr-only" />
        <SideNavHeader />
        <SideNavProfile isLoggedIn={isLoggedIn} user={user} />
        <SideNavNavigation activeTab={activeTab} setActiveTab={setActiveTab} setShowSidenav={setShowSidenav} />
        <SideNavMenuDropdown setShowSidenav={setShowSidenav} />
        <SideNavFooterMenu
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          setUser={setUser}
          loginPopupOpen={loginPopupOpen}
          setLoginPopupOpen={setLoginPopupOpen}
          setShowSidenav={setShowSidenav}
        />
      </SheetContent>
    </Sheet>
  );
}
