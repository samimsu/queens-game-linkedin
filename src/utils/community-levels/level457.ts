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
  path: "/community-level/457",
  size: 9,
  colorRegions: [
    ["A", "A", "C", "C", "H", "H", "H", "H", "B"],
    ["A", "C", "C", "H", "H", "H", "H", "H", "B"],
    ["E", "C", "C", "C", "C", "H", "H", "H", "H"],
    ["E", "C", "C", "C", "C", "H", "H", "I", "H"],
    ["E", "C", "G", "D", "C", "C", "H", "I", "I"],
    ["C", "C", "G", "C", "C", "C", "C", "C", "I"],
    ["C", "E", "G", "C", "C", "C", "C", "C", "I"],
    ["E", "E", "G", "C", "C", "C", "C", "C", "I"],
    ["E", "E", "F", "F", "F", "F", "C", "C", "I"],
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
  solutionsCount: 1,
  createdBy: "AnWi",
  creatorLink: "",
};

export default level;
