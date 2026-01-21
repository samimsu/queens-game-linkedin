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
  path: "/community-level/427",
  size: 7,
  colorRegions: [
    ["E", "E", "E", "E", "F", "F", "F"],
    ["E", "E", "E", "E", "F", "F", "F"],
    ["F", "F", "F", "F", "F", "C", "C"],
    ["G", "G", "G", "G", "G", "C", "C"],
    ["D", "B", "B", "G", "G", "G", "G"],
    ["D", "D", "B", "G", "G", "G", "G"],
    ["D", "D", "B", "G", "G", "G", "A"],
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
  createdBy: "sb",
  creatorLink: "",
};

export default level;
