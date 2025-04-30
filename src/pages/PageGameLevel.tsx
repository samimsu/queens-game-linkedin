import { useParams } from "react-router-dom";
import RootLayout from "@/layouts/RootLayout";
import PageTitle from "@/components/PageTitle";
import Level from "@/components/GameLevel/Level";
import PageNotFound from "./PageNotFound";
import PageLevelNotFound from "./PageLevelNotFound";
import { levels } from "@/utils/levels";
import { useTranslation } from "react-i18next";

const GameLevel = () => {
  const { id } = useParams();
  const level = `level${id}`;
  const { t } = useTranslation();

  const maxLevel = Math.max(
    ...Object.keys(levels).map((key) => parseInt(key.replace("level", ""), 10))
  );

  if (!levels[level] && Number(id) < maxLevel) {
    return <PageLevelNotFound level={id} />;
  }

  if (!levels[level] || !id) {
    return <PageNotFound />;
  }

  return (
    <RootLayout>
      <PageTitle title={`${t("LEVEL")} ${id}`} />
      <Level key={id} id={id} level={level} />
    </RootLayout>
  );
};

export default GameLevel;
