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
  path: "/community-level/375",
  size: 10,
  colorRegions: [
    ["B", "B", "B", "B", "B", "B", "B", "B", "B", "B"],
    ["B", "B", "A", "A", "A", "A", "A", "B", "B", "B"],
    ["B", "A", "A", "C", "C", "C", "A", "A", "B", "G"],
    ["C", "A", "C", "C", "C", "C", "D", "A", "G", "G"],
    ["C", "C", "C", "D", "C", "D", "D", "A", "G", "G"],
    ["C", "C", "C", "D", "D", "A", "A", "A", "G", "I"],
    ["C", "C", "E", "D", "A", "A", "H", "H", "G", "I"],
    ["E", "E", "E", "D", "A", "H", "H", "H", "G", "I"],
    ["E", "F", "F", "F", "A", "H", "H", "J", "J", "I"],
    ["E", "E", "E", "F", "H", "H", "H", "H", "J", "I"],
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
  createdBy: "firethelost",
  creatorLink: "https://github.com/PrajwalMReddy",
};

export default level;
