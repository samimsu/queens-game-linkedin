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
  path: "/community-level/265",
  size: 7,
  colorRegions: [
    ["D", "B", "B", "D", "D", "D", "D"],
    ["D", "D", "D", "D", "F", "F", "F"],
    ["E", "D", "D", "F", "F", "C", "A"],
    ["E", "D", "F", "F", "F", "C", "A"],
    ["E", "E", "F", "C", "C", "C", "A"],
    ["G", "G", "F", "F", "C", "C", "A"],
    ["G", "G", "G", "C", "C", "A", "A"],
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
  createdBy: "OminousCow",
  creatorLink: "",
};

export default level;
