import BaseLevel from "../shared/BaseLevel";
import { BonusLevel as BonusLevelType } from "@/utils/types";

interface BonusLevelProps {
  id: string;
  title: string;
  level: BonusLevelType;
  previousLevel?: BonusLevelType | null;
  nextLevel?: BonusLevelType | null;
}

const BonusLevel = ({
  id,
  title,
  level,
  previousLevel,
  nextLevel,
}: BonusLevelProps) => {
  return (
    <BaseLevel
      id={id}
      title={title}
      level={level}
      previousLevel={previousLevel}
      nextLevel={nextLevel}
      levelType="bonus"
      previousPage="/bonus-levels"
    />
  );
};

export default BonusLevel;
