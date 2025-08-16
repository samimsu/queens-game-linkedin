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
  path: "/community-level/193",
  size: 11,
  colorRegions: [
    ["A", "A", "B", "B", "B", "B", "B", "B", "B", "B", "B"],
    ["A", "A", "B", "B", "B", "B", "B", "B", "B", "B", "B"],
    ["A", "A", "A", "B", "C", "C", "C", "C", "D", "D", "D"],
    ["A", "A", "A", "C", "C", "C", "C", "C", "C", "D", "D"],
    ["A", "E", "C", "C", "C", "C", "F", "F", "G", "D", "D"],
    ["E", "E", "H", "H", "C", "C", "F", "G", "G", "D", "D"],
    ["E", "E", "I", "I", "C", "J", "G", "G", "G", "D", "D"],
    ["I", "I", "I", "K", "J", "J", "G", "G", "G", "D", "D"],
    ["I", "I", "K", "K", "J", "J", "G", "G", "G", "D", "D"],
    ["I", "I", "K", "K", "J", "J", "G", "G", "D", "D", "D"],
    ["I", "I", "K", "K", "K", "G", "G", "G", "D", "D", "D"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: lightOrchid,
    E: bittersweet,
    F: celadon,
    G: nomad,
    H: altoMain,
    I: halfBaked,
    J: saharaSand,
    K: turquoiseBlue,
  },
  solutionsCount: 1,
  createdBy: "mattsemar",
  creatorLink: "",
};

export default level;
