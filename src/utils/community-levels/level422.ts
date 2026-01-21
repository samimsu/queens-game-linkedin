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
  path: "/community-level/422",
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A"],
    ["D", "C", "C", "C", "C", "C", "C", "A"],
    ["D", "G", "F", "B", "B", "B", "C", "A"],
    ["D", "G", "F", "H", "H", "B", "C", "A"],
    ["D", "G", "F", "E", "E", "B", "C", "A"],
    ["D", "G", "F", "E", "E", "B", "C", "A"],
    ["D", "G", "G", "G", "G", "B", "C", "A"],
    ["D", "D", "D", "D", "D", "D", "D", "D"],
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
  createdBy: "pagassini",
  creatorLink: "",
};

export default level;
