import { useMemo, useState } from "react";
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
import { ChevronDown, ChevronUp, Shuffle } from "lucide-react";
import { CommunityLevel as CommunityLevelType } from "@/utils/types";

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
  const [isUpdatesOpen, setIsUpdatesOpen] = useState(true); // Control collapse

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

  const getRandomLevel = (): CommunityLevelType | null => {
    const levelKeys = Object.keys(communityLevels);
    if (levelKeys.length > 1) {
      const randomIndex = Math.floor(Math.random() * levelKeys.length);
      const randomKey = levelKeys[randomIndex];
      return communityLevels[randomKey];
    }
    return null;
  };

  const randomLevel = useMemo(() => getRandomLevel(), []);

  return (
    <RootLayout>
      <PageTitle title={t("COMMUNITY_LEVELS")} />
      <div className="px-4">
        {/* COLLAPSIBLE UPDATES SECTION */}
        <div className="px-4 mt-8 mb-8">
          <div className="max-w-[600px] w-full sm:mx-auto border border-blue-200 rounded-lg overflow-hidden bg-blue-50">
            <button
              onClick={() => setIsUpdatesOpen(!isUpdatesOpen)}
              className="w-full flex items-center justify-between p-3 text-blue-900 font-bold text-sm bg-blue-100 hover:bg-blue-200 transition-colors"
            >
              <span>LATEST SITE UPDATES</span>
              {isUpdatesOpen ? (
                <ChevronUp size={18} />
              ) : (
                <ChevronDown size={18} />
              )}
            </button>

            {isUpdatesOpen && (
              <div className="p-4 space-y-4 text-sm text-blue-800">
                {/* NEWEST UPDATE */}
                <div className="border-l-4 border-blue-500 pl-3">
                  <p className="text-xs font-bold mb-1">JANUARY 15, 2026</p>
                  <p className="font-semibold text-blue-900">
                    Visual Identity Refresh
                  </p>
                  <p className="mt-1 opacity-90">
                    We have updated our color palette to provide a unique and
                    distinct visual experience, moving away from pastel tones to
                    a custom design.
                  </p>
                </div>

                <div className="h-px bg-blue-200 w-full" />

                {/* PREVIOUS UPDATE */}
                <div className="pl-4 opacity-80">
                  <p className="text-xs font-bold mb-1">JANUARY 7, 2026</p>
                  <p className="">
                    We have updated our level library to focus exclusively on
                    original, community-contributed content. As part of this
                    transition, previous archival levels have been removed. We
                    are committed to respecting intellectual property rights and
                    providing a unique platform for puzzle enthusiasts.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
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
        <div className="flex justify-end mb-1 col-span-8 sm:col-span-10">
          <Link to={randomLevel?.path || ""}>
            <button>
              <Shuffle />
            </button>
          </Link>
        </div>
        {filteredLevels.map((key) => {
          const levelId = Number(key.replace("level", ""));
          const hasMultipleSolutions = communityLevels[key].solutionsCount > 1;
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
