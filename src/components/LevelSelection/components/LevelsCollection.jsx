import React from "react";
import getAvailableLevels from "../../../utils/getAvailableLevels";
import LevelButton from "./LevelButton";

const LevelsCollection = ({ showOnlyAvailableLevels, className }) => {
  const availableLevels = getAvailableLevels();
  const totalLevels = Math.max(...availableLevels);

  return (
    <div
      className={`grid grid-cols-8 sm:grid-cols-10 gap-1 p-1 text-sm ${className}`}
    >
      {(showOnlyAvailableLevels &&
        availableLevels.map((level) => (
          <LevelButton
            key={level}
            level={level}
            disabled={!availableLevels.includes(level)}
          />
        ))) || (
        <>
          {Array.from({ length: totalLevels }, (_, i) => i + 1).map((level) => (
            <LevelButton
              key={level}
              level={level}
              disabled={!availableLevels.includes(level)}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default LevelsCollection;
