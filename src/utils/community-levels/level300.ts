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
  path: "/community-level/300",
  size: 8,
  colorRegions: [
    ["B", "B", "B", "B", "G", "G", "G", "A"],
    ["B", "B", "F", "B", "G", "H", "H", "A"],
    ["B", "B", "F", "F", "G", "H", "H", "A"],
    ["B", "F", "F", "G", "G", "H", "H", "A"],
    ["B", "E", "E", "E", "E", "H", "H", "H"],
    ["B", "E", "E", "E", "E", "D", "D", "H"],
    ["E", "E", "E", "E", "C", "C", "D", "D"],
    ["E", "E", "E", "E", "E", "C", "C", "C"],
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
  createdBy: "Gragarda",
  creatorLink: "",
};

export default level;
