import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { parse, isEqual, format } from "date-fns";
import RootLayout from "@/layouts/RootLayout";
import PageTitle from "@/components/PageTitle";
import BonusLevel from "@/components/BonusLevel/BonusLevel";
import { bonusLevels } from "@/utils/bonusLevels";
import { BonusLevel as BonusLevelType } from "@/utils/types";
import PageNotFound from "./PageNotFound";

// Function to parse the ID and find the current level
function findLevelById(
  id: string,
  bonusLevels: { [key: string]: BonusLevelType }
) {
  // Extract start and end dates from ID (e.g., "4-may-2025-10-may-2025")
  const match = id.match(/^\d{4}-\d{2}-\d{2}$/);
  if (!match) {
    throw new Error("Invalid ID format. Expected: yyyy-MM-dd");
  }

  const [startDateStr] = match;

  // Parse the start date
  const startDate = parse(startDateStr, "yyyy-MM-dd", new Date());

  // Iterate through bonusLevels keys
  for (const levelKey of Object.keys(bonusLevels)) {
    // Extract date from level key (e.g., "level20250510" → "20250510")
    const dateStr = levelKey.replace("level", "");
    const levelDate = parse(dateStr, "yyyyMMdd", new Date());

    // Check if the level date matches the end date of the ID
    if (isEqual(levelDate, startDate)) {
      return { key: levelKey, level: bonusLevels[levelKey] };
    }
  }

  return null; // Return null if no match is found
}

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

// Function to find the previous level
function findPreviousLevel(
  currentLevelKey: string,
  bonusLevels: { [key: string]: BonusLevelType }
): BonusLevelType | null {
  if (!currentLevelKey) {
    return null;
  }

  // Get all level keys and sort by date
  const levelKeys = Object.keys(bonusLevels).sort((a, b) => {
    const dateA = parse(a.replace("level", ""), "yyyyMMdd", new Date());
    const dateB = parse(b.replace("level", ""), "yyyyMMdd", new Date());
    return dateA.getTime() - dateB.getTime();
  });

  // Find the index of the current level
  const currentIndex = levelKeys.indexOf(currentLevelKey);

  // If the current level is the first one or not found, return null
  if (currentIndex === -1 || currentIndex === 0) {
    return null;
  }

  // Return the previous level
  const previousKey = levelKeys[currentIndex - 1];
  return bonusLevels[previousKey];
}

// Function to find the next level
function findNextLevel(
  currentLevelKey: string,
  bonusLevels: { [key: string]: BonusLevelType }
): BonusLevelType | null {
  if (!currentLevelKey) {
    return null;
  }

  // Get all level keys and sort by date
  const levelKeys = Object.keys(bonusLevels).sort((a, b) => {
    const dateA = parse(a.replace("level", ""), "yyyyMMdd", new Date());
    const dateB = parse(b.replace("level", ""), "yyyyMMdd", new Date());
    return dateA.getTime() - dateB.getTime();
  });

  // Find the index of the current level
  const currentIndex = levelKeys.indexOf(currentLevelKey);

  // If the current level is the last one or not found, return null
  if (currentIndex === -1 || currentIndex === levelKeys.length - 1) {
    return null;
  }

  // Return the next level
  const nextKey = levelKeys[currentIndex + 1];
  return bonusLevels[nextKey];
}

const PageBonusLevel = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  if (!id) return;

  const level = findLevelById(id, bonusLevels);

  if (!level) {
    return <PageNotFound />;
  }

  const previousLevel = level
    ? findPreviousLevel(level.key, bonusLevels)
    : null;

  const nextLevel = level ? findNextLevel(level.key, bonusLevels) : null;

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
        key={level.key}
        id={level.key}
        title={t("WEEK_OF", { weekOfDate })}
        level={level.level}
        previousLevel={previousLevel}
        nextLevel={nextLevel}
      />
    </RootLayout>
  );
};

export default PageBonusLevel;
