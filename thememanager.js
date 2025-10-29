// ====================================
// THEME MANAGER - Node.js Implementation
// ====================================

const fs = require('fs');
const path = require('path');

class ThemeManager {
  constructor() {
    this.themes = {
      light: {
        name: 'Light',
        backgrounds: {
          primary: '255 255 255',
          secondary: '248 250 252',
          tertiary: '241 245 249',
          elevated: '255 255 255'
        },
        text: {
          primary: '15 23 42',
          secondary: '51 65 85',
          muted: '100 116 139',
          inverse: '255 255 255'
        },
        accent: {
          primary: '236 72 153',
          secondary: '219 39 119',
          hover: '190 24 93',
          light: '251 207 232',
          subtle: '252 231 243'
        },
        borders: {
          primary: '226 232 240',
          secondary: '203 213 225',
          accent: '236 72 153'
        },
        shadows: {
          sm: '0 1px 2px 0 rgba(236, 72, 153, 0.05)',
          md: '0 4px 6px -1px rgba(236, 72, 153, 0.1)',
          lg: '0 10px 15px -3px rgba(236, 72, 153, 0.15)',
          xl: '0 20px 25px -5px rgba(236, 72, 153, 0.2)'
        },
        interactive: {
          hoverOverlay: 'rgba(236, 72, 153, 0.08)',
          activeOverlay: 'rgba(236, 72, 153, 0.12)',
          focusRing: '236 72 153'
        },
        status: {
          success: '34 197 94',
          warning: '234 179 8',
          error: '239 68 68',
          info: '59 130 246'
        }
      },

      dark: {
        name: 'Dark',
        backgrounds: {
          primary: '15 23 42',
          secondary: '30 41 59',
          tertiary: '51 65 85',
          elevated: '30 41 59'
        },
        text: {
          primary: '248 250 252',
          secondary: '203 213 225',
          muted: '148 163 184',
          inverse: '15 23 42'
        },
        accent: {
          primary: '167 139 250',
          secondary: '139 92 246',
          hover: '124 58 237',
          light: '88 28 135',
          subtle: '59 7 100'
        },
        borders: {
          primary: '51 65 85',
          secondary: '71 85 105',
          accent: '167 139 250'
        },
        shadows: {
          sm: '0 1px 2px 0 rgba(139, 92, 246, 0.2)',
          md: '0 4px 6px -1px rgba(139, 92, 246, 0.3)',
          lg: '0 10px 15px -3px rgba(139, 92, 246, 0.4)',
          xl: '0 20px 25px -5px rgba(139, 92, 246, 0.5)'
        },
        interactive: {
          hoverOverlay: 'rgba(167, 139, 250, 0.15)',
          activeOverlay: 'rgba(167, 139, 250, 0.25)',
          focusRing: '167 139 250'
        },
        status: {
          success: '74 222 128',
          warning: '250 204 21',
          error: '248 113 113',
          info: '96 165 250'
        }
      },

      cyber: {
        name: 'Cyber',
        backgrounds: {
          primary: '10 5 30',
          secondary: '21 10 54',
          tertiary: '36 19 82',
          elevated: '21 10 54'
        },
        text: {
          primary: '233 213 255',
          secondary: '196 181 253',
          muted: '167 139 250',
          inverse: '10 5 30'
        },
        accent: {
          primary: '240 101 240',
          secondary: '232 62 232',
          hover: '192 38 211',
          light: '112 26 117',
          subtle: '74 4 78'
        },
        borders: {
          primary: '88 28 135',
          secondary: '107 33 168',
          accent: '240 101 240'
        },
        shadows: {
          sm: '0 1px 2px 0 rgba(240, 101, 240, 0.3)',
          md: '0 4px 6px -1px rgba(240, 101, 240, 0.4)',
          lg: '0 10px 15px -3px rgba(240, 101, 240, 0.5)',
          xl: '0 20px 25px -5px rgba(240, 101, 240, 0.6)',
          glow: '0 0 20px rgba(240, 101, 240, 0.5)'
        },
        interactive: {
          hoverOverlay: 'rgba(240, 101, 240, 0.2)',
          activeOverlay: 'rgba(240, 101, 240, 0.3)',
          focusRing: '240 101 240'
        },
        status: {
          success: '0 255 170',
          warning: '255 215 0',
          error: '255 20 147',
          info: '0 255 255'
        }
      },

      ocean: {
        name: 'Ocean',
        backgrounds: {
          primary: '8 47 73',
          secondary: '12 74 110',
          tertiary: '14 116 144',
          elevated: '12 74 110'
        },
        text: {
          primary: '240 249 255',
          secondary: '186 230 253',
          muted: '125 211 252',
          inverse: '8 47 73'
        },
        accent: {
          primary: '6 182 212',
          secondary: '8 145 178',
          hover: '14 116 144',
          light: '207 250 254',
          subtle: '236 254 255'
        },
        borders: {
          primary: '14 116 144',
          secondary: '21 94 117',
          accent: '6 182 212'
        },
        shadows: {
          sm: '0 1px 2px 0 rgba(6, 182, 212, 0.2)',
          md: '0 4px 6px -1px rgba(6, 182, 212, 0.3)',
          lg: '0 10px 15px -3px rgba(6, 182, 212, 0.4)',
          xl: '0 20px 25px -5px rgba(6, 182, 212, 0.5)'
        },
        interactive: {
          hoverOverlay: 'rgba(6, 182, 212, 0.15)',
          activeOverlay: 'rgba(6, 182, 212, 0.25)',
          focusRing: '6 182 212'
        },
        status: {
          success: '16 185 129',
          warning: '251 191 36',
          error: '244 63 94',
          info: '59 130 246'
        }
      },

      sunset: {
        name: 'Sunset',
        backgrounds: {
          primary: '69 10 10',
          secondary: '87 13 13',
          tertiary: '127 29 29',
          elevated: '87 13 13'
        },
        text: {
          primary: '254 242 242',
          secondary: '254 215 215',
          muted: '252 165 165',
          inverse: '69 10 10'
        },
        accent: {
          primary: '251 146 60',
          secondary: '249 115 22',
          hover: '234 88 12',
          light: '255 237 213',
          subtle: '255 251 235'
        },
        borders: {
          primary: '127 29 29',
          secondary: '153 27 27',
          accent: '251 146 60'
        },
        shadows: {
          sm: '0 1px 2px 0 rgba(251, 146, 60, 0.2)',
          md: '0 4px 6px -1px rgba(251, 146, 60, 0.3)',
          lg: '0 10px 15px -3px rgba(251, 146, 60, 0.4)',
          xl: '0 20px 25px -5px rgba(251, 146, 60, 0.5)'
        },
        interactive: {
          hoverOverlay: 'rgba(251, 146, 60, 0.15)',
          activeOverlay: 'rgba(251, 146, 60, 0.25)',
          focusRing: '251 146 60'
        },
        status: {
          success: '74 222 128',
          warning: '234 179 8',
          error: '239 68 68',
          info: '147 51 234'
        }
      },

      forest: {
        name: 'Forest',
        backgrounds: {
          primary: '20 29 24',
          secondary: '22 44 33',
          tertiary: '21 77 51',
          elevated: '22 44 33'
        },
        text: {
          primary: '236 253 245',
          secondary: '187 247 208',
          muted: '134 239 172',
          inverse: '20 29 24'
        },
        accent: {
          primary: '74 222 128',
          secondary: '34 197 94',
          hover: '22 163 74',
          light: '220 252 231',
          subtle: '240 253 244'
        },
        borders: {
          primary: '21 77 51',
          secondary: '22 101 52',
          accent: '74 222 128'
        },
        shadows: {
          sm: '0 1px 2px 0 rgba(74, 222, 128, 0.2)',
          md: '0 4px 6px -1px rgba(74, 222, 128, 0.3)',
          lg: '0 10px 15px -3px rgba(74, 222, 128, 0.4)',
          xl: '0 20px 25px -5px rgba(74, 222, 128, 0.5)'
        },
        interactive: {
          hoverOverlay: 'rgba(74, 222, 128, 0.15)',
          activeOverlay: 'rgba(74, 222, 128, 0.25)',
          focusRing: '74 222 128'
        },
        status: {
          success: '34 197 94',
          warning: '234 179 8',
          error: '239 68 68',
          info: '59 130 246'
        }
      }
    };
  }

