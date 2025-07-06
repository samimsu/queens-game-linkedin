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
  path: "/community-level/113",
  size: 7,
  colorRegions: [
    ["A", "B", "B", "B", "D", "E", "E"],
    ["C", "B", "B", "B", "D", "F", "E"],
    ["C", "D", "D", "D", "D", "F", "E"],
    ["C", "C", "C", "G", "F", "F", "E"],
    ["C", "C", "C", "G", "E", "F", "E"],
    ["C", "G", "G", "G", "E", "F", "E"],
    ["C", "G", "G", "G", "E", "E", "E"],
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
  solutionsCount: 2,
  createdBy: "Coldarth",
  creatorLink: "https://www.steleprod.com/",
};

export default level;
