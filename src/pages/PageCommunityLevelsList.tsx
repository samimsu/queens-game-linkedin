import { Link } from "react-router-dom";
import RootLayout from "@/layouts/RootLayout";
import Queen from "@/components/Queen";
import { isCommunityLevelCompleted } from "@/utils/localStorage";
import { communityLevels } from "@/utils/communityLevels";

interface LevelButtonProps {
  level: number;
  disabled?: boolean;
}

const LevelButton = ({ level, disabled = false }: LevelButtonProps) => {
  const completed = isCommunityLevelCompleted(`level${level}`);

  return (
    <Link to={`/community-level/${level}`} key={level}>
      <button
        className={`relative rounded p-2 w-full min-w-9 text-white bg-[#F96C51] ${
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
  console.log("communityLevels", communityLevels);
  console.log("Object.values(communityLevels)", Object.values(communityLevels));
  Object.values(communityLevels).map((level) => {
    console.log("level", level);
  });
  Object.keys(communityLevels).map((key) => {
    console.log("key", key, key.replace("level", ""));
  });

  return (
    <RootLayout>
      <div className="grid grid-cols-8 sm:grid-cols-10 gap-1 text-sm">
        {Object.keys(communityLevels).map((key) => {
          const levelId = Number(key.replace("level", ""));
          return <LevelButton key={levelId} level={levelId} />;
        })}
      </div>
    </RootLayout>
  );
};

export default PageCommunityLevelsList;
