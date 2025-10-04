import {
  getLevelNameFromId,
  getSizeForLevelId,
} from "@/utils/generated/levelEncoder.ts";
import formatDuration from "@/utils/formatDuration.ts";
import { createEmptyBoard } from "@/utils/board.ts";

export const markLevelAsCompleted = (levelNumber: number) => {
  const completedLevels =
    JSON.parse(localStorage.getItem("completedLevels") as string) || [];

  if (!completedLevels.includes(levelNumber)) {
    completedLevels.push(levelNumber);
    localStorage.setItem("completedLevels", JSON.stringify(completedLevels));
  }
};

export const markCommunityLevelAsCompleted = (levelId: string) => {
  const completedLevels =
    JSON.parse(localStorage.getItem("completedCommunityLevels") as string) ||
    [];

  if (!completedLevels.includes(levelId)) {
    completedLevels.push(levelId);
    localStorage.setItem(
      "completedCommunityLevels",
      JSON.stringify(completedLevels),
    );
  }
};

export const markRandomBoardCompleted = (levelId: string) => {
  const currentState = getRandomBoardState(levelId);
  if (!currentState.bestTimeInSeconds) {
    return;
  }
  currentState.completed = true;
  currentState.id = levelId;
  currentState.state = [];

  localStorage.setItem(
    getLevelNameFromId(levelId),
    JSON.stringify(currentState),
  );
};

export const recordRandomLevelState = (
  id: string,
  timer: number,
  state: string[][],
  completed: boolean,
) => {
  const currentState = getRandomBoardState(id);
  const wasPreviouslyCompleted = isRandomLevelCompleted(id);
  if (completed && wasPreviouslyCompleted) {
    if (currentState.timeInSeconds < timer) {
      // Don't overwrite since the previous time was better
      return;
    }
  }

  const newState = {
    time: timer,
    state: completed ? [] : state,
    completed,
    bestTimeInSeconds: completed ? timer : currentState?.bestTimeInSeconds,
    id,
  };
  localStorage.setItem(getLevelNameFromId(id), JSON.stringify(newState));
};

export const isLevelCompleted = (levelNumber: number) => {
  const completedLevels =
    JSON.parse(localStorage.getItem("completedLevels") as string) || [];
  return completedLevels.includes(levelNumber);
};

export const isRandomLevelCompleted = (id: string) => {
  const { bestTimeInSeconds, completed } = getRandomBoardState(id);
  return completed || bestTimeInSeconds !== undefined;
};

export const getRandomLevelCompletionTimeWithLabel = (id: string) => {
  const timeInSeconds = getRandomLevelCompletionTimeInSeconds(id);
  if (timeInSeconds) {
    return formatDuration(timeInSeconds);
  }
  return undefined;
};

export const getRandomLevelCompletionTimeInSeconds = (id: string) => {
  const { bestTimeInSeconds, completed, timeInSeconds } =
    getRandomBoardState(id);
  if (bestTimeInSeconds !== undefined) {
    return Number(bestTimeInSeconds);
  }
  return completed ? timeInSeconds : undefined;
};

export const getRandomBoardState = (
  id: string,
): {
  id: string;
  timeInSeconds: number;
  completed: boolean;
  state: string[][];
  bestTimeInSeconds: number | undefined;
  savedDataFound: boolean;
} => {
  const r = localStorage.getItem(getLevelNameFromId(id));
  if (!r) {
    return {
      id: id,
      completed: false,
      timeInSeconds: 0,
      state: createEmptyBoard(getSizeForLevelId(id)),
      bestTimeInSeconds: undefined,
      savedDataFound: false,
    };
  }
  const { time, completed, state, bestTimeInSeconds } = JSON.parse(r as string);
  return {
    id: id,
    completed: completed === true,
    state: state ?? createEmptyBoard(getSizeForLevelId(id)),
    timeInSeconds: time ? Number.parseInt(time) : 0,
    bestTimeInSeconds: bestTimeInSeconds
      ? Number.parseInt(bestTimeInSeconds)
      : undefined,
    savedDataFound: true,
  };
};

export const getInProgressLevels = () => {
  const result = Object.keys(localStorage)
    .filter((k) => k.startsWith("rnd_"))
    .filter((k) => JSON.parse(localStorage.getItem(k) ?? "{}").id)
    .map((k) => JSON.parse(localStorage.getItem(k) ?? "{}"))
    .map((itm) => {
      return {
        id: itm.id,
        timeInSeconds: itm.time,
        size: getSizeForLevelId(itm.id),
        completed: itm.completed,
        previousBest: itm.bestTimeInSeconds,
        state: itm.state ?? [],
      };
    })
    .filter((itm) => itm.state.length);
  result.sort((a, b) => a.size - b.size);
  return result;
};

