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
  path: "/community-level/459",
  size: 7,
  colorRegions: [
    ["A", "A", "A", "C", "C", "C", "C"],
    ["A", "B", "B", "B", "B", "C", "C"],
    ["A", "A", "B", "B", "B", "G", "G"],
    ["A", "A", "A", "B", "G", "G", "G"],
    ["B", "B", "B", "B", "B", "F", "G"],
    ["B", "D", "E", "B", "F", "F", "F"],
    ["D", "D", "E", "E", "F", "F", "F"],
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
  createdBy: "blugy",
  creatorLink: "",
};

export default level;
