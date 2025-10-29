"use client";
import { useEffect } from 'react';

const themes = [
    { id: "default", "class": "theme-default" },
    { id: "dark", "class": "dark-theme" },
    { id: "light", "class": "light-theme" },
    { id: "ocean", "class": "theme-ocean" },
    { id: "sunset", "class": "theme-sunset" },
    { id: "forest", "class": "theme-forest" },
    { id: "candy", "class": "theme-candy" },
];

export default function ThemeLoader() {
  useEffect(() => {
    try {
      const savedThemeId = typeof window !== 'undefined' ? localStorage.getItem('selectedTheme') : null;
      if (!savedThemeId) return;

      const theme = themes.find(t => t.id === savedThemeId);
      if (!theme) return;

      const root = document.documentElement;
      // Remove all theme classes
      themes.forEach(t => root.classList.remove(t.class));
      // Add the selected theme class
      root.classList.add(theme.class);
    } catch (error) {
      console.error("Failed to load theme:", error);
    }
  }, []);

  return null;
}