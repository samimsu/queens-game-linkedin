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
  path: "/community-level/50",
  size: 11,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "C", "C", "C", "C", "G", "G", "G", "G", "G", "B"],
    ["A", "C", "C", "C", "C", "C", "C", "C", "C", "C", "B"],
    ["A", "C", "D", "D", "D", "C", "H", "H", "H", "H", "B"],
    ["A", "C", "D", "D", "D", "D", "D", "D", "D", "D", "B"],
    ["A", "C", "D", "E", "E", "D", "D", "J", "J", "J", "B"],
    ["A", "C", "D", "E", "E", "E", "E", "E", "E", "E", "B"],
    ["A", "C", "D", "E", "F", "E", "E", "E", "I", "I", "B"],
    ["A", "C", "D", "E", "F", "F", "F", "F", "F", "F", "B"],
    ["A", "C", "D", "E", "F", "F", "F", "F", "K", "K", "B"],
    ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B"],
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
