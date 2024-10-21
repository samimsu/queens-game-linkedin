import { useState } from "react";
import { Link } from "react-router-dom";
import getAvailableLevels from "../utils/getAvailableLevels";
import queensLogo from "../assets/queens_game_logo.jpeg";
import RootLayout from "../layouts/RootLayout";
import Queen from "../components/Queen";
import { isLevelCompleted } from "../utils/localStorage";

const LevelButton = ({ level, disabled }) => {
  const completed = isLevelCompleted(level);

  return (
    <Link to={`/level/${level}`} key={level}>
      <button
        className="relative rounded p-2 w-full text-white bg-[#F96C51] disabled:opacity-75"
        disabled={disabled}
      >
        {level}
        {completed && (
          <span className="absolute top-0 right-0 text-2xl font-bold p-0.5">
            <Queen size="10" className="fill-yellow-400" />
          </span>
        )}
      </button>
    </Link>
  );
};

const LevelSelection = () => {
  const availableLevels = getAvailableLevels();
  const totalLevels = Math.max(...availableLevels);

  const [showOnlyAvailableLevels, setShowOnlyAvailableLevels] = useState(false);

  return (
    <RootLayout>
      <div className="flex flex-col justify-center items-center w-fit mx-auto">
        <div className="flex items-center space-x-3 mt-4 mb-3">
          <img src={queensLogo} width={32} height={32} alt="Queens Logo" />
          <h1 className="text-2xl">
            <a
              href="https://www.linkedin.com/showcase/queens-game"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 font-medium hover:underline"
            >
              Queens
            </a>
          </h1>
        </div>

        <div className="flex items-center space-x-2 self-start px-1">
          <input
            type="checkbox"
            checked={showOnlyAvailableLevels}
            onChange={() => setShowOnlyAvailableLevels((prev) => !prev)}
          />
          <label>Available levels only</label>
        </div>
        <div className="grid grid-cols-8 sm:grid-cols-10 gap-1 p-1 text-sm">
          {(showOnlyAvailableLevels &&
            availableLevels.map((level) => (
              <LevelButton
                key={level}
                level={level}
                disabled={!availableLevels.includes(level)}
              />
            ))) || (
            <>
              {Array.from({ length: totalLevels }, (_, i) => i + 1).map(
                (level) => (
                  <LevelButton
                    key={level}
                    level={level}
                    disabled={!availableLevels.includes(level)}
                  />
                )
              )}
            </>
          )}
        </div>
      </div>
    </RootLayout>
  );
};

export default LevelSelection;
