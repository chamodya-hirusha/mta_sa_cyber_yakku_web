"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function NavigationLinks({ items, activeTab, setActiveTab, setShowSidenav }) {
  return (
    <nav className="flex flex-col gap-2 p-6">
      <AnimatePresence>
        {items.map((item, index) => {
          const isActive = activeTab === item.name;
          return (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={item.path}
                onClick={() => {
                  setActiveTab(item.name);
                  setShowSidenav(false);
                }}
                className={`group relative flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 w-full text-left ${
                  isActive
                    ? "bg-gradient-to-r from-purple-500 to-red-500 text-white shadow-lg"
                    : "text-purple-300 hover:bg-purple-900/40"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute left-0 w-1 h-8 bg-white rounded-r-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="text-lg">{item.icon}</span>
                <span className="capitalize text-lg font-medium ml-2">
                  {item.name}
                </span>
                {!isActive && (
                  <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                )}
              </Link>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </nav>
  );
}
