export interface Level {
  size: number;
  colorRegions: string[][];
  regionColors: { [key: string]: string };
  isNew?: boolean;
}

export interface CommunityLevel {
  path: string;
  size: number;
  colorRegions: string[][];
  regionColors: { [key: string]: string };
  solutionsCount: number;
  createdBy: string;
  creatorLink?: string;
}

export interface TestLevel {
  size: number;
  colorRegions: string[][];
  regionColors: { [key: string]: string };
}

export type PersistedGeneratedLevel = {
  id: string;
  timeInSeconds: number;
  completed: boolean;
  state: string[][];
  size: number;
};
