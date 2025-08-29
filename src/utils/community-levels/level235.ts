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
  path: "/community-level/235",
  size: 7,
  colorRegions: [
    ["B", "B", "D", "D", "D", "D", "F"],
    ["G", "B", "D", "F", "F", "F", "F"],
    ["G", "G", "G", "G", "F", "F", "F"],
    ["G", "F", "F", "F", "F", "F", "F"],
    ["F", "F", "F", "A", "C", "C", "F"],
    ["F", "F", "F", "A", "A", "C", "F"],
    ["F", "F", "E", "E", "E", "E", "E"],
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
  createdBy: "Mathias Gabele-Noll",
  creatorLink: "https://github.com/gabelenoll",
};

export default level;
