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
  path: "/community-level/117",
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A"],
    ["C", "B", "B", "B", "B", "B", "B", "A"],
    ["C", "D", "D", "D", "D", "D", "B", "A"],
    ["C", "E", "E", "E", "E", "D", "B", "A"],
    ["C", "F", "F", "F", "E", "E", "B", "A"],
    ["C", "G", "G", "G", "G", "G", "B", "A"],
    ["C", "H", "H", "H", "H", "G", "B", "A"],
    ["C", "H", "H", "H", "H", "H", "H", "H"],
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
  solutionsCount: 15,
  createdBy: "mattsemar",
  creatorLink: "https://github.com/mattsemar",
};

export default level;
