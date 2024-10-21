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
