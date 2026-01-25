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
  path: "/community-level/450",
  size: 7,
  colorRegions: [
    ["A", "B", "B", "B", "C", "C", "C"],
    ["A", "A", "B", "C", "C", "C", "C"],
    ["B", "A", "B", "C", "B", "C", "D"],
    ["B", "B", "B", "B", "B", "B", "D"],
    ["F", "F", "F", "D", "D", "D", "D"],
    ["F", "G", "G", "D", "D", "D", "E"],
    ["F", "F", "F", "D", "D", "E", "E"],
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
  createdBy: "java",
  creatorLink: "",
};

export default level;
