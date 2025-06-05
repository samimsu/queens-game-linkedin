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
  path: "/community-level/29",
  size: 11,
  colorRegions: [
    ["A", "A", "A", "A", "A", "I", "C", "C", "C", "C", "C"],
    ["A", "E", "E", "E", "A", "I", "C", "F", "F", "F", "F"],
    ["A", "E", "D", "D", "A", "I", "C", "F", "F", "F", "F"],
    ["A", "E", "D", "D", "A", "I", "C", "C", "C", "C", "C"],
    ["A", "A", "A", "A", "A", "I", "J", "J", "J", "J", "C"],
    ["A", "K", "K", "K", "K", "I", "J", "J", "J", "J", "C"],
    ["A", "B", "K", "K", "K", "I", "K", "K", "K", "B", "C"],
    ["A", "G", "B", "K", "K", "I", "C", "C", "B", "C", "C"],
    ["A", "G", "G", "B", "K", "I", "K", "B", "H", "H", "H"],
    ["A", "G", "G", "G", "B", "I", "B", "H", "H", "H", "H"],
    ["G", "G", "G", "G", "G", "B", "H", "H", "H", "H", "H"],
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
  solutionsCount: 7884,
  createdBy: "Speedster",
};

export default level;
