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
  path: "/community-level/151",
  size: 7,
  colorRegions: [
    ["D", "E", "E", "E", "F", "F", "A"],
    ["D", "D", "D", "E", "E", "F", "A"],
    ["D", "D", "G", "G", "G", "F", "F"],
    ["C", "D", "D", "D", "G", "B", "F"],
    ["C", "C", "D", "D", "G", "B", "F"],
    ["C", "D", "D", "B", "B", "B", "B"],
    ["C", "D", "B", "B", "B", "B", "B"],
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
  createdBy: "QWc",
  creatorLink: "https://pixelit.is",
};

export default level;
