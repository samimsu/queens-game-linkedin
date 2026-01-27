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
  path: "/community-level/470",
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "B", "H", "H", "F", "F", "F", "F"],
    ["A", "B", "H", "H", "E", "E", "E", "F"],
    ["A", "B", "H", "G", "E", "D", "D", "F"],
    ["A", "B", "G", "G", "C", "D", "D", "F"],
    ["A", "B", "C", "C", "C", "D", "D", "F"],
    ["A", "B", "C", "C", "F", "F", "F", "F"],
    ["A", "B", "B", "B", "B", "B", "B", "B"],
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
  createdBy: "Meyina",
  creatorLink: "https://github.com/estrati1806",
};

export default level;
