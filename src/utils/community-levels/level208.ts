import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightOrchid,
  lightWisteria,
  nomad,
  saharaSand,
} from "../colors";

const level = {
  path: "/community-level/208",
  size: 9,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "C", "C", "C"],
    ["A", "A", "A", "B", "B", "D", "D", "C", "D"],
    ["A", "E", "A", "B", "B", "D", "D", "D", "D"],
    ["A", "E", "E", "E", "B", "F", "F", "D", "G"],
    ["A", "E", "E", "E", "F", "F", "F", "G", "G"],
    ["A", "E", "E", "E", "E", "F", "F", "G", "G"],
    ["H", "H", "E", "E", "E", "F", "F", "G", "G"],
    ["H", "E", "E", "H", "E", "F", "G", "G", "I"],
    ["H", "H", "H", "H", "H", "H", "G", "I", "I"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: saharaSand,
    F: bittersweet,
    G: altoMain,
    H: nomad,
    I: lightOrchid,
  },
  solutionsCount: -1,
  createdBy: "mattsemar",
  creatorLink: "https://github.com/mattsemar",
};

export default level;
