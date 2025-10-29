"use client";
import React, { useState, useEffect } from "react";
import { FaMoon, FaSun, FaPalette } from "react-icons/fa";

const themes = [
  { id: "default", label: "Default", class: "theme-default" },
  { id: "dark", label: "Dark", class: "dark-theme" },
  { id: "light", label: "Light", class: "light-theme" },
];

export default function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState("Default");

  useEffect(() => {
    const saved = localStorage.getItem("selectedTheme") || "default";
    const theme = themes.find((t) => t.id === saved);
    applyTheme(theme);
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

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[rgb(var(--accent-color)/0.2)] hover:bg-[rgb(var(--accent-color)/0.4)] text-[rgb(var(--text-color)/1)] font-semibold transition"
      >
        🎨 {selectedTheme}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-[rgb(var(--bg-color)/1)] border border-[rgb(var(--border-color)/0.3)] rounded-lg shadow-lg z-10">
          {themes.map((theme) => (
            <div
              key={theme.id}
              onClick={() => handleThemeSelect(theme)}
              className="flex items-center gap-2 px-4 py-2 hover:bg-[rgb(var(--accent-color)/0.2)] cursor-pointer transition"
            >
              {theme.id === "default" && <FaPalette />}
              {theme.id === "dark" && <FaMoon />}
              {theme.id === "light" && <FaSun />}
              <span>{theme.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
