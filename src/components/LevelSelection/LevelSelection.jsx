import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Shuffle } from "lucide-react";
import LevelSelectionFilters from "./components/LevelSelectionFilters";
import LevelsCollection from "./components/LevelsCollection";
import LinkedInNote from "./components/LinkedInNote";
import ResetAllProgressDialog from "./components/ResetAllProgressDialog";
import {
  getGroupingPreference,
  setGroupingPreference,
  getHideCompletedLevelsPreference,
  setHideCompletedLevelsPreference,
} from "@/utils/localStorage";
import GroupIcon from "../icons/GroupIcon";
import UngroupIcon from "../icons/UngroupIcon";

import { levels } from "@/utils/levels";

const LevelSelection = () => {
  const [showOnlyAvailableLevels, setShowOnlyAvailableLevels] = useState(false);
  const [
    onlyAvailableLevelsSwitchDisable,
    setOnlyAvailableLevelsSwitchDisable,
  ] = useState(false);
  const [hideCompletedLevels, setHideCompletedLevels] = useState(
    getHideCompletedLevelsPreference
  );
  const [groupBySize, setGroupBySize] = useState(getGroupingPreference);
  const [resetTrigger, setResetTrigger] = useState(false);

  useEffect(() => {
    setOnlyAvailableLevelsSwitchDisable(groupBySize || hideCompletedLevels);
  }, [groupBySize, hideCompletedLevels]);

  const toggleHideCompletedLevels = () => {
    const newSetting = !hideCompletedLevels;
    setHideCompletedLevels(newSetting);
    setHideCompletedLevelsPreference(newSetting);
  };

  const toggleGroupBySize = () => {
    const newSetting = !groupBySize;
    setGroupBySize(newSetting);
    setGroupingPreference(newSetting);
  };

  const getRandomLevel = () => {
    const levelKeys = Object.keys(levels);
    if (levelKeys.length > 1) {
      const randomIndex = Math.floor(Math.random() * levelKeys.length);
      const randomKey = levelKeys[randomIndex];
      return randomKey.replace(/level/, "");
    }
    return null;
  };

  const randomLevel = useMemo(() => getRandomLevel(), []);

  return (
    <div className="flex flex-col justify-center items-center w-fit mx-auto">
      <div className="flex w-full justify-between mb-2">
        <LevelSelectionFilters
          availableLevelsChecked={showOnlyAvailableLevels}
          completedLevelsChecked={hideCompletedLevels}
          availableLevelsDisabled={onlyAvailableLevelsSwitchDisable}
          onAvailableLevelsChange={() =>
            setShowOnlyAvailableLevels((prev) => !prev)
          }
          onCompletedLevelsChange={toggleHideCompletedLevels}
        />

        <div className="flex items-center space-x-3 mx-1">
          <Link to={`/level/${randomLevel}` || ""} className="flex">
            <button>
              <Shuffle />
            </button>
          </Link>
          <ResetAllProgressDialog
            onReset={() => setResetTrigger((prev) => !prev)}
          />
          <button onClick={toggleGroupBySize}>
            {groupBySize ? <GroupIcon /> : <UngroupIcon />}
          </button>
        </div>
      </div>
      <LevelsCollection
        showOnlyAvailableLevels={showOnlyAvailableLevels}
        hideCompletedLevels={hideCompletedLevels}
        groupBySize={groupBySize}
        resetTrigger={resetTrigger}
        className="mb-3"
      />
      <LinkedInNote />
    </div>
  );
};

export default LevelSelection;
