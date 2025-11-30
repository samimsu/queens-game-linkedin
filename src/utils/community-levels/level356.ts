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
  path: "/community-level/356",
  size: 11,
  colorRegions: [
    ["A", "A", "B", "B", "C", "C", "D", "D", "E", "E", "E"],
    ["A", "B", "B", "B", "C", "C", "D", "D", "E", "E", "E"],
    ["F", "F", "F", "F", "F", "C", "D", "D", "E", "E", "E"],
    ["F", "F", "G", "G", "G", "G", "D", "D", "I", "E", "E"],
    ["F", "G", "G", "G", "G", "G", "H", "H", "I", "E", "E"],
    ["F", "F", "G", "G", "H", "H", "H", "H", "J", "J", "K"],
    ["K", "K", "G", "G", "H", "H", "I", "I", "J", "J", "K"],
    ["K", "K", "K", "K", "H", "H", "I", "I", "J", "J", "K"],
    ["K", "K", "K", "K", "K", "K", "I", "I", "J", "J", "K"],
    ["K", "K", "K", "K", "K", "K", "K", "K", "J", "J", "K"],
    ["K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K"],
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
  solutionsCount: -1,
  createdBy: "markszutor",
  creatorLink: "https://github.com/markszutor",
};

export default level;
