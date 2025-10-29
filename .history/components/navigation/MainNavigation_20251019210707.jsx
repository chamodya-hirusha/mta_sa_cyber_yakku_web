"use client";

import React from "react";
import SideNav from "./components/sidebar/SideNav";
import DynamicNavigationMenu from ".components/header/DynamicNavigationMenu";

export default function MainNavigation({ 
  isLoggedIn, 
  setIsLoggedIn, 
  sidenavOpen, 
  setShowSidenav, 
  activeTab, 
  setActiveTab 
}) {
  return (
    <>
      {/* Side Navigation */}
      <SideNav
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        sidenavOpen={sidenavOpen}
        setShowSidenav={setShowSidenav}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      
      {/* Dynamic Navigation Menu - Only shows when not on Home tab */}
      {activeTab !== "Home" && (
        <div className="hidden md:block">
          <DynamicNavigationMenu activeTab={activeTab} />
        </div>
      )}
    </>
  );
}

