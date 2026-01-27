import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  saharaSand,
  turquoiseBlue,
} from "../colors";

const level = {
  path: "/community-level/465",
  size: 8,
  colorRegions: [
    ["C", "C", "C", "C", "C", "D", "D", "D"],
    ["G", "G", "G", "F", "D", "D", "D", "D"],
    ["A", "G", "G", "F", "F", "F", "D", "D"],
    ["A", "E", "G", "F", "H", "H", "H", "D"],
    ["A", "E", "G", "F", "H", "H", "H", "D"],
    ["A", "E", "E", "E", "D", "H", "H", "D"],
    ["A", "E", "B", "E", "D", "D", "D", "D"],
    ["A", "E", "B", "E", "D", "D", "D", "D"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: turquoiseBlue,
  },
  solutionsCount: 1,
  createdBy: "Sxorper",
  creatorLink: "",
};

export default level;
