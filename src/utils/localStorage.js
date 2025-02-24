export const markLevelAsCompleted = (levelNumber) => {
  let completedLevels =
    JSON.parse(localStorage.getItem("completedLevels")) || [];

  if (!completedLevels.includes(levelNumber)) {
    completedLevels.push(levelNumber);
    localStorage.setItem("completedLevels", JSON.stringify(completedLevels));
  }
};

export const isLevelCompleted = (levelNumber) => {
  const completedLevels =
    JSON.parse(localStorage.getItem("completedLevels")) || [];
  return completedLevels.includes(levelNumber);
};

export const resetCompletedLevels = () => {
  localStorage.setItem("completedLevels", JSON.stringify([]));
};

export const setClashingQueensPreference = (enabled) => {
  localStorage.setItem("clashingQueensEnabled", JSON.stringify(enabled));
};

export const getClashingQueensPreference = () => {
  return JSON.parse(localStorage.getItem("clashingQueensEnabled")) ?? true; // Default to true
};

export const setShowInstructionsPreference = (enabled) => {
  localStorage.setItem("showInstructions", JSON.stringify(enabled));
};

export const getShowInstructionsPreference = () => {
  return JSON.parse(localStorage.getItem("showInstructions")) ?? true; // Default to true
};

export const setShowClockPreference = (enabled) => {
  localStorage.setItem("showClock", JSON.stringify(enabled));
};

export const getShowClockPreference = () => {
  return JSON.parse(localStorage.getItem("showClock")) ?? true; // Default to true
};

export const setAutoPlaceXsPreference = (enabled) => {
  localStorage.setItem("autoPlaceXs", JSON.stringify(enabled));
};

export const getAutoPlaceXsPreference = () => {
  return JSON.parse(localStorage.getItem("autoPlaceXs")) ?? false; // Default to false
};

export const setGroupingPreference = (enabled) => {
  localStorage.setItem("groupBySize", JSON.stringify(enabled));
};

export const getGroupingPreference = () => {
  return JSON.parse(localStorage.getItem("groupBySize")) ?? false; // Default to false
};
