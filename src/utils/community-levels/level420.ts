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
  path: "/community-level/420",
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A"],
    ["B", "B", "B", "B", "B", "B", "B", "A"],
    ["B", "C", "C", "C", "C", "C", "C", "A"],
    ["B", "D", "D", "D", "D", "D", "C", "A"],
    ["B", "D", "G", "G", "G", "E", "C", "A"],
    ["B", "D", "G", "G", "E", "E", "C", "A"],
    ["B", "D", "H", "H", "H", "H", "C", "A"],
    ["B", "D", "F", "F", "F", "F", "C", "A"],
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
  createdBy: "mogi",
  creatorLink: "https://github.com/almogfishel",
};

export default level;
