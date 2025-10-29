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
