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
  path: "/community-level/20",
  size: 11,
  colorRegions: [
    ["A", "A", "A", "H", "H", "H", "I", "I", "G", "F", "F"],
    ["J", "A", "A", "H", "H", "H", "I", "H", "G", "F", "G"],
    ["J", "J", "A", "H", "H", "H", "H", "H", "G", "G", "G"],
    ["J", "A", "J", "H", "H", "H", "H", "H", "G", "G", "G"],
    ["J", "J", "J", "J", "K", "K", "K", "K", "G", "G", "G"],
    ["J", "J", "J", "J", "J", "K", "K", "K", "G", "B", "G"],
    ["J", "J", "J", "J", "J", "J", "K", "K", "B", "B", "B"],
    ["J", "J", "E", "E", "E", "E", "C", "C", "C", "B", "C"],
    ["J", "E", "E", "D", "D", "D", "C", "C", "B", "C", "B"],
    ["J", "E", "J", "D", "D", "D", "C", "C", "C", "B", "C"],
    ["J", "J", "J", "J", "J", "J", "C", "C", "C", "C", "C"],
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
  solutionsCount: 196,
  createdBy: "Lake",
};

export default level;
