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
  path: "/community-level/384",
  size: 11,
  colorRegions: [
    ["A", "B", "C", "D", "E", "F", "F", "G", "G", "G", "G"],
    ["A", "B", "C", "D", "E", "E", "E", "E", "G", "G", "G"],
    ["A", "B", "C", "D", "E", "E", "E", "E", "E", "E", "E"],
    ["A", "B", "C", "D", "E", "H", "H", "H", "H", "H", "D"],
    ["A", "B", "C", "D", "D", "D", "D", "D", "D", "D", "D"],
    ["A", "B", "C", "D", "D", "D", "I", "I", "I", "C", "C"],
    ["A", "B", "C", "C", "C", "C", "C", "C", "C", "C", "C"],
    ["A", "B", "C", "C", "C", "J", "J", "J", "B", "B", "B"],
    ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B"],
    ["A", "B", "B", "B", "B", "B", "K", "A", "A", "A", "A"],
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
  createdBy: "Nezbryk",
  creatorLink: "",
};

export default level;
