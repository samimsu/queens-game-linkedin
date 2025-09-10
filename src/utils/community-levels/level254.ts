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
  path: "/community-level/254",
  size: 8,
  colorRegions: [
    ["H", "H", "G", "C", "C", "C", "C", "C"],
    ["H", "G", "G", "F", "F", "B", "B", "C"],
    ["G", "G", "F", "F", "B", "B", "B", "B"],
    ["G", "F", "F", "A", "B", "B", "B", "D"],
    ["F", "F", "A", "A", "B", "B", "D", "D"],
    ["F", "A", "A", "B", "B", "D", "D", "E"],
    ["A", "A", "B", "B", "D", "D", "E", "E"],
    ["A", "B", "B", "E", "E", "E", "E", "E"],
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
  createdBy: "Adri",
  creatorLink: "",
};

export default level;
