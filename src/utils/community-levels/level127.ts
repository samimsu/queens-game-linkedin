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
  path: "/community-level/127",
  size: 8,
  colorRegions: [
    ["A", "B", "B", "C", "C", "H", "H", "H"],
    ["A", "B", "B", "C", "C", "H", "H", "H"],
    ["A", "B", "C", "C", "G", "G", "G", "H"],
    ["A", "A", "C", "F", "G", "E", "G", "D"],
    ["C", "C", "C", "F", "G", "E", "G", "D"],
    ["F", "F", "F", "F", "G", "E", "G", "D"],
    ["F", "F", "F", "F", "G", "G", "G", "D"],
    ["F", "F", "F", "F", "D", "D", "D", "D"],
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
  solutionsCount: 50,
  createdBy: "LBoogie",
  creatorLink: "",
};

export default level;
