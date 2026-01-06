import React, { useState, useEffect, useRef, useCallback } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, ChevronLeft, Settings } from "lucide-react";
import { useTranslation } from "react-i18next";

import { trackEvent } from "../utils/analytics";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);
  const { t } = useTranslation();

  const toggleOpen = () => setIsOpen((prev) => !prev);

  const handleThemeChange = (themeName) => {
    setTheme(themeName);
    setIsOpen(false); // Close after selection
    trackEvent("select_content", {
      content_type: "theme",
      item_id: themeName,
    });
  };

  // Handle click outside
  const handleClickOutside = useCallback((event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, handleClickOutside]);

  const themeOptions = [
    { name: "light", icon: Sun, label: t("THEME.LIGHT") },
    { name: "dark", icon: Moon, label: t("THEME.DARK") },
  ];

  const CurrentThemeIcon = theme === "dark" ? Moon : Sun;

  return (
    <div ref={wrapperRef} className="fixed bottom-4 right-4 z-50">
      {/* Floating Button (Always Visible) */}
      <button
        onClick={toggleOpen}
        className="bg-gray-700 hover:bg-gray-800 text-white p-3 rounded-full shadow-lg sm:rounded-md flex items-center justify-center transition-transform"
        aria-label="Toggle theme settings"
      >
        {isOpen ? <ChevronLeft size={24} /> : <Settings size={24} />}
      </button>

      {/* Theme Options Panel (Hidden by Default) */}
      <div
        className={`absolute bottom-full mb-2 right-0 bg-amber-50 dark:bg-gray-700 shadow-lg rounded-lg p-3 w-40 transition-all duration-300 ease-in-out transform ${
          isOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="space-y-2">
          {themeOptions.map(({ name, icon: Icon, label }) => (
            <button
              key={name}
              onClick={() => handleThemeChange(name)}
              className={`w-full flex items-center p-2 rounded-md transition-colors ${
                theme === name
                  ? "bg-amber-200 dark:bg-gray-900 text-gray-600 dark:text-gray-100"
                  : "hover:bg-amber-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-100"
              }`}
            >
              <Icon size={18} className="mr-2" />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
