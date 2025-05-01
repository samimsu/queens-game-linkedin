import { useTranslation } from "react-i18next";

interface LanguageButtonProps {
  lang: string;
  changeLanguage: (lang: string) => void;
  selected: boolean;
}

const LanguageButton = ({
  lang,
  changeLanguage,
  selected,
}: LanguageButtonProps) => {
  return (
    <button
      className={`text-sm px-1 py-0.5 ${
        selected ? "text-white bg-[#F96C51] rounded" : ""
      }`}
      onClick={() => changeLanguage(lang)}
    >
      {lang.toUpperCase()}
    </button>
  );
};

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const languages = ["en", "it", "es"];

  return (
    <div className="grid grid-cols-3">
      {languages.map((lang) => (
        <LanguageButton
          key={lang}
          lang={lang}
          changeLanguage={i18n.changeLanguage}
          selected={i18n.language === lang}
        />
      ))}
    </div>
  );
};

export default LanguageSwitcher;
