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
  path: "/community-level/25",
  size: 11,
  colorRegions: [
    ["B", "B", "C", "C", "E", "F", "F", "F", "F", "J", "J"],
    ["A", "B", "C", "E", "E", "F", "F", "H", "I", "I", "J"],
    ["A", "B", "C", "D", "E", "F", "G", "H", "H", "I", "J"],
    ["A", "B", "C", "D", "E", "F", "G", "G", "H", "I", "J"],
    ["A", "B", "C", "D", "E", "F", "F", "F", "F", "I", "J"],
    ["A", "B", "C", "D", "E", "K", "K", "K", "F", "I", "J"],
    ["A", "B", "C", "C", "E", "E", "F", "F", "F", "J", "J"],
    ["A", "B", "B", "C", "C", "E", "E", "F", "J", "J", "J"],
    ["A", "B", "B", "B", "C", "E", "E", "E", "J", "J", "J"],
    ["A", "A", "B", "B", "C", "C", "C", "E", "J", "J", "J"],
    ["A", "A", "B", "B", "C", "C", "C", "E", "E", "E", "E"],
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
  createdBy: "AlephNaught",
};

export default level;
