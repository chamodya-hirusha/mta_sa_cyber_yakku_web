"use client";

import React, { useState, useEffect, useRef } from "react";

export default function ThemeDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState("🎨 Choose Theme");
  const dropdownRef = useRef(null);

  const themes = [
    { id: "dark", icon: "🌙", label: "Dark Theme", class: "dark-theme" },
    { id: "light", icon: "☀️", label: "Light Theme", class: "light-theme" },
    { id: "ocean", icon: "🌊", label: "Ocean Theme", class: "theme-ocean" },
    { id: "sunset", icon: "🌅", label: "Sunset Theme", class: "theme-sunset" },
    { id: "forest", icon: "🌲", label: "Forest Theme", class: "theme-forest" },
    { id: "candy", icon: "🍭", label: "Candy Theme", class: "theme-candy" },
  ];

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleThemeSelect = (theme) => {
    setSelectedTheme(`🎨 ${theme.label}`);
    setIsOpen(false);
    // Apply theme to document body
    document.body.className = theme.class;
    // Store theme preference
    localStorage.setItem('selectedTheme', theme.id);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors"
        onClick={toggleDropdown}
      >
        <span>{selectedTheme}</span>
        <span className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-slate-800 border border-purple-500/20 rounded-lg shadow-lg z-10">
          {themes.map((theme, index) => (
            <div
              key={theme.id}
              className="flex items-center gap-2 px-4 py-2 hover:bg-purple-900/40 cursor-pointer transition-colors"
              onClick={() => handleThemeSelect(theme)}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="text-lg">{theme.icon}</div>
              <span className="text-purple-300">{theme.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
