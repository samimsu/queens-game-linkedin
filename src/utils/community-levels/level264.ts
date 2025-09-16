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
  path: "/community-level/264",
  size: 7,
  colorRegions: [
    ["A", "A", "G", "G", "G", "G", "G"],
    ["G", "B", "B", "G", "G", "E", "E"],
    ["G", "C", "B", "G", "G", "E", "G"],
    ["G", "C", "C", "C", "G", "G", "G"],
    ["G", "G", "G", "G", "G", "D", "D"],
    ["G", "G", "F", "F", "F", "G", "G"],
    ["G", "G", "G", "G", "G", "G", "G"],
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
  createdBy: "suzra",
  creatorLink: "",
};

export default level;
