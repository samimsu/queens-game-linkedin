import { levels } from "./levels";

export const getOrderedLevels = () => {
  const levelKeys = Object.keys(levels);
  const availableLevels = levelKeys.map((key) =>
    parseInt(key.replace("level", ""), 10),
  );

  return availableLevels;
};

export const getLevelsBySize = () => {
  const levelsBySize: Record<number, number[]> = {};

  Object.entries(levels).forEach(([key, level]) => {
    const size = level.size;
    if (!levelsBySize[size]) {
      levelsBySize[size] = [];
    }
    levelsBySize[size].push(parseInt(key.replace("level", ""), 10));
  });

  return levelsBySize;
};
