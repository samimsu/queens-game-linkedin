import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import RootLayout from "@/layouts/RootLayout";
import PageTitle from "@/components/PageTitle";
import CommunityLevel from "@/components/CommunityLevel/CommunityLevel";
import { communityLevels } from "@/utils/communityLevels";
import { CommunityLevel as CommunityLevelType } from "@/utils/types";
import PageNotFound from "./PageNotFound";

// Function to parse the ID and find the current level
function findLevelById(
  id: string,
  communityLevels: { [key: string]: CommunityLevelType },
) {
  // Iterate through communityLevels keys
  for (const levelKey of Object.keys(communityLevels)) {
    if (levelKey === `level${id}`) {
      return { key: levelKey, level: communityLevels[levelKey] };
    }
  }

  return null; // Return null if no match is found
}

// Function to find the previous level
function findPreviousLevel(
  currentLevelKey: string,
  communityLevels: { [key: string]: CommunityLevelType },
): CommunityLevelType | null {
  if (!currentLevelKey) {
    return null;
  }

  // Get all level keys
  const levelKeys = Object.keys(communityLevels);

  // Find the index of the current level
  const currentIndex = levelKeys.indexOf(currentLevelKey);

  // If the current level is the first one or not found, return null
  if (currentIndex === -1 || currentIndex === 0) {
    return null;
  }

  // Return the previous level
  const previousKey = levelKeys[currentIndex - 1];
  return communityLevels[previousKey];
}

// Function to find the next level
function findNextLevel(
  currentLevelKey: string,
  communityLevels: { [key: string]: CommunityLevelType },
): CommunityLevelType | null {
  if (!currentLevelKey) {
    return null;
  }

  // Get all level keys and sort by date
  const levelKeys = Object.keys(communityLevels);

  // Find the index of the current level
  const currentIndex = levelKeys.indexOf(currentLevelKey);

  // If the current level is the last one or not found, return null
  if (currentIndex === -1 || currentIndex === levelKeys.length - 1) {
    return null;
  }

  // Return the next level
  const nextKey = levelKeys[currentIndex + 1];
  return communityLevels[nextKey];
}

const PageCommunityLevel = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  if (!id) return;

  const level = findLevelById(id, communityLevels);

  if (!level) {
    return <PageNotFound />;
  }

  const previousLevel = level
    ? findPreviousLevel(level.key, communityLevels)
    : null;

  const nextLevel = level ? findNextLevel(level.key, communityLevels) : null;

  const createdBy = level.level.createdBy;
  const creatorLink = level.level.creatorLink;

  return (
    <RootLayout>
      <PageTitle title={`${t("COMMUNITY_LEVEL")} ${id}`} />
      <div className="flex justify-center space-x-2">
        <div>{t("CREATED_BY_2")}</div>
        {(creatorLink && (
          <a
            href={creatorLink}
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-medium"
          >
            {createdBy}
          </a>
        )) || <div className="font-medium">{createdBy}</div>}
      </div>

      <CommunityLevel
        key={level.key}
        id={level.key}
        title={`${t("LEVEL")} ${id}`}
        level={level.level}
        previousLevel={previousLevel}
        nextLevel={nextLevel}
      />
    </RootLayout>
  );
};

export default PageCommunityLevel;
