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
  path: "/community-level/468",
  size: 8,
  colorRegions: [
    ["A", "H", "G", "B", "F", "F", "F", "F"],
    ["A", "A", "G", "B", "A", "A", "F", "B"],
    ["A", "A", "G", "B", "F", "F", "F", "A"],
    ["A", "F", "F", "B", "E", "B", "F", "A"],
    ["E", "E", "E", "B", "E", "B", "A", "A"],
    ["H", "D", "D", "B", "G", "B", "G", "F"],
    ["H", "H", "D", "B", "A", "B", "D", "F"],
    ["H", "C", "C", "B", "B", "D", "D", "F"],
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
  createdBy: "DisorientedSeaCow",
  creatorLink: "",
};

export default level;
