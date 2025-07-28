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
  path: "/community-level/166",
  size: 7,
  colorRegions: [
    ["E", "C", "C", "B", "B", "B", "B"],
    ["A", "A", "C", "C", "B", "D", "B"],
    ["A", "A", "A", "C", "C", "D", "B"],
    ["F", "A", "A", "A", "C", "D", "B"],
    ["F", "F", "A", "A", "D", "D", "B"],
    ["F", "D", "D", "D", "D", "G", "G"],
    ["F", "F", "F", "F", "F", "G", "G"],
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
  createdBy: "beewatcher",
  creatorLink: "",
};

export default level;
