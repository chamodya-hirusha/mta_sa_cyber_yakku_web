"use client";

import NavigationLinks from "../navigation/NavigationLinks";

const links = [
  { name: "Home", path: "/", icon: "🛍️" },
  { name: "skins", path: "/skins", icon: "👕" },
  { name: "vehicles", path: "/vehicles", icon: "🏎️" },
  { name: "currency", path: "/currency", icon: "💵" },
];

export default function SideNavNavigation({ activeTab, setActiveTab, setShowSidenav }) {
  return (
    <NavigationLinks
      items={links}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      setShowSidenav={setShowSidenav}
    />
  );
}
