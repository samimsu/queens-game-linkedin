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
  path: "/community-level/112",
  size: 8,
  colorRegions: [
    ["F", "F", "G", "F", "F", "F", "F", "F"],
    ["F", "G", "G", "F", "D", "F", "F", "F"],
    ["F", "G", "G", "D", "D", "D", "C", "F"],
    ["F", "G", "G", "B", "D", "D", "G", "G"],
    ["F", "A", "B", "B", "B", "D", "G", "G"],
    ["F", "A", "B", "B", "B", "D", "G", "E"],
    ["H", "H", "H", "C", "B", "C", "G", "E"],
    ["H", "H", "C", "C", "C", "C", "E", "E"],
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
  solutionsCount: 6,
  createdBy: "Lucas Almeida",
  creatorLink: "https://github.com/lalmeida32",
};

export default level;
