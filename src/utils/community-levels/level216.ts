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
  path: "/community-level/216",
  size: 11,
  colorRegions: [
    ["A", "A", "A", "A", "B", "B", "C", "C", "D", "D", "D"],
    ["A", "A", "A", "B", "B", "B", "C", "C", "C", "D", "D"],
    ["A", "A", "A", "B", "B", "B", "C", "C", "C", "D", "D"],
    ["A", "B", "B", "B", "B", "B", "C", "C", "C", "C", "D"],
    ["B", "B", "B", "E", "E", "F", "C", "C", "G", "G", "D"],
    ["B", "B", "E", "E", "F", "F", "F", "C", "G", "G", "D"],
    ["B", "B", "B", "E", "E", "F", "H", "H", "H", "G", "H"],
    ["E", "E", "B", "E", "H", "H", "H", "H", "H", "H", "H"],
    ["E", "E", "E", "E", "I", "I", "H", "J", "H", "J", "J"],
    ["E", "E", "E", "E", "I", "I", "I", "J", "J", "J", "K"],
    ["E", "E", "E", "I", "I", "I", "I", "J", "J", "J", "K"],
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
