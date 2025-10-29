"use client";

import React, { useState } from "react";
import SideNav from "../../components/sidebar/SideNav";
import HeaderBar from "../../components/header/HeaderBar";
import CartSidebar from "../../components/sidebar/CartSidebar";
import TopBar from "./components/TopBar";
import StatsPanel from "./components/StatsPanel";
import HealthResources from "./components/HealthResources";
import AbilitiesSection from "./components/AbilitiesSection";
import BottomInfo from "./components/BottomInfo";
import { playerStats, demoPlayers } from "./data/playerData";

export default function GamingHUD() {
  const [selectedClass, setSelectedClass] = useState("assault");
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [sidenavOpen, setShowSidenav] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);
  const [headerTabs, setHeaderTabs] = useState([{ id: "profile", label: "Profile" }]);
  const [activeTab, setActiveTab] = useState("profile");

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-gray-100 flex flex-col relative overflow-hidden">
      {/* Header */}
      <HeaderBar
        cartCount={cart.length}
        onCartClick={() => setShowCart(!showCart)}
        onMenuClick={() => setShowSidenav(!sidenavOpen)}
        headerTabs={headerTabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Side Navigation */}
      <SideNav
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        sidenavOpen={sidenavOpen}
        setShowSidenav={setShowSidenav}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      {/* Main Content */}
      <main className="flex-1 pt-[70px] pb-10 space-y-12 relative z-10 max-w-7xl mx-auto px-6">
        <TopBar playerStats={playerStats} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <StatsPanel playerStats={playerStats} />
          <HealthResources playerStats={playerStats} />
        </div>

        <AbilitiesSection playerStats={playerStats} />

        <BottomInfo />
      </main>

      {/* Cart Sidebar */}
      <CartSidebar
        cart={cart}
        showCart={showCart}
        onClose={() => setShowCart(false)}
        onRemove={removeFromCart}
        total={total}
      />

      {/* Overlay for mobile sidenav */}
      {sidenavOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={() => setShowSidenav(false)}
        ></div>
      )}
    </div>
  );
}
