import { Link } from "react-router-dom";
import RootLayout from "@/layouts/RootLayout";
import Queen from "@/components/Queen";
import { isCommunityLevelCompleted } from "@/utils/localStorage";
import { communityLevels } from "@/utils/communityLevels";
import { useTranslation } from "react-i18next";

interface LevelButtonProps {
  level: number;
  disabled?: boolean;
}

const LevelButton = ({ level, disabled = false }: LevelButtonProps) => {
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
      </button>
    </Link>
  );
};

const PageCommunityLevelsList = () => {
  const { t } = useTranslation();

  return (
    <RootLayout>
      <div className="text-gray-600 dark:text-gray-400 mb-2 px-1 max-w-lg text-sm">
        Discover unique levels created by the community! Play, get inspired, and
        build your own with the{" "}
        <Link
          to="/level-builder"
          className="text-blue-600 font-semibold hover:underline"
        >
          {t("LEVEL_BUILDER")}
        </Link>
        .
      </div>
      <div className="grid grid-cols-8 sm:grid-cols-10 gap-1 p-1 text-sm w-fit mx-auto">
        {Object.keys(communityLevels).map((key) => {
          const levelId = Number(key.replace("level", ""));
          return <LevelButton key={levelId} level={levelId} />;
        })}
      </div>
    </RootLayout>
  );
};

export default PageCommunityLevelsList;
