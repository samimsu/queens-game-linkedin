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
  path: "/community-level/288",
  size: 11,
  colorRegions: [
    ["J", "J", "J", "J", "J", "J", "J", "I", "I", "I", "H"],
    ["J", "K", "D", "D", "D", "C", "C", "I", "I", "I", "H"],
    ["J", "K", "D", "D", "D", "B", "C", "C", "I", "I", "H"],
    ["J", "K", "D", "A", "A", "B", "B", "C", "I", "I", "H"],
    ["J", "K", "D", "D", "A", "A", "B", "E", "I", "I", "H"],
    ["J", "K", "D", "D", "D", "A", "E", "E", "E", "H", "H"],
    ["J", "K", "G", "G", "G", "G", "F", "F", "G", "H", "H"],
    ["J", "K", "G", "G", "G", "G", "G", "G", "G", "H", "H"],
    ["J", "K", "K", "K", "K", "K", "K", "K", "J", "H", "H"],
    ["J", "K", "K", "K", "K", "K", "K", "K", "J", "H", "H"],
    ["J", "J", "J", "J", "J", "J", "J", "J", "J", "H", "H"],
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
  createdBy: "Alexallos",
  creatorLink: "https://github.com/Alexallos",
};

export default level;
