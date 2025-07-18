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
  path: "/community-level/149",
  size: 11,
  colorRegions: [
    ["A", "B", "C", "C", "C", "C", "C", "C", "E", "E", "E"],
    ["A", "B", "B", "A", "A", "G", "G", "G", "G", "F", "F"],
    ["A", "A", "B", "B", "H", "H", "H", "I", "G", "G", "G"],
    ["I", "I", "I", "B", "B", "B", "H", "I", "I", "J", "J"],
    ["H", "H", "H", "H", "H", "H", "H", "D", "K", "F", "E"],
    ["H", "H", "H", "H", "H", "H", "H", "D", "K", "F", "E"],
    ["I", "I", "I", "J", "G", "G", "D", "D", "K", "F", "E"],
    ["E", "F", "J", "J", "G", "D", "G", "G", "G", "K", "K"],
    ["E", "F", "J", "J", "G", "G", "G", "G", "I", "I", "I"],
    ["F", "F", "F", "F", "F", "F", "F", "F", "F", "J", "K"],
    ["E", "E", "E", "E", "E", "E", "E", "E", "F", "K", "K"],
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
  solutionsCount: 2769,
  createdBy: "abisheth",
  creatorLink: "https://github.com/Abishethvarman",
};

export default level;
