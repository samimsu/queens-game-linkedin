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
  path: "/community-level/330",
  size: 11,
  colorRegions: [
    ["K", "K", "K", "K", "K", "B", "B", "G", "G", "G", "G"],
    ["K", "K", "K", "K", "B", "B", "G", "G", "B", "B", "F"],
    ["K", "K", "K", "K", "K", "B", "B", "B", "B", "E", "F"],
    ["I", "I", "K", "K", "K", "K", "K", "B", "E", "E", "F"],
    ["I", "K", "K", "K", "A", "B", "B", "B", "E", "F", "F"],
    ["I", "K", "A", "A", "A", "J", "J", "B", "B", "B", "D"],
    ["I", "A", "A", "J", "A", "J", "J", "J", "D", "D", "D"],
    ["I", "A", "I", "J", "J", "J", "D", "D", "D", "D", "D"],
    ["I", "I", "I", "C", "C", "D", "D", "D", "H", "H", "H"],
    ["I", "I", "I", "I", "C", "C", "C", "D", "H", "I", "H"],
    ["I", "I", "I", "I", "I", "I", "I", "I", "I", "I", "H"],
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
  createdBy: "hardi9919",
  creatorLink: "",
};

export default level;
