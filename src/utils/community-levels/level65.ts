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
  path: "/community-level/65",
  size: 11,
  colorRegions: [
    ["A", "A", "J", "J", "J", "J", "J", "J", "J", "J", "J"],
    ["A", "A", "K", "K", "K", "K", "K", "J", "I", "J", "J"],
    ["A", "B", "H", "H", "H", "H", "H", "J", "I", "J", "J"],
    ["A", "B", "H", "H", "H", "H", "J", "J", "I", "J", "J"],
    ["C", "C", "C", "H", "H", "H", "J", "J", "I", "J", "J"],
    ["C", "D", "D", "H", "H", "H", "H", "J", "I", "I", "J"],
    ["E", "E", "D", "D", "H", "H", "H", "H", "I", "I", "J"],
    ["F", "E", "E", "E", "H", "H", "H", "H", "H", "I", "J"],
    ["F", "E", "F", "E", "E", "G", "H", "H", "I", "I", "J"],
    ["F", "F", "F", "F", "F", "G", "G", "G", "I", "J", "J"],
    ["F", "F", "F", "F", "F", "F", "G", "I", "I", "J", "J"],
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
  createdBy: "egill8000",
  creatorLink: "https://github.com/egill8000",
};

export default level;
