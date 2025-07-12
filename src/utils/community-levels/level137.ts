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
  path: "/community-level/137",
  size: 7,
  colorRegions: [
    ["A", "A", "E", "D", "A", "A", "A"],
    ["A", "A", "E", "D", "C", "C", "C"],
    ["B", "B", "E", "E", "C", "F", "B"],
    ["B", "B", "D", "E", "C", "F", "B"],
    ["A", "B", "D", "E", "G", "G", "G"],
    ["A", "A", "B", "B", "G", "A", "A"],
    ["A", "A", "B", "B", "B", "A", "A"],
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
  createdBy: "Juanca",
  creatorLink: "",
};

export default level;
