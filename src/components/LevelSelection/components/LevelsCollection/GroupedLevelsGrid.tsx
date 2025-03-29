import React from "react";
// @ts-ignore
import { getLevelsBySize } from "@/utils/getAvailableLevels";
// @ts-ignore
import LevelButton from "@/components/LevelSelection/components/LevelButton";
import filterLevel from "./filterLevel";
// @ts-ignore
import { getOrderedLevels } from "@/utils/getAvailableLevels";
import { LevelSelectionFilters } from "../../interfaces";

type GroupedLevelsGridProps = LevelSelectionFilters;

const levelsBySize: Record<string, number[]> = getLevelsBySize();
const orderedLevels = getOrderedLevels();

const GroupedLevelsGrid: React.FC<GroupedLevelsGridProps> = ({
  showOnlyAvailableLevels,
  hideCompletedLevels,
}) => {
  return (
    <>
      {
        Object.entries(levelsBySize).map(([size, levels]) => (
          <div key={size} className="mb-1 p-1">
            <h3 className="font-medium mb-1 text-center text-lg">
              {size}x{size}
            </h3>
            <div className="grid grid-cols-8 sm:grid-cols-10 gap-1">
              {levels
                .filter((level) =>
                  filterLevel(level, orderedLevels, {
                    showOnlyAvailableLevels,
                    hideCompletedLevels,
                  })
                )
                .map((level) => (
                  <LevelButton key={level} level={level} />
                ))}
            </div>
          </div>
        ))
      }
    </>
  )
};

export default GroupedLevelsGrid;
