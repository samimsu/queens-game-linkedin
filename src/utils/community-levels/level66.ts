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
  path: "/community-level/66",
  size: 9,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "B", "B", "B"],
    ["A", "A", "A", "B", "B", "B", "B", "B", "I"],
    ["B", "B", "B", "B", "B", "B", "B", "I", "I"],
    ["B", "C", "C", "B", "B", "F", "F", "F", "I"],
    ["C", "C", "D", "D", "B", "F", "G", "F", "I"],
    ["E", "E", "D", "D", "D", "F", "G", "G", "I"],
    ["E", "E", "E", "D", "D", "D", "G", "H", "I"],
    ["E", "E", "E", "D", "E", "E", "G", "H", "I"],
    ["E", "E", "E", "E", "E", "E", "I", "I", "I"],
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
  solutionsCount: 24,
  createdBy: "A",
  creatorLink: "",
};

export default level;
