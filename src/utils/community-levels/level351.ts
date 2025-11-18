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
  path: "/community-level/351",
  size: 7,
  colorRegions: [
    ["A", "A", "A", "A", "B", "G", "G"],
    ["A", "B", "A", "B", "B", "B", "G"],
    ["A", "B", "B", "B", "B", "G", "G"],
    ["A", "A", "B", "C", "C", "C", "C"],
    ["A", "B", "B", "D", "E", "C", "C"],
    ["F", "D", "D", "D", "E", "E", "C"],
    ["F", "F", "F", "F", "F", "E", "E"],
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
  createdBy: "Dan Relaxxe",
  creatorLink: "",
};

export default level;
