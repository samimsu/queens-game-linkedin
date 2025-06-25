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
  path: "/community-level/87",
  size: 7,
  colorRegions: [
    ["A", "A", "F", "F", "G", "B", "B"],
    ["C", "A", "A", "F", "F", "G", "B"],
    ["C", "C", "A", "A", "F", "F", "G"],
    ["D", "C", "C", "A", "A", "F", "F"],
    ["D", "D", "C", "C", "A", "A", "F"],
    ["E", "D", "D", "C", "C", "A", "A"],
    ["E", "E", "D", "D", "C", "C", "A"],
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
  solutionsCount: 4,
  createdBy: "PapaZil",
  creatorLink: "",
};

export default level;
