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
  path: "/community-level/58",
  size: 7,
  colorRegions: [
    ["A", "A", "A", "C", "C", "E", "A"],
    ["E", "D", "B", "B", "C", "D", "A"],
    ["C", "C", "G", "F", "D", "B", "A"],
    ["C", "B", "F", "D", "F", "B", "C"],
    ["A", "B", "D", "F", "G", "C", "C"],
    ["A", "D", "C", "B", "B", "D", "E"],
    ["A", "E", "C", "C", "A", "A", "A"],
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
  solutionsCount: 10,
  createdBy: "TheLost16",
  creatorLink: "",
};

export default level;
