import { Link } from "react-router-dom";
import getAvailableLevels from "../utils/getAvailableLevels";

const LevelSelection = () => {
  const totalLevels = 171;
  const availableLevels = getAvailableLevels();

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl mt-4 mb-3">Levels</h1>
      <div className="grid grid-cols-10 gap-1 p-1 text-sm">
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
  );
};

export default LevelSelection;
