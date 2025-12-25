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
  path: "/community-level/396",
  size: 7,
  colorRegions: [
    ["E", "E", "E", "E", "E", "E", "E"],
    ["D", "A", "A", "A", "A", "A", "E"],
    ["D", "D", "D", "B", "B", "C", "E"],
    ["D", "D", "D", "C", "C", "C", "E"],
    ["D", "F", "G", "G", "G", "E", "E"],
    ["D", "F", "F", "G", "G", "E", "E"],
    ["D", "D", "D", "G", "G", "G", "E"],
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
  createdBy: "eliro",
  creatorLink: "",
};

export default level;
