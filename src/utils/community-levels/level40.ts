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
  path: "/community-level/40",
  size: 11,
  colorRegions: [
    ["F", "F", "D", "D", "E", "E", "C", "A", "A", "B", "B"],
    ["F", "D", "D", "D", "D", "E", "C", "C", "A", "A", "B"],
    ["F", "F", "D", "D", "E", "E", "C", "A", "A", "B", "B"],
    ["F", "F", "E", "E", "E", "F", "C", "A", "A", "B", "B"],
    ["F", "F", "F", "F", "F", "F", "C", "I", "B", "B", "B"],
    ["F", "F", "G", "G", "G", "G", "I", "I", "I", "I", "J"],
    ["G", "G", "G", "H", "G", "G", "I", "J", "J", "I", "J"],
    ["K", "H", "H", "H", "H", "H", "J", "J", "J", "I", "J"],
    ["K", "K", "H", "H", "K", "K", "J", "J", "I", "I", "J"],
    ["K", "K", "K", "H", "H", "K", "K", "J", "J", "J", "J"],
    ["K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K"],
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
  solutionsCount: 1395,
  createdBy: "Jerry",
};

export default level;
