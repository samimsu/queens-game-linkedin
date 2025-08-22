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
  path: "/community-level/211",
  size: 7,
  colorRegions: [
    ["A", "D", "D", "D", "D", "D", "E"],
    ["A", "G", "G", "G", "G", "E", "E"],
    ["A", "G", "C", "C", "G", "E", "E"],
    ["A", "C", "C", "F", "F", "E", "E"],
    ["A", "B", "B", "B", "F", "E", "E"],
    ["A", "B", "F", "F", "F", "E", "E"],
    ["A", "A", "A", "A", "A", "A", "A"],
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
  createdBy: "/nick4bean",
  creatorLink: "https://github.com/nick4bean",
};

export default level;
