import { useParams } from "react-router-dom";
import RootLayout from "@/layouts/RootLayout";
import PageTitle from "@/components/PageTitle";
import Level from "@/components/GameLevel/Level";
import PageNotFound from "./PageNotFound";
import PageLevelNotFound from "./PageLevelNotFound";
import { levels } from "@/utils/levels";
import { useTranslation } from "react-i18next";
import { useGameLevelNavigation } from "@/hooks/useLevelNavigation";

const GameLevel = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const { currentLevel } = useGameLevelNavigation(levels, id);

  const maxLevel = Math.max(
    ...Object.keys(levels).map((key) => parseInt(key.replace("level", ""), 10))
  );

  // Check if level exists but is not found (for PageLevelNotFound)
  if (!currentLevel && id && Number(id) < maxLevel) {
    return <PageLevelNotFound level={id} />;
  }

  // Check if level doesn't exist or id is invalid
  if (!currentLevel || !id) {
    return <PageNotFound />;
  }

  return (
    <RootLayout>
      <PageTitle title={`${t("LEVEL")} ${id}`} />
      <Level key={id} id={id} level={currentLevel.key} />
    </RootLayout>
  );
};

export default GameLevel;
