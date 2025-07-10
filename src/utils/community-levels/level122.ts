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
  path: "/community-level/122",
  size: 7,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A"],
    ["B", "B", "A", "A", "C", "C", "C"],
    ["B", "C", "C", "C", "C", "C", "C"],
    ["B", "B", "B", "B", "D", "D", "D"],
    ["E", "E", "D", "D", "D", "D", "D"],
    ["E", "E", "D", "F", "F", "G", "G"],
    ["E", "E", "F", "F", "G", "G", "G"],
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
  solutionsCount: 32,
  createdBy: "newcorntender",
  creatorLink: "https://github.com/newcorntender",
};

export default level;
