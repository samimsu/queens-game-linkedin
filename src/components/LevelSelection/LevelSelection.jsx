import React, { useEffect, useState } from "react";
import Heading from "./components/Heading";
import AvailableLevelsFilter from "./components/AvailableLevelsFilter";
import CompletedLevelsFilter from "./components/CompletedLevelsFilter";
import LevelsCollection from "./components/LevelsCollection";
import LinkedInNote from "./components/LinkedInNote";
import ResetAllProgressDialog from "./components/ResetAllProgressDialog";
import LanguageSwitcher from "./components/LanguageSwitcher";
import SupportMeIconButton from "./components/SupportMeIconButton";
import DiscordButton from "./components/DiscordButton";
import {
  getGroupingPreference,
  setGroupingPreference,
} from "@/utils/localStorage";
import GroupIcon from "../icons/GroupIcon";
import UngroupIcon from "../icons/UngroupIcon";

const LevelSelection = () => {
  const [showOnlyAvailableLevels, setShowOnlyAvailableLevels] = useState(false);
  const [onlyAvailableLevelsSwitchDisable, setOnlyAvailableLevelsSwitchDisable] = useState(false)
  const [hideCompletedLevels, setHideCompletedLevels] = useState(false)
  const [groupBySize, setGroupBySize] = useState(getGroupingPreference);
  const [resetTrigger, setResetTrigger] = useState(false);

  useEffect(() => {
    setOnlyAvailableLevelsSwitchDisable(groupBySize || hideCompletedLevels)
  }, [groupBySize, hideCompletedLevels])

  const toggleGroupBySize = () => {
    const newSetting = !groupBySize;
    setGroupBySize(newSetting);
    setGroupingPreference(newSetting);
  };

  return (
    <div className="flex flex-col justify-center items-center w-fit mx-auto">
      <div className="flex justify-between w-full px-1">
        <LanguageSwitcher />
        <div className="flex items-center space-x-3">
          <DiscordButton />
          <SupportMeIconButton />
        </div>
      </div>
      <Heading />
      <div className="flex w-full justify-between mb-2">
        <div>
          <AvailableLevelsFilter
            checked={showOnlyAvailableLevels}
            handleChange={() => setShowOnlyAvailableLevels((prev) => !prev)}
            disabled={onlyAvailableLevelsSwitchDisable}
          />
          <CompletedLevelsFilter
            checked={hideCompletedLevels}
            handleChange={() => setHideCompletedLevels((prev) => !prev)}
            disabled={false}
          />
        </div>
        <div className="flex items-center space-x-3 mx-1">
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
