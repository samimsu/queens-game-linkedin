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
  path: "/community-level/172",
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "C", "C"],
    ["A", "A", "A", "A", "B", "C", "C", "C"],
    ["A", "A", "A", "B", "B", "C", "C", "D"],
    ["A", "E", "A", "A", "B", "D", "D", "D"],
    ["E", "E", "E", "A", "A", "A", "D", "A"],
    ["F", "F", "G", "A", "A", "A", "A", "A"],
    ["F", "F", "G", "A", "A", "A", "A", "H"],
    ["F", "F", "G", "A", "A", "A", "H", "H"],
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
  createdBy: "Alex bzk",
  creatorLink: "",
};

export default level;
