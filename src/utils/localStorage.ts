export const markLevelAsCompleted = (levelNumber: number) => {
  let completedLevels =
    JSON.parse(localStorage.getItem("completedLevels") as string) || [];

  if (!completedLevels.includes(levelNumber)) {
    completedLevels.push(levelNumber);
    localStorage.setItem("completedLevels", JSON.stringify(completedLevels));
  }
};

export const isLevelCompleted = (levelNumber: number) => {
  const completedLevels =
    JSON.parse(localStorage.getItem("completedLevels") as string) || [];
  return completedLevels.includes(levelNumber);
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
