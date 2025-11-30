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
  path: "/community-level/354",
  size: 7,
  colorRegions: [
    ["B", "B", "B", "B", "B", "B", "B"],
    ["B", "E", "D", "G", "G", "F", "F"],
    ["B", "E", "D", "G", "G", "F", "A"],
    ["B", "E", "D", "D", "G", "F", "A"],
    ["B", "E", "E", "C", "F", "F", "A"],
    ["B", "F", "F", "F", "F", "F", "A"],
    ["B", "G", "G", "G", "G", "G", "A"],
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
  createdBy: "Bobo",
  creatorLink: "",
};

export default level;
