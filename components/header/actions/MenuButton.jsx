import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  Settings, 
  User, 
  CreditCard, 
  Palette, 
  Bell, 
  Shield, 
  HelpCircle, 
  LogOut,
  Moon,
  Sun,
  Monitor,
  ChevronRight,
  Languages,
  Zap
} from "lucide-react";
import { themes } from "./themes";

export default function MenuButton({ router }) {
  const [selectedTheme, setSelectedTheme] = useState('default');

  // Load saved theme on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('selectedTheme') || 'default';
    setSelectedTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (themeId) => {
    const theme = themes.find(t => t.id === themeId);
    if (!theme) return;

    const root = document.documentElement;
    // Remove all theme classes
    themes.forEach(t => root.classList.remove(t.class));
    // Add the selected theme class
    root.classList.add(theme.class);
    localStorage.setItem('selectedTheme', themeId);
  };

  const handleThemeChange = (themeId) => {
    setSelectedTheme(themeId);
    applyTheme(themeId);
  };

  const getThemeIcon = (themeId) => {
    switch (themeId) {
      case 'light': return Sun;
      case 'dark': return Moon;
      case 'default': return Palette;
      default: return Palette;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="p-2.5 rounded-xl bg-gradient-to-br from-purple-500 via-fuchsia-500 to-pink-500 hover:from-purple-600 hover:via-fuchsia-600 hover:to-pink-600 transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 active:scale-95">
          <Settings className="w-5 h-5 text-white animate-spin-slow" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-44 bg-gradient-to-br from-slate-900 to-slate-800 border border-purple-500/30 rounded-xl shadow-2xl shadow-purple-500/20 p-2">
        <DropdownMenuLabel className="text-white font-bold text-lg px-2 py-3 flex items-center gap-2">
          <Settings className="w-5 h-5 text-purple-400" />
          Settings
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-purple-500/30 my-2" />
        
        {/* Profile */}
        <DropdownMenuItem
          className="text-purple-200 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-fuchsia-500/20 hover:text-white cursor-pointer rounded-lg px-3 py-2.5 transition-all duration-200 flex items-center gap-3"
          onClick={() => router.push('/profile')}
        >
          <User className="w-4 h-4" />
          <span className="font-medium">Profile</span>
        </DropdownMenuItem>

        {/* Billing */}
        <DropdownMenuItem
          className="text-purple-200 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-fuchsia-500/20 hover:text-white cursor-pointer rounded-lg px-3 py-2.5 transition-all duration-200 flex items-center gap-3"
          onClick={() => router.push('/billing')}
        >
          <CreditCard className="w-4 h-4" />
          <span className="font-medium">Billing</span>
        </DropdownMenuItem>

        {/* Theme Selector */}
        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="text-purple-200 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-fuchsia-500/20 hover:text-white cursor-pointer rounded-lg px-3 py-2.5 transition-all duration-200 flex items-center gap-3">
            <Palette className="w-4 h-4" />
            <span className="font-medium">Theme </span>
            <ChevronRight className="w-4 h-4 ml-auto" />
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="w-48 bg-gradient-to-br from-slate-900 to-slate-800 border border-purple-500/30 rounded-xl shadow-2xl p-2">
            {themes.map((theme) => {
              const Icon = getThemeIcon(theme.id);
              return (
                <DropdownMenuItem
                  key={theme.id}
                  className={`cursor-pointer rounded-lg px-3 py-2.5 transition-all duration-200 flex items-center gap-3 ${
                    selectedTheme === theme.id
                      ? 'bg-gradient-to-r from-purple-500/30 to-fuchsia-500/30 text-white'
                      : 'text-purple-200 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-fuchsia-500/20 hover:text-white'
                  }`}
                  onClick={() => handleThemeChange(theme.id)}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{theme.label}</span>
                  {selectedTheme === theme.id && (
                    <span className="ml-auto text-green-400">✓</span>
                  )}
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuSubContent>
        </DropdownMenuSub>

        {/* Notifications */}
        <DropdownMenuItem
          className="text-purple-200 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-fuchsia-500/20 hover:text-white cursor-pointer rounded-lg px-3 py-2.5 transition-all duration-200 flex items-center gap-3"
          onClick={() => router.push('/notifications')}
        >
          <Bell className="w-4 h-4" />
          <span className="font-medium">Notifications</span>
        </DropdownMenuItem>

        {/* Language */}
        <DropdownMenuItem
          className="text-purple-200 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-fuchsia-500/20 hover:text-white cursor-pointer rounded-lg px-3 py-2.5 transition-all duration-200 flex items-center gap-3"
          onClick={() => router.push('/language')}
        >
          <Languages className="w-4 h-4" />
          <span className="font-medium">Language</span>
        </DropdownMenuItem>

        <DropdownMenuSeparator className="bg-purple-500/30 my-2" />

        {/* Privacy & Security */}
        <DropdownMenuItem
          className="text-purple-200 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-fuchsia-500/20 hover:text-white cursor-pointer rounded-lg px-3 py-2.5 transition-all duration-200 flex items-center gap-3"
          onClick={() => router.push('/security')}
        >
          <Shield className="w-4 h-4" />
          <span className="font-medium">Privacy & Security</span>
        </DropdownMenuItem>

        {/* Advanced Settings */}
        <DropdownMenuItem
          className="text-purple-200 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-fuchsia-500/20 hover:text-white cursor-pointer rounded-lg px-3 py-2.5 transition-all duration-200 flex items-center gap-3"
          onClick={() => router.push('/advanced')}
        >
          <Zap className="w-4 h-4" />
          <span className="font-medium">Advanced</span>
        </DropdownMenuItem>

        {/* Help & Support */}
        <DropdownMenuItem
          className="text-purple-200 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-fuchsia-500/20 hover:text-white cursor-pointer rounded-lg px-3 py-2.5 transition-all duration-200 flex items-center gap-3"
          onClick={() => router.push('/help')}
        >
          <HelpCircle className="w-4 h-4" />
          <span className="font-medium">Help & Support</span>
        </DropdownMenuItem>

        <DropdownMenuSeparator className="bg-purple-500/30 my-2" />

        {/* Logout */}
        <DropdownMenuItem
          className="text-red-300 hover:bg-gradient-to-r hover:from-red-500/20 hover:to-pink-500/20 hover:text-red-200 cursor-pointer rounded-lg px-3 py-2.5 transition-all duration-200 flex items-center gap-3"
          onClick={() => {
            // Add logout logic here
            console.log('Logging out...');
            router.push('/logout');
          }}
        >
          <LogOut className="w-4 h-4" />
          <span className="font-medium">Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}