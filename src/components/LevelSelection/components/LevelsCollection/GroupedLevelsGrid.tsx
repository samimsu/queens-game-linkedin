import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  const levelsBySizeFiltered: Record<string, number[]> = useMemo(() => {
    return Object.entries(levelsBySize)
      .reduce((acc: Record<string, number[]>, [size, levels]) => {
        acc[size] = levels.filter(level => filterLevel(level, orderedLevels, {
          showOnlyAvailableLevels,
          hideCompletedLevels,
        }))
        return acc
      }, {})
  }, [showOnlyAvailableLevels, hideCompletedLevels])

  return (
    <>
      {
        Object.entries(levelsBySizeFiltered).map(([size, levels]) => (
          <div key={size} className="mb-1 p-1">
            <h3 className="font-medium mb-1 text-center text-lg">
              {size}x{size}
            </h3>
            {levels.length === 0 && <div className="text-center mb-3">{t('ALL_LEVELS_COMPLETED')}</div>}
            <div className="grid grid-cols-8 sm:grid-cols-10 gap-1">
              {
                levels.map((level) => (
                  <LevelButton key={level} level={level} />
                ))
              }
            </div>
          </div>
        ))
      }
    </>
  )
};

export default GroupedLevelsGrid;
