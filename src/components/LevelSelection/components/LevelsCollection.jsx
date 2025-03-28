import React, { useEffect, useState } from "react";
import {
  getLevelsBySize,
  getOrderedLevels,
} from "../../../utils/getAvailableLevels";
import LevelButton from "./LevelButton";
import { isLevelCompleted } from '@/utils/localStorage'

const filterLevel = (level, orderedLevels, filters = {}) => {
  const {
    showOnlyAvailableLevels = false,
    hideCompletedLevels = false
  } = filters

  let toKeep = true;

  if (toKeep && (showOnlyAvailableLevels || hideCompletedLevels)) {
    toKeep = orderedLevels.includes(level)
  }

  if (toKeep && hideCompletedLevels) {
    toKeep = !isLevelCompleted(level)
  }
  return toKeep
}

const LevelsCollection = ({
  showOnlyAvailableLevels,
  hideCompletedLevels,
  groupBySize,
  className,
}) => {
  const [levelsFiltered, setLevelsFiltered] = useState([])
  const orderedLevels = getOrderedLevels();
  const totalLevels = Math.max(...orderedLevels);
  const levelsBySize = getLevelsBySize();

  useEffect(() => {
    setLevelsFiltered(
      Array.from({ length: totalLevels }, (_, i) => i + 1)
        .filter(level => filterLevel(level, orderedLevels, { showOnlyAvailableLevels, hideCompletedLevels }))
    )
  }, [showOnlyAvailableLevels, hideCompletedLevels])

  const renderGroupedLevels = () => {
    return Object.entries(levelsBySize).map(([size, levels]) => (
      <div key={size} className="mb-1 p-1">
        <h3 className="font-medium mb-1 text-center text-lg">
          {size}x{size}
        </h3>
        <div className="grid grid-cols-8 sm:grid-cols-10 gap-1">
          {
            levels
              .filter(level => !hideCompletedLevels || !isLevelCompleted(level))
              .map((level) => (
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
        {levelsFiltered.map(
          (level) => (
            <LevelButton
              key={level}
              level={level}
              disabled={!orderedLevels.includes(level)}
            />
          ),
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
