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
  path: "/community-level/458",
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "D", "C", "C", "C", "C"],
    ["B", "B", "B", "B", "D", "D", "D", "D", "C"],
    ["E", "E", "E", "B", "E", "E", "E", "D", "D"],
    ["E", "E", "E", "E", "E", "E", "D", "D", "D"],
    ["E", "E", "G", "G", "H", "H", "H", "I", "H"],
    ["E", "F", "G", "G", "H", "I", "I", "I", "H"],
    ["F", "F", "G", "G", "H", "I", "I", "I", "H"],
    ["F", "F", "F", "F", "I", "I", "I", "I", "H"],
    ["F", "F", "F", "F", "F", "H", "H", "H", "H"],
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
  createdBy: "Sphimx",
  creatorLink: "",
};

export default level;
