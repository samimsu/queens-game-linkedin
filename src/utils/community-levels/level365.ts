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
  path: "/community-level/365",
  size: 8,
  colorRegions: [
    ["G", "F", "F", "F", "F", "F", "F", "F"],
    ["G", "A", "A", "A", "A", "A", "H", "F"],
    ["G", "E", "E", "B", "B", "A", "H", "F"],
    ["G", "E", "E", "B", "C", "A", "H", "F"],
    ["G", "E", "E", "D", "C", "A", "H", "F"],
    ["G", "D", "D", "D", "C", "A", "H", "F"],
    ["G", "A", "A", "A", "A", "A", "H", "F"],
    ["G", "G", "G", "G", "G", "G", "G", "G"],
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
  createdBy: "alexis le goff",
  creatorLink: "https://github.com/alexislg2",
};

export default level;
