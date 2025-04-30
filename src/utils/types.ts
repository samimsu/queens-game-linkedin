export interface Level {
  id: string;
  size: number;
  colorRegions: string[][];
  regionColors: { [key: string]: string };
}
