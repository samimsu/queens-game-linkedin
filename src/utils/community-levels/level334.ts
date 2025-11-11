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
  path: "/community-level/334",
  size: 9,
  colorRegions: [
    ["F", "G", "H", "H", "H", "H", "I", "I", "I"],
    ["F", "G", "G", "H", "D", "H", "H", "I", "I"],
    ["F", "F", "G", "G", "D", "E", "H", "I", "I"],
    ["A", "F", "G", "G", "D", "E", "H", "I", "I"],
    ["A", "F", "F", "G", "D", "E", "H", "I", "C"],
    ["A", "F", "G", "G", "D", "E", "E", "I", "C"],
    ["F", "F", "I", "I", "I", "I", "I", "I", "I"],
    ["F", "I", "I", "I", "I", "I", "B", "I", "B"],
    ["F", "F", "I", "I", "I", "I", "B", "B", "B"],
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
