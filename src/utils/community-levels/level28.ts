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
  path: "/community-level/28",
  size: 11,
  colorRegions: [
    ["J", "J", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
    ["K", "J", "J", "J", "G", "E", "E", "E", "E", "E", "E"],
    ["K", "J", "J", "G", "G", "E", "E", "E", "E", "E", "E"],
    ["K", "J", "J", "J", "G", "E", "E", "E", "E", "E", "E"],
    ["K", "K", "K", "J", "G", "A", "E", "B", "E", "E", "E"],
    ["J", "J", "K", "J", "A", "A", "B", "B", "E", "E", "E"],
    ["J", "K", "K", "J", "H", "A", "A", "B", "B", "E", "E"],
    ["J", "K", "K", "J", "H", "I", "I", "C", "E", "E", "D"],
    ["J", "K", "J", "J", "H", "I", "I", "C", "C", "D", "D"],
    ["J", "J", "J", "J", "H", "I", "I", "D", "D", "D", "F"],
    ["J", "J", "H", "H", "H", "H", "I", "D", "D", "F", "F"],
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
  createdBy: "AlanT",
};

export default level;
