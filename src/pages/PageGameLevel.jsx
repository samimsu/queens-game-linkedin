import React from "react";
import { useParams } from "react-router-dom";
import Level from "../components/GameLevel/Level";
import RootLayout from "../layouts/RootLayout";
import { levels } from "@/utils/levels";
import PageNotFound from "./PageNotFound";
import PageLevelNotFound from "./PageLevelNotFound";

const GameLevel = () => {
  const { id } = useParams();
  const level = `level${id}`;

  const maxLevel = Math.max(
    ...Object.keys(levels).map((key) => parseInt(key.replace("level", ""), 10)),
  );

  if (!levels[level] && Number(id) < maxLevel) {
    return <PageLevelNotFound />;
  }

  if (!levels[level]) {
    return <PageNotFound />;
  }

  return (
    <RootLayout>
      <Level key={id} id={id} level={level} />
    </RootLayout>
  );
};

export default GameLevel;
