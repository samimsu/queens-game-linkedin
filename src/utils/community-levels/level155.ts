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
  path: "/community-level/155",
  size: 11,
  colorRegions: [
    ["A", "A", "H", "H", "B", "K", "K", "K", "K", "C", "C"],
    ["A", "H", "H", "H", "B", "B", "K", "K", "K", "C", "C"],
    ["A", "H", "H", "H", "B", "K", "K", "K", "C", "C", "K"],
    ["H", "H", "H", "H", "H", "H", "K", "K", "K", "K", "K"],
    ["H", "H", "H", "H", "H", "J", "J", "J", "J", "K", "K"],
    ["D", "D", "I", "I", "E", "J", "J", "F", "J", "G", "G"],
    ["D", "I", "I", "E", "E", "J", "F", "F", "J", "J", "G"],
    ["D", "D", "I", "E", "E", "I", "F", "F", "J", "G", "G"],
    ["I", "D", "I", "I", "E", "I", "F", "F", "J", "G", "G"],
    ["I", "I", "I", "I", "I", "I", "J", "J", "J", "J", "J"],
    ["I", "I", "I", "I", "I", "I", "J", "J", "J", "J", "J"],
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
  solutionsCount: 1863,
  createdBy: "Tim",
  creatorLink: "",
};

export default level;
