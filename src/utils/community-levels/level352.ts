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
  path: "/community-level/352",
  size: 9,
  colorRegions: [
    ["A", "E", "E", "E", "E", "E", "F", "G", "G"],
    ["A", "B", "E", "E", "E", "E", "F", "G", "G"],
    ["A", "B", "B", "B", "D", "F", "F", "G", "G"],
    ["A", "A", "A", "B", "D", "F", "F", "G", "G"],
    ["H", "C", "B", "B", "D", "F", "F", "F", "G"],
    ["H", "C", "C", "D", "D", "D", "D", "F", "G"],
    ["H", "H", "C", "C", "I", "I", "F", "F", "G"],
    ["H", "H", "I", "I", "I", "I", "F", "F", "G"],
    ["H", "H", "I", "I", "I", "G", "G", "G", "G"],
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
  },
  solutionsCount: 1,
  createdBy: "Ben",
  creatorLink: "",
};

export default level;
