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
  path: "/community-level/438",
  size: 11,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "G", "G", "G", "G", "G"],
    ["A", "D", "D", "D", "D", "D", "K", "G", "F", "F", "G"],
    ["A", "D", "D", "D", "D", "D", "K", "K", "K", "G", "G"],
    ["A", "D", "C", "K", "K", "K", "K", "K", "G", "G", "G"],
    ["A", "D", "C", "C", "C", "K", "K", "I", "I", "G", "G"],
    ["A", "D", "C", "C", "C", "K", "K", "I", "G", "G", "G"],
    ["A", "A", "E", "C", "C", "H", "J", "B", "G", "G", "G"],
    ["A", "A", "E", "C", "C", "H", "J", "B", "B", "G", "G"],
    ["A", "A", "E", "C", "C", "J", "J", "E", "B", "G", "G"],
    ["A", "A", "E", "E", "E", "E", "E", "E", "B", "B", "G"],
    ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
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
  createdBy: "Zeko",
  creatorLink: "",
};

export default level;
