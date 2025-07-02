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
  path: "/community-level/103",
  size: 11,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "A"],
    ["E", "E", "E", "E", "E", "E", "E", "E", "E", "F", "A"],
    ["J", "J", "J", "J", "J", "J", "J", "J", "E", "F", "A"],
    ["D", "D", "D", "D", "D", "D", "D", "J", "E", "F", "A"],
    ["G", "G", "G", "G", "G", "G", "D", "J", "E", "F", "A"],
    ["C", "C", "C", "C", "C", "G", "D", "J", "E", "F", "A"],
    ["H", "H", "H", "H", "C", "G", "D", "J", "E", "F", "A"],
    ["B", "B", "B", "H", "C", "G", "D", "J", "E", "F", "A"],
    ["I", "I", "B", "H", "C", "G", "D", "J", "E", "F", "A"],
    ["A", "I", "B", "H", "C", "G", "D", "J", "E", "F", "A"],
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
  solutionsCount: 176,
  createdBy: "nafats",
  creatorLink: "",
};

export default level;
