import { parse, isEqual } from "date-fns";

export interface LevelNavigationResult<T> {
  key: string;
  level: T;
}

export type LevelKeyGenerator = (id: string) => string;
export type LevelSortFunction = (a: string, b: string) => number;

export class LevelNavigator<T> {
  constructor(private levels: { [key: string]: T }) {}

  /**
   * Find a level by ID using a key generator function
   */
  findLevelById(
    id: string,
    keyGenerator: LevelKeyGenerator
  ): LevelNavigationResult<T> | null {
    const levelKey = keyGenerator(id);
    
    if (this.levels[levelKey]) {
      return { key: levelKey, level: this.levels[levelKey] };
    }
    
    return null;
  }

  /**
   * Find the previous level in the collection
   */
  findPreviousLevel(
    currentLevelKey: string,
    sortFn?: LevelSortFunction
  ): T | null {
    if (!currentLevelKey) {
      return null;
    }

    const levelKeys = Object.keys(this.levels);
    
    if (sortFn) {
      levelKeys.sort(sortFn);
    }

    const currentIndex = levelKeys.indexOf(currentLevelKey);

    if (currentIndex === -1 || currentIndex === 0) {
      return null;
    }

    const previousKey = levelKeys[currentIndex - 1];
    return this.levels[previousKey];
  }

  /**
   * Find the next level in the collection
   */
  findNextLevel(
    currentLevelKey: string,
    sortFn?: LevelSortFunction
  ): T | null {
    if (!currentLevelKey) {
      return null;
    }

    const levelKeys = Object.keys(this.levels);
    
    if (sortFn) {
      levelKeys.sort(sortFn);
    }

    const currentIndex = levelKeys.indexOf(currentLevelKey);

    if (currentIndex === -1 || currentIndex === levelKeys.length - 1) {
      return null;
    }

    const nextKey = levelKeys[currentIndex + 1];
    return this.levels[nextKey];
  }
}

// Specific implementations for different level types

/**
 * Key generator for regular game levels
 */
export const gameKeyGenerator: LevelKeyGenerator = (id: string) => `level${id}`;

/**
 * Key generator for community levels
 */
export const communityKeyGenerator: LevelKeyGenerator = (id: string) => `level${id}`;

/**
 * Key generator for bonus levels (date-based)
 */
export const bonusKeyGenerator: LevelKeyGenerator = (id: string) => {
  const match = id.match(/^\d{4}-\d{2}-\d{2}$/);
  if (!match) {
    throw new Error("Invalid bonus level ID format. Expected: yyyy-MM-dd");
  }

  const [startDateStr] = match;
  const startDate = parse(startDateStr, "yyyy-MM-dd", new Date());
  
  // Convert to bonus level key format (e.g., "level20250510")
  const levelKey = `level${startDate.getFullYear()}${String(startDate.getMonth() + 1).padStart(2, '0')}${String(startDate.getDate()).padStart(2, '0')}`;
  
  return levelKey;
};

/**
 * Sort function for bonus levels (by date)
 */
export const bonusSortFunction: LevelSortFunction = (a: string, b: string) => {
  const dateA = parse(a.replace("level", ""), "yyyyMMdd", new Date());
  const dateB = parse(b.replace("level", ""), "yyyyMMdd", new Date());
  return dateA.getTime() - dateB.getTime();
};

/**
 * Find bonus level by ID with date parsing
 */
export const findBonusLevelById = <T>(
  id: string,
  bonusLevels: { [key: string]: T }
): LevelNavigationResult<T> | null => {
  const match = id.match(/^\d{4}-\d{2}-\d{2}$/);
  if (!match) {
    throw new Error("Invalid ID format. Expected: yyyy-MM-dd");
  }

  const [startDateStr] = match;
  const startDate = parse(startDateStr, "yyyy-MM-dd", new Date());

  // Iterate through bonusLevels keys
  for (const levelKey of Object.keys(bonusLevels)) {
    // Extract date from level key (e.g., "level20250510" → "20250510")
    const dateStr = levelKey.replace("level", "");
    const levelDate = parse(dateStr, "yyyyMMdd", new Date());

    // Check if the level date matches the start date of the ID
    if (isEqual(levelDate, startDate)) {
      return { key: levelKey, level: bonusLevels[levelKey] };
    }
  }

  return null;
};