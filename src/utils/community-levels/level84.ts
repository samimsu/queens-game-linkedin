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
  path: "/community-level/84",
  size: 7,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "B", "B", "B", "B", "B"],
    ["A", "C", "C", "D", "D", "B", "B"],
    ["A", "C", "D", "D", "F", "F", "G"],
    ["A", "C", "D", "F", "F", "G", "G"],
    ["A", "C", "E", "E", "E", "E", "E"],
    ["A", "C", "C", "C", "C", "C", "C"],
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
  createdBy: "Fritschjen",
  creatorLink: "",
};

export default level;
