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
  path: "/community-level/140",
  size: 7,
  colorRegions: [
    ["C", "C", "D", "D", "D", "G", "G"],
    ["C", "F", "D", "D", "A", "A", "G"],
    ["F", "F", "A", "A", "A", "A", "G"],
    ["F", "F", "A", "A", "A", "A", "G"],
    ["A", "A", "A", "A", "A", "A", "E"],
    ["B", "A", "A", "A", "A", "E", "E"],
    ["B", "B", "B", "E", "E", "E", "E"],
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
  createdBy: "godraadam",
  creatorLink: "https://github.com/godraadam",
};

export default level;
