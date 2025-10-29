"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaPalette, FaMoon, FaSun } from "react-icons/fa";
import { themes } from "./themes";

export default function ThemeDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState("Choose Theme");
  const dropdownRef = useRef(null);

  const applyThemeClass = (themeClass) => {
    const root = document.documentElement;
    const themeClasses = themes.map((t) => t.class);
    root.classList.remove(...themeClasses);
    root.classList.add(themeClass);
  };

  useEffect(() => {
    const savedTheme =
      typeof window !== "undefined" ? localStorage.getItem("selectedTheme") : null;
    if (savedTheme) {
      const theme = themes.find((t) => t.id === savedTheme);
      if (theme) {
        setSelectedTheme(theme.label);
        applyThemeClass(theme.class);
      }
    }
  }, []);

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleThemeSelect = (theme) => {
    setSelectedTheme(theme.label);
    setIsOpen(false);
    applyThemeClass(theme.class);
    localStorage.setItem("selectedTheme", theme.id);
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
        <FaPalette />
        <span>{selectedTheme}</span>
        <span className={`transition-transform ${isOpen ? "rotate-180" : ""}`}>▼</span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-slate-800 border border-purple-500/20 rounded-lg shadow-lg z-10">
          {themes.map((theme) => (
            <div
              key={theme.id}
              className="flex items-center gap-2 px-4 py-2 hover:bg-purple-900/40 cursor-pointer transition-colors"
              onClick={() => handleThemeSelect(theme)}
              
            >
              {theme.id === "default" && <FaPalette />}
              {theme.id === "dark" && <FaMoon />}
              {theme.id === "light" && <FaSun />}
              <span className="text-purple-300">{theme.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
