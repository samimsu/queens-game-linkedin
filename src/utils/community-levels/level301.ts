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
  path: "/community-level/301",
  size: 7,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A"],
    ["A", "G", "G", "E", "C", "C", "A"],
    ["G", "G", "E", "E", "E", "C", "A"],
    ["G", "E", "E", "B", "E", "E", "A"],
    ["G", "F", "E", "E", "E", "D", "A"],
    ["G", "F", "F", "E", "D", "D", "A"],
    ["G", "G", "E", "E", "A", "A", "A"],
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
  solutionsCount: -1,
  createdBy: "Jatin",
  creatorLink: "https://exact.codes",
};

export default level;
