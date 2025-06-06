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
  path: "/community-level/30",
  size: 7,
  colorRegions: [
    ["G", "E", "E", "E", "E", "E", "E"],
    ["G", "F", "F", "F", "C", "E", "E"],
    ["G", "G", "G", "F", "C", "E", "E"],
    ["B", "B", "B", "F", "C", "D", "E"],
    ["A", "A", "B", "C", "C", "D", "D"],
    ["A", "A", "B", "C", "D", "D", "D"],
    ["A", "A", "B", "C", "D", "D", "D"],
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
  solutionsCount: 28,
  createdBy: "JECCCA96",
};

export default level;
