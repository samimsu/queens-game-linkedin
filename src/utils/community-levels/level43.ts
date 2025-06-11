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
  path: "/community-level/43",
  size: 7,
  colorRegions: [
    ["B", "B", "C", "C", "C", "C", "D"],
    ["A", "B", "C", "D", "D", "C", "D"],
    ["A", "B", "D", "D", "D", "D", "D"],
    ["A", "B", "E", "G", "G", "G", "G"],
    ["A", "B", "E", "E", "E", "G", "G"],
    ["A", "B", "F", "F", "E", "E", "E"],
    ["B", "B", "F", "F", "F", "F", "E"],
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
  solutionsCount: 109,
  createdBy: "Shrynshk",
  creatorLink: "",
};

export default level;
