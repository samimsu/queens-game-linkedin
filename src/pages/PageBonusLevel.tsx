import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { parse, format } from "date-fns";
import RootLayout from "@/layouts/RootLayout";
import PageTitle from "@/components/PageTitle";
import BonusLevel from "@/components/BonusLevel/BonusLevel";
import { bonusLevels } from "@/utils/bonusLevels";
import { BonusLevel as BonusLevelType } from "@/utils/types";
import PageNotFound from "./PageNotFound";
import { useBonusLevelNavigation } from "@/hooks/useLevelNavigation";

function getDatesFromId(id: string) {
  // Extract start and end dates from ID (e.g., "4-may-2025-10-may-2025")
  const match = id.match(/^\d{4}-\d{2}-\d{2}$/);
  if (!match) {
    throw new Error("Invalid ID format. Expected: yyyy-MM-dd");
  }
  const [startDateStr] = match;

  const startDate = parse(startDateStr, "yyyy-MM-dd", new Date());
  return { startDate };
}

const PageBonusLevel = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const { currentLevel, previousLevel, nextLevel } = useBonusLevelNavigation<BonusLevelType>(bonusLevels, id);

  if (!id) return;

  if (!currentLevel) {
    return <PageNotFound />;
  }

  const { startDate } = getDatesFromId(id);

  // Format dates for display and ID
  const dateFormat = t("DATE_FORMAT", "MMMM d, yyyy");
  const weekOfDate = format(startDate, dateFormat);
  
  return (
    <RootLayout>
      <PageTitle
        title={`${t("BONUS_LEVEL")} - ${t("WEEK_OF", { weekOfDate })}`}
      />
      <BonusLevel
        key={currentLevel.key}
        id={currentLevel.key}
        title={t("WEEK_OF", { weekOfDate })}
        level={currentLevel.level}
        previousLevel={previousLevel}
        nextLevel={nextLevel}
      />
    </RootLayout>
  );
};

export default PageBonusLevel;
