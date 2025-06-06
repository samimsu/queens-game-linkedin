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
  path: "/community-level/33",
  size: 9,
  colorRegions: [
    ["B", "B", "B", "A", "F", "F", "F", "F", "F"],
    ["B", "A", "B", "A", "A", "I", "E", "E", "F"],
    ["B", "A", "A", "A", "I", "I", "I", "E", "F"],
    ["B", "B", "A", "I", "I", "I", "I", "E", "F"],
    ["C", "B", "B", "B", "B", "I", "E", "E", "E"],
    ["C", "C", "D", "D", "B", "I", "H", "E", "H"],
    ["G", "C", "D", "D", "D", "D", "H", "H", "H"],
    ["G", "C", "D", "D", "D", "D", "D", "H", "H"],
    ["G", "C", "D", "H", "H", "H", "H", "H", "H"],
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
  solutionsCount: 103,
  createdBy: "mckike",
};

export default level;
