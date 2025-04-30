import React from "react";
import {
  getLevelsBySize,
  getOrderedLevels,
} from "../../../utils/getAvailableLevels";
import LevelButton from "./LevelButton";

const LevelsCollection = ({
  showOnlyAvailableLevels,
  groupBySize,
  className,
}) => {
  const orderedLevels = getOrderedLevels();
  const totalLevels = Math.max(...orderedLevels);
  const levelsBySize = getLevelsBySize();

  const renderGroupedLevels = () => {
    return Object.entries(levelsBySize).map(([size, levels]) => (
      <div key={size} className="mb-1 p-1">
        <h3 className="font-medium mb-1 text-center text-lg">
          {size}x{size}
        </h3>
        <div className="grid grid-cols-8 sm:grid-cols-10 gap-1">
          {levels.map((level) => (
            <LevelButton key={level} level={level} />
          ))}
        </div>
      </div>
    ));
  };

  const renderUngroupedLevels = () => {
    return (
      <div
        className={`grid grid-cols-8 sm:grid-cols-10 gap-1 p-1 text-sm ${className}`}
      >
        {(showOnlyAvailableLevels &&
          orderedLevels.map((level) => (
            <LevelButton
              key={level}
              level={level}
              disabled={!orderedLevels.includes(level)}
            />
          ))) || (
          <>
            {Array.from({ length: totalLevels }, (_, i) => i + 1).map(
              (level) => (
                <LevelButton
                  key={level}
                  level={level}
                  disabled={!orderedLevels.includes(level)}
                />
              ),
            )}
          </>
        )}
      </div>
    );
  };

  return (
    <>
      <div className={`text-sm ${className}`}>
        {groupBySize ? renderGroupedLevels() : renderUngroupedLevels()}
      </div>
    </>
  );
};

export default LevelsCollection;
