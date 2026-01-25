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
  path: "/community-level/428",
  size: 9,
  colorRegions: [
    ["C", "C", "B", "B", "D", "D", "D", "G", "H"],
    ["C", "B", "B", "B", "F", "D", "D", "G", "H"],
    ["C", "C", "F", "F", "F", "F", "F", "G", "H"],
    ["C", "C", "F", "E", "F", "E", "F", "G", "H"],
    ["C", "C", "F", "F", "F", "F", "F", "G", "I"],
    ["C", "C", "C", "C", "F", "A", "G", "G", "I"],
    ["C", "C", "C", "C", "F", "A", "A", "G", "I"],
    ["C", "C", "C", "A", "F", "A", "G", "G", "I"],
    ["C", "C", "C", "A", "A", "A", "G", "I", "I"],
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
  createdBy: "65",
  creatorLink: "",
};

export default level;
