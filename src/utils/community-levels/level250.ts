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
  path: "/community-level/250",
  size: 8,
  colorRegions: [
    ["E", "E", "E", "E", "F", "H", "H", "G"],
    ["G", "A", "A", "A", "D", "D", "H", "G"],
    ["G", "H", "B", "B", "D", "D", "H", "G"],
    ["G", "H", "B", "C", "C", "B", "H", "G"],
    ["G", "H", "B", "C", "C", "B", "H", "G"],
    ["G", "H", "D", "D", "B", "B", "A", "G"],
    ["G", "H", "H", "H", "A", "A", "A", "G"],
    ["G", "G", "G", "H", "E", "E", "E", "E"],
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
  createdBy: "DvM94",
  creatorLink: "",
};

export default level;
