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
  path: "/community-level/31",
  size: 7,
  colorRegions: [
    ["D", "C", "C", "C", "B", "B", "G"],
    ["D", "C", "A", "A", "A", "B", "G"],
    ["D", "C", "E", "E", "A", "G", "G"],
    ["D", "D", "E", "E", "A", "G", "G"],
    ["D", "F", "F", "F", "F", "G", "G"],
    ["D", "G", "G", "G", "F", "G", "G"],
    ["D", "G", "G", "G", "G", "G", "G"],
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
  solutionsCount: 1,
  createdBy: "zadirioz",
  creatorLink: "https://github.com/zadirioz",
};

export default level;
