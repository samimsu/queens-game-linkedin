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
  path: "/community-level/429",
  size: 7,
  colorRegions: [
    ["G", "G", "E", "E", "E", "E", "A"],
    ["G", "G", "G", "G", "E", "A", "A"],
    ["G", "G", "G", "G", "A", "A", "A"],
    ["G", "F", "F", "G", "B", "A", "B"],
    ["G", "F", "B", "B", "B", "B", "B"],
    ["F", "F", "B", "B", "B", "C", "D"],
    ["F", "F", "F", "F", "C", "C", "D"],
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
  createdBy: "Panq",
  creatorLink: "",
};

export default level;
