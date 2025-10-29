"use client";

import React, { useState } from "react";
import SideNav from "../../components/sidebar/SideNav";
import HeaderBar from "../../components/header/HeaderBar";
import CartSidebar from "../../components/sidebar/CartSidebar";
import HeroSection from "./components/HeroSection";
import FreePlanSection from "./components/FreePlanSection";
import PremiumPlansGrid from "./components/PremiumPlansGrid";
import AdditionalInfoSection from "./components/AdditionalInfoSection";
import { plans } from "./data/plans";

export default function CyberYakkuPricing() {
  const [hoveredPlan, setHoveredPlan] = useState(null);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [sidenavOpen, setShowSidenav] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState("membership");

  const headerTabs = [{ id: "membership", label: "Membership", icon: "👑" }];

  const handleLogout = () => setIsLoggedIn(false);

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden" style={{ backgroundColor: 'rgb(var(--bg-color))', color: 'rgb(var(--text-color))' }}>
      {/* Header - fixed on top */}
      <HeaderBar
        cartCount={cart.length}
        onCartClick={() => setShowCart(!showCart)}
        onMenuClick={() => setShowSidenav(!sidenavOpen)}
        headerTabs={headerTabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
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

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Main Content */}
      <main className="flex-1 pt-[70px] pb-10 space-y-16">
        <HeroSection />
        <FreePlanSection plan={plans[0]} />
        <PremiumPlansGrid
          plans={plans}
          hoveredPlan={hoveredPlan}
          setHoveredPlan={setHoveredPlan}
        />
        <AdditionalInfoSection />
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
