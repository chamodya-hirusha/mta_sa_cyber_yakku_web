"use client";

import React, { useState, useEffect, useRef } from "react";


export default function ThemeDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState("🎨 Choose Theme");
  const dropdownRef = useRef(null);

  const themes = [
    { id: "light", icon: "☀️", label: "Light Theme", class: "theme-light" },
    { id: "dark", icon: "🌙", label: "Dark Theme", class: "theme-dark" },
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
    <div className="dropdown-container" ref={dropdownRef}>
      <button
        className={`dropdown-btn ${isOpen ? "active" : ""}`}
        onClick={toggleDropdown}
      >
        <span>{selectedTheme}</span>
        <span className="arrow">▼</span>
      </button>

      <div className={`dropdown-menu ${isOpen ? "show" : ""}`}>
        {themes.map((theme, index) => (
          <div
            key={theme.id}
            className="dropdown-item"
            data-theme={theme.id}
            onClick={() => handleThemeSelect(theme)}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div className={`theme-icon ${theme.class}`}>{theme.icon}</div>
            <span>{theme.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
