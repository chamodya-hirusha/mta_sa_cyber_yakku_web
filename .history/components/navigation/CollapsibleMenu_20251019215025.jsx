import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function CollapsibleMenu({ items, setShowSidenav }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="px-6 py-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 w-full text-left text-purple-300 hover:bg-purple-900/40"
      >
        <span className="text-lg">📄</span>
        <span className="capitalize text-lg font-medium ml-2">Menu</span>
        <span className="ml-auto">{isOpen ? '▼' : '▶'}</span>
      </button>
      {isOpen && (
        <div className="ml-6 mt-2 space-y-1">
          {items.map((link, index) => {
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
  );
}