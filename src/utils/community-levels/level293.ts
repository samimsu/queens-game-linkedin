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
  path: "/community-level/293",
  size: 7,
  colorRegions: [
    ["F", "F", "F", "F", "F", "F", "F"],
    ["F", "G", "G", "G", "G", "G", "C"],
    ["E", "G", "A", "A", "A", "C", "C"],
    ["E", "E", "B", "B", "A", "C", "C"],
    ["E", "E", "C", "C", "C", "C", "D"],
    ["E", "E", "E", "E", "C", "C", "D"],
    ["E", "E", "E", "E", "D", "D", "D"],
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
  createdBy: "Bayramish",
  creatorLink: "",
};

export default level;
