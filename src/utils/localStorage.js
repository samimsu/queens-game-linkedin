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
