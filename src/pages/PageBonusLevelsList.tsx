import { useMemo } from "react";
import { Link } from "react-router-dom";
import { format, parse } from "date-fns";
import { useTranslation } from "react-i18next";
import { Shuffle } from "lucide-react";
import RootLayout from "@/layouts/RootLayout";
import { bonusLevels } from "@/utils/bonusLevels";
import { isBonusLevelCompleted } from "@/utils/localStorage";
import Queen from "@/components/Queen";
import PageTitle from "@/components/PageTitle";
import NewBadge from "@/components/NewBadge";
import { BonusLevel as BonusLevelType } from "@/utils/types";

const PageBonusLevelsList = () => {
  // Helps with rerendering dates when the language changes
  const { t } = useTranslation();

  // Convert bonusLevels keys to sorted array with date ranges
  const levelList = Object.keys(bonusLevels).map((key) => {
    // Extract date from key (e.g., "level20250510" → "20250510")
    const dateStr = key.replace("level", "");
    const startDate = parse(dateStr, "yyyyMMdd", new Date());

    const dateFormat = t("DATE_FORMAT", "MMM d, yyyy");

    const weekOfDate = format(startDate, dateFormat);
    // Format dates for display and ID
    const displayRange = weekOfDate;
    const id = bonusLevels[key as keyof typeof bonusLevels].path;

    return { key, id, displayRange };
  });

  const getRandomLevel = (): BonusLevelType | null => {
    const levelKeys = Object.keys(bonusLevels);
    if (levelKeys.length > 1) {
      const randomIndex = Math.floor(Math.random() * levelKeys.length);
      const randomKey = levelKeys[randomIndex];
      return bonusLevels[randomKey];
    }
    return null;
  };

  const randomLevel = useMemo(() => getRandomLevel(), []);

  return (
    <RootLayout>
      <PageTitle title={t("BONUS_LEVELS")} />
      <div className="w-full px-4">
        <Link to={randomLevel?.path || ""} className="flex justify-center mb-3">
          <button>
            <Shuffle />
          </button>
        </Link>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 flex-col w-full gap-1">
          {levelList.map(({ key, id, displayRange }) => {
            const completed = isBonusLevelCompleted(key);
            return (
              <Link key={key} to={`${id}`}>
                <div className="flex space-x-2 w-full max-w-96 justify-between items-center border border-transparent hover:border-primary bg-primary text-primary-foreground rounded px-3 py-1">
                  <div>{displayRange}</div>
                  {bonusLevels[key].isNew && <NewBadge />}
                  {
                    <Queen
                      className={`fill-yellow-400 ${
                        completed ? "visible" : "invisible"
                      }`}
                    />
                  }
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </RootLayout>
  );
};

export default PageBonusLevelsList;
