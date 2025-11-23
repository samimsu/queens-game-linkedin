import { type Level } from "./types";

// Use Vite's glob import to automatically discover all level files
// This eliminates the need to manually update this file when adding new levels
const levelModules = import.meta.glob<{ default: Level }>(
  "./levels/level[0-9]*.ts",
  { eager: true }
);

export const levels: { [key: string]: Level } = {};

for (const [path, module] of Object.entries(levelModules)) {
  const match = path.match(/level(\d+)\.ts$/);
  if (match) {
    const levelName = `level${match[1]}`;
    levels[levelName] = module.default;
  }
}
