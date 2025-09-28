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
  path: "/community-level/277",
  size: 7,
  colorRegions: [
    ["G", "G", "A", "A", "A", "A", "A"],
    ["G", "G", "A", "B", "A", "D", "A"],
    ["A", "A", "A", "B", "D", "D", "A"],
    ["C", "C", "C", "D", "D", "D", "A"],
    ["C", "C", "C", "C", "D", "E", "A"],
    ["C", "C", "C", "C", "D", "E", "A"],
    ["F", "D", "D", "D", "D", "E", "A"],
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
  createdBy: "Sam Michnik",
  creatorLink: "https://github.com/michniks2001",
};

export default level;
