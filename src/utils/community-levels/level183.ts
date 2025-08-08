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
  path: "/community-level/183",
  size: 7,
  colorRegions: [
    ["D", "D", "C", "G", "G", "B", "B"],
    ["D", "D", "C", "C", "G", "B", "B"],
    ["A", "E", "E", "C", "G", "G", "B"],
    ["A", "E", "E", "C", "C", "G", "B"],
    ["A", "A", "F", "F", "C", "G", "B"],
    ["A", "C", "F", "F", "C", "G", "B"],
    ["A", "C", "C", "C", "C", "B", "B"],
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
  createdBy: "Ruca",
  creatorLink: "",
};

export default level;
