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
  path: "/community-level/386",
  size: 7,
  colorRegions: [
    ["A", "B", "B", "C", "G", "E", "F"],
    ["B", "B", "C", "C", "G", "E", "F"],
    ["B", "B", "C", "C", "G", "E", "F"],
    ["C", "C", "C", "C", "G", "D", "F"],
    ["G", "G", "G", "G", "G", "E", "F"],
    ["E", "E", "E", "E", "E", "E", "F"],
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
  createdBy: "sam-ehs",
  creatorLink: "",
};

export default level;
