import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Queen from "@/components/Queen";
import DiscordButton from "./LevelSelection/components/DiscordButton";
import SupportMeIconButton from "./LevelSelection/components/SupportMeIconButton";
import LanguageDropdown from "./LevelSelection/components/LanguageDropdown";
import NewBadge from "./NewBadge";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative rounded-2xl p-4 w-full">
      <div className="max-w-7xl flex justify-between items-center w-full">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3 font-medium">
            <Link to="/" className="flex items-center space-x-2">
              <Queen className="dark:fill-yellow-400" />
              <h1 className="text-xl sm:text-2xl">Queens</h1>
            </Link>
          </div>
          {/* Navigation Links - Desktop */}
          <ul className="space-x-2 hidden md:flex">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "bg-primary text-white p-2 rounded" : "p-2"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="relative">
              <NavLink
                to="/bonus-levels"
                className={({ isActive }) =>
                  isActive ? "bg-primary text-white p-2 rounded" : "p-2"
                }
              >
                Bonus Levels
              </NavLink>
              <NewBadge className="absolute -top-3 -right-4 z-10" />
            </li>
            <li>
              <NavLink
                to="/level-builder"
                className={({ isActive }) =>
                  isActive ? "bg-primary text-white p-2 rounded" : "p-2"
                }
              >
                Level Builder
              </NavLink>
            </li>
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
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "bg-primary text-white p-2 rounded w-full flex"
                    : "w-full flex p-2"
                }
                onClick={toggleMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/bonus-levels"
                className={({ isActive }) =>
                  isActive
                    ? "bg-primary text-white p-2 rounded w-full flex"
                    : "w-full flex p-2"
                }
                onClick={toggleMenu}
              >
                Bonus Levels
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/level-builder"
                className={({ isActive }) =>
                  isActive
                    ? "bg-primary text-white p-2 rounded w-full flex"
                    : "w-full flex p-2"
                }
                onClick={toggleMenu}
              >
                Level Builder
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
