

import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTitle } from "../ui/sheet";
import SideNavHeader from "./SideNavHeader";
import SideNavProfile from "./SideNavProfile";
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
2️⃣ SideNavNavigation.jsx
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
3️⃣ SideNavMenuDropdown.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuLinks = [
  { name: "home", path: "/" },
  { name: "about", path: "/about" },
  { name: "services", path: "/services" },
  { name: "contact", path: "/contact" },
  { name: "membership", path: "/membership" },
];

export default function SideNavMenuDropdown({ setShowSidenav }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="px-6 py-2">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 w-full text-left text-purple-300 hover:bg-purple-900/40"
      >
        <span className="text-lg">📄</span>
        <span className="capitalize text-lg font-medium ml-2">Menu</span>
        <span className="ml-auto">{open ? "▼" : "▶"}</span>
      </button>

      {open && (
        <div className="ml-6 mt-2 space-y-1">
          {menuLinks.map((link, index) => {
            const isActive = link.path === pathname;
            return (
              <Link
                key={index}
                href={link.path}
                onClick={() => setShowSidenav(false)}
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
  );
}
4️⃣ SideNavFooterMenu.jsx
"use client";

import AdditionalMenu from "../navigation/AdditionalMenu";
import LoginPopup from "../popup/LoginPopup";

export default function SideNavFooterMenu({
  isLoggedIn,
  setIsLoggedIn,
  setUser,
  loginPopupOpen,
  setLoginPopupOpen,
  setShowSidenav,
}) {
  return (
    <>
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
    </>
  );
}
💡 Benefits of splitting:

Easy debugging and isolated component updates.

Reusable smaller parts (MenuDropdown, FooterMenu, etc.)

Cleaner state and prop handling.

Oyaṭa one nam mama PowerShell or Linux script ekak denna puluwan meka create karanna folder + empty files walin. Hadanna da?

You said:
SideNavHeade
ChatGPT said:
Ahh hari 👍 — oyaṭa SideNavHeader component eka ona ne?
Eka SideNav.jsx eke top eke call karanawa:

<SideNavHeader />
එහෙනම් මෙන්න full SideNavHeader.jsx component eka — Tailwind + shadcn style ekak (modern, glass look ekak) compatible widiyata: 👇

🧩 components/sidebar/SideNavHeader.jsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function SideNavHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex items-center justify-between px-5 py-4 border-b border-purple-500/20 bg-slate-900/60 backdrop-blur-md"
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <span className="text-2xl">💫</span>
        <span className="text-lg font-semibold text-purple-300 tracking-wide">
          YourStore
        </span>
      </Link>

      {/* Close Icon (mobile friendly) */}
      <button
        className="text-purple-400 hover:text-purple-200 transition-colors duration-300 focus:outline-none"
        onClick={() => {
          if (typeof window !== "undefined") {
            const event = new CustomEvent("close-sidenav");
            window.dispatchEvent(event);
          }
        }}
      >
        ✖
      </button>
    </motion.div>
  );
}
