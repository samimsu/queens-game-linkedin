export interface Level {
  size: number;
  colorRegions: string[][];
  regionColors: { [key: string]: string };
  isNew?: boolean;
}
