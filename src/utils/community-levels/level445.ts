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
  path: "/community-level/445",
  size: 11,
  colorRegions: [
    ["A", "A", "A", "A", "A", "D", "D", "C", "C", "C", "B"],
    ["A", "E", "E", "D", "D", "D", "D", "C", "C", "C", "B"],
    ["A", "E", "E", "E", "E", "E", "D", "B", "B", "B", "B"],
    ["A", "G", "G", "E", "E", "F", "F", "F", "F", "F", "B"],
    ["G", "G", "H", "H", "E", "F", "F", "F", "F", "F", "F"],
    ["G", "H", "H", "H", "H", "H", "H", "H", "H", "F", "F"],
    ["G", "H", "J", "J", "J", "J", "J", "J", "J", "J", "J"],
    ["G", "H", "J", "K", "J", "J", "K", "K", "J", "K", "J"],
    ["G", "G", "I", "K", "K", "J", "K", "K", "K", "K", "J"],
    ["I", "I", "I", "K", "J", "J", "K", "J", "K", "K", "J"],
    ["I", "I", "I", "K", "K", "K", "K", "J", "J", "J", "J"],
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
  createdBy: "NoOneKnows",
  creatorLink: "",
};

export default level;
