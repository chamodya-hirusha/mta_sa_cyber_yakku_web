"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Sheet, SheetContent, SheetTitle } from "../ui/sheet";
import SideNavHeader from "../header/SideNavHeader";
import UserProfileSection from "../user/UserProfileSection";
import NavigationLinks from "../navigation/NavigationLinks";
import AdditionalMenu from "../navigation/AdditionalMenu";
import LoginPopup from "../popup/LoginPopup";

const links = [
  {
    name: "Home",
     path: "/",
     icon: "🛍️"
    },
  {
    name: "skins",
    path: "/skins",
    icon: "👕"
  },
  {
    name: "vehicles",
    path: "/vehicles",
    icon: "🏎️"
  },
  {
    name: "currency",
    path: "/currency",
    icon: "💵"
  },
];

const MenuLinks = [
  {
    name: "home",
    path: "/"
  },
  {
    name: "about",
    path: "/about"
  },
  {
    name: "services",
    path: "/services"
  },
  {
    name: "contact",
    path: "/contact"
  },
  {
    name: "membership",
    path: "/membership"
  }
];

export default function SideNav({ isLoggedIn, setIsLoggedIn, sidenavOpen, setShowSidenav, activeTab, setActiveTab }) {
  const pathname = usePathname();
  const [loginPopupOpen, setLoginPopupOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [headerDropdownOpen, setHeaderDropdownOpen] = useState(false);

  useEffect(() => {
    if (!sidenavOpen) {
      setLoginPopupOpen(false);
    }
  }, [sidenavOpen]);

  const handleSheetOpenChange = (nextOpen) => {
    if (!nextOpen && loginPopupOpen) {
       
      return;
    }
    setShowSidenav(nextOpen);
  };

  return (
    <Sheet open={sidenavOpen} onOpenChange={handleSheetOpenChange}>
      <SheetContent
        side="left"
        className="w-[200px] sm:w-[320px] bg-slate-900/80 backdrop-blur-xl border-r border-purple-500/20 p-0"
      >
        <SheetTitle className="sr-only"></SheetTitle>
        <SideNavHeader />
        <UserProfileSection isLoggedIn={isLoggedIn} user={user} />
        <NavigationLinks
          items={links}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          setShowSidenav={setShowSidenav}
        />
        <div className="px-6 py-2">
          <button
            onClick={() => setHeaderDropdownOpen(!headerDropdownOpen)}
            className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 w-full text-left text-purple-300 hover:bg-purple-900/40"
          >
            <span className="text-lg">📄</span>
            <span className="capitalize text-lg font-medium ml-2">Menu</span>
            <span className="ml-auto">{headerDropdownOpen ? '▼' : '▶'}</span>
          </button>
          {headerDropdownOpen && (
            <div className="ml-6 mt-2 space-y-1">
              {MenuLinks.map((link, index) => {
                const isActive = link.path === pathname;
                return (
                  <Link
                    key={index}
                    href={link.path}
                    onClick={() => {
                      setShowSidenav(false);
                    }}
                    className={`block px-4 py-2 rounded-lg transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-purple-500 to-red-500 text-white"
                        : "text-purple-300 hover:bg-purple-900/40"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
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
