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
  path: "/community-level/130",
  size: 8,
  colorRegions: [
    ["A", "A", "B", "B", "B", "B", "B", "B"],
    ["A", "G", "G", "C", "E", "E", "G", "B"],
    ["G", "G", "G", "C", "D", "E", "G", "H"],
    ["G", "G", "G", "C", "D", "E", "G", "H"],
    ["G", "G", "G", "C", "E", "E", "G", "H"],
    ["G", "G", "G", "C", "E", "G", "G", "H"],
    ["G", "G", "G", "G", "G", "G", "G", "H"],
    ["G", "G", "F", "F", "F", "F", "H", "H"],
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
  createdBy: "mattsemar",
  creatorLink: "https://github.com/mattsemar",
};

export default level;
