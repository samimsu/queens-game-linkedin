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
  path: "/community-level/436",
  size: 9,
  colorRegions: [
    ["B", "B", "B", "B", "B", "B", "B", "B", "B"],
    ["G", "G", "G", "G", "G", "G", "G", "B", "B"],
    ["G", "G", "H", "H", "H", "H", "H", "B", "B"],
    ["G", "G", "A", "A", "A", "A", "H", "B", "B"],
    ["F", "F", "F", "F", "A", "A", "H", "B", "B"],
    ["C", "C", "A", "A", "A", "A", "H", "B", "B"],
    ["C", "C", "D", "D", "D", "I", "H", "H", "H"],
    ["E", "D", "D", "E", "I", "I", "H", "H", "H"],
    ["E", "E", "E", "E", "I", "I", "I", "I", "I"],
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
  createdBy: "Rollin'",
  creatorLink: "",
};

export default level;
