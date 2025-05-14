import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Queen from "@/components/Queen";
import DiscordButton from "./LevelSelection/components/DiscordButton";
import SupportMeIconButton from "./LevelSelection/components/SupportMeIconButton";
import LanguageDropdown from "./LevelSelection/components/LanguageDropdown";
import NewBadge from "./NewBadge";
import { useTranslation } from "react-i18next";

const NAV_LINKS = [
  { to: "/", labelKey: "HOME" },
  { to: "/bonus-levels", labelKey: "BONUS_LEVELS" },
  { to: "/level-builder", labelKey: "LEVEL_BUILDER" },
];

const Navbar = () => {
  const { t } = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative rounded-2xl p-4 w-full">
      <div className="max-w-7xl flex justify-between items-center w-full mx-auto">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3 font-medium">
            <Link to="/" className="flex items-center space-x-2">
              <Queen className="dark:fill-yellow-400" />
              <h1 className="text-xl sm:text-2xl">Queens</h1>
            </Link>
          </div>
          {/* Navigation Links - Desktop */}
          <ul className="space-x-2 hidden md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.to} className="relative">
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    isActive ? "bg-primary text-white p-2 rounded" : "p-2"
                  }
                >
                  {t(link.labelKey)}
                </NavLink>
                {link.labelKey === "BONUS_LEVELS" && (
                  <NewBadge className="absolute -top-3 -right-4 z-10" />
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-6">
          <LanguageDropdown />
          <div className="flex items-center space-x-3">
            <DiscordButton />
            <SupportMeIconButton />
            <button className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background shadow-lg rounded-b-lg p-4 z-20 md:hidden">
          <ul className="space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.to} className="relative">
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-primary text-white p-2 rounded w-full flex"
                      : "w-full flex p-2"
                  }
                  onClick={toggleMenu}
                >
                  {t(link.labelKey)}
                </NavLink>
                {link.labelKey === "BONUS_LEVELS" && (
                  <NewBadge className="absolute top-1/2 -translate-y-1/2 right-4 z-10" />
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
