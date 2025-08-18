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
  path: "/community-level/199",
  size: 11,
  colorRegions: [
    ["A", "B", "B", "B", "B", "B", "C", "C", "C", "C", "C"],
    ["B", "B", "B", "D", "D", "B", "D", "D", "C", "C", "C"],
    ["B", "B", "D", "D", "D", "D", "D", "D", "D", "C", "C"],
    ["E", "E", "D", "D", "D", "D", "D", "D", "D", "C", "C"],
    ["F", "E", "E", "D", "D", "D", "D", "D", "C", "C", "C"],
    ["F", "E", "E", "E", "D", "D", "D", "C", "C", "G", "C"],
    ["F", "F", "F", "F", "F", "D", "C", "C", "C", "G", "G"],
    ["F", "F", "F", "F", "H", "H", "J", "I", "I", "G", "G"],
    ["F", "F", "F", "F", "H", "H", "J", "I", "G", "G", "G"],
    ["H", "H", "H", "F", "H", "H", "J", "J", "J", "G", "G"],
    ["H", "H", "H", "H", "H", "H", "H", "J", "G", "G", "K"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: celadon,
    D: bittersweet,
    E: anakiwa,
    F: altoMain,
    G: lightOrchid,
    H: halfBaked,
    I: nomad,
    J: saharaSand,
    K: turquoiseBlue,
  },
  solutionsCount: 1,
  createdBy: "mattsemar",
  creatorLink: "https://github.com/mattsemar",
};

export default level;
