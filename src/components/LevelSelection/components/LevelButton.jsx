import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import Queen from "../../../components/Queen";
import { isLevelCompleted, isLevelInProgress } from "../../../utils/localStorage";

const LevelButton = ({ level, disabled }) => {
  const completed = useMemo(() => isLevelCompleted(level), [level]);
  const inProgress = useMemo(() => isLevelInProgress(level), [level]);

  return (
    <Link to={`/level/${level}`} key={level}>
      <button
        className={`relative rounded p-2 w-full text-white ${
          disabled ? "opacity-75" : ""
        }`}
        style={{ backgroundColor: inProgress ? "red" : "#F96C51" }}
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
