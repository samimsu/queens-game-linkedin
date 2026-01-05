export const markLevelAsCompleted = (levelNumber: number) => {
  const completedLevels =
    JSON.parse(localStorage.getItem("completedLevels") as string) || [];

  if (!completedLevels.includes(levelNumber)) {
    completedLevels.push(levelNumber);
    localStorage.setItem("completedLevels", JSON.stringify(completedLevels));
  }
};

export const markBonusLevelAsCompleted = (levelId: string) => {
  const completedLevels =
    JSON.parse(localStorage.getItem("completedBonusLevels") as string) || [];

  if (!completedLevels.includes(levelId)) {
    completedLevels.push(levelId);
    localStorage.setItem(
      "completedBonusLevels",
      JSON.stringify(completedLevels),
    );
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

export const isLevelCompleted = (levelNumber: number) => {
  const completedLevels =
    JSON.parse(localStorage.getItem("completedLevels") as string) || [];
  return completedLevels.includes(levelNumber);
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

export const setBonusLevelsClicked = (clicked: boolean) => {
  localStorage.setItem("bonusLevelsClicked", JSON.stringify(clicked));
};

export const getBonusLevelsClicked = () => {
  return (
    JSON.parse(localStorage.getItem("bonusLevelsClicked") as string) ?? false
  ); // Default to false
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
