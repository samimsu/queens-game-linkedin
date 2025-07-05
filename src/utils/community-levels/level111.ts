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
  path: "/community-level/111",
  size: 7,
  colorRegions: [
    ["A", "A", "A", "A", "C", "C", "C"],
    ["G", "D", "C", "D", "E", "E", "E"],
    ["G", "D", "C", "D", "E", "C", "C"],
    ["G", "E", "E", "D", "F", "F", "F"],
    ["F", "E", "E", "D", "B", "B", "B"],
    ["F", "E", "E", "B", "G", "G", "G"],
    ["F", "B", "B", "B", "G", "G", "G"],
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
  solutionsCount: 19,
  createdBy: "Stimming",
  creatorLink: "",
};

export default level;
