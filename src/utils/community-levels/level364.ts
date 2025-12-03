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
  path: "/community-level/364",
  size: 7,
  colorRegions: [
    ["D", "D", "G", "G", "G", "G", "A"],
    ["D", "G", "G", "G", "G", "G", "A"],
    ["G", "E", "G", "F", "F", "G", "A"],
    ["G", "E", "E", "E", "F", "G", "G"],
    ["G", "G", "F", "F", "F", "G", "G"],
    ["C", "G", "G", "G", "G", "G", "B"],
    ["C", "C", "G", "G", "G", "B", "B"],
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
  createdBy: "Mimi",
  creatorLink: "",
};

export default level;
