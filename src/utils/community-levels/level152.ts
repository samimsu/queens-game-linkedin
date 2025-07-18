import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  saharaSand,
} from "../colors";

const level = {
  path: "/community-level/152",
  size: 7,
  colorRegions: [
    ["A", "A", "A", "E", "E", "E", "E"],
    ["C", "C", "A", "A", "F", "F", "E"],
    ["C", "C", "C", "A", "A", "F", "E"],
    ["D", "D", "C", "C", "A", "F", "E"],
    ["D", "D", "E", "E", "A", "F", "E"],
    ["B", "B", "B", "E", "E", "E", "E"],
    ["B", "B", "G", "G", "G", "G", "G"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
  },
  solutionsCount: 14,
  createdBy: "Elis",
  creatorLink: "",
};

export default level;
