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
  path: "/community-level/291",
  size: 11,
  colorRegions: [
    ["A", "B", "B", "C", "C", "C", "C", "C", "C", "C", "C"],
    ["A", "A", "B", "C", "C", "D", "D", "D", "D", "D", "C"],
    ["A", "A", "B", "C", "D", "D", "I", "I", "I", "I", "I"],
    ["A", "B", "B", "C", "D", "D", "I", "G", "G", "J", "I"],
    ["A", "B", "C", "C", "D", "I", "I", "G", "G", "J", "J"],
    ["A", "B", "C", "D", "D", "H", "H", "H", "H", "H", "J"],
    ["A", "B", "C", "D", "D", "H", "F", "F", "H", "J", "J"],
    ["A", "B", "C", "D", "H", "H", "F", "F", "K", "J", "K"],
    ["A", "B", "C", "D", "D", "H", "H", "K", "K", "K", "K"],
    ["A", "B", "D", "D", "D", "D", "D", "E", "E", "K", "K"],
    ["A", "A", "A", "A", "A", "D", "D", "D", "E", "K", "K"],
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
  createdBy: "ocus",
  creatorLink: "https://github.com/ocus",
};

export default level;
