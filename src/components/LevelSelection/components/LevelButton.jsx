import React from "react";
import { Link } from "react-router-dom";
import Queen from "../../../components/Queen";
import { isLevelCompleted } from "../../../utils/localStorage";

const LevelButton = ({ level, disabled }) => {
  const completed = isLevelCompleted(level);

  return (
    <Link to={`/level/${level}`} key={level}>
      <button
        className={`relative rounded p-2 w-full text-white bg-[#F96C51] ${
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

export default LevelButton;
