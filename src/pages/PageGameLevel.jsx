import React from "react";
import { useParams } from "react-router-dom";
import Level from "../components/GameLevel/Level";
import RootLayout from "../layouts/RootLayout";

const GameLevel = () => {
  const { id } = useParams();
  const level = `level${id}`;

  return (
    <RootLayout>
      <Level key={id} id={id} level={level} />
    </RootLayout>
  );
};

export default GameLevel;
