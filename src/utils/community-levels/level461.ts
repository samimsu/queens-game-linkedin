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
  path: "/community-level/461",
  size: 9,
  colorRegions: [
    ["D", "D", "D", "D", "F", "F", "F", "F", "F"],
    ["D", "E", "E", "D", "F", "H", "H", "H", "F"],
    ["D", "E", "F", "D", "F", "H", "A", "H", "F"],
    ["D", "E", "F", "F", "F", "A", "A", "H", "F"],
    ["E", "E", "F", "D", "F", "A", "I", "H", "F"],
    ["E", "E", "E", "D", "A", "A", "I", "H", "F"],
    ["C", "C", "E", "D", "A", "F", "F", "F", "F"],
    ["B", "C", "C", "D", "A", "F", "F", "G", "G"],
    ["B", "C", "C", "D", "A", "F", "G", "G", "G"],
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
  createdBy: "Liekus",
  creatorLink: "",
};

export default level;
