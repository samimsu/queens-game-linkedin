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
  path: "/community-level/259",
  size: 7,
  colorRegions: [
    ["G", "G", "G", "G", "G", "G", "G"],
    ["G", "A", "A", "C", "D", "D", "G"],
    ["G", "A", "C", "C", "D", "D", "E"],
    ["G", "B", "C", "C", "D", "E", "E"],
    ["G", "B", "B", "F", "D", "E", "E"],
    ["G", "F", "F", "F", "D", "E", "E"],
    ["G", "G", "F", "F", "F", "E", "E"],
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
  solutionsCount: 1,
  createdBy: "Elif aktaş",
  creatorLink: "",
};

export default level;
