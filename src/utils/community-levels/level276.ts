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
  path: "/community-level/276",
  size: 11,
  colorRegions: [
    ["E", "E", "E", "E", "B", "G", "B", "E", "E", "F", "D"],
    ["A", "A", "A", "E", "F", "F", "F", "F", "F", "F", "D"],
    ["A", "E", "A", "E", "H", "H", "H", "E", "D", "D", "D"],
    ["A", "A", "A", "E", "H", "E", "H", "E", "D", "G", "D"],
    ["A", "E", "A", "E", "H", "E", "H", "E", "D", "D", "D"],
    ["C", "C", "C", "E", "G", "B", "G", "E", "E", "E", "E"],
    ["C", "E", "E", "E", "J", "E", "J", "E", "K", "K", "K"],
    ["C", "E", "C", "E", "J", "E", "J", "E", "K", "E", "K"],
    ["C", "C", "C", "E", "J", "J", "J", "E", "K", "K", "K"],
    ["I", "G", "G", "E", "G", "G", "G", "E", "E", "E", "K"],
    ["I", "B", "B", "E", "E", "G", "E", "E", "E", "K", "K"],
  ],
  regionColors: {
    A: chardonnay,
    B: lightWisteria,
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
  createdBy: "AndreYMV",
  creatorLink: "",
};

export default level;
