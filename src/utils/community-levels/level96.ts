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
  path: "/community-level/96",
  size: 9,
  colorRegions: [
    ["B", "B", "B", "I", "I", "E", "E", "E", "E"],
    ["B", "A", "B", "I", "I", "G", "G", "A", "E"],
    ["B", "A", "A", "I", "I", "G", "A", "A", "E"],
    ["B", "A", "D", "A", "I", "A", "G", "A", "E"],
    ["H", "A", "D", "I", "A", "D", "G", "A", "E"],
    ["H", "A", "D", "I", "I", "D", "G", "A", "E"],
    ["H", "F", "D", "I", "I", "D", "G", "C", "C"],
    ["H", "F", "D", "I", "I", "D", "G", "C", "C"],
    ["H", "F", "D", "I", "I", "C", "C", "C", "C"],
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
  solutionsCount: 26,
  createdBy: "Marcus M",
  creatorLink: "",
};

export default level;
