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
  path: "/community-level/441",
  size: 8,
  colorRegions: [
    ["C", "C", "D", "D", "D", "D", "G", "G"],
    ["C", "C", "C", "D", "H", "H", "H", "G"],
    ["B", "C", "C", "C", "D", "D", "H", "G"],
    ["B", "B", "F", "F", "F", "H", "E", "G"],
    ["A", "B", "B", "E", "F", "E", "E", "A"],
    ["A", "A", "B", "E", "E", "E", "E", "A"],
    ["B", "A", "A", "E", "E", "E", "A", "A"],
    ["A", "A", "E", "E", "E", "E", "A", "A"],
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
  createdBy: "PirataSobri",
  creatorLink: "",
};

export default level;
