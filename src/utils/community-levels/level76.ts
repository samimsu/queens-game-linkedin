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
  path: "/community-level/76",
  size: 11,
  colorRegions: [
    ["D", "D", "D", "D", "D", "D", "D", "D", "D", "F", "F"],
    ["A", "D", "D", "D", "D", "D", "D", "D", "F", "F", "F"],
    ["A", "A", "B", "D", "D", "C", "D", "G", "C", "F", "F"],
    ["B", "A", "B", "D", "C", "C", "C", "G", "C", "C", "F"],
    ["B", "B", "B", "E", "C", "E", "K", "K", "K", "F", "F"],
    ["I", "I", "I", "I", "E", "E", "C", "C", "C", "C", "F"],
    ["I", "I", "I", "E", "E", "E", "H", "H", "H", "F", "F"],
    ["J", "J", "I", "E", "G", "G", "H", "H", "H", "F", "F"],
    ["J", "J", "I", "G", "G", "G", "G", "H", "H", "H", "H"],
    ["G", "J", "I", "G", "G", "G", "G", "H", "H", "G", "G"],
    ["G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G"],
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
  solutionsCount: 34,
  createdBy: "Dawpr",
  creatorLink: "",
};

export default level;
