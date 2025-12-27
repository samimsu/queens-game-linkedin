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
  path: "/community-level/410",
  size: 7,
  colorRegions: [
    ["G", "G", "G", "G", "G", "E", "E"],
    ["E", "E", "E", "E", "E", "E", "F"],
    ["E", "B", "B", "A", "D", "C", "F"],
    ["E", "B", "D", "A", "D", "C", "F"],
    ["E", "B", "D", "D", "D", "C", "F"],
    ["E", "C", "C", "C", "C", "C", "F"],
    ["E", "F", "F", "F", "F", "F", "F"],
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
  createdBy: "Nasma",
  creatorLink: "",
};

export default level;
