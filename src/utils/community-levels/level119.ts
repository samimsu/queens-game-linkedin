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
  path: "/community-level/119",
  size: 7,
  colorRegions: [
    ["E", "E", "B", "D", "D", "D", "D"],
    ["B", "B", "B", "D", "F", "G", "G"],
    ["B", "B", "B", "D", "F", "G", "G"],
    ["B", "B", "B", "D", "F", "G", "G"],
    ["C", "F", "F", "F", "F", "F", "G"],
    ["A", "A", "A", "A", "A", "F", "F"],
    ["F", "F", "F", "F", "F", "F", "F"],
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
  createdBy: "BennyP",
  creatorLink: "",
};

export default level;
