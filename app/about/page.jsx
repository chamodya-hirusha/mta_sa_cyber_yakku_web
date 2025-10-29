"use client";

import React, { useState } from "react";
import SideNav from "../../components/sidebar/SideNav";
import HeaderBar from "../../components/header/HeaderBar";
import CartSidebar from "../../components/sidebar/CartSidebar";
import HeroSection from "./components/HeroSection";
import MissionVisionSection from "./components/MissionVisionSection";
import CompanyStorySection from "./components/CompanyStorySection";
import TeamMembersSection from "./components/TeamMembersSection";
import CallToActionSection from "./components/CallToActionSection";

export default function AboutPage() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [sidenavOpen, setShowSidenav] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState("about");

  const headerTabs = [{ id: "about", label: "About", icon: "ℹ️" }];

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div className="min-h-screen bg-[#0f021c] text-gray-100 flex flex-col relative overflow-hidden">
      {/* Header (fixed top) */}
      <HeaderBar
        cartCount={cart.length}
        onCartClick={() => setShowCart(!showCart)}
        onMenuClick={() => setShowSidenav(!sidenavOpen)}
        headerTabs={headerTabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Side Navigation (overlay or slide) */}
      <SideNav
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        sidenavOpen={sidenavOpen}
        setShowSidenav={setShowSidenav}
        activeTab="about"
        setActiveTab={setActiveTab}
      />

      {/* Main content */}
      <main className="flex-1 pt-[70px] pb-10"> 
        {/* 👆 padding-top added to push content below header */}
        <HeroSection />
        <MissionVisionSection />
        <CompanyStorySection />
        <TeamMembersSection />
        <CallToActionSection />
      </main>

      {/* Cart Sidebar (z-index high + outside main layout) */}
      <CartSidebar
        cart={cart}
        showCart={showCart}
        onClose={() => setShowCart(false)}
        onRemove={removeFromCart}
        total={total}
      />
    </div>
  );
}
