'use client';
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import LogoSection from "./layout/LogoSection";
import DesktopNavigation from "./layout/DesktopNavigation";
import MobileActions from "./layout/MobileActions";

export default function HeaderBar({
  cartCount,
  onCartClick,
  onMenuClick,
  headerTabs,
  activeTab,
  setActiveTab,
  isLoggedIn,
  onLogout
}) {
  const router = useRouter();

  return (
    <header className="py-2 sm:py-3 fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-xl border-b border-purple-500/20">
      <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 flex items-center justify-between">
        <LogoSection onMenuClick={onMenuClick} />

        <DesktopNavigation
          cartCount={cartCount}
          onCartClick={onCartClick}
          headerTabs={headerTabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isLoggedIn={isLoggedIn}
          onLogout={onLogout}
          router={router}
        />

        <MobileActions
          cartCount={cartCount}
          onCartClick={onCartClick}
          router={router}
        />
      </div>
    </header>
  );
}