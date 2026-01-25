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
  path: "/community-level/435",
  size: 7,
  colorRegions: [
    ["E", "E", "F", "F", "D", "D", "D"],
    ["A", "E", "E", "F", "F", "D", "D"],
    ["A", "E", "E", "E", "D", "D", "D"],
    ["A", "A", "D", "D", "D", "D", "D"],
    ["B", "C", "C", "C", "D", "D", "D"],
    ["B", "B", "C", "C", "C", "D", "G"],
    ["B", "B", "B", "C", "C", "C", "G"],
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
  createdBy: "Linds",
  creatorLink: "",
};

export default level;
