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
  path: "/community-level/132",
  size: 10,
  colorRegions: [
    ["F", "A", "A", "F", "E", "E", "D", "B", "B", "D"],
    ["F", "F", "A", "F", "E", "E", "D", "D", "B", "D"],
    ["F", "F", "F", "F", "E", "E", "D", "D", "D", "D"],
    ["F", "C", "F", "F", "E", "C", "D", "H", "D", "D"],
    ["F", "C", "C", "F", "C", "C", "D", "H", "H", "D"],
    ["G", "G", "C", "C", "C", "I", "I", "H", "H", "H"],
    ["G", "C", "C", "H", "C", "C", "H", "H", "H", "H"],
    ["H", "C", "H", "H", "H", "C", "H", "H", "H", "H"],
    ["H", "H", "H", "H", "H", "H", "H", "H", "H", "H"],
    ["H", "H", "J", "H", "H", "H", "H", "H", "H", "H"],
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
  createdBy: "tim-ackermann",
  creatorLink: "https://github.com/tim-ackermann",
};

export default level;
