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
  path: "/community-level/173",
  size: 7,
  colorRegions: [
    ["A", "A", "E", "E", "E", "E", "B"],
    ["A", "G", "G", "G", "G", "E", "B"],
    ["G", "G", "G", "G", "G", "F", "B"],
    ["G", "G", "G", "G", "G", "F", "B"],
    ["D", "G", "G", "G", "G", "F", "B"],
    ["D", "C", "C", "F", "F", "F", "B"],
    ["C", "C", "C", "C", "C", "F", "B"],
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
  createdBy: "jamie",
  creatorLink: "",
};

export default level;
