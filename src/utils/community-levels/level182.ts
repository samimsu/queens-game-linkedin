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
  path: "/community-level/",
  size: 11,
  colorRegions: [
    ["F", "F", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["F", "F", "B", "B", "A", "C", "A", "A", "D", "A", "A"],
    ["F", "B", "B", "C", "C", "C", "C", "C", "D", "A", "A"],
    ["F", "F", "B", "B", "C", "C", "D", "D", "D", "D", "A"],
    ["F", "F", "F", "F", "F", "F", "F", "F", "D", "A", "A"],
    ["F", "F", "F", "F", "F", "E", "F", "G", "G", "G", "A"],
    ["I", "I", "I", "I", "E", "E", "G", "G", "A", "A", "A"],
    ["I", "I", "H", "I", "I", "I", "G", "G", "G", "G", "A"],
    ["I", "H", "H", "I", "G", "G", "G", "G", "G", "A", "A"],
    ["H", "H", "J", "I", "I", "G", "K", "K", "G", "G", "A"],
    ["H", "H", "J", "K", "K", "K", "K", "K", "G", "A", "A"],
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
  createdBy: "mattsemar",
  creatorLink: "https://github.com/mattsemar",
};

export default level;
