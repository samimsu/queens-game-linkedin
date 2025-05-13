import { useState, useRef, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

// Mapeo de códigos de idioma a códigos de país para banderas cuando no corresponde el codigo del pais al icono de la bandera a mostrar de https://flagcdn.com
const languageToFlagCode: Record<string, string> = {
  en: "gb", // Inglés -> Gran Bretaña  //en= error404
  pt: "br", // Portugués -> Brasil     //pt= portugal
  ar: "sa", // Árabe -> Arabia Saudita //ar= argentina
};

// Función para obtener el nombre del idioma desde las traducciones
const getLanguageNativeName = (code: string): string => {
  try {
    // Intenta obtener el nombre del idioma desde las traducciones
    return i18n.getFixedT(code)("LANGUAGE_NAME");
  } catch (error) {
    // Si hay algún error, usa el código del idioma como fallback
    return code.toUpperCase();
  }
};

// Función para obtener el código de país para la bandera
const getFlagCodeFromLanguage = (langCode: string): string => {
  return languageToFlagCode[langCode] || langCode; // Usa el código de idioma como fallback
};

const LanguageDropdown = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Obtiene los idiomas soportados dinámicamente desde i18n
  const languages = useMemo(() => {
    // Obtiene los códigos de idioma de supportedLngs o resources
    const languageCodes =
      i18n.options.supportedLngs || Object.keys(i18n.options.resources || {});

    // Filtra 'cimode' que es un idioma especial de i18next para desarrollo
    return languageCodes
      .filter((code) => code !== "cimode" && typeof code === "string")
      .map((code) => ({
        code,
        // Obtiene el nombre del idioma desde las traducciones
        name: getLanguageNativeName(code),
        flagCode: getFlagCodeFromLanguage(code),
      }));
  }, []);

  // Encuentra el idioma actual
  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  // Cierra el dropdown cuando se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
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
        className="flex items-center gap-2 px-2 py-1 rounded hover:bg-[#F96C51]/75 transition-colors"
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
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
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
        <div className="absolute left-0 mt-1 w-40 bg-white dark:bg-gray-800 rounded shadow-lg z-20">
          <ul className="py-1">
            {languages.map((language) => (
              <li key={language.code}>
                <button
                  className={`w-full text-left px-4 py-2 flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                    i18n.language === language.code
                      ? "bg-gray-100 dark:bg-gray-700"
                      : ""
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
