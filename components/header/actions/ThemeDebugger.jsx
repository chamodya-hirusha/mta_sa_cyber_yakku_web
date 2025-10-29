"use client";
import { useEffect, useState } from "react";

export default function ThemeDebugger() {
  const [currentTheme, setCurrentTheme] = useState("");
  const [cssVars, setCssVars] = useState({});

  useEffect(() => {
    const updateDebugInfo = () => {
      const root = document.documentElement;
      const classes = Array.from(root.classList);
      const themeClass = classes.find(cls => 
        cls.includes('theme') || cls.includes('dark') || cls.includes('light')
      );
      
      const computedStyle = getComputedStyle(root);
      setCurrentTheme(themeClass || "No theme class found");
      setCssVars({
        bgColor: computedStyle.getPropertyValue('--bg-color'),
        textColor: computedStyle.getPropertyValue('--text-color'),
        accentColor: computedStyle.getPropertyValue('--accent-color'),
      });
    };

    updateDebugInfo();
    
    // Update every second to see changes
    const interval = setInterval(updateDebugInfo, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: '10px',
      right: '10px',
      background: 'rgba(0,0,0,0.8)',
      color: 'white',
      padding: '10px',
      borderRadius: '5px',
      fontSize: '12px',
      zIndex: 9999,
      fontFamily: 'monospace'
    }}>
      <div><strong>Theme Debug:</strong></div>
      <div>Current Theme: {currentTheme}</div>
      <div>BG Color: {cssVars.bgColor}</div>
      <div>Text Color: {cssVars.textColor}</div>
      <div>Accent Color: {cssVars.accentColor}</div>
    </div>
  );
}
