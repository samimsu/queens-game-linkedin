import React from "react";
import { useTranslation } from "react-i18next";
import BaseLevel from "../shared/BaseLevel";
import { CommunityLevel as CommunityLevelType } from "@/utils/types";

interface CommunityLevelProps {
  id: string;
  title: string;
  level: CommunityLevelType;
  previousLevel?: CommunityLevelType | null;
  nextLevel?: CommunityLevelType | null;
}

const CommunityLevel = ({
  id,
  title,
  level,
  previousLevel,
  nextLevel,
}: CommunityLevelProps) => {
  const { t } = useTranslation();

  return (
    <BaseLevel
      id={id}
      title={title}
      level={level}
      previousLevel={previousLevel}
      nextLevel={nextLevel}
      levelType="community"
      previousPage="/community-levels"
    />
  );
};

export default CommunityLevel;
