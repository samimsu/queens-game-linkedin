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
  path: "/community-level/100",
  size: 11,
  colorRegions: [
    ["A", "A", "A", "A", "B", "J", "J", "J", "J", "J", "K"],
    ["J", "A", "A", "J", "B", "B", "B", "J", "J", "J", "K"],
    ["J", "A", "A", "J", "B", "C", "C", "C", "C", "J", "K"],
    ["J", "J", "A", "J", "B", "B", "C", "D", "D", "J", "K"],
    ["J", "J", "J", "J", "J", "J", "J", "J", "J", "J", "K"],
    ["E", "E", "E", "E", "E", "E", "E", "E", "E", "K", "K"],
    ["E", "F", "F", "G", "G", "G", "G", "G", "G", "K", "K"],
    ["E", "E", "H", "G", "G", "G", "G", "G", "G", "K", "K"],
    ["E", "E", "H", "H", "G", "G", "G", "G", "G", "K", "K"],
    ["E", "H", "H", "H", "H", "H", "H", "H", "I", "I", "K"],
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
  solutionsCount: 1,
  createdBy: "egill8000",
  creatorLink: "https://github.com/egill8000",
};

export default level;
