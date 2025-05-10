import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

// Definición de los idiomas disponibles con sus nombres y códigos de bandera
const languages = [
  { code: "en", name: "English", flagCode: "gb" },
  { code: "es", name: "Español", flagCode: "es" },
  { code: "it", name: "Italiano", flagCode: "it" },
  { code: "ar", name: "العربية", flagCode: "sa" },
  { code: "pt", name: "Português", flagCode: "pt" },
];

const LanguageDropdown = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Encuentra el idioma actual
  const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0];

  // Cierra el dropdown cuando se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Cambia el idioma y cierra el dropdown
  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Botón del dropdown */}
      <button
        className="flex items-center gap-2 px-2 py-1 rounded bg-[#F96C51] opacity-75 hover:opacity-100 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <img
          src={`https://flagcdn.com/24x18/${currentLanguage.flagCode}.png`}
          srcSet={`https://flagcdn.com/48x36/${currentLanguage.flagCode}.png 2x, https://flagcdn.com/72x54/${currentLanguage.flagCode}.png 3x`}
          alt={currentLanguage.name}
          className="w-6 h-4 object-cover"
        />
        <span className="text-sm">{currentLanguage.code.toUpperCase()}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      {/* Menú desplegable */}
      {isOpen && (
        <div className="absolute left-0 mt-1 w-40 bg-white dark:bg-gray-800 rounded shadow-lg z-10">
          <ul className="py-1">
            {languages.map((language) => (
              <li key={language.code}>
                <button
                  className={`w-full text-left px-4 py-2 flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                    i18n.language === language.code ? "bg-gray-100 dark:bg-gray-700" : ""
                  }`}
                  onClick={() => handleLanguageChange(language.code)}
                >
                  <img
                    src={`https://flagcdn.com/24x18/${language.flagCode}.png`}
                    srcSet={`https://flagcdn.com/48x36/${language.flagCode}.png 2x, https://flagcdn.com/72x54/${language.flagCode}.png 3x`}
                    alt={language.name}
                    className="w-6 h-4 object-cover"
                  />
                  <span className="text-sm">{language.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;