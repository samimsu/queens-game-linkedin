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
  path: "/community-level/434",
  size: 7,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A"],
    ["A", "C", "C", "C", "C", "C", "C"],
    ["A", "B", "C", "B", "D", "E", "E"],
    ["A", "B", "C", "B", "D", "E", "E"],
    ["A", "B", "B", "B", "D", "E", "E"],
    ["A", "F", "B", "F", "D", "E", "E"],
    ["A", "F", "F", "F", "D", "E", "G"],
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
  createdBy: "PaolaKaren",
  creatorLink: "",
};

export default level;
