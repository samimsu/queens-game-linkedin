import { Link } from "react-router-dom";
import getAvailableLevels from "../utils/getAvailableLevels";
import queensLogo from "../assets/queens_game_logo.jpeg";
import RootLayout from "../layouts/RootLayout";

const LevelSelection = () => {
  const totalLevels = 171;
  const availableLevels = getAvailableLevels();

  return (
    <RootLayout>
      <div className="flex flex-col justify-center items-center">
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
        <div className="grid grid-cols-8 sm:grid-cols-10 gap-1 p-1 text-sm">
          {Array.from({ length: totalLevels }, (_, i) => i + 1).map((level) => (
            <Link to={`/level/${level}`} key={level}>
              <button
                className="rounded p-2 w-full text-white bg-[#F96C51] disabled:opacity-75"
                disabled={!availableLevels.includes(level)} // Disable if level doesn't exist
              >
                {level}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </RootLayout>
  );
};

export default LevelSelection;
