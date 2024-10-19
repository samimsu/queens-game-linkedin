import React from "react";
import { useParams } from "react-router-dom";
import Level from "../components/Level";

const GameLevel = () => {
  const { id } = useParams();
  const level = `level${id}`;

  return <Level key={id} id={id} level={level} />;
};

export default GameLevel;
