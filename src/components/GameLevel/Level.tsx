import React from "react";
import { levels } from "../../utils/levels";
import getNavigationLevels from "@/utils/getNavigationLevels";
import { useTranslation } from "react-i18next";
import BaseLevel from "../shared/BaseLevel";

interface LevelProps {
  id: string;
  level: string;
}

const Level: React.FC<LevelProps> = ({ id, level }) => {
  const { t } = useTranslation();
  
  const levelData = levels[level];
  const { previousLevel, nextLevel } = getNavigationLevels(id, level);
  
  // Prepare previous level data if available
  const previousLevelData = previousLevel ? {
    ...levels[`level${previousLevel}`],
    path: `/level/${previousLevel}`
  } : null;
  
  // Prepare next level data if available
  const nextLevelData = nextLevel ? {
    ...levels[`level${nextLevel}`],
    path: `/level/${nextLevel}`
  } : null;

  return (
    <BaseLevel
      id={id}
      title={`${t("LEVEL")} ${id}`}
      level={levelData}
      previousLevel={previousLevelData}
      nextLevel={nextLevelData}
      levelType="normal"
      previousPage="/"
    />
  );
};

export default Level;
