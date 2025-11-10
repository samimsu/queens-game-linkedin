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
  path: "/community-level/322",
  size: 7,
  colorRegions: [
    ["E", "E", "E", "D", "A", "A", "D"],
    ["C", "C", "E", "B", "A", "D", "D"],
    ["C", "E", "E", "A", "A", "A", "B"],
    ["C", "A", "A", "A", "B", "B", "B"],
    ["C", "C", "A", "B", "B", "G", "F"],
    ["F", "C", "C", "C", "C", "C", "G"],
    ["F", "F", "G", "G", "G", "G", "G"],
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
  createdBy: "bbrietzel",
  creatorLink: "",
};

export default level;
