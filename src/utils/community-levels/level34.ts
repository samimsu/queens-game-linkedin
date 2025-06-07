import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  nomad,
  saharaSand,
} from "../colors";

const level = {
  path: "/community-level/34",
  size: 8,
  colorRegions: [
    ["H", "H", "H", "H", "H", "H", "H", "H"],
    ["H", "H", "H", "D", "H", "H", "H", "H"],
    ["A", "A", "D", "D", "D", "D", "G", "F"],
    ["A", "C", "C", "C", "D", "D", "F", "F"],
    ["A", "B", "B", "C", "D", "F", "F", "E"],
    ["A", "B", "E", "C", "F", "F", "E", "E"],
    ["A", "E", "E", "C", "E", "E", "E", "E"],
    ["A", "E", "E", "E", "E", "E", "E", "E"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
  },
  solutionsCount: 1,
  createdBy: "Hangel",
};

export default level;
