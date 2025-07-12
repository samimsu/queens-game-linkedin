import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import RootLayout from "@/layouts/RootLayout";
import PageTitle from "@/components/PageTitle";
import CommunityLevel from "@/components/CommunityLevel/CommunityLevel";
import { communityLevels } from "@/utils/communityLevels";
import { CommunityLevel as CommunityLevelType } from "@/utils/types";
import PageNotFound from "./PageNotFound";
import { useCommunityLevelNavigation } from "@/hooks/useLevelNavigation";

const PageCommunityLevel = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const { currentLevel, previousLevel, nextLevel } = useCommunityLevelNavigation<CommunityLevelType>(communityLevels, id);

  if (!id) return;

  if (!currentLevel) {
    return <PageNotFound />;
  }

  const createdBy = currentLevel.level.createdBy;
  const creatorLink = currentLevel.level.creatorLink;

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
        key={currentLevel.key}
        id={currentLevel.key}
        title={`${t("LEVEL")} ${id}`}
        level={currentLevel.level}
        previousLevel={previousLevel}
        nextLevel={nextLevel}
      />
    </RootLayout>
  );
};

export default PageCommunityLevel;
