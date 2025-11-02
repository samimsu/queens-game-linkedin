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
  path: "/community-level/311",
  size: 10,
  colorRegions: [
    ["A", "D", "D", "B", "B", "B", "B", "B", "B", "B"],
    ["A", "C", "D", "D", "D", "D", "D", "D", "D", "B"],
    ["A", "C", "E", "F", "F", "F", "F", "F", "D", "B"],
    ["A", "C", "E", "I", "I", "H", "H", "F", "D", "B"],
    ["A", "C", "E", "G", "I", "J", "H", "F", "D", "B"],
    ["A", "C", "E", "G", "I", "I", "H", "F", "D", "B"],
    ["A", "C", "E", "G", "G", "G", "H", "F", "D", "B"],
    ["A", "C", "E", "E", "G", "E", "E", "E", "D", "B"],
    ["A", "C", "C", "C", "C", "C", "C", "C", "C", "B"],
    ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
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
  createdBy: "Andrea",
  creatorLink: "",
};

export default level;
