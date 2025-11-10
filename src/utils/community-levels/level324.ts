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
  path: "/community-level/324",
  size: 8,
  colorRegions: [
    ["E", "E", "E", "E", "E", "E", "F", "E"],
    ["F", "F", "F", "E", "F", "F", "F", "E"],
    ["F", "C", "F", "F", "F", "D", "F", "E"],
    ["F", "C", "C", "F", "D", "D", "F", "E"],
    ["F", "G", "G", "G", "H", "H", "F", "H"],
    ["D", "G", "D", "G", "H", "H", "B", "H"],
    ["D", "G", "G", "G", "H", "A", "H", "H"],
    ["D", "G", "A", "G", "H", "A", "H", "H"],
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
  createdBy: "Simba",
  creatorLink: "",
};

export default level;
