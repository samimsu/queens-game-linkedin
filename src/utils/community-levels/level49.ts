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
  path: "/community-level/49",
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "I", "I", "I", "I", "I", "I", "I", "B"],
    ["A", "D", "D", "D", "D", "D", "C", "I", "B"],
    ["A", "D", "H", "H", "H", "H", "C", "I", "B"],
    ["A", "D", "F", "F", "F", "E", "C", "I", "B"],
    ["A", "D", "F", "F", "F", "E", "C", "I", "B"],
    ["A", "D", "F", "G", "F", "E", "C", "I", "B"],
    ["A", "C", "C", "C", "C", "C", "C", "I", "B"],
    ["A", "B", "B", "B", "B", "B", "B", "B", "B"],
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
  createdBy: "egill8000",
  creatorLink: "https://github.com/egill8000",
};

export default level;
