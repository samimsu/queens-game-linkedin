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
  path: "/community-level/331",
  size: 7,
  colorRegions: [
    ["D", "D", "F", "F", "F", "E", "E"],
    ["D", "A", "F", "F", "F", "A", "E"],
    ["B", "A", "A", "F", "A", "A", "G"],
    ["B", "A", "G", "A", "G", "A", "G"],
    ["B", "A", "G", "G", "G", "A", "G"],
    ["B", "A", "G", "G", "G", "A", "C"],
    ["B", "B", "B", "B", "B", "C", "C"],
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
  createdBy: "MExit",
  creatorLink: "",
};

export default level;
