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
  path: "/community-level/131",
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["E", "H", "H", "H", "B", "I", "I", "I", "A"],
    ["E", "E", "E", "H", "B", "B", "I", "I", "A"],
    ["G", "E", "H", "H", "B", "I", "I", "A", "A"],
    ["G", "G", "H", "H", "C", "I", "I", "I", "A"],
    ["F", "G", "H", "H", "I", "I", "D", "D", "A"],
    ["F", "G", "H", "H", "I", "I", "D", "I", "A"],
    ["F", "G", "H", "H", "I", "I", "D", "I", "A"],
    ["F", "F", "F", "F", "F", "I", "I", "I", "I"],
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
  createdBy: "mattsemar",
  creatorLink: "https://github.com/mattsemar",
};

export default level;
