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
  path: "/community-level/27",
  size: 11,
  colorRegions: [
    ["K", "K", "K", "K", "C", "C", "B", "B", "B", "B", "B"],
    ["K", "K", "K", "K", "C", "B", "B", "B", "B", "B", "B"],
    ["K", "G", "G", "G", "C", "B", "G", "B", "B", "B", "B"],
    ["K", "G", "G", "G", "G", "G", "G", "G", "B", "F", "B"],
    ["G", "G", "G", "G", "G", "G", "G", "D", "F", "F", "F"],
    ["G", "G", "H", "G", "G", "G", "D", "D", "E", "E", "F"],
    ["G", "G", "H", "I", "G", "G", "D", "D", "E", "E", "F"],
    ["G", "H", "H", "I", "G", "G", "D", "D", "E", "E", "F"],
    ["G", "G", "H", "H", "G", "G", "G", "G", "G", "G", "F"],
    ["G", "G", "H", "H", "A", "G", "G", "G", "G", "G", "G"],
    ["G", "G", "J", "J", "J", "G", "G", "G", "G", "G", "G"],
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
  createdBy: "Tim",
};

export default level;
