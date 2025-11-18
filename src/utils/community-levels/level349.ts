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
  path: "/community-level/349",
  size: 8,
  colorRegions: [
    ["G", "H", "A", "C", "C", "D", "D", "E"],
    ["G", "H", "A", "C", "C", "D", "D", "E"],
    ["H", "H", "H", "H", "H", "D", "E", "E"],
    ["H", "B", "H", "H", "H", "B", "E", "H"],
    ["H", "F", "F", "A", "H", "B", "H", "H"],
    ["H", "F", "F", "A", "H", "B", "B", "H"],
    ["H", "F", "F", "H", "H", "H", "H", "H"],
    ["G", "H", "H", "H", "H", "H", "G", "G"],
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
  createdBy: "Jerm",
  creatorLink: "",
};

export default level;
