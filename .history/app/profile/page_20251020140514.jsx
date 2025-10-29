"use client";

import React, { useState } from "react";
import SideNav from "@/components/sidebar/SideNav";
import HeaderBar from "@/components/header/HeaderBar";
import ProfileHeader from "./components/ProfileHeader";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";;
import { userData } from "./data/playerData";

export default function ProfilePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [sidenavOpen, setShowSidenav] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");

  const headerTabs = [
    { id: "profile", label: "Profile", icon: "👤" },
    { id: "settings", label: "Settings", icon: "⚙️" },
  ];

  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      {/* Sidebar */}
      <SideNav
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        sidenavOpen={sidenavOpen}
        setShowSidenav={setShowSidenav}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Header */}
      <HeaderBar
        cartCount={0}
        onCartClick={() => {}}
        onMenuClick={() => setShowSidenav(!sidenavOpen)}
        headerTabs={headerTabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
      />

      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Main Profile Content */}
      <div className="relative z-10 px-6 py-8 md:px-12">
        <ProfileHeader user={userData} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <ProfileDetails user={userData} />
          <ProfileSettings />
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <AccountSecurity />
          <ActivitySummary />
        </div>
      </div>
    </div>
  );
}
