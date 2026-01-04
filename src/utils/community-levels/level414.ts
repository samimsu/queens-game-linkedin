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
  path: "/community-level/414",
  size: 7,
  colorRegions: [
    ["B", "B", "B", "B", "B", "B", "B"],
    ["A", "A", "A", "B", "B", "B", "B"],
    ["A", "C", "C", "B", "G", "B", "B"],
    ["A", "C", "A", "B", "G", "G", "G"],
    ["A", "A", "A", "B", "E", "E", "G"],
    ["A", "A", "D", "B", "F", "E", "E"],
    ["D", "D", "D", "F", "F", "F", "F"],
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
  createdBy: "agnikobi",
  creatorLink: "https://github.com/agn1kobi",
};

export default level;
