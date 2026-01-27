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
  path: "/community-level/456",
  size: 7,
  colorRegions: [
    ["A", "D", "B", "B", "B", "B", "B"],
    ["A", "D", "D", "D", "G", "B", "B"],
    ["A", "D", "F", "G", "G", "G", "B"],
    ["A", "D", "F", "G", "G", "G", "B"],
    ["A", "D", "E", "E", "E", "C", "B"],
    ["A", "D", "E", "C", "C", "C", "B"],
    ["A", "B", "B", "B", "B", "B", "B"],
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
  createdBy: "Odean111",
  creatorLink: "",
};

export default level;
