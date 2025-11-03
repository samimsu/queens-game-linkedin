import React from "react";
import GroupedLevelsGrid from "./GroupedLevelsGrid";
import UngroupedLevelsGrid from "./UngroupedLevelsGrid";
import { LevelSelectionFilters } from "../../interfaces";

interface LevelsCollectionProps extends LevelSelectionFilters {
  className: string;
  groupBySize: boolean;
}

const LevelsCollection: React.FC<LevelsCollectionProps> = ({
  showOnlyAvailableLevels,
  hideCompletedLevels,
  groupBySize,
  className,
}) => {
  return (
    <div className={`text-sm ${className}`}>
      {groupBySize ? (
        <GroupedLevelsGrid
          showOnlyAvailableLevels={showOnlyAvailableLevels}
          hideCompletedLevels={hideCompletedLevels}
        />
      ) : (
        <UngroupedLevelsGrid
          showOnlyAvailableLevels={showOnlyAvailableLevels}
          hideCompletedLevels={hideCompletedLevels}
          className={className}
        />
      )}
    </div>
  );
};

export default LevelsCollection;
