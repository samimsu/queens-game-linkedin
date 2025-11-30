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
  path: "/community-level/360",
  size: 8,
  colorRegions: [
    ["A", "A", "F", "C", "B", "H", "E", "G"],
    ["C", "F", "E", "E", "E", "D", "A", "C"],
    ["H", "C", "D", "C", "B", "E", "B", "G"],
    ["E", "E", "F", "E", "G", "B", "H", "G"],
    ["D", "A", "C", "F", "C", "H", "B", "F"],
    ["G", "H", "C", "B", "G", "B", "G", "H"],
    ["F", "F", "G", "A", "F", "B", "D", "H"],
    ["D", "D", "H", "D", "D", "A", "A", "A"],
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
  solutionsCount: -1,
  createdBy: "JWCC",
  creatorLink: "https://github.com/JhoelWCC",
};

export default level;
