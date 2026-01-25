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
  path: "/community-level/431",
  size: 7,
  colorRegions: [
    ["B", "B", "B", "B", "B", "B", "B"],
    ["B", "A", "A", "A", "A", "A", "E"],
    ["B", "A", "C", "C", "E", "E", "E"],
    ["B", "A", "C", "A", "A", "A", "F"],
    ["B", "A", "D", "D", "D", "A", "F"],
    ["B", "A", "A", "A", "A", "A", "F"],
    ["B", "G", "G", "G", "G", "F", "F"],
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
  createdBy: "gandrade4",
  creatorLink: "https://github.com/gandrade4",
};

export default level;
