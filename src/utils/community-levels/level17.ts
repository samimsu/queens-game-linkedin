import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  nomad,
  saharaSand,
} from "../colors";

const level = {
  path: "/community-level/17",
  size: 8,
  colorRegions: [
    ["D", "D", "H", "H", "H", "H", "H", "H"],
    ["D", "A", "A", "A", "B", "E", "E", "H"],
    ["D", "D", "B", "B", "B", "E", "H", "H"],
    ["D", "B", "B", "C", "B", "E", "H", "H"],
    ["D", "C", "C", "C", "B", "E", "H", "H"],
    ["D", "D", "D", "F", "F", "G", "G", "H"],
    ["D", "F", "D", "F", "G", "G", "G", "H"],
    ["F", "F", "F", "F", "G", "G", "G", "H"],
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
  },
  solutionsCount: 1,
  createdBy: "John Queens",
};

export default level;
