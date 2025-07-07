import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  halfBaked,
  lightOrchid,
  lightWisteria,
  nomad,
  saharaSand,
  turquoiseBlue,
} from "../colors";

const level = {
  path: "/community-level/114",
  size: 11,
  colorRegions: [
    ["H", "H", "D", "D", "D", "D", "D", "D", "I", "I", "I"],
    ["H", "H", "F", "F", "D", "D", "D", "F", "F", "I", "I"],
    ["H", "F", "G", "G", "F", "D", "F", "G", "G", "F", "I"],
    ["H", "F", "G", "G", "G", "F", "G", "G", "G", "F", "I"],
    ["H", "F", "C", "C", "C", "C", "C", "C", "C", "F", "I"],
    ["H", "H", "F", "C", "C", "C", "C", "C", "F", "I", "A"],
    ["A", "A", "A", "F", "E", "E", "E", "F", "A", "A", "A"],
    ["J", "J", "A", "A", "F", "F", "F", "E", "E", "B", "B"],
    ["G", "K", "K", "K", "K", "F", "B", "B", "B", "B", "G"],
    ["G", "K", "K", "K", "K", "B", "B", "B", "B", "B", "G"],
    ["G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G"],
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
    J: halfBaked,
    K: turquoiseBlue,
  },
  solutionsCount: 383,
  createdBy: "Riad",
  creatorLink: "https://github.com/riadus",
};

export default level;
