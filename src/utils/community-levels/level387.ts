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
  path: "/community-level/387",
  size: 7,
  colorRegions: [
    ["D", "D", "E", "A", "B", "B", "B"],
    ["D", "D", "E", "A", "B", "B", "B"],
    ["D", "E", "E", "A", "B", "B", "B"],
    ["D", "D", "E", "A", "C", "B", "B"],
    ["D", "D", "G", "A", "C", "F", "B"],
    ["A", "D", "G", "A", "C", "F", "B"],
    ["A", "A", "A", "A", "A", "A", "A"],
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
  createdBy: "Gveg",
  creatorLink: "",
};

export default level;
