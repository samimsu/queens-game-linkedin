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
  path: "/community-level/243",
  size: 11,
  colorRegions: [
    ["B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B"],
    ["B", "B", "D", "B", "B", "B", "F", "F", "B", "B", "B"],
    ["B", "B", "D", "A", "B", "B", "F", "A", "B", "B", "B"],
    ["D", "D", "D", "A", "B", "B", "A", "A", "B", "B", "B"],
    ["D", "C", "C", "A", "A", "A", "A", "J", "G", "G", "G"],
    ["C", "C", "H", "A", "A", "J", "J", "J", "G", "E", "G"],
    ["H", "H", "H", "A", "A", "A", "A", "J", "G", "G", "G"],
    ["H", "H", "H", "A", "I", "I", "A", "A", "G", "G", "G"],
    ["H", "H", "H", "A", "I", "I", "K", "A", "K", "G", "K"],
    ["I", "I", "I", "I", "I", "K", "K", "K", "K", "K", "K"],
    ["I", "I", "K", "K", "K", "K", "K", "K", "K", "K", "K"],
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
  createdBy: "KStateSuperFan",
  creatorLink: "https://github.com/FrostyPink",
};

export default level;
