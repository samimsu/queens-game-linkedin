import { useTranslation } from "react-i18next";

export function useDirection() {
  const { i18n } = useTranslation();
  const rtlLanguages = ["ar", "he"];
  const isRTL = rtlLanguages.includes(i18n.resolvedLanguage || i18n.language);
  return isRTL ? "rtl" : "ltr";
}