  // Generate CSS variables for a theme
  generateCSSVariables(themeName) {
    const theme = this.themes[themeName];
    if (!theme) {
      throw new Error(`Theme "${themeName}" not found`);
    }

    let css = `.${themeName}-theme {\n`;
    
    // Backgrounds
    css += `  /* Backgrounds */\n`;
    for (const [key, value] of Object.entries(theme.backgrounds)) {
      css += `  --bg-${key}: ${value};\n`;
    }
    
    // Text
    css += `\n  /* Text Colors */\n`;
    for (const [key, value] of Object.entries(theme.text)) {
      css += `  --text-${key}: ${value};\n`;
    }
    
    // Accent
    css += `\n  /* Accent Colors */\n`;
    for (const [key, value] of Object.entries(theme.accent)) {
      css += `  --accent-${key}: ${value};\n`;
    }
    
    // Borders
    css += `\n  /* Borders & Lines */\n`;
    for (const [key, value] of Object.entries(theme.borders)) {
      css += `  --border-${key}: ${value};\n`;
    }
    
    // Shadows
    css += `\n  /* Shadows */\n`;
    for (const [key, value] of Object.entries(theme.shadows)) {
      css += `  --shadow-${key}: ${value};\n`;
    }
    
    // Interactive
    css += `\n  /* Interactive States */\n`;
    for (const [key, value] of Object.entries(theme.interactive)) {
      const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
      css += `  --${cssKey}: ${value};\n`;
    }
    
    // Status
    css += `\n  /* Status Colors */\n`;
    for (const [key, value] of Object.entries(theme.status)) {
      css += `  --${key}: ${value};\n`;
    }
    
    css += `}\n\n`;
    return css;
  }

