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
  path: "/community-level/452",
  size: 7,
  colorRegions: [
    ["A", "B", "A", "A", "A", "A", "A"],
    ["B", "B", "A", "C", "C", "A", "A"],
    ["A", "A", "A", "A", "C", "A", "D"],
    ["A", "E", "E", "A", "A", "D", "D"],
    ["A", "E", "A", "A", "G", "G", "A"],
    ["A", "A", "F", "F", "G", "A", "A"],
    ["A", "A", "F", "A", "A", "A", "A"],
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
  createdBy: "stauqueen",
  creatorLink: "",
};

export default level;
