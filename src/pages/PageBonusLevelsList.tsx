import { Link } from "react-router-dom";
import { format, parse } from "date-fns";
import RootLayout from "@/layouts/RootLayout";
import { bonusLevels } from "@/utils/bonusLevels";
import { isBonusLevelCompleted } from "@/utils/localStorage";
import Queen from "@/components/Queen";

const PlayButton = () => {
  return (
    <button className="bg-primary text-primary-foreground rounded px-3 py-1">
      Play
    </button>
  );
};

const PageBonusLevelsList = () => {
  // Convert bonusLevels keys to sorted array with date ranges
  const levelList = Object.keys(bonusLevels).map((key) => {
    // Extract date from key (e.g., "level20250510" → "20250510")
    const dateStr = key.replace("level", "");
    const startDate = parse(dateStr, "yyyyMMdd", new Date());

    // Format dates for display and ID
    const displayRange = `Week of ${format(startDate, "MMM d, yyyy")}`;
    const id = bonusLevels[key as keyof typeof bonusLevels].path;

    return { key, id, displayRange };
  });

  return (
    <RootLayout>
      <div className="w-full px-4">
        <div className="flex flex-col w-full">
          {levelList.map(({ key, id, displayRange }) => {
            const completed = isBonusLevelCompleted(key);
            return (
              <div
                key={key}
                className="flex space-x-14 sm:space-x-24 w-full max-w-96 justify-between items-center border border-transparent hover:border-primary px-2 py-1 rounded"
              >
                <div>{displayRange}</div>
                <div className="relative flex space-x-2 items-center">
                  {completed && (
                    <Queen className="fill-yellow-400 absolute right-full top-1/2 transform -translate-y-1/2" />
                  )}
                  <Link to={`${id}`}>
                    <PlayButton />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </RootLayout>
  );
};

export default PageBonusLevelsList;
