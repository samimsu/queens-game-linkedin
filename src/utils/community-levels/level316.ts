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
  path: "/community-level/316",
  size: 9,
  colorRegions: [
    ["H", "H", "H", "I", "I", "I", "I", "G", "G"],
    ["H", "H", "H", "H", "H", "I", "I", "I", "G"],
    ["A", "B", "H", "H", "H", "D", "I", "I", "G"],
    ["B", "B", "H", "D", "D", "D", "D", "D", "G"],
    ["B", "B", "B", "B", "D", "F", "F", "D", "G"],
    ["B", "B", "C", "D", "E", "E", "F", "D", "G"],
    ["B", "C", "C", "D", "D", "E", "E", "D", "G"],
    ["B", "B", "C", "D", "D", "D", "E", "D", "G"],
    ["B", "B", "D", "D", "D", "D", "D", "D", "D"],
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
  createdBy: "Dan Relaxxe",
  creatorLink: "",
};

export default level;
