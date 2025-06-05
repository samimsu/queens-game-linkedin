import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import RootLayout from "@/layouts/RootLayout";
import Queen from "@/components/Queen";
import {
  getShowCompletedCommunityLevelsPreference,
  getShowMultipleCommunityLevelsPreference,
  getShowNotCompletedCommunityLevelsPreference,
  getShowUniqueCommunityLevelsPreference,
  isCommunityLevelCompleted,
} from "@/utils/localStorage";
import { communityLevels } from "@/utils/communityLevels";
import PageTitle from "@/components/PageTitle";
import CommunityLevelsFilters from "@/components/CommunityLevelsList/CommunityLevelsFilters";

interface LevelButtonProps {
  level: number;
  hasMultipleSolutions: boolean;
  disabled?: boolean;
}

const LevelButton = ({
  level,
  disabled = false,
  hasMultipleSolutions,
}: LevelButtonProps) => {
  const completed = isCommunityLevelCompleted(`level${level}`);

  return (
    <Link to={`/community-level/${level}`} key={level}>
      <button
        className={`relative rounded p-2 w-10 h-10 text-white bg-[#F96C51] ${
          disabled ? "opacity-75" : ""
        }`}
      >
        {level}
        {completed && (
          <span className="absolute top-0 right-0 text-2xl font-bold p-0.5">
            <Queen size="10" className="fill-yellow-400" />
          </span>
        )}
        {hasMultipleSolutions && (
          <span className="absolute bottom-0 right-0 font-bold p-1 text-[0.5rem] leading-none text-yellow-400">
            M
          </span>
        )}
      </button>
    </Link>
  );
};

const PageCommunityLevelsList = () => {
  const { t } = useTranslation();

  const [showUnique, setShowUnique] = useState(
    getShowUniqueCommunityLevelsPreference
  );
  const [showMultiple, setShowMultiple] = useState(
    getShowMultipleCommunityLevelsPreference
  );
  const [showCompleted, setShowCompleted] = useState(
    getShowCompletedCommunityLevelsPreference
  );
  const [showNotCompleted, setShowNotCompleted] = useState(
    getShowNotCompletedCommunityLevelsPreference
  );

  const filteredLevels = Object.keys(communityLevels).filter((key) => {
    const levelData = communityLevels[key];
    const isCompleted = isCommunityLevelCompleted(key);
    const hasMultipleSolutions = levelData.solutionsCount > 1;

    if (showUnique && hasMultipleSolutions) return false;
    if (showMultiple && !hasMultipleSolutions) return false;
    if (showCompleted && !isCompleted) return false;
    if (showNotCompleted && isCompleted) return false;

    return true;
  });

  return (
    <RootLayout>
      <PageTitle title={t("COMMUNITY_LEVELS")} />
      <div className="text-gray-600 dark:text-gray-400 mb-2 px-1 sm:px-0 max-w-[348px] sm:max-w-[436px] text-sm w-full mx-auto">
        {t("DISCOVER_AND_BUILD_COMMUNITY_LEVELS")}{" "}
        <Link
          to="/level-builder"
          className="text-blue-600 font-semibold hover:underline"
        >
          {t("LEVEL_BUILDER")}
        </Link>
        .
      </div>

      {/* FILTERS */}
      <CommunityLevelsFilters
        showUnique={showUnique}
        setShowUnique={setShowUnique}
        showMultiple={showMultiple}
        setShowMultiple={setShowMultiple}
        showCompleted={showCompleted}
        setShowCompleted={setShowCompleted}
        showNotCompleted={showNotCompleted}
        setShowNotCompleted={setShowNotCompleted}
      />

      <div className="grid grid-cols-8 sm:grid-cols-10 gap-1 p-1 text-sm w-fit mx-auto">
        {filteredLevels.map((key) => {
          const levelId = Number(key.replace("level", ""));
          const hasMultipleSolutions = communityLevels[key].solutionsCount > 1;
          console.log("communityLevels", communityLevels[key].solutionsCount);
          return (
            <LevelButton
              key={levelId}
              level={levelId}
              hasMultipleSolutions={hasMultipleSolutions}
            />
          );
        })}
      </div>
    </RootLayout>
  );
};

export default PageCommunityLevelsList;
