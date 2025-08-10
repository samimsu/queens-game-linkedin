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
  path: "/community-level/187",
  size: 11,
  colorRegions: [
    ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
    ["E", "E", "J", "H", "H", "H", "H", "H", "H", "E", "C"],
    ["E", "J", "J", "H", "H", "K", "H", "H", "H", "E", "E"],
    ["A", "A", "A", "H", "B", "K", "H", "H", "B", "E", "C"],
    ["A", "G", "A", "H", "B", "B", "K", "K", "B", "E", "C"],
    ["A", "G", "A", "H", "B", "I", "B", "K", "B", "E", "C"],
    ["A", "G", "A", "H", "B", "D", "D", "B", "B", "E", "C"],
    ["A", "A", "A", "H", "B", "D", "D", "D", "B", "E", "C"],
    ["H", "H", "H", "H", "D", "D", "D", "D", "D", "E", "F"],
    ["H", "H", "H", "D", "D", "D", "D", "D", "D", "D", "F"],
    ["H", "H", "H", "H", "D", "D", "D", "D", "D", "F", "F"],
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
  createdBy: "Txiti",
  creatorLink: "",
};

export default level;
