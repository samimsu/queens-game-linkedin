import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  saharaSand,
} from "../colors";

const level = {
  path: "/community-level/120",
  size: 7,
  colorRegions: [
    ["A", "A", "A", "G", "A", "A", "A"],
    ["A", "E", "A", "G", "A", "E", "A"],
    ["A", "A", "D", "D", "D", "A", "A"],
    ["C", "C", "C", "C", "C", "C", "C"],
    ["B", "B", "F", "F", "F", "B", "B"],
    ["B", "E", "B", "G", "B", "E", "B"],
    ["B", "B", "B", "G", "B", "B", "B"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
  },
  solutionsCount: 8,
  createdBy: "Gabyazz",
  creatorLink: "https://github.com/gabyazz",
};

export default level;
