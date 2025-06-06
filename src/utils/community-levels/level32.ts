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
  path: "/community-level/32",
  size: 7,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A"],
    ["A", "B", "B", "C", "D", "E", "G"],
    ["A", "B", "B", "C", "D", "E", "G"],
    ["A", "C", "C", "C", "D", "D", "G"],
    ["A", "F", "F", "D", "D", "D", "G"],
    ["A", "F", "F", "D", "D", "D", "G"],
    ["A", "G", "G", "G", "G", "G", "G"],
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
  createdBy: "Polo",
};

export default level;
