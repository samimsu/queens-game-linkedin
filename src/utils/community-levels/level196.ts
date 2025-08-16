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
  path: "/community-level/196",
  size: 7,
  colorRegions: [
    ["A", "A", "B", "B", "B", "C", "C"],
    ["A", "A", "A", "B", "B", "C", "C"],
    ["D", "D", "A", "D", "D", "E", "C"],
    ["D", "D", "D", "D", "D", "E", "E"],
    ["F", "D", "D", "D", "G", "G", "E"],
    ["F", "D", "D", "D", "D", "G", "E"],
    ["F", "F", "F", "D", "D", "G", "G"],
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
  createdBy: "mattsemar",
  creatorLink: "https://github.com/mattsemar",
};

export default level;
