// @ts-ignore
import { isLevelCompleted } from "@/utils/localStorage";
import { LevelSelectionFilters } from "../../interfaces";

const filterLevel = (
  level: number,
  orderedLevels: number[],
  {
    showOnlyAvailableLevels = false,
    hideCompletedLevels = false,
  }: LevelSelectionFilters,
): boolean => {
  if (showOnlyAvailableLevels || hideCompletedLevels) {
    if (!orderedLevels.includes(level)) return false;
  }

  if (hideCompletedLevels && isLevelCompleted(level)) {
    return false;
  }

  return true;
};

export default filterLevel;
