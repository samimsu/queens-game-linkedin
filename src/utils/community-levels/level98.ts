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
  path: "/community-level/98",
  size: 7,
  colorRegions: [
    ["B", "B", "E", "E", "F", "F", "G"],
    ["C", "B", "E", "E", "F", "F", "G"],
    ["C", "B", "E", "A", "A", "F", "G"],
    ["C", "C", "E", "A", "A", "F", "G"],
    ["C", "C", "E", "A", "A", "F", "G"],
    ["D", "D", "D", "A", "A", "F", "G"],
    ["D", "D", "D", "A", "A", "F", "G"],
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
  solutionsCount: 45,
  createdBy: "Lethu",
  creatorLink: "",
};

export default level;
