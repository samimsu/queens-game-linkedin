import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useTranslation } from "react-i18next";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation();

  const handleThemeChange = (themeName: string) => {
    setTheme(themeName);
  };

  const currentTheme = {
    icon: theme === "dark" ? Moon : Sun,
    name: theme === "dark" ? t("THEME.DARK") : t("THEME.LIGHT"),
    toggleTo: theme == "dark" ? "light" : "dark",
  };

  return (
    <button
      title={currentTheme.name}
      onClick={() => handleThemeChange(currentTheme.toggleTo)}
      className="p-2 rounded-md transition-colors hover:bg-gray-300 bg-opacity-20 dark:hover:bg-gray-700 dark:hover:bg-opacity-20"
    >
      <currentTheme.icon size={18} />
    </button>
  );
};

export default ThemeSwitcher;