export const getCompletedLevels = () => {
  const result = Object.keys(localStorage)
    .filter((k) => k.startsWith("rnd_"))
    .filter((k) => JSON.parse(localStorage.getItem(k) ?? "{}").id)
    .map((k) => JSON.parse(localStorage.getItem(k) ?? "{}"))
    .map((itm) => {
      return {
        id: itm.id,
        timeInSeconds: itm.bestTimeInSeconds,
        size: getSizeForLevelId(itm.id),
        completed: itm.completed,
        state: itm.state ?? [],
      };
    })
    .filter((itm) => !itm.state.length || itm.completed);
  result.sort((a, b) => a.size - b.size);
  return result;
};

export const isBonusLevelCompleted = (levelId: string) => {
  const completedLevels =
    JSON.parse(localStorage.getItem("completedBonusLevels") as string) || [];
  return completedLevels.includes(levelId);
};

export const isCommunityLevelCompleted = (levelId: string) => {
  const completedLevels =
    JSON.parse(localStorage.getItem("completedCommunityLevels") as string) ||
    [];
  return completedLevels.includes(levelId);
};

export const resetCompletedLevels = () => {
  localStorage.setItem("completedLevels", JSON.stringify([]));
};

export const setClashingQueensPreference = (enabled: boolean) => {
  localStorage.setItem("clashingQueensEnabled", JSON.stringify(enabled));
};

export const getClashingQueensPreference = () => {
  return (
    JSON.parse(localStorage.getItem("clashingQueensEnabled") as string) ?? true
  ); // Default to true
};

export const setShowInstructionsPreference = (enabled: boolean) => {
  localStorage.setItem("showInstructions", JSON.stringify(enabled));
};

export const getShowInstructionsPreference = () => {
  return JSON.parse(localStorage.getItem("showInstructions") as string) ?? true; // Default to true
};

export const setShowClockPreference = (enabled: boolean) => {
  localStorage.setItem("showClock", JSON.stringify(enabled));
};

export const getShowClockPreference = () => {
  return JSON.parse(localStorage.getItem("showClock") as string) ?? true; // Default to true
};

export const setAutoPlaceXsPreference = (enabled: boolean) => {
  localStorage.setItem("autoPlaceXs", JSON.stringify(enabled));
};

export const getAutoPlaceXsPreference = () => {
  return JSON.parse(localStorage.getItem("autoPlaceXs") as string) ?? false; // Default to false
};

export const setGroupingPreference = (enabled: boolean) => {
  localStorage.setItem("groupBySize", JSON.stringify(enabled));
};

export const getGroupingPreference = () => {
  return JSON.parse(localStorage.getItem("groupBySize") as string) ?? false; // Default to false
};

export const setCommunityLevelsClicked = (clicked: boolean) => {
  localStorage.setItem("communityLevelsClicked", JSON.stringify(clicked));
};

export const getCommunityLevelsClicked = () => {
  return (
    JSON.parse(localStorage.getItem("communityLevelsClicked") as string) ??
    false
  ); // Default to false
};

export const setHideCompletedLevelsPreference = (enabled: boolean) => {
  localStorage.setItem("hideCompletedLevels", JSON.stringify(enabled));
};

export const getHideCompletedLevelsPreference = () => {
  return (
    JSON.parse(localStorage.getItem("hideCompletedLevels") as string) ?? false
  ); // Default to false
};

export const setShowUniqueCommunityLevelsPreference = (enabled: boolean) => {
  localStorage.setItem("showUniqueCommunityLevels", JSON.stringify(enabled));
};

export const getShowUniqueCommunityLevelsPreference = () => {
  return (
    JSON.parse(localStorage.getItem("showUniqueCommunityLevels") as string) ??
    false
  ); // Default to false
};

export const setShowMultipleCommunityLevelsPreference = (enabled: boolean) => {
  localStorage.setItem("showMultipleCommunityLevels", JSON.stringify(enabled));
};

export const getShowMultipleCommunityLevelsPreference = () => {
  return (
    JSON.parse(localStorage.getItem("showMultipleCommunityLevels") as string) ??
    false
  ); // Default to false
};

export const setShowCompletedCommunityLevelsPreference = (enabled: boolean) => {
  localStorage.setItem("showCompletedCommunityLevels", JSON.stringify(enabled));
};

export const getShowCompletedCommunityLevelsPreference = () => {
  return (
    JSON.parse(
      localStorage.getItem("showCompletedCommunityLevels") as string,
    ) ?? false
  ); // Default to false
};

export const setShowNotCompletedCommunityLevelsPreference = (
  enabled: boolean,
) => {
  localStorage.setItem(
    "showNotCompletedCommunityLevels",
    JSON.stringify(enabled),
  );
};

export const getShowNotCompletedCommunityLevelsPreference = () => {
  return (
    JSON.parse(
      localStorage.getItem("showNotCompletedCommunityLevels") as string,
    ) ?? false
  ); // Default to false
};