  // Generate all themes CSS
  generateAllThemesCSS() {
    let fullCSS = `/* ====================================
   AUTO-GENERATED THEME SYSTEM
   Generated: ${new Date().toISOString()}
   ==================================== */\n\n`;

    for (const themeName of Object.keys(this.themes)) {
      fullCSS += this.generateCSSVariables(themeName);
    }

    // Add utility classes
    fullCSS += this.generateUtilityClasses();

    return fullCSS;
  }

  // Generate utility classes
  generateUtilityClasses() {
    return `/* ====================================
   THEME UTILITY CLASSES
   ==================================== */

/* Background utilities */
.bg-primary { background-color: rgb(var(--bg-primary)); }
.bg-secondary { background-color: rgb(var(--bg-secondary)); }
.bg-tertiary { background-color: rgb(var(--bg-tertiary)); }
.bg-elevated { background-color: rgb(var(--bg-elevated)); }

/* Text utilities */
.text-primary { color: rgb(var(--text-primary)); }
.text-secondary { color: rgb(var(--text-secondary)); }
.text-muted { color: rgb(var(--text-muted)); }
.text-inverse { color: rgb(var(--text-inverse)); }

/* Accent utilities */
.text-accent { color: rgb(var(--accent-primary)); }
.bg-accent { background-color: rgb(var(--accent-primary)); }
.border-accent { border-color: rgb(var(--border-accent)); }

/* Border utilities */
.border-primary { border-color: rgb(var(--border-primary)); }
.border-secondary { border-color: rgb(var(--border-secondary)); }

/* Shadow utilities */
.shadow-theme-sm { box-shadow: var(--shadow-sm); }
.shadow-theme-md { box-shadow: var(--shadow-md); }
.shadow-theme-lg { box-shadow: var(--shadow-lg); }
.shadow-theme-xl { box-shadow: var(--shadow-xl); }

/* Hover utilities */
.hover-overlay:hover { background-color: var(--hover-overlay); }
.active-overlay:active { background-color: var(--active-overlay); }

/* Focus ring */
.focus-theme:focus {
  outline: 2px solid rgb(var(--focus-ring));
  outline-offset: 2px;
}

/* Status utilities */
.text-success { color: rgb(var(--success)); }
.text-warning { color: rgb(var(--warning)); }
.text-error { color: rgb(var(--error)); }
.text-info { color: rgb(var(--info)); }

.bg-success { background-color: rgb(var(--success)); }
.bg-warning { background-color: rgb(var(--warning)); }
.bg-error { background-color: rgb(var(--error)); }
.bg-info { background-color: rgb(var(--info)); }
`;
  }

  // Save theme CSS to file
  saveToFile(outputPath = './themes.css') {
    const css = this.generateAllThemesCSS();
    fs.writeFileSync(outputPath, css, 'utf8');
    console.log(`✅ Themes CSS generated successfully at: ${outputPath}`);
    return outputPath;
  }

  // Get theme as JSON
  getThemeJSON(themeName) {
    return JSON.stringify(this.themes[themeName], null, 2);
  }

  // Get all themes list
  getThemesList() {
    return Object.keys(this.themes).map(key => ({
      id: key,
      name: this.themes[key].name
    }));
  }

  // Export for use in Express.js API
  expressMiddleware() {
    return (req, res, next) => {
      req.themeManager = this;
      next();
    };
  }
}

// ====================================
// USAGE EXAMPLES
// ====================================

// Create instance
const themeManager = new ThemeManager();

// Generate and save all themes to CSS file
themeManager.saveToFile('./public/themes.css');

// Get specific theme as JSON
console.log('\n📦 Cyber Theme JSON:');
console.log(themeManager.getThemeJSON('cyber'));

// Get all themes list
console.log('\n🎨 Available Themes:');
console.log(themeManager.getThemesList());

// Express.js API example
const express = require('express');
const app = express();

// Use theme manager middleware
app.use(themeManager.expressMiddleware());

// API endpoint to get all themes
app.get('/api/themes', (req, res) => {
  res.json(req.themeManager.getThemesList());
});

// API endpoint to get specific theme
app.get('/api/themes/:name', (req, res) => {
  try {
    const theme = req.themeManager.themes[req.params.name];
    if (!theme) {
      return res.status(404).json({ error: 'Theme not found' });
    }
    res.json(theme);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// API endpoint to generate CSS for a specific theme
app.get('/api/themes/:name/css', (req, res) => {
  try {
    const css = req.themeManager.generateCSSVariables(req.params.name);
    res.type('text/css').send(css);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`\n🚀 Theme API Server running on port ${PORT}`);
  console.log(`📍 Available endpoints:`);
  console.log(`   GET /api/themes - List all themes`);
  console.log(`   GET /api/themes/:name - Get theme data`);
  console.log(`   GET /api/themes/:name/css - Get theme CSS`);
});

// Export for module usage
module.exports = ThemeManager;