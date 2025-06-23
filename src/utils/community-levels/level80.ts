import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
} from "../colors";

const level = {
  path: "/community-level/80",
  size: 6,
  colorRegions: [
    ["A", "D", "D", "D", "D", "D"],
    ["A", "A", "E", "E", "E", "D"],
    ["B", "A", "F", "F", "E", "D"],
    ["B", "B", "C", "C", "E", "D"],
    ["B", "B", "B", "C", "E", "D"],
    ["B", "B", "B", "B", "E", "D"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
  },
  solutionsCount: 1,
  createdBy: "igordev96",
  creatorLink: "https://github.com/igordev96",
};

export default level;
