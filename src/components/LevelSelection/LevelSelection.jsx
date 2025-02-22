import React, { useState } from "react";
import Heading from "./components/Heading";
import AvailableLevelsFilter from "./components/AvailableLevelsFilter";
import LevelsCollection from "./components/LevelsCollection";
import LinkedInNote from "./components/LinkedInNote";
import {
  getGroupingPreference,
  setGroupingPreference,
} from "@/utils/localStorage";
import GroupIcon from "../icons/GroupIcon";
import UngroupIcon from "../icons/UngroupIcon";

const LevelSelection = () => {
  const [showOnlyAvailableLevels, setShowOnlyAvailableLevels] = useState(false);
  const [groupBySize, setGroupBySize] = useState(getGroupingPreference);

  const toggleGroupBySize = () => {
    const newSetting = !groupBySize;
    setGroupBySize(newSetting);
    setGroupingPreference(newSetting);
  };

  return (
    <div className="flex flex-col justify-center items-center w-fit mx-auto">
      <Heading />
      <div className="flex w-full justify-between mb-2">
        <AvailableLevelsFilter
          checked={showOnlyAvailableLevels}
          handleChange={() => setShowOnlyAvailableLevels((prev) => !prev)}
          disabled={groupBySize}
        />
        <button onClick={toggleGroupBySize} className="mx-1">
          {groupBySize ? <GroupIcon /> : <UngroupIcon />}
        </button>
      </div>
      <LevelsCollection
        showOnlyAvailableLevels={showOnlyAvailableLevels}
        groupBySize={groupBySize}
        className="mb-3"
      />
      <LinkedInNote />
    </div>
  );
};

export default LevelSelection;
