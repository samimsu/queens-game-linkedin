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
  path: "/community-level/93",
  size: 7,
  colorRegions: [
    ["A", "A", "B", "B", "B", "D", "D"],
    ["A", "A", "B", "B", "B", "D", "D"],
    ["F", "F", "F", "B", "B", "D", "D"],
    ["F", "F", "F", "B", "G", "D", "D"],
    ["F", "F", "F", "B", "G", "D", "D"],
    ["C", "C", "C", "B", "G", "G", "D"],
    ["C", "C", "C", "E", "E", "E", "E"],
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
  solutionsCount: 34,
  createdBy: "Lav",
  creatorLink: "",
};

export default level;
