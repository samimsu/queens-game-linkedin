import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightOrchid,
  lightWisteria,
  nomad,
  saharaSand,
  tallow,
  turquoiseBlue,
} from "../colors";

const level = {
  path: "/community-level/143",
  size: 11,
  colorRegions: [
    ["A", "A", "H", "H", "H", "H", "H", "H", "H", "H", "H"],
    ["G", "A", "A", "E", "E", "E", "E", "E", "F", "H", "H"],
    ["G", "G", "A", "A", "E", "E", "E", "E", "F", "F", "F"],
    ["I", "G", "G", "A", "A", "A", "D", "D", "D", "D", "D"],
    ["I", "I", "G", "G", "A", "A", "A", "A", "D", "J", "J"],
    ["I", "I", "B", "G", "G", "G", "A", "A", "A", "J", "J"],
    ["I", "I", "B", "B", "B", "G", "G", "G", "A", "J", "J"],
    ["I", "I", "B", "B", "B", "B", "B", "G", "G", "J", "J"],
    ["I", "I", "B", "B", "B", "B", "B", "C", "C", "C", "C"],
    ["I", "I", "C", "C", "C", "C", "C", "C", "C", "C", "C"],
    ["I", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K"],
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
    J: tallow,
    K: turquoiseBlue,
  },
  solutionsCount: 3941,
  createdBy: "NickC",
  creatorLink: "",
};

export default level;
