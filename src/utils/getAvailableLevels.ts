import { levels } from "./levels";
import { getStoredGeneratedLevels } from "@/utils/localStorage.ts";

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

export const getGeneratedLevelsBySize = () => {
  const levelsBySize: Record<
    number,
    {
      id: string;
      timeInSeconds: number;
      completed: boolean;
      state: string[][];
      isInProgress: boolean;
    }[]
  > = {};
  getStoredGeneratedLevels().forEach((itm) => {
    if (!levelsBySize[itm.size]) {
      levelsBySize[itm.size] = [];
    }
    levelsBySize[itm.size].push({
      ...itm,
      isInProgress: Boolean(itm.state?.length),
    });
  });
  return levelsBySize;
};
