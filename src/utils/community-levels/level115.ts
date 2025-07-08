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
  path: "/community-level/115",
  size: 8,
  colorRegions: [
    ["A", "A", "A", "B", "C", "E", "E", "H"],
    ["A", "A", "A", "B", "C", "D", "E", "H"],
    ["A", "A", "A", "B", "C", "D", "E", "H"],
    ["B", "B", "B", "B", "C", "D", "E", "H"],
    ["C", "C", "C", "C", "C", "D", "E", "H"],
    ["D", "D", "D", "D", "D", "D", "E", "H"],
    ["F", "E", "E", "E", "E", "E", "E", "H"],
    ["F", "F", "F", "F", "E", "E", "G", "H"],
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
  solutionsCount: 8,
  createdBy: "DINEYY",
  creatorLink: "",
};

export default level;
