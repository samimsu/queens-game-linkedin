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
  path: "/community-level/368",
  size: 7,
  colorRegions: [
    ["A", "B", "D", "D", "D", "G", "F"],
    ["A", "B", "D", "E", "G", "G", "F"],
    ["B", "B", "D", "E", "G", "G", "F"],
    ["B", "B", "C", "E", "G", "G", "F"],
    ["B", "B", "C", "E", "G", "G", "F"],
    ["F", "F", "C", "G", "G", "G", "F"],
    ["F", "F", "F", "F", "F", "F", "F"],
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
  createdBy: "Larieyt",
  creatorLink: "",
};

export default level;
