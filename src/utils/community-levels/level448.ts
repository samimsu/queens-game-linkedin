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
  path: "/community-level/448",
  size: 7,
  colorRegions: [
    ["D", "A", "D", "F", "F", "G", "G"],
    ["D", "A", "D", "F", "F", "F", "G"],
    ["D", "A", "D", "E", "E", "E", "E"],
    ["A", "A", "D", "D", "D", "C", "C"],
    ["E", "E", "A", "A", "A", "A", "C"],
    ["B", "B", "B", "B", "B", "A", "C"],
    ["B", "B", "B", "B", "B", "A", "B"],
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
  createdBy: "jhon_galante",
  creatorLink: "https://www.instagram.com/jhon_galante",
};

export default level;
