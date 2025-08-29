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
  path: "/community-level/234",
  size: 11,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "B", "B", "B", "B", "B"],
    ["A", "A", "A", "A", "B", "B", "B", "B", "B", "B", "B"],
    ["C", "A", "D", "A", "A", "B", "B", "B", "B", "B", "B"],
    ["C", "D", "D", "D", "D", "B", "B", "E", "B", "B", "B"],
    ["C", "C", "C", "C", "D", "D", "E", "E", "F", "F", "F"],
    ["G", "C", "C", "C", "D", "D", "E", "E", "E", "E", "E"],
    ["G", "G", "G", "C", "D", "D", "D", "E", "E", "E", "E"],
    ["G", "H", "G", "G", "G", "G", "D", "I", "E", "J", "E"],
    ["H", "H", "G", "G", "G", "G", "G", "I", "E", "J", "J"],
    ["H", "H", "H", "K", "K", "G", "G", "I", "E", "E", "J"],
    ["H", "H", "H", "K", "K", "G", "G", "I", "I", "I", "I"],
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
  createdBy: "mattsemar",
  creatorLink: "https://github.com/mattsemar",
};

export default level;
