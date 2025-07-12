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
} from "../colors";

const level = {
  path: "/community-level/133",
  size: 10,
  colorRegions: [
    ["D", "D", "C", "C", "C", "F", "B", "B", "F", "F"],
    ["E", "D", "A", "A", "C", "F", "F", "F", "F", "F"],
    ["E", "D", "A", "A", "A", "H", "H", "H", "H", "F"],
    ["E", "E", "A", "J", "A", "H", "H", "F", "H", "F"],
    ["E", "J", "J", "J", "A", "H", "H", "F", "F", "F"],
    ["E", "E", "J", "J", "A", "H", "H", "H", "F", "H"],
    ["E", "E", "J", "J", "A", "H", "H", "H", "F", "H"],
    ["E", "E", "J", "J", "A", "A", "H", "H", "H", "H"],
    ["I", "E", "I", "J", "I", "I", "H", "H", "H", "H"],
    ["I", "I", "I", "I", "I", "I", "I", "G", "H", "H"],
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
  },
  solutionsCount: 1,
  createdBy: "mattsemar",
  creatorLink: "https://github.com/mattsemar",
};

export default level;
