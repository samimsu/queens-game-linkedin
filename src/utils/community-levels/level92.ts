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
  path: "/community-level/92",
  size: 10,
  colorRegions: [
    ["I", "I", "I", "I", "I", "I", "I", "I", "I", "I"],
    ["J", "J", "J", "J", "J", "J", "J", "J", "J", "I"],
    ["F", "F", "F", "C", "C", "C", "C", "J", "J", "I"],
    ["E", "F", "F", "B", "B", "B", "C", "J", "J", "I"],
    ["E", "F", "F", "A", "A", "B", "C", "J", "J", "I"],
    ["E", "F", "F", "A", "A", "D", "C", "J", "J", "I"],
    ["E", "F", "F", "C", "D", "D", "C", "J", "J", "I"],
    ["F", "F", "F", "C", "C", "C", "C", "J", "J", "I"],
    ["H", "H", "H", "H", "H", "H", "H", "H", "H", "H"],
    ["G", "G", "H", "H", "H", "H", "H", "H", "H", "H"],
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
  createdBy: "Viviane",
  creatorLink: "",
};

export default level;
