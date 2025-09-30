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
  path: "/community-level/284",
  size: 10,
  colorRegions: [
    ["H", "H", "H", "H", "H", "H", "H", "H", "H", "H"],
    ["H", "J", "J", "J", "J", "J", "J", "J", "J", "H"],
    ["I", "J", "J", "F", "F", "D", "D", "D", "D", "H"],
    ["I", "J", "J", "F", "F", "D", "F", "F", "F", "H"],
    ["I", "J", "J", "J", "J", "J", "J", "J", "J", "H"],
    ["I", "I", "J", "J", "J", "J", "J", "J", "G", "H"],
    ["J", "J", "J", "J", "J", "C", "E", "E", "G", "H"],
    ["J", "J", "J", "J", "J", "C", "E", "E", "G", "H"],
    ["A", "J", "A", "B", "B", "C", "E", "E", "G", "G"],
    ["A", "B", "B", "B", "B", "C", "C", "E", "G", "G"],
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
  createdBy: "Nudkip",
  creatorLink: "",
};

export default level;
