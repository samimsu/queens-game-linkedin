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
  path: "/community-level/260",
  size: 11,
  colorRegions: [
    ["C", "J", "J", "J", "J", "J", "J", "J", "J", "J", "J"],
    ["A", "A", "A", "A", "B", "B", "J", "J", "J", "J", "J"],
    ["E", "E", "A", "A", "A", "B", "J", "J", "J", "J", "J"],
    ["E", "E", "A", "A", "A", "A", "D", "J", "H", "J", "J"],
    ["E", "F", "F", "A", "A", "D", "D", "J", "H", "J", "J"],
    ["E", "E", "F", "A", "A", "I", "I", "I", "H", "J", "J"],
    ["H", "F", "F", "A", "I", "I", "I", "H", "H", "H", "J"],
    ["H", "F", "G", "A", "I", "I", "I", "H", "H", "H", "J"],
    ["H", "F", "G", "A", "I", "I", "I", "H", "H", "H", "K"],
    ["H", "F", "G", "G", "I", "I", "I", "H", "H", "H", "K"],
    ["H", "H", "H", "H", "H", "H", "H", "H", "H", "K", "K"],
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
  createdBy: "BBNBLB",
  creatorLink: "https://en.m.wikipedia.org/wiki/Mark_Ingram_II",
};

export default level;
