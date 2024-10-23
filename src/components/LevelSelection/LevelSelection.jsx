import React, { useState } from "react";
import Heading from "./components/Heading";
import AvailableLevelsFilter from "./components/AvailableLevelsFilter";
import LevelsCollection from "./components/LevelsCollection";
import LinkedInNote from "./components/LinkedInNote";

const LevelSelection = () => {
  const [showOnlyAvailableLevels, setShowOnlyAvailableLevels] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center w-fit mx-auto">
      <Heading />
      <AvailableLevelsFilter
        checked={showOnlyAvailableLevels}
        handleChange={() => setShowOnlyAvailableLevels((prev) => !prev)}
      />
      <LevelsCollection
        showOnlyAvailableLevels={showOnlyAvailableLevels}
        className="mb-3"
      />
      <LinkedInNote />
    </div>
  );
};

export default LevelSelection;
