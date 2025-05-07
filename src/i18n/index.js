import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enJson from "./en.json";
import itJson from "./it.json";
import esJson from "./es.json";
import arJson from "./ar.json";
import ptJson from "./pt.json";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  es: {
    translation: esJson,
  },
  en: {
    translation: enJson,
  },
  it: {
    translation: itJson,
  },
  ar: {
    translation: arJson,
  },
  pt: {
    translation: ptJson,
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: ["en", "it", "es", "ar", "pt"],
    interpolation: {
      escapeValue: false,
    },
    supportedLngs: Object.keys(resources),
    detection: {
      convertDetectedLanguage: (lng) => lng.split("-")[0], // remove it if you want support regional languages (en -> en-US)
    },
  });
