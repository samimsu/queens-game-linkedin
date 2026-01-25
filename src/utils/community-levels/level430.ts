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
  path: "/community-level/430",
  size: 8,
  colorRegions: [
    ["H", "H", "H", "H", "H", "H", "E", "E"],
    ["H", "C", "D", "D", "D", "D", "F", "E"],
    ["H", "C", "D", "F", "F", "F", "F", "E"],
    ["H", "H", "D", "G", "G", "G", "G", "G"],
    ["B", "D", "D", "G", "A", "A", "A", "G"],
    ["B", "B", "B", "G", "A", "A", "A", "G"],
    ["B", "B", "B", "B", "A", "A", "A", "G"],
    ["B", "B", "A", "A", "A", "A", "A", "A"],
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
  createdBy: "LAva",
  creatorLink: "",
};

export default level;
