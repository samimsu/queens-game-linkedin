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
  path: "/community-level/381",
  size: 11,
  colorRegions: [
    ["A", "A", "A", "G", "G", "G", "G", "G", "G", "G", "G"],
    ["A", "E", "E", "G", "G", "G", "F", "G", "F", "G", "G"],
    ["A", "A", "E", "G", "G", "F", "F", "F", "F", "F", "G"],
    ["A", "G", "G", "G", "G", "G", "F", "F", "F", "I", "I"],
    ["A", "A", "A", "G", "G", "G", "G", "F", "I", "I", "I"],
    ["J", "J", "J", "D", "G", "D", "C", "C", "C", "I", "I"],
    ["J", "K", "K", "D", "G", "D", "C", "B", "C", "I", "I"],
    ["J", "J", "K", "D", "G", "D", "C", "C", "C", "I", "I"],
    ["J", "J", "K", "D", "D", "D", "C", "H", "C", "I", "I"],
    ["J", "J", "J", "J", "D", "H", "C", "H", "C", "I", "I"],
    ["J", "H", "H", "H", "H", "H", "H", "H", "I", "I", "I"],
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
  solutionsCount: 1,
  createdBy: "Maxime FC",
  creatorLink: "https://github.com/MaximeFauchereCollin",
};

export default level;
