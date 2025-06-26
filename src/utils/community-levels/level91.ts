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
  path: "/community-level/91",
  size: 7,
  colorRegions: [
    ["A", "F", "F", "F", "F", "F", "F"],
    ["A", "C", "E", "E", "E", "D", "F"],
    ["A", "C", "G", "B", "E", "D", "F"],
    ["A", "C", "G", "B", "E", "D", "F"],
    ["A", "C", "G", "B", "E", "D", "F"],
    ["A", "C", "G", "G", "E", "D", "F"],
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
  solutionsCount: 2,
  createdBy: "Stanisha",
  creatorLink: "",
};

export default level;
