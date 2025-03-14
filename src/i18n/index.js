import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enJson from './en.json'
import itJson from './it.json'
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
      translation: enJson
    },
    it: {
      translation: itJson
    }
  }

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    },
    supportedLngs: Object.keys(resources)
  });