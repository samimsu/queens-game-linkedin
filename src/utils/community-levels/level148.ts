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
  path: "/community-level/148",
  size: 7,
  colorRegions: [
    ["F", "F", "F", "F", "F", "D", "D"],
    ["F", "F", "E", "F", "D", "D", "D"],
    ["F", "F", "E", "E", "D", "G", "G"],
    ["B", "B", "B", "E", "D", "G", "G"],
    ["B", "A", "B", "E", "G", "G", "G"],
    ["C", "A", "E", "E", "G", "G", "G"],
    ["C", "A", "A", "A", "G", "G", "G"],
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
  createdBy: "drmrk",
  creatorLink: "",
};

export default level;
