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
  path: "/community-level/35",
  size: 11,
  colorRegions: [
    ["F", "F", "F", "H", "H", "H", "I", "I", "I", "J", "J"],
    ["F", "A", "F", "A", "H", "I", "I", "I", "I", "J", "K"],
    ["F", "A", "F", "A", "I", "I", "I", "I", "I", "J", "K"],
    ["F", "A", "A", "A", "B", "B", "B", "I", "I", "J", "K"],
    ["G", "G", "G", "A", "B", "D", "B", "I", "I", "J", "K"],
    ["G", "G", "G", "A", "B", "D", "B", "C", "C", "C", "K"],
    ["K", "K", "G", "G", "B", "D", "B", "C", "E", "C", "K"],
    ["K", "K", "K", "G", "B", "B", "B", "C", "E", "C", "K"],
    ["K", "K", "K", "G", "G", "G", "K", "C", "E", "C", "K"],
    ["K", "K", "K", "K", "K", "K", "K", "C", "C", "C", "K"],
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
  solutionsCount: 1,
  createdBy: "Henners",
};

export default level;
