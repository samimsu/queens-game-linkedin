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
  path: "/community-level/408",
  size: 7,
  colorRegions: [
    ["A", "A", "A", "C", "C", "C", "C"],
    ["A", "E", "E", "E", "B", "B", "B"],
    ["A", "A", "A", "E", "E", "E", "B"],
    ["A", "D", "A", "E", "E", "E", "B"],
    ["A", "D", "A", "E", "F", "F", "B"],
    ["A", "A", "A", "F", "F", "F", "B"],
    ["F", "F", "F", "F", "G", "G", "B"],
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
  createdBy: "Taha",
  creatorLink: "",
};

export default level;
