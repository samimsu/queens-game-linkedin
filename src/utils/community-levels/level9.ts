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
  path: "/community-level/9",
  size: 7,
  colorRegions: [
    ["B", "G", "G", "G", "C", "C", "C"],
    ["B", "B", "B", "G", "C", "C", "F"],
    ["B", "D", "D", "G", "F", "C", "F"],
    ["B", "G", "D", "E", "F", "C", "F"],
    ["D", "G", "G", "E", "F", "C", "A"],
    ["D", "G", "E", "E", "F", "A", "A"],
    ["E", "E", "E", "F", "F", "A", "A"],
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
  solutionsCount: 26,
  createdBy: "nd6",
};

export default level;
