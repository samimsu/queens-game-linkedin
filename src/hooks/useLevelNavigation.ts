import { useMemo } from "react";
import { 
  LevelNavigator, 
  LevelNavigationResult, 
  LevelKeyGenerator, 
  LevelSortFunction,
  findBonusLevelById
} from "../utils/LevelNavigator";

export interface LevelNavigationHookResult<T> {
  currentLevel: LevelNavigationResult<T> | null;
  previousLevel: T | null;
  nextLevel: T | null;
  navigator: LevelNavigator<T>;
}

export type LevelType = 'game' | 'community' | 'bonus';

/**
 * Hook for level navigation logic
 */
export const useLevelNavigation = <T>(
  levels: { [key: string]: T },
  id: string | undefined,
  levelType: LevelType,
  keyGenerator?: LevelKeyGenerator,
  sortFn?: LevelSortFunction
): LevelNavigationHookResult<T> => {
  const navigator = useMemo(() => new LevelNavigator(levels), [levels]);

  const result = useMemo(() => {
    if (!id) {
      return {
        currentLevel: null,
        previousLevel: null,
        nextLevel: null,
        navigator
      };
    }

    let currentLevel: LevelNavigationResult<T> | null = null;

    // Handle different level types
    if (levelType === 'bonus') {
      currentLevel = findBonusLevelById(id, levels);
    } else if (keyGenerator) {
      currentLevel = navigator.findLevelById(id, keyGenerator);
    } else {
      // Default behavior for game and community levels
      const defaultKeyGenerator = (id: string) => `level${id}`;
      currentLevel = navigator.findLevelById(id, defaultKeyGenerator);
    }

    if (!currentLevel) {
      return {
        currentLevel: null,
        previousLevel: null,
        nextLevel: null,
        navigator
      };
    }

    const previousLevel = navigator.findPreviousLevel(currentLevel.key, sortFn);
    const nextLevel = navigator.findNextLevel(currentLevel.key, sortFn);

    return {
      currentLevel,
      previousLevel,
      nextLevel,
      navigator
    };
  }, [levels, id, levelType, keyGenerator, sortFn, navigator]);

  return result;
};

/**
 * Convenience hooks for specific level types
 */
export const useGameLevelNavigation = <T>(
  levels: { [key: string]: T },
  id: string | undefined
) => {
  return useLevelNavigation(levels, id, 'game');
};

export const useCommunityLevelNavigation = <T>(
  levels: { [key: string]: T },
  id: string | undefined
) => {
  return useLevelNavigation(levels, id, 'community');
};

export const useBonusLevelNavigation = <T>(
  levels: { [key: string]: T },
  id: string | undefined
) => {
  const bonusSortFunction = (a: string, b: string) => {
    const dateA = new Date(a.replace("level", "").replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3"));
    const dateB = new Date(b.replace("level", "").replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3"));
    return dateA.getTime() - dateB.getTime();
  };

  return useLevelNavigation(levels, id, 'bonus', undefined, bonusSortFunction);
};