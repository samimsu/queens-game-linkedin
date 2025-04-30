import { levels } from "@/utils/levels";
import { getLevelsBySize, getOrderedLevels } from "@/utils/getAvailableLevels";

const getNavigationLevels = (levelId: string, level: string) => {
  if (!levels[level]) {
    console.log(`Level ${level} does not exist.`);
    return {
      previousLevel: null,
      nextLevel: null,
      previousDisabled: true,
      nextDisabled: true,
    };
  }

  const levelSize = levels[level]?.size;
  const isGroupedBySize = localStorage.getItem("groupBySize") === "true";

  const availableLevels = isGroupedBySize
    ? getLevelsBySize()
    : getOrderedLevels();

  if (isGroupedBySize) {
    const levelsBySize = getLevelsBySize();
    const levelIndex = levelsBySize[levelSize].indexOf(Number(levelId));
    const previousLevel =
      levelIndex > 0 ? levelsBySize[levelSize][levelIndex - 1] : null;
    const nextLevel =
      levelIndex < levelsBySize[levelSize].length - 1
        ? levelsBySize[levelSize][levelIndex + 1]
        : null;
    const previousDisabled = previousLevel === null;
    const nextDisabled = nextLevel === null;
    return { previousLevel, nextLevel, previousDisabled, nextDisabled };
  } else {
    const levelIndex = Array.isArray(availableLevels)
      ? availableLevels.indexOf(Number(levelId))
      : -1;
    const previousLevel =
      levelIndex > 0 ? availableLevels[levelIndex - 1] : null;
    const nextLevel =
      Array.isArray(availableLevels) && levelIndex < availableLevels.length - 1
        ? availableLevels[levelIndex + 1]
        : null;
    const previousDisabled = previousLevel === null;
    const nextDisabled = nextLevel === null;
    return { previousLevel, nextLevel, previousDisabled, nextDisabled };
  }
};

export default getNavigationLevels;
