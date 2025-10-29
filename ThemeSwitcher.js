"use client";
import React, { useState, useEffect } from "react";
import { FaMoon, FaSun, FaPalette } from "react-icons/fa";
import { themes } from "./themes";

export default function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState("Default");

  useEffect(() => {
    const saved = localStorage.getItem("selectedTheme") || "default";
    const theme = themes.find((t) => t.id === saved);
    if (theme) {
      applyTheme(theme);
    }
  }, []);

  const applyTheme = (theme) => {
    document.documentElement.classList.remove(
      ...themes.map((t) => t.class)
    );
    document.documentElement.classList.add(theme.class);
    localStorage.setItem("selectedTheme", theme.id);
    setSelectedTheme(theme.label);
  };

  const handleThemeSelect = (theme) => {
    applyTheme(theme);
    setIsOpen(false);
  };

  const getThemeIcon = (themeId) => {
    switch (themeId) {
      case "light": return FaSun;
      case "dark": return FaMoon;
      case "default": return FaPalette;
      default: return FaPalette;
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition"
        style={{
          backgroundColor: 'rgb(var(--accent-color) / 0.2)',
          color: 'rgb(var(--text-color))',
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = 'rgb(var(--accent-color) / 0.4)';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = 'rgb(var(--accent-color) / 0.2)';
        }}
      >
        🎨 {selectedTheme}
      </button>

      {isOpen && (
        <div 
          className="absolute top-full left-0 mt-2 w-48 rounded-lg shadow-lg z-10"
          style={{
            backgroundColor: 'rgb(var(--bg-color))',
            border: '1px solid rgb(var(--border-color) / 0.3)',
          }}
        >
          {themes.map((theme) => {
            const Icon = getThemeIcon(theme.id);
            return (
              <div
                key={theme.id}
                onClick={() => handleThemeSelect(theme)}
                className="flex items-center gap-2 px-4 py-2 cursor-pointer transition"
                style={{
                  color: 'rgb(var(--text-color))',
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'rgb(var(--accent-color) / 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                <Icon />
                <span>{theme.label}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
