import { createEmptyBoard } from "@/utils/board";
import { levels } from "@/utils/levels";

const LOCAL_STORAGE = {
  completedLevels: {
    key: "completedLevels",
    defaultValue: {}
  },
  clashingQueensEnabled: {
    key: "clashingQueensEnabled",
    defaultValue: true
  },
  showInstructions: {
    key: "showInstructions",
    defaultValue: true
  },
  showClock: {
    key: "showClock",
    defaultValue: true
  },
  autoPlaceXs: {
    key: "autoPlaceXs",
    defaultValue: false
  },
  groupBySize: {
    key: "groupBySize",
    defaultValue: false
  },
}

const migrateStoredLevelsLocalStorage = (storedLevels) => {
  if (!Array.isArray(storedLevels)) return storedLevels;
  const levelsMigrated = {}

  storedLevels.forEach(completedLevel => {
    const level = levels[`level${completedLevel}`]
    const levelSize = level?.size
    levelsMigrated[completedLevel] = {
      completed: true,
      board: levelSize && createEmptyBoard(levelSize),
      time: 0
    }
  })
  storeLevels(levelsMigrated);
  return levelsMigrated;
}

const getStoredLevels = () => {
  try {
    const storedLevels = JSON.parse(localStorage.getItem(LOCAL_STORAGE.completedLevels.key)) ?? LOCAL_STORAGE.completedLevels.defaultValue;
    return migrateStoredLevelsLocalStorage(storedLevels);
  } catch (error) {
    return LOCAL_STORAGE.completedLevels.defaultValue;
  }
}

const storeLevels = (completedLevels) => {
  localStorage.setItem(LOCAL_STORAGE.completedLevels.key, JSON.stringify(completedLevels));
}

export const getStoredLevel = (levelNumber) => {
  const storedLevels = getStoredLevels();
  return storedLevels[levelNumber];
}

export const saveLevelAsCompleted = (levelNumber, time, board) => {
  saveLevel(levelNumber, time, board, true);
}

export const saveLevelAsNotCompleted = (levelNumber, time, board) => {
  saveLevel(levelNumber, time, board, false);
}

const saveLevel = (levelNumber, time, board, completed) => {
  const storedLevels = getStoredLevels();
  
  storedLevels[levelNumber] = {
    completed,
    time,
    board
  };
  storeLevels(storedLevels);
};

export const isLevelCompleted = (levelNumber) => {
  const storedLevels = getStoredLevels();
  return storedLevels[levelNumber]?.completed;
};

export const resetCompletedLevels = () => {
  storeLevels(JSON.stringify(LOCAL_STORAGE.completedLevels.defaultValue));
};

export const setClashingQueensPreference = (enabled) => {
  localStorage.setItem(LOCAL_STORAGE.clashingQueensEnabled.key, JSON.stringify(enabled));
};

export const getClashingQueensPreference = () => {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE.clashingQueensEnabled.key)) ?? LOCAL_STORAGE.clashingQueensEnabled.defaultValue;
};

export const setShowInstructionsPreference = (enabled) => {
  localStorage.setItem(LOCAL_STORAGE.showInstructions.key, JSON.stringify(enabled));
};

export const getShowInstructionsPreference = () => {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE.showInstructions.key)) ?? LOCAL_STORAGE.showInstructions.defaultValue;
};

export const setShowClockPreference = (enabled) => {
  localStorage.setItem(LOCAL_STORAGE.showClock.key, JSON.stringify(enabled));
};

export const getShowClockPreference = () => {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE.showClock.key)) ?? LOCAL_STORAGE.showClock.defaultValue;
};

export const setAutoPlaceXsPreference = (enabled) => {
  localStorage.setItem(LOCAL_STORAGE.autoPlaceXs.key, JSON.stringify(enabled));
};

export const getAutoPlaceXsPreference = () => {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE.autoPlaceXs.key)) ?? LOCAL_STORAGE.autoPlaceXs.defaultValue;
};

export const setGroupingPreference = (enabled) => {
  localStorage.setItem(LOCAL_STORAGE.groupBySize.key, JSON.stringify(enabled));
};

export const getGroupingPreference = () => {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE.groupBySize.key)) ?? LOCAL_STORAGE.groupBySize.defaultValue;
};
