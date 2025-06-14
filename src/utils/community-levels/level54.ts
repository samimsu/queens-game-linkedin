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
  path: "/community-level/54",
  size: 7,
  colorRegions: [
    ["B", "B", "G", "G", "B", "B", "A"],
    ["B", "B", "E", "A", "A", "G", "G"],
    ["E", "E", "A", "A", "A", "E", "G"],
    ["F", "F", "C", "C", "D", "D", "B"],
    ["G", "F", "C", "C", "E", "E", "C"],
    ["G", "E", "A", "C", "F", "F", "C"],
    ["E", "G", "G", "E", "G", "D", "C"],
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
  solutionsCount: 7,
  createdBy: "Bing",
  creatorLink: "",
};

export default level;
