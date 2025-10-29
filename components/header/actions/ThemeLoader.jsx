"use client";
import { useEffect } from "react";
import { themes } from "./themes"; // ✅ import shared theme list

export default function ThemeLoader() {
  useEffect(() => {
    try {
      const savedThemeId =
        typeof window !== "undefined" ? localStorage.getItem("selectedTheme") : null;
      if (!savedThemeId) return;

      const theme = themes.find((t) => t.id === savedThemeId);
      if (!theme) return;

      const root = document.documentElement;
      // Remove all theme classes
      themes.forEach((t) => root.classList.remove(t.class));
      // Add the selected theme class
      root.classList.add(theme.class);
    } catch (error) {
      console.error("Failed to load theme:", error);
    }
  }, []);

  return null;
}
