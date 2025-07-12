import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightOrchid,
  lightWisteria,
  nomad,
  saharaSand,
} from "../colors";

const level = {
  path: "/community-level/134",
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "D", "D", "D", "D", "D", "A", "A"],
    ["E", "E", "D", "H", "H", "H", "H", "H", "H"],
    ["F", "E", "D", "H", "H", "H", "H", "H", "H"],
    ["F", "F", "D", "D", "D", "D", "D", "H", "H"],
    ["E", "F", "B", "B", "B", "B", "D", "I", "I"],
    ["E", "G", "G", "G", "B", "B", "D", "C", "I"],
    ["E", "G", "D", "D", "D", "D", "D", "C", "I"],
    ["E", "G", "G", "G", "G", "G", "G", "C", "I"],
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
    I: lightOrchid,
  },
  solutionsCount: 34,
  createdBy: "Stephanie Blum",
  creatorLink: "https://github.com/stephanieblum",
};

export default level;
