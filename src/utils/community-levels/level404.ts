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
  path: "/community-level/404",
  size: 7,
  colorRegions: [
    ["A", "C", "C", "C", "C", "C", "C"],
    ["A", "A", "A", "D", "E", "C", "C"],
    ["A", "D", "D", "D", "E", "C", "C"],
    ["D", "D", "G", "D", "B", "B", "C"],
    ["F", "F", "G", "C", "C", "C", "C"],
    ["F", "G", "G", "C", "G", "C", "G"],
    ["F", "G", "G", "G", "G", "G", "G"],
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
  createdBy: "Matt",
  creatorLink: "",
};

export default level;
