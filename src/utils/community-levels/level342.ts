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
  path: "/community-level/342",
  size: 8,
  colorRegions: [
    ["A", "F", "F", "E", "E", "E", "E", "E"],
    ["A", "F", "F", "F", "F", "E", "D", "D"],
    ["A", "H", "H", "H", "F", "E", "D", "C"],
    ["A", "H", "H", "H", "F", "E", "D", "D"],
    ["A", "H", "H", "H", "D", "D", "D", "D"],
    ["A", "H", "H", "H", "H", "H", "H", "H"],
    ["A", "B", "H", "G", "G", "G", "H", "H"],
    ["A", "A", "A", "A", "A", "G", "H", "H"],
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
  createdBy: "Marc0120",
  creatorLink: "",
};

export default level;
