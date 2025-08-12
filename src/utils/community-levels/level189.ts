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
  path: "/community-level/189",
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "B", "B"],
    ["A", "C", "C", "C", "C", "C", "C", "D"],
    ["A", "C", "C", "C", "C", "C", "C", "D"],
    ["A", "E", "E", "E", "F", "F", "F", "D"],
    ["A", "E", "E", "G", "F", "H", "F", "D"],
    ["A", "E", "E", "F", "F", "H", "H", "H"],
    ["E", "E", "E", "F", "F", "H", "H", "H"],
    ["E", "E", "E", "F", "H", "H", "H", "H"],
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
