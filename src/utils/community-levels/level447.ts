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
  path: "/community-level/447",
  size: 7,
  colorRegions: [
    ["C", "F", "F", "A", "F", "E", "G"],
    ["C", "F", "A", "A", "F", "E", "G"],
    ["C", "F", "F", "F", "E", "E", "E"],
    ["C", "F", "F", "D", "E", "E", "B"],
    ["C", "C", "D", "D", "E", "B", "B"],
    ["C", "C", "D", "E", "E", "E", "B"],
    ["C", "C", "C", "E", "E", "E", "E"],
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
  createdBy: "MeMoo",
  creatorLink: "",
};

export default level;
